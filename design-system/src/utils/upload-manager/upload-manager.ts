import { queue as queueManager } from './queue';
import { MAX_CHUNK_SIZE, MAX_FILES_PER_SIZE, MAX_RETRY_LIMIT } from './upload-manager.constants';
import { getBatchesGroups, getChunksToUpload } from './upload-manager.utils';

import type {
  FileData,
  FileDataWithError,
  ProcessChunksResult,
  Task,
  UploadManagerProps,
  UploadManagerResult,
  WorkerResponse,
} from './upload-manager.interfaces';

/**
 * UploadManager is a utility to manage file uploads in batches.
 * It handles the upload process, including retrying failed uploads,
 * canceling uploads, and tracking progress.
 * It uses a worker to handle the actual upload process.
 * The worker should be a function that takes a batch of files and returns a promise.
 * The worker should also handle progress updates and errors.
 * The UploadManager will call the worker with a batch of files and handle the response.
 *
 * @returns An object with methods to control the upload process
 */
export const UploadManager = ({
  retryLimit = MAX_RETRY_LIMIT,
  maxChunkSizeLimit = MAX_CHUNK_SIZE,
  maxFilesPerBatch = MAX_FILES_PER_SIZE,
  worker,
  onUpload,
  onProgress,
  onReject,
  onComplete,
}: UploadManagerProps): UploadManagerResult => {
  /** Flag indicating whether uploads are currently in progress */
  let isLoading = false;
  /** Batches waiting to be processed */
  let pendingBatches: FileData[][][] = [];
  /** Batches that failed to upload and can be retried */
  let trash: FileData[][][] = [];
  /** The currently processing task */
  let currentTask: Task | undefined;
  /** Queue of batches ready to be processed */
  const queue: FileData[][][] = [];

  /** Queue manager that processes batches one by one */
  const uploadQueue = queueManager<FileData[], WorkerResponse>(worker);

  /**
   * Adds a batch of files to the upload queue.
   *
   * @param batch - The batch of files to upload
   * @param signal - AbortSignal to cancel the upload
   * @param onProgress - Callback function for progress updates
   * @returns A promise that resolves when the batch is uploaded
   */
  const addToQueue = (
    batch: FileData[],
    signal: AbortSignal,
    onProgress: (progress: number) => void,
  ): Promise<WorkerResponse> =>
    new Promise<WorkerResponse>((resolve, reject) => {
      uploadQueue({
        data: batch,
        callback: (err, workerResponse) => {
          if (err) {
            reject(err);
          }

          resolve(workerResponse);
        },
        onProgress,
        signal,
      });
    });

  /**
   * Continues the upload queue by adding the next batch of files to the queue.
   * This function shifts the first batch from pendingBatches and adds it to the queue.
   */
  const continueQueue = (): void => {
    const batches = pendingBatches.shift();

    queue.push(batches);
  };

  /**
   * Prepares the tasks for upload.
   * It converts File objects to FileData, splits them into chunks if needed,
   * groups them into batches, and adds the first batch to the queue.
   *
   * @param files - The files to upload
   */
  const prepareTasks = (files: File[]): void => {
    const filesToUpload = files.map<FileData>((file) => ({
      id: file.name,
      name: file.name,
      blob: file,
      index: 0,
      parts: 1,
      length: file.size,
    }));

    const chunksToUpload = getChunksToUpload(filesToUpload, maxChunkSizeLimit);

    pendingBatches = getBatchesGroups(chunksToUpload, maxChunkSizeLimit, maxFilesPerBatch);

    continueQueue();
  };

  /**
   * Processes the chunks of files in the upload queue.
   * It handles retries, errors, and progress updates for each batch.
   *
   * @param batches - The batches of files to process
   * @returns A promise that resolves to a ProcessChunksResult object
   */
  const processChunks = async (batches: FileData[][]): Promise<ProcessChunksResult> => {
    let innerQueue = batches.map((batch) => ({
      retry: 0,
      data: batch,
      abortController: new AbortController(),
    }));

    const fails: FileDataWithError[][] = [];
    const success: FileData[][] = [];
    let isAborted = false;
    let isContinue = true;
    let error: unknown | undefined = undefined;

    while (innerQueue.length > 0 && isLoading) {
      currentTask = innerQueue.shift();

      if (!currentTask) {
        continue;
      }

      try {
        const uploadData = await addToQueue(
          currentTask.data,
          currentTask.abortController.signal,
          (progress) => {
            onProgress(currentTask.data, progress);
          },
        );

        isAborted = currentTask.abortController.signal.aborted;
        isContinue = currentTask.abortController.signal.reason;

        const uploadedFiles = uploadData.uploadedFiles
          .map((file) => currentTask.data.find((chunk) => chunk.id === file.name))
          .filter(Boolean)
          .map((file) => ({
            ...file,
            id: uploadData.uploadedFiles.find((chunk) => chunk.name === file.id).id,
          }));

        const failedFiles = uploadData.failedFiles
          .map((file) => currentTask.data.find((chunk) => chunk.id === file.name))
          .filter(Boolean)
          .map((file) => ({
            ...file,
            ...uploadData.failedFiles.find((chunk) => chunk.name === file.id),
          }));

        if (!isAborted) {
          if (uploadedFiles.length > 0) {
            success.push(uploadedFiles);
          }

          if (failedFiles.length > 0) {
            fails.push(failedFiles);
          }
        }
      } catch (e) {
        error = e;
        isContinue = currentTask.abortController.signal.reason;
        isAborted = error instanceof DOMException;

        if (isAborted || !isContinue || currentTask.retry >= retryLimit) {
          fails.push(currentTask.data.map((chunk) => ({ ...chunk, errorMessage: e.message })));

          innerQueue.forEach((task) => {
            fails.push(task.data.map((chunk) => ({ ...chunk, errorMessage: e.message })));
          });

          innerQueue = [];
        }

        if (currentTask.retry < retryLimit) {
          currentTask.retry += 1;
          innerQueue.unshift(currentTask);
        }
      }
    }

    return { fails, success, shouldContinue: !isAborted || isContinue, error };
  };

  /**
   * Progresses the upload queue by processing batches one by one.
   * It continues until the queue is empty or uploading is stopped.
   * It handles success, failure, and continuation of the queue.
   *
   * @returns A promise that resolves when all queued batches are processed
   */
  const progressQueue = async (): Promise<void> => {
    while (queue.length > 0 && isLoading) {
      const task = queue.shift();

      if (!task) {
        continue;
      }

      onUpload(task[0]);

      try {
        const { fails, shouldContinue, success, error } = await processChunks(task);

        if (error) {
          if (fails.length > 0) {
            trash.push(fails);
            onReject(fails[0], error);
          } else {
            trash.push(task);
            onReject(
              task[0].map((chunk) => ({ ...chunk, errorMessage: String(error) })),
              error,
            );
          }
        } else {
          if (fails.length > 0) {
            trash.push(fails);
            onReject(fails[0], new DOMException('Failed', 'Some files failed to upload'));
          }

          if (success.length > 0) {
            onComplete(success[0]);
          }
        }

        if (shouldContinue) {
          continueQueue();
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  /**
   * Uploads the files by preparing tasks and processing the queue.
   * The upload process is asynchronous and happens in the next tick of the event loop.
   *
   * @param files - The files to upload
   * @returns A promise that resolves when all files are processed
   */
  const upload = async (files: File[]): Promise<void> => {
    prepareTasks(files);

    isLoading = true;
    await progressQueue();
    isLoading = false;
  };

  /**
   * Cancels the upload of a specific file.
   * If the file is currently being uploaded, it aborts the upload.
   * If the file is in the queue, it removes it from the queue.
   *
   * @param id - The ID of the file to cancel
   * @returns A promise that resolves when the cancellation is complete
   */
  const cancel = (id: FileData['id']): Promise<void> => {
    return new Promise<void>((resolve) => {
      const batchToDeleteIsCurrentTask = currentTask?.data.map(({ id }) => id).includes(id);

      if (batchToDeleteIsCurrentTask && currentTask) {
        currentTask.abortController.signal.onabort = (): void => {
          const activeChunks = (currentTask?.data ?? []).filter((chunk) => chunk.id !== id);

          if (activeChunks.length > 0) {
            pendingBatches.unshift([activeChunks]);
          }

          resolve();
        };
        currentTask.abortController.abort(true);
      } else {
        const filteredPendingBatches = pendingBatches
          .map((batches) =>
            batches
              .map((batch) => batch.filter((chunk) => chunk.id !== id))
              .filter((batches) => batches.length),
          )
          .filter((batches) => batches.length);

        const pendingBatchesToRemove = pendingBatches
          .map((batches) =>
            batches
              .map((batch) => batch.filter((chunk) => chunk.id === id))
              .filter((batches) => batches.length),
          )
          .filter((batches) => batches.length)
          .flat();

        pendingBatches = filteredPendingBatches;
        trash.push(pendingBatchesToRemove);

        const error = new DOMException('Aborted', 'removed from queue');

        onReject(
          pendingBatchesToRemove[0].map((chunk) => ({ ...chunk, errorMessage: error.message })),
          error,
        );

        resolve();
      }
    });
  };

  /**
   * Cancels all uploads.
   * It aborts the current task and removes all pending batches.
   * It also calls the onReject callback for each batch in the pending batches.
   *
   * @returns A promise that resolves when all uploads are canceled
   */
  const cancelAll = (): Promise<void> => {
    isLoading = false;

    return new Promise<void>((resolve) => {
      if (currentTask) {
        currentTask.abortController.signal.onabort = (): void => {
          pendingBatches.forEach((batchGroup) => {
            trash.push(batchGroup);
            const error = new DOMException('Aborted', 'Service aborted');

            onReject(
              batchGroup[0].map((chunk) => ({ ...chunk, errorMessage: error.message })),
              error,
            );
          });

          pendingBatches = [];
          resolve();
        };

        currentTask.abortController.abort(true);
      } else {
        resolve();
      }
    });
  };

  /**
   * Restarts the upload process by taking the next batch from pendingBatches
   * and adding it to the queue, then processing the queue.
   *
   * @returns A promise that resolves when the restart is complete
   */
  const restart = async (): Promise<void> => {
    const batches = pendingBatches.shift();

    if (batches) {
      queue.push(batches);
    }

    isLoading = true;
    await progressQueue();
    isLoading = false;
  };

  /**
   * Retries uploading a specific file that previously failed.
   * It finds the file in the trash, removes it, and adds it back to the queue.
   *
   * @param id - The ID of the file to retry
   * @returns A promise that resolves when the retry is complete
   */
  const retry = async (id: FileData['id']): Promise<void> => {
    const batchesGroupToRetry = trash.find((batches) =>
      batches.some((batch) => batch.some((chunk) => chunk.id === id)),
    );

    if (!batchesGroupToRetry?.length) {
      return;
    }

    const filteredBatchesGroup = batchesGroupToRetry
      .map((batch) => batch.filter((chunk) => chunk.id !== id))
      .filter((batch) => batch.length);

    const newTrash = trash.filter((batches) =>
      batches.some((batch) => batch.every((chunk) => chunk.id !== id)),
    );

    trash = filteredBatchesGroup.length ? [...newTrash, filteredBatchesGroup] : newTrash;

    const filteredBatchesGroupToRetry = batchesGroupToRetry.map((batch) =>
      batch.filter((chunk) => chunk.id === id),
    );

    if (isLoading) {
      pendingBatches.push(filteredBatchesGroupToRetry);

      return;
    } else {
      pendingBatches = [filteredBatchesGroupToRetry];

      return restart();
    }
  };

  /**
   * Retries all failed uploads.
   * It moves all batches from trash to pendingBatches and restarts the upload process.
   *
   * @returns A promise that resolves when all retries are complete
   */
  const retryAll = async (): Promise<void> => {
    pendingBatches = [...trash];
    trash = [];

    return restart();
  };

  return {
    retry,
    retryAll,
    upload,
    cancelAll,
    cancel,
  };
};
