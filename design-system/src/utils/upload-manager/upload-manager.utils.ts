import type { FileData } from './upload-manager.interfaces';

/**
 * Splits the file into chunks of maxChunkSize.
 * The chunks are created by slicing the file blob into smaller parts,
 * where each part has a maximum size of maxChunkSize.
 *
 * @param file - The file data to split into chunks
 * @param maxChunkSize - The maximum size of each chunk in bytes
 * @returns An array of FileData objects representing the chunks
 */
export const getChunks = (file: FileData, maxChunkSize: number): FileData[] => {
  const chunks: FileData[] = [];

  const totalChunks = Math.ceil(file.length / maxChunkSize);

  Array.from({ length: totalChunks }).forEach((_, index) => {
    const start = index * maxChunkSize;
    const end = Math.min(start + maxChunkSize, file.length);
    const chunk = file.blob.slice(start, end);

    chunks.push({
      name: file.name,
      id: file.id,
      blob: chunk,
      index,
      parts: totalChunks,
      length: end - start,
    });
  });

  return chunks;
};

/**
 * Gets the chunks to upload by processing each file.
 * If a file is larger than the maxChunkSize, it will be split into chunks.
 * Otherwise, the file will be uploaded as is.
 *
 * @param files - Array of files to process
 * @param maxChunkSize - The maximum size of each chunk in bytes
 * @returns An array of FileData objects representing all the chunks to upload
 */
export const getChunksToUpload = (files: FileData[], maxChunkSize: number): FileData[] => {
  return files.reduce<FileData[]>((acc, fileToUpload) => {
    if (fileToUpload.length > maxChunkSize) {
      acc = acc.concat(getChunks(fileToUpload, maxChunkSize));
    } else {
      acc.push(fileToUpload);
    }

    return acc;
  }, []);
};

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
export const getBatchesGroups = (
  files: FileData[],
  maxBatchSize: number,
  maxFilesPerBatch?: number,
): FileData[][][] => {
  // First group files by their ID
  const groupedById = files.reduce<Record<string, FileData[]>>((acc, file) => {
    (acc[file.id] ||= []).push(file);

    return acc;
  }, {});

  // Identify groups that have multiple parts (same file split into chunks)
  const groupedSameId = Object.values(groupedById).filter((group) => group.length > 1);

  // Get the remaining single-part files
  const remainingFiles = Object.values(groupedById)
    .filter((group) => group.length === 1)
    .flat();

  // Group the remaining files by size constraints
  const sizeBasedGroups = remainingFiles.reduce<FileData[][]>((groups, file) => {
    const fileSize = file.length;
    const lastGroup = groups.at(-1);
    const currentGroupSize = lastGroup?.reduce((sum, f) => sum + f.length, 0) ?? 0;

    const wouldExceedSize = currentGroupSize + fileSize > maxBatchSize;
    const wouldExceedCount = (lastGroup?.length ?? 0) >= maxFilesPerBatch;

    // Create a new group if:
    // 1. The file is larger than the max batch size (will be its own group)
    // 2. There is no existing group
    // 3. Adding to the current group would exceed the max size
    // 4. Adding to the current group would exceed the max count
    if (fileSize > maxBatchSize || !lastGroup || wouldExceedSize || wouldExceedCount) {
      groups.push([file]);
    } else {
      lastGroup.push(file);
    }

    return groups;
  }, []);

  // Format the result as a three-dimensional array:
  // 1. Multi-part files are handled specially - each part as its own batch but grouped together
  // 2. Size-based groups are wrapped in an extra array level for consistency
  return [
    ...groupedSameId.map((group) => group.map((file) => [file])),
    ...sizeBasedGroups.map((group) => [group]),
  ];
};
