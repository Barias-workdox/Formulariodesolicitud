import { Document, DocumentTasks, FaceDissatisfied, SubtractAlt } from '@carbon/icons-react';

import { useTranslation } from '@components/utils';

import type {
  FileUploadManagerStatus,
  FileUploadManagerTabType,
} from '../contexts/file-uploader-manager.context';
import type { CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon';

interface EmptyStateDetails {
  icon: CarbonIconType;
  title: string;
  description?: string;
}

interface UseEmptyStateDetailsProps {
  activeTab: FileUploadManagerTabType;
  status: FileUploadManagerStatus;
}

type UseEmptyStateDetailsResult = EmptyStateDetails;

/**
 * Get the details for the empty state based on the status of the file upload manager.
 */
export const useEmptyStateDetails = ({
  activeTab,
  status,
}: UseEmptyStateDetailsProps): UseEmptyStateDetailsResult => {
  const { t } = useTranslation();

  const FINISHED_EMPTY_STATE: Record<string, EmptyStateDetails> = {
    completed: {
      icon: FaceDissatisfied,
      title: t('fileUploadManager.emptyState.finished.completed.title'),
      description: t('fileUploadManager.emptyState.finished.completed.description'),
    },
    omitted: {
      icon: SubtractAlt,
      title: t('fileUploadManager.emptyState.finished.omitted.title'),
    },
    rejected: {
      icon: DocumentTasks,
      title: t('fileUploadManager.emptyState.finished.rejected.title'),
    },
  };

  const DEFAULT_EMPTY_STATE: EmptyStateDetails = {
    icon: Document,
    title: t('fileUploadManager.empty'),
  };

  return status !== 'uploading'
    ? (FINISHED_EMPTY_STATE[activeTab] ?? DEFAULT_EMPTY_STATE)
    : DEFAULT_EMPTY_STATE;
};
