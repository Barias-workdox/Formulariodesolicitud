import { FILES_LIST_ITEM_HEIGHT } from '@components/file-download-manager/file-download-manager.constants';

import type { FileDownloadStatus } from '@components/file-download-manager';
import type { ListitemOverrides } from '@components/list';
import type { DesignSystemTheme } from '@themes';
import type { ProgressBarOverrides } from 'baseui/progress-bar';

/**
 * Returns the FileListItem overrides for a given file status and spacing tokens.
 * Padding is wider for finished and error states to accommodate the status text detail.
 */
export const getFileListItemOverrides = (
  fileStatus: FileDownloadStatus,
  spacing: DesignSystemTheme['spacing'],
): ListitemOverrides => ({
  Root: {
    style: {
      minHeight: `${FILES_LIST_ITEM_HEIGHT}px`,
      padding:
        fileStatus === 'finished' || fileStatus === 'error'
          ? `${spacing.spacing2xs} ${spacing.spacingXs}`
          : spacing.spacingXs,
    },
  },
});

/**
 * Returns the ProgressBar overrides for a given spacing tokens. Adds top margin to separate it from the file name label.
 */
export const getFileProgressBarOverrides = (
  spacing: DesignSystemTheme['spacing'],
): ProgressBarOverrides => ({
  BarContainer: {
    style: {
      margin: `${spacing.spacingXs} 0 0 0`,
    },
  },
});
