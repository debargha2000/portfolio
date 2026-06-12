import { createContext, useContext, ReactNode } from 'react';
import { VideoPrebufferResult } from "../../utils/videoPrebuffer";

interface PreloaderContextValue {
  heroVideoBlobUrl: string | null;
  heroVideoBufferedPercent: number;
  isPreloaderComplete: boolean;
}

const PreloaderContext = createContext<PreloaderContextValue>({
  heroVideoBlobUrl: null,
  heroVideoBufferedPercent: 0,
  isPreloaderComplete: false
});

export function PreloaderProvider({ 
  children, 
  heroVideoResult 
}: { 
  children: ReactNode;
  heroVideoResult: VideoPrebufferResult | null;
}) {
  const value = {
    heroVideoBlobUrl: heroVideoResult?.blobUrl || null,
    heroVideoBufferedPercent: heroVideoResult?.bufferedPercent || 0,
    isPreloaderComplete: !!heroVideoResult
  };
  
  return (
    <PreloaderContext.Provider value={value}>
      {children}
    </PreloaderContext.Provider>
  );
}

export function usePreloaderContext(): PreloaderContextValue {
  return useContext(PreloaderContext);
}