import {
  CheckmarkOutline,
  CloseOutline,
  CloudUpload,
  Restart,
  SubtractAlt,
  Time,
} from '@carbon/icons-react';

import type { FileUploadManagerTabType } from './contexts/file-uploader-manager.context';
import type { FileStatus } from './file-upload-manager.interfaces';
import type { BackgroundIconProps } from '@components/background-icon/background-icon.interfaces';

/** Available tab options for filtering files */
export const TABS: FileUploadManagerTabType[] = [
  'all',
  'pending',
  'uploading',
  'canceled',
  'omitted',
  'rejected',
  'completed',
] as const;

export const TABS_OMITTED: FileUploadManagerTabType[] = [] as const;

export const FILE_ICON_MAP: Record<FileStatus, BackgroundIconProps> = {
  pending: {
    Icon: Time,
    iconColor: 'neutral',
    backgroundColor: 'neutralWashed',
  },
  uploading: {
    Icon: CloudUpload,
    iconColor: 'brandMedium',
    backgroundColor: 'brandSubtle',
  },
  rejected: {
    Icon: Restart,
    iconColor: 'neutral',
    backgroundColor: 'neutralWashed',
  },
  completed: {
    Icon: CheckmarkOutline,
    iconColor: 'positive',
    backgroundColor: 'positiveSubtle',
  },
  canceled: {
    Icon: CloseOutline,
    iconColor: 'negative',
    backgroundColor: 'negativeSubtle',
  },
  omitted: {
    Icon: SubtractAlt,
    iconColor: 'neutral',
    backgroundColor: 'neutralWashed',
  },
} as const;

export const FILES_LIST_MAX_HEIGHT = 310;

export const FILES_LIST_ITEM_HEIGHT = 48;

export const FILE_UPLOAD_MANAGER_WIDTH = 450;

export const MAX_OVERFLOW_FILES_LENGTH = 6;
