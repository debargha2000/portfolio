import { useState, useCallback, useRef, useEffect } from 'react';
import { loadFonts, FONT_SPECS } from '../../utils/fontLoader';
import { loadImage } from '../../utils/imageLoader';
import { PROJECTS } from '../work/projects';

export interface PreloadTask {
  id: string;
  name: string;
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
  taskProgress: Record<string, { loaded: number; total: number; percentage: number }>;
}

const TASKS: PreloadTask[] = [
  {
    id: 'fonts',
    name: 'Typography',
    weight: 20,
    critical: true,
    load: async (onProgress) => {
      await loadFonts(FONT_SPECS);
      if (onProgress) onProgress(100, 100);
    }
  },

  {
    id: 'routes',
    name: 'Application Routes',
    weight: 15,
    critical: true,
    load: async (onProgress) => {
      const routes = [
        import("../../features/home/Home"),
        import("../../features/work/Work"),
        import("../../features/work/ProjectDetail"),
        import("../../features/studio/Studio"),
        import("../../features/process/Process"),
        import("../../features/contact/Contact")
      ];
      let loaded = 0;
      await Promise.all(routes.map(p => p.then(() => {
        loaded++;
        if (onProgress) onProgress(loaded, routes.length);
      }).catch((err) => {
        loaded++;
        if (onProgress) onProgress(loaded, routes.length);
        console.error("Failed to preload route", err);
      })));
    }
  },
  {
    id: 'project-assets',
    name: 'Project Assets',
    weight: 20,
    critical: false,
    load: async (onProgress) => {
      const images = PROJECTS.flatMap(p => [
        p.thumbnail,
        p.hero,
        ...p.blocks.flatMap(b => [b.src, b.src2]).filter(Boolean)
      ]) as string[];
      
      const uniqueImages = [...new Set(images)];
      
      let loaded = 0;
      await Promise.all(uniqueImages.map(url => 
        loadImage(url).then(() => {
          loaded++;
          if (onProgress) onProgress(loaded, uniqueImages.length);
        }).catch(() => {
          loaded++;
          if (onProgress) onProgress(loaded, uniqueImages.length);
        })
      ));
    }
  },
  {
    id: 'hydration',
    name: 'Hydration',
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
          }, 20);
          
          (window as any).requestIdleCallback(() => {
            clearInterval(interval);
            if (onProgress) onProgress(100, 100);
            resolve(void 0);
          }, { timeout: 1000 });
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
    taskProgress: TASKS.reduce((acc, t) => {
      acc[t.id] = { loaded: 0, total: 100, percentage: 0 };
      return acc;
    }, {} as Record<string, { loaded: number; total: number; percentage: number }>)
  });
  
  const abortControllerRef = useRef<AbortController | null>(null);
  
  const updateTaskProgress = useCallback((taskId: string, loaded: number, total: number) => {
    setState(prev => {
      const newTaskProgress = {
        ...prev.taskProgress,
        [taskId]: {
          loaded,
          total,
          percentage: total > 0 ? Math.floor((loaded / total) * 100) : 0
        }
      };
      
      let totalLoadedWeight = 0;
      
      TASKS.forEach(task => {
        if (prev.completedTasks.includes(task.id)) {
          totalLoadedWeight += task.weight;
        } else {
          const p = newTaskProgress[task.id];
          if (p && p.total > 0) {
            totalLoadedWeight += task.weight * (p.loaded / p.total);
          }
        }
      });
      
      const progress = Math.min(100, Math.floor((totalLoadedWeight / TOTAL_WEIGHT) * 100));
      
      return {
        ...prev,
        taskProgress: newTaskProgress,
        progress,
        loadedWeight: totalLoadedWeight
      };
    });
  }, []);
  
  const start = useCallback(async () => {
    if (state.isRunning || state.isComplete) return;
    
    abortControllerRef.current = new AbortController();
    const signal = abortControllerRef.current.signal;
    
    setState(prev => ({ ...prev, isRunning: true, progress: 0, loadedWeight: 0 }));
    
    const runTask = async (task: PreloadTask) => {
      try {
        await task.load(
          (loaded, total) => updateTaskProgress(task.id, loaded, total),
          signal
        );
        
        setState(prev => {
          return {
            ...prev,
            completedTasks: [...prev.completedTasks, task.id]
          };
        });
        updateTaskProgress(task.id, 1, 1); // 100%
      } catch (error) {
        console.error(`[Preloader] Task ${task.id} failed:`, error);
        setState(prev => ({
          ...prev,
          failedTasks: [...prev.failedTasks, task.id]
        }));
        
        if (task.critical) {
          console.warn(`[Preloader] Critical task ${task.id} failed, continuing anyway`);
        }
        
        updateTaskProgress(task.id, 1, 1); // 100%
      }
    };

    // Run all tasks concurrently
    await Promise.all(TASKS.map(task => runTask(task)));
    
    setState(prev => ({
      ...prev,
      progress: 100,
      loadedWeight: TOTAL_WEIGHT,
      isComplete: true,
      isRunning: false
    }));
  }, [state.isRunning, state.isComplete, updateTaskProgress]);
  
  const retryFailed = useCallback(async () => {
    const failedIds = state.failedTasks;
    const failedTasks = TASKS.filter(t => failedIds.includes(t.id) && t.critical);
    
    if (failedTasks.length === 0) return;
    
    abortControllerRef.current = new AbortController();
    const signal = abortControllerRef.current.signal;
    
    setState(prev => ({ ...prev, isRunning: true, failedTasks: [] }));
    
    const runTask = async (task: PreloadTask) => {
      try {
        await task.load(
          (loaded, total) => updateTaskProgress(task.id, loaded, total),
          signal
        );
        setState(prev => ({ 
          ...prev, 
          completedTasks: [...prev.completedTasks, task.id] 
        }));
        updateTaskProgress(task.id, 1, 1);
      } catch (error) {
        console.error(`[Preloader] Retry failed for ${task.id}:`, error);
        setState(prev => ({
          ...prev,
          failedTasks: [...prev.failedTasks, task.id]
        }));
      }
    };

    await Promise.all(failedTasks.map(runTask));
    
    setState(prev => ({ ...prev, isRunning: false }));
  }, [state.failedTasks, updateTaskProgress]);
  
  useEffect(() => {
    return () => {
      abortControllerRef.current?.abort();
    };
  }, []);
  
  return {
    ...state,
    start,
    retryFailed,
    tasks: TASKS
  };
}

export { TASKS, TOTAL_WEIGHT };