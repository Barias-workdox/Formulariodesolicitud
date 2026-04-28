import { UploadManagerProps, UploadManagerResult } from './upload-manager.interfaces';
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
export declare const UploadManager: ({ retryLimit, maxChunkSizeLimit, maxFilesPerBatch, worker, onUpload, onProgress, onReject, onComplete, }: UploadManagerProps) => UploadManagerResult;
