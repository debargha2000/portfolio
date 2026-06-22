import { useState, useEffect, useCallback } from "react";
import { usePreloader } from "../../hooks/usePreloader";
import Preloader from "../motion/Preloader";

import { CursorProvider } from "../../providers/CursorProvider";
import { LenisProvider } from "../../providers/LenisProvider";
import { ScrollProvider } from "../../providers/ScrollProvider";
import { ErrorBoundary } from "./ErrorBoundary";
import { Layout } from "./Layout";

export function AppShell() {
  const {
    progress,
    isComplete,
    start,

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
            <ErrorBoundary>
              <Layout />
            </ErrorBoundary>
          )}
        </ScrollProvider>
      </CursorProvider>
    </LenisProvider>
  );
}
