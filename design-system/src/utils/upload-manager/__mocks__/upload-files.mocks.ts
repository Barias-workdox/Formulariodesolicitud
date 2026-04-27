import type { FileData, WorkerResponse } from '../upload-manager.interfaces';

export const DELAY = 20;

let historyPoint = 0;

/**
 * Restarts the history point.
 */
export const restart = (): void => {
  historyPoint = 0;
};

/**
 * Simulates a files upload service.
 * Its handles the cancellation of the upload process with an abort signal.
 * It also simulates the progress of the upload process.
 */
export const uploadService = (
  files: FileData[],
  signal: AbortSignal,
  onProgress: (progress: number) => void,
  successHistory: boolean[],
  customDelay: number = DELAY,
): Promise<WorkerResponse> => {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      onProgress(100);

      if (successHistory[historyPoint]) {
        historyPoint += 1;
        resolve({
          failedFiles: [],
          uploadedFiles: files.map((file) => ({
            id: new Date().getTime(),
            name: file.name,
          })),
        });
      } else {
        reject(new Error('Timeout error'));
      }
    }, customDelay);

    signal.addEventListener('abort', () => {
      clearTimeout(timeout);
      reject(new DOMException('Aborted', 'AbortError'));
    });
  });
};

/** Util function to simulate a file with any size in MB */
export const getFile = (i: number, size: number): File => {
  const file = new File(['Lorem ipsum dolor sit amet'], `file-${i}.txt`);

  Object.defineProperty(file, 'size', { value: 1024 * 1024 * size });

  return file;
};
