export interface VideoPrebufferResult {
  blobUrl: string;
  bufferedPercent: number;
  totalSize: number;
  bufferedSize: number;
  duration: number;
  width: number;
  height: number;
  fullyBuffered: boolean;
}

export interface VideoPrebufferOptions {
  chunkSize?: number;
  maxRetries?: number;
  onProgress?: (loaded: number, total: number, stage: 'downloading' | 'decoding' | 'complete') => void;
  signal?: AbortSignal;
}

async function fetchWithRetry(
  url: string,
  options: RequestInit,
  maxRetries: number,
  signal?: AbortSignal
): Promise<Response> {
  let lastError: Error | null = null;
  
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url, { ...options, signal });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      return response;
    } catch (error) {
      lastError = error as Error;
      if (signal?.aborted) {
        throw new DOMException('Aborted', 'AbortError');
      }
      if (attempt < maxRetries) {
        const delay = Math.min(1000 * Math.pow(2, attempt), 8000);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  
  throw lastError || new Error('Fetch failed after retries');
}

export async function prebufferVideo(
  url: string,
  options: VideoPrebufferOptions = {}
): Promise<VideoPrebufferResult> {
  const {
    maxRetries = 3,
    onProgress,
    signal,
  } = options;

  const headResponse = await fetchWithRetry(url, { method: 'HEAD' }, maxRetries, signal);
  
  const contentLength = headResponse.headers.get('Content-Length');
  const acceptRanges = headResponse.headers.get('Accept-Ranges');
  
  if (!contentLength) {
    throw new Error('Content-Length header missing');
  }
  
  const totalSize = parseInt(contentLength, 10);
  const supportsRange = acceptRanges === 'bytes';
  
  if (!supportsRange) {
    console.warn('[VideoPrebuffer] Range requests not supported, falling back to full download');
  }

  const response = await fetchWithRetry(
    url,
    { method: 'GET' },
    maxRetries,
    signal
  );
  
  if (!response.body) {
    throw new Error('Response body is null');
  }

  const reader = response.body.getReader();
  const chunks: Uint8Array[] = [];
  let receivedSize = 0;
  let lastReportedProgress = 0;

  onProgress?.(0, totalSize, 'downloading');

  try {
    while (true) {
      if (signal?.aborted) {
        throw new DOMException('Aborted', 'AbortError');
      }
      
      const { done, value } = await reader.read();
      
      if (done) break;
      
      chunks.push(value);
      receivedSize += value.length;
      
      const progressPercent = Math.floor((receivedSize / totalSize) * 100);
      if (progressPercent >= lastReportedProgress + 2 || progressPercent >= 100) {
        onProgress?.(receivedSize, totalSize, 'downloading');
        lastReportedProgress = progressPercent;
      }
    }
  } finally {
    reader.releaseLock();
  }

  const bufferedSize = receivedSize;

  const blob = new Blob(chunks as BlobPart[], { type: 'video/mp4' });
  const blobUrl = URL.createObjectURL(blob);

  const video = document.createElement('video');
  video.preload = 'auto';
  video.src = blobUrl;
  video.muted = true;
  video.playsInline = true;

  const metadata = await new Promise<{ duration: number; width: number; height: number }>((resolve, reject) => {
    const cleanup = () => {
      video.removeEventListener('loadedmetadata', onMetadata);
      video.removeEventListener('error', onError);
    };
    
    const onMetadata = () => {
      cleanup();
      resolve({
        duration: video.duration,
        width: video.videoWidth,
        height: video.videoHeight
      });
    };
    
    const onError = () => {
      cleanup();
      reject(new Error('Failed to load video metadata'));
    };
    
    video.addEventListener('loadedmetadata', onMetadata);
    video.addEventListener('error', onError);
    
    video.load();
    
    setTimeout(() => {
      cleanup();
      reject(new Error('Video metadata load timeout'));
    }, 30000);
  });

  onProgress?.(totalSize, totalSize, 'complete');

  video.src = '';
  video.load();

  return {
    blobUrl,
    bufferedPercent: 100,
    totalSize,
    bufferedSize,
    duration: metadata.duration,
    width: metadata.width,
    height: metadata.height,
    fullyBuffered: true,
  };
}

export function revokeBlobUrl(blobUrl: string): void {
  if (blobUrl.startsWith('blob:')) {
    URL.revokeObjectURL(blobUrl);
  }
}

export async function getVideoMetadata(url: string): Promise<{ duration: number; width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    video.preload = 'metadata';
    video.src = url;
    video.muted = true;
    
    const cleanup = () => {
      video.removeEventListener('loadedmetadata', onMetadata);
      video.removeEventListener('error', onError);
      video.src = '';
      video.load();
    };
    
    const onMetadata = () => {
      cleanup();
      resolve({
        duration: video.duration,
        width: video.videoWidth,
        height: video.videoHeight
      });
    };
    
    const onError = () => {
      cleanup();
      reject(new Error('Failed to load video metadata'));
    };
    
    video.addEventListener('loadedmetadata', onMetadata);
    video.addEventListener('error', onError);
    
    setTimeout(() => {
      cleanup();
      reject(new Error('Video metadata load timeout'));
    }, 30000);
  });
}