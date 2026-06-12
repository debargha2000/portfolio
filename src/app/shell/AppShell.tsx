import { useState, useEffect, useCallback } from "react";
import { usePreloader } from "../../features/preloader/usePreloader";
import Preloader from "../../features/preloader/Preloader";
import { PreloaderProvider } from "../providers/PreloaderProvider";
import { CursorProvider } from "../providers/CursorProvider";
import { LenisProvider } from "../providers/LenisProvider";
import { ScrollProvider } from "../providers/ScrollProvider";
import { Layout } from "./Layout";

export function AppShell() {
  const {
    progress,
    isComplete,
    start,
    heroVideoResult,
    failedTasks,
    retryFailed,
    tasks,
    taskProgress
  } = usePreloader();
  
  const [showApp, setShowApp] = useState(false);
  const [preloaderMounted, setPreloaderMounted] = useState(false);
  
  useEffect(() => {
    setPreloaderMounted(true);
    start();
  }, [start]);
  
  useEffect(() => {
    if (isComplete) {
      const timer = setTimeout(() => {
        setShowApp(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isComplete]);
  
  const handlePreloaderDone = useCallback(() => {}, []);
  
  return (
    <LenisProvider>
      <CursorProvider>
        <ScrollProvider>
          {preloaderMounted && (
            <Preloader 
              progress={progress} 
              isComplete={isComplete}
              onDone={handlePreloaderDone}
              failedTasks={failedTasks}
              onRetry={retryFailed}
              tasks={tasks}
              taskProgress={taskProgress}
            />
          )}
          {showApp && (
            <PreloaderProvider heroVideoResult={heroVideoResult}>
              <Layout />
            </PreloaderProvider>
          )}
        </ScrollProvider>
      </CursorProvider>
    </LenisProvider>
  );
}
