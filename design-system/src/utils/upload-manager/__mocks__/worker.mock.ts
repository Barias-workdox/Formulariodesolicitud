import { DELAY, uploadService } from './upload-files.mocks';

import type { Worker } from '../queue';
import type { FileData, WorkerResponse } from '../upload-manager.interfaces';

/**
 * Worker function that handles the upload of files.
 * It receives a batch of files and uploads them using the uploadService.
 */
export const worker =
  (
    successHistory: boolean[] = [true, true, true, true],
    customDelay: number = DELAY,
  ): Worker<FileData[], WorkerResponse> =>
  async ({ callback, data, onProgress, signal }) => {
    try {
      const response = await uploadService(data, signal, onProgress, successHistory, customDelay);

      callback(null, response);
    } catch (e) {
      callback(e);
    }
  };
