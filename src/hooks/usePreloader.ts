import { useState, useCallback, useRef, useEffect } from 'react';
import { prebufferVideo, VideoPrebufferResult, revokeBlobUrl } from '../utils/videoPrebuffer';
import { loadFonts, FONT_SPECS } from '../utils/fontLoader';
import { loadImage, loadImages } from '../utils/imageLoader';
import { PROJECTS } from '../data/projects';

export interface PreloadTask {
  id: string;
  weight: number;
  load: (onProgress?: (loaded: number, total: number) => void, signal?: AbortSignal) => Promise<unknown>;
  critical?: boolean;
}

export interface PreloaderState {
  progress: number;
  loadedWeight: number;
  totalWeight: number;
  completedTasks: string[];
  failedTasks: string[];
  isComplete: boolean;
  isRunning: boolean;
  currentTask: string | null;
  heroVideoResult: VideoPrebufferResult | null;
}

const TASKS: PreloadTask[] = [
  {
    id: 'fonts',
    weight: 20,
    critical: true,
    load: async (onProgress) => {
      await loadFonts(FONT_SPECS);
      if (onProgress) onProgress(100, 100);
    }
  },
  {
    id: 'hero-poster',
    weight: 5,
    critical: true,
    load: async (onProgress) => {
      await loadImage('/images/hero-ink.jpg', { onProgress });
    }
  },
  {
    id: 'hero-video-full',
    weight: 55,
    critical: true,
    load: async (onProgress, signal) => {
      const result = await prebufferVideo('/videos/hero-bg.mp4', {
        onProgress: (loaded, total) => {
          if (onProgress) onProgress(loaded, total);
        },
        signal
      });
      return result;
    }
  },
  {
    id: 'thumbnails',
    weight: 15,
    critical: false,
    load: async (onProgress) => {
      const thumbnails = PROJECTS.slice(0, 3).map(p => p.thumbnail);
      await loadImages(thumbnails, { onProgress });
    }
  },
  {
    id: 'hydration',
    weight: 5,
    critical: false,
    load: async (onProgress) => {
      await new Promise(resolve => {
        if ('requestIdleCallback' in window) {
          let progress = 0;
          const interval = setInterval(() => {
            progress += 20;
            if (onProgress) onProgress(Math.min(progress, 100), 100);
            if (progress >= 100) {
              clearInterval(interval);
              resolve(void 0);
            }
          }, 50);
          
          (window as any).requestIdleCallback(() => {
            clearInterval(interval);
            if (onProgress) onProgress(100, 100);
            resolve(void 0);
          }, { timeout: 2000 });
        } else {
          setTimeout(() => {
            if (onProgress) onProgress(100, 100);
            resolve(void 0);
          }, 100);
        }
      });
    }
  }
];

const TOTAL_WEIGHT = TASKS.reduce((sum, t) => sum + t.weight, 0);

export function usePreloader() {
  const [state, setState] = useState<PreloaderState>({
    progress: 0,
    loadedWeight: 0,
    totalWeight: TOTAL_WEIGHT,
    completedTasks: [],
    failedTasks: [],
    isComplete: false,
    isRunning: false,
    currentTask: null,
    heroVideoResult: null
  });
  
  const abortControllerRef = useRef<AbortController | null>(null);
  const taskProgressRef = useRef<Map<string, { loaded: number; total: number }>>(new Map());
  
  const updateTaskProgress = useCallback((taskId: string, loaded: number, total: number) => {
    taskProgressRef.current.set(taskId, { loaded, total });
    
    let totalLoadedWeight = 0;
    
    TASKS.forEach(task => {
      if (state.completedTasks.includes(task.id)) {
        totalLoadedWeight += task.weight;
      } else if (task.id === taskId) {
        const progress = taskProgressRef.current.get(taskId);
        if (progress && progress.total > 0) {
          totalLoadedWeight += task.weight * (progress.loaded / progress.total);
        }
      }
    });
    
    const progress = Math.min(100, Math.floor((totalLoadedWeight / TOTAL_WEIGHT) * 100));
    
    setState(prev => ({
      ...prev,
      progress,
      loadedWeight: totalLoadedWeight,
      currentTask: taskId
    }));
  }, [state.completedTasks]);
  
  const start = useCallback(async () => {
    if (state.isRunning || state.isComplete) return;
    
    abortControllerRef.current = new AbortController();
    const signal = abortControllerRef.current.signal;
    
    setState(prev => ({ ...prev, isRunning: true, progress: 0, loadedWeight: 0 }));
    
    const completedTasks: string[] = [];
    const failedTasks: string[] = [];
    let heroVideoResult: VideoPrebufferResult | null = null;
    
    for (const task of TASKS) {
      if (signal.aborted) break;
      
      setState(prev => ({ ...prev, currentTask: task.id }));
      taskProgressRef.current.set(task.id, { loaded: 0, total: 100 });
      
      try {
        const result = await task.load(
          (loaded, total) => updateTaskProgress(task.id, loaded, total),
          signal
        );
        
        if (task.id === 'hero-video-full' && result) {
          heroVideoResult = result as VideoPrebufferResult;
        }
        
        completedTasks.push(task.id);
        updateTaskProgress(task.id, 100, 100);
      } catch (error) {
        console.error(`[Preloader] Task ${task.id} failed:`, error);
        failedTasks.push(task.id);
        
        if (task.critical) {
          console.warn(`[Preloader] Critical task ${task.id} failed, continuing anyway`);
        }
        
        updateTaskProgress(task.id, 100, 100);
      }
    }
    
    setState(prev => ({
      ...prev,
      progress: 100,
      loadedWeight: TOTAL_WEIGHT,
      completedTasks,
      failedTasks,
      isComplete: true,
      isRunning: false,
      currentTask: null,
      heroVideoResult
    }));
  }, [state.isRunning, state.isComplete, updateTaskProgress]);
  
  const retryFailed = useCallback(async () => {
    const failed = state.failedTasks.filter(id => 
      TASKS.some(t => t.id === id && t.critical)
    );
    
    if (failed.length === 0) return;
    
    abortControllerRef.current = new AbortController();
    const signal = abortControllerRef.current.signal;
    
    setState(prev => ({ ...prev, isRunning: true, failedTasks: [] }));
    
    for (const taskId of failed) {
      const task = TASKS.find(t => t.id === taskId);
      if (!task) continue;
      
      try {
        await task.load(
          (loaded, total) => updateTaskProgress(task.id, loaded, total),
          signal
        );
        setState(prev => ({ 
          ...prev, 
          completedTasks: [...prev.completedTasks, taskId] 
        }));
      } catch (error) {
        console.error(`[Preloader] Retry failed for ${taskId}:`, error);
      }
    }
    
    setState(prev => ({ ...prev, isRunning: false }));
  }, [state.failedTasks, updateTaskProgress]);
  
  useEffect(() => {
    return () => {
      if (state.heroVideoResult?.blobUrl) {
        revokeBlobUrl(state.heroVideoResult.blobUrl);
      }
      abortControllerRef.current?.abort();
    };
  }, [state.heroVideoResult]);
  
  return {
    ...state,
    start,
    retryFailed,
    tasks: TASKS
  };
}

export { TASKS, TOTAL_WEIGHT };