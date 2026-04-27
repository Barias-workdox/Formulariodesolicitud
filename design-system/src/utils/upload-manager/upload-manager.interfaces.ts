import type { Worker } from './queue';

/**
 * Represents a file or a chunk of a file to be uploaded.
 * Contains metadata about the file and the actual blob data.
 */
export interface FileData {
  /** Unique identifier for the file */
  id: string | number;
  /** Total number of parts the file is split into */
  parts: number;
  /** Index of the current chunk (0-based) */
  index: number;
  /** The actual blob data to be uploaded */
  blob: Blob;
  /** Name of the file */
  name: string;
  /** Size of the file or chunk in bytes */
  length: number;
}

export interface FileDataWithError extends FileData {
  /** Error message if the upload fails */
  errorMessage: string;
}

/**
 * Represents a task in the upload queue.
 * Contains the data to be uploaded, a retry counter, and an abort controller.
 */
export interface Task {
  /** Number of retry attempts for this task */
  retry: number;
  /** The file data to be uploaded */
  data: FileData[];
  /** AbortController to cancel the upload if needed */
  abortController: AbortController;
}

/**
 * The public interface returned by the UploadManager.
 * Provides methods to manage the upload process.
 */
export interface UploadManagerResult {
  /**
   * Uploads the provided files.
   *
   * @param files - The files to upload
   */
  upload(files: File[]): Promise<void>;
  /**
   * Cancels the upload of a specific file.
   *
   * @param id - The ID of the file to cancel
   */
  cancel(id: FileData['id']): Promise<void>;
  /** Cancels all pending uploads */
  cancelAll(): Promise<void>;
  /**
   * Retries uploading a specific file.
   *
   * @param id - The ID of the file to retry
   */
  retry(id: FileData['id']): Promise<void>;
  /** Retries all failed uploads */
  retryAll(): Promise<void>;
}

/**
 * Represents the response from the server after processing a batch of files.
 * Contains information about uploaded and failed files.
 */
export interface WorkerResponse {
  uploadedFiles: {
    id: number;
    name: string;
  }[];
  failedFiles: {
    name: string;
    errorMessage: string;
  }[];
}

/**
 * Configuration options for the UploadManager.
 */
export interface UploadManagerProps {
  /** Maximum number of retry attempts for failed uploads (default: 5) */
  retryLimit?: number;
  /** Maximum size of a chunk in bytes (default: 10MB) */
  maxChunkSizeLimit?: number;
  /** Maximum number of files per batch (default: 5) */
  maxFilesPerBatch?: number;
  /** Worker function to handle the actual upload process */
  worker: Worker<FileData[], WorkerResponse>;
  /** Callback function called when a batch starts uploading */
  onUpload(batch: FileData[]): void;
  /** Callback function called during upload to report progress */
  onProgress(batch: FileData[], progress: number): void;
  /** Callback function called when a batch upload fails */
  onReject(batch: FileDataWithError[], err: unknown): void;
  /** Callback function called when a batch upload completes successfully */
  onComplete(batch: FileData[]): void;
}

/**
 * Result of processing chunks in the upload queue.
 * Contains information about successful and failed uploads.
 */
export interface ProcessChunksResult {
  /** Array of batches that failed to upload */
  fails: FileDataWithError[][];
  /** Array of batches that uploaded successfully */
  success: FileData[][];
  /** Whether to continue uploading the next batch */
  shouldContinue: boolean;
  /** Error that occurred during upload, if any */
  error?: unknown;
}
