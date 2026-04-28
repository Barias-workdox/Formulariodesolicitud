import { FileDownloadStatus } from '../..';
import { ListitemOverrides } from '../../../list';
import { DesignSystemTheme } from '../../../../themes';
import { ProgressBarOverrides } from 'baseui/progress-bar';
/**
 * Returns the FileListItem overrides for a given file status and spacing tokens.
 * Padding is wider for finished and error states to accommodate the status text detail.
 */
export declare const getFileListItemOverrides: (fileStatus: FileDownloadStatus, spacing: DesignSystemTheme["spacing"]) => ListitemOverrides;
/**
 * Returns the ProgressBar overrides for a given spacing tokens. Adds top margin to separate it from the file name label.
 */
export declare const getFileProgressBarOverrides: (spacing: DesignSystemTheme["spacing"]) => ProgressBarOverrides;
