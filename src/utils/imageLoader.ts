export interface ImageLoadOptions {
  onProgress?: (loaded: number, total: number) => void;
  signal?: AbortSignal;
  crossOrigin?: 'anonymous' | 'use-credentials' | '';
}

export function loadImage(
  src: string,
  options: ImageLoadOptions = {}
): Promise<HTMLImageElement> {
  const { onProgress, signal, crossOrigin = 'anonymous' } = options;
  
  return new Promise((resolve, reject) => {
    const img = new Image();
    
    if (crossOrigin) {
      img.crossOrigin = crossOrigin;
    }
    
    const cleanup = () => {
      img.removeEventListener('load', onLoad);
      img.removeEventListener('error', onError);
      img.removeEventListener('progress', onProgressHandler);
      if (signal) {
        signal.removeEventListener('abort', onAbort);
      }
    };
    
    const onLoad = () => {
      cleanup();
      resolve(img);
    };
    
    const onError = () => {
      cleanup();
      reject(new Error(`Failed to load image: ${src}`));
    };
    
    const onProgressHandler = (event: ProgressEvent) => {
      if (event.lengthComputable && onProgress) {
        onProgress(event.loaded, event.total);
      }
    };
    
    const onAbort = () => {
      cleanup();
      reject(new DOMException('Aborted', 'AbortError'));
    };
    
    img.addEventListener('load', onLoad);
    img.addEventListener('error', onError);
    img.addEventListener('progress', onProgressHandler);
    
    if (signal) {
      if (signal.aborted) {
        cleanup();
        reject(new DOMException('Aborted', 'AbortError'));
        return;
      }
      signal.addEventListener('abort', onAbort);
    }
    
    img.src = src;
  });
}
