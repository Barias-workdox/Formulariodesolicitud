import { RecentlyViewed } from '@carbon/icons-react';

import { BackgroundIcon } from '@components/background-icon';
import { TitleLayout } from '@components/layouts';
import { Notification } from '@components/notification/next';
import { useCss } from '@components/utils/hooks/use-css';
import { useTranslation } from '@components/utils/i18n/utils';
import { COMMON_ICON_SIZE_32 } from '@constants/common.constants';
import { useLocale } from '@contexts/locale-provider';

import { getLastUpdateDateFormatted } from '../collaboration.utils';

import { lastUpdateTitleLayoutOverridesStyles, styles } from './document-upload-details.styles';
import { DocumentUploadTaskDetails } from './document-upload-task-details';

import type { CollaborationDocument, CollaborationTask } from '../interfaces';

export interface DocumentUploadDetailsProps {
  tasks: CollaborationTask[];
  onDocumentClick(documentId: CollaborationDocument['id']): void;
}

/**
 * Details of the document upload per task
 *
 * Has a TitleLayout with the last update date.
 * Displays for each task
 *  - If all documents are uploaded it shows a positive tag and if at least one document is missing it shows a warning tag.
 *  - The document type and category
 *  - The uploaded and missing documents.
 *  - The reason for the task.
 *
 * If the document is uploaded and clicked on, the document is displayed in a modal viewer.
 */
export const DocumentUploadDetails = ({
  tasks,
  onDocumentClick,
}: DocumentUploadDetailsProps): JSX.Element => {
  const { t } = useTranslation();
  const { wrapper, lastUpdateWrapperStyles, theme } = useCss(styles);
  const { locale } = useLocale();

  /** Creates a list of createAt data of each task */
  const updateDates: Date[] = tasks.reduce(
    (dates, task) =>
      dates.concat(
        ...task.subtasks.map((subtask) =>
          subtask.resources.length > 0
            ? subtask.resources.map(({ updatedAt }) => new Date(updatedAt))
            : new Date(subtask.updatedAt),
        ),
      ),
    [],
  );

  return (
    <div className={wrapper}>
      <Notification
        kind="info"
        closeable
        description={t('collaborationUploadDetails.notification')}
      />
      <div className={lastUpdateWrapperStyles}>
        <TitleLayout
          overrides={lastUpdateTitleLayoutOverridesStyles(theme)}
          startEnhancer={
            <BackgroundIcon
              Icon={RecentlyViewed}
              size={COMMON_ICON_SIZE_32}
              backgroundColor="brandWashed"
            />
          }
          titleText={t('collaborationUploadDetails.updatedActivity')}
          subtitleText={getLastUpdateDateFormatted(updateDates, locale)}
        />
      </div>
      {tasks.map(({ id, category, type, reason, subtasks, required, description }, index) => (
        <DocumentUploadTaskDetails
          key={id}
          categoryLabel={category.label}
          documentTypeLabel={type.label}
          reason={reason}
          subtasks={subtasks}
          uniqueId={index + 1}
          onDocumentClick={onDocumentClick}
          required={required}
          description={description}
        />
      ))}
    </div>
  );
};
