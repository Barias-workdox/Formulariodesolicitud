import {
  FILES_LIST_ITEM_HEIGHT,
  FILES_LIST_MAX_HEIGHT,
  MAX_OVERFLOW_FILES_LENGTH,
} from './file-upload-manager.constants';

import type { FileStatus, FileUploadItem } from './file-upload-manager.interfaces';

/**
 * Sort function to prioritize uploading files first, then pending, then others
 */
export const sortByUploadingFirst = (a: FileUploadItem, b: FileUploadItem): number => {
  /** Priority order: uploading - pending - others  */
  const getPriority = (status: FileUploadItem['status']): number => {
    switch (status) {
      case 'uploading':
        return 0;
      case 'pending':
        return 1;
      default:
        return 2;
    }
  };

  const priorityA = getPriority(a.status);
  const priorityB = getPriority(b.status);

  return priorityA - priorityB;
};

/**
 * Get the counts of files by status in a single iteration
 */
export const getFileCounts = (files: FileUploadItem[]): Record<FileStatus | 'all', number> => {
  return files.reduce<Record<FileStatus | 'all', number>>(
    (acc, { status }) => ({ ...acc, [status]: ++acc[status] }),
    {
      all: files.length,
      completed: 0,
      rejected: 0,
      pending: 0,
      uploading: 0,
      omitted: 0,
      canceled: 0,
    },
  );
};

/**
 * Get the minimum height of the list based on the number of files
 */
export const getListMinHeight = (filesLength: number): number => {
  if (filesLength < MAX_OVERFLOW_FILES_LENGTH) {
    return filesLength * FILES_LIST_ITEM_HEIGHT;
  }

  return FILES_LIST_MAX_HEIGHT;
};
