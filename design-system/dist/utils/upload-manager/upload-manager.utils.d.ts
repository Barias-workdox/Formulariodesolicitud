import { FileData } from './upload-manager.interfaces';
/**
 * Splits the file into chunks of maxChunkSize.
 * The chunks are created by slicing the file blob into smaller parts,
 * where each part has a maximum size of maxChunkSize.
 *
 * @param file - The file data to split into chunks
 * @param maxChunkSize - The maximum size of each chunk in bytes
 * @returns An array of FileData objects representing the chunks
 */
export declare const getChunks: (file: FileData, maxChunkSize: number) => FileData[];
/**
 * Gets the chunks to upload by processing each file.
 * If a file is larger than the maxChunkSize, it will be split into chunks.
 * Otherwise, the file will be uploaded as is.
 *
 * @param files - Array of files to process
 * @param maxChunkSize - The maximum size of each chunk in bytes
 * @returns An array of FileData objects representing all the chunks to upload
 */
export declare const getChunksToUpload: (files: FileData[], maxChunkSize: number) => FileData[];
/**
 * Splits the files into batches based on several criteria:
 * 1. Files with the same ID (multi-part files) are grouped together
 * 2. Remaining files are grouped by size and count constraints
 *
 * This optimizes the upload process by:
 * - Keeping parts of the same file together for sequential processing
 * - Creating size-efficient batches for the remaining files
 * - Respecting both size and count limits for batches
 *
 * @param files - Array of files/chunks to organize into batches
 * @param maxBatchSize - The maximum total size of a batch in bytes
 * @param maxFilesPerBatch - The maximum number of files in a batch (optional)
 * @returns A three-dimensional array of FileData objects organized into batch groups
 */
export declare const getBatchesGroups: (files: FileData[], maxBatchSize: number, maxFilesPerBatch?: number) => FileData[][][];
