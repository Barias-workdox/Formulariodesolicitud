import { useMemo } from 'react';

import { Tag } from '@components/tag';
import { useCss } from '@components/utils/hooks/use-css';
import { useTranslation } from '@components/utils/i18n/utils';

import { DocumentUploadDetailsReason } from '../document-upload-details-reason';
import { DocumentUploadSubtaskDetails } from '../document-upload-sub-task-details';

import { taskStyles } from './document-upload-task-details.styles';
import { DocumentUploadTaskTitle } from './document-upload-task-title';

import type {
  CollaborationDocument,
  CollaborationSubtask,
  CollaborationTask,
} from '../../interfaces';
import type { TranslationType } from '@components/utils/i18n/i18n.interface';
import type { DesignSystemTheme } from '@themes/theme.interfaces';

export interface DocumentUploadTaskDetailsProps {
  subtasks: CollaborationSubtask[];
  documentTypeLabel: string;
  categoryLabel: string;
  reason: string;
  uniqueId: number;
  required: CollaborationTask['required'];
  description?: CollaborationTask['description'];
  onDocumentClick(documentId: CollaborationDocument['id']): void;
}

type TagOption = {
  color: string;
  kind: 'warning' | 'positive';
  text: string;
};

/**
 * Used to get the options to the tag component
 */
const getTagOptionByStatus = (
  t: TranslationType,
  theme: DesignSystemTheme,
  status: string,
): TagOption => {
  const tagOptions: Record<'documentPending' | 'documentApproved', TagOption> = {
    documentPending: {
      color: theme.colors.warningStrong,
      kind: 'warning',
      text: t('collaborationUploadDetails.documentStatus.pending'),
    },
    documentApproved: {
      color: theme.colors.positiveStrong,
      kind: 'positive',
      text: t('collaborationUploadDetails.documentStatus.approved'),
    },
  };

  return tagOptions[status];
};

/**
 * Displays document upload task information and
 * a list of subtasks with uploaded and pending uploaded documents
 */
export const DocumentUploadTaskDetails = ({
  subtasks,
  documentTypeLabel,
  categoryLabel,
  reason,
  uniqueId,
  required,
  description,
  onDocumentClick,
}: DocumentUploadTaskDetailsProps): JSX.Element => {
  const { taskContainer, theme } = useCss(taskStyles);
  const { t } = useTranslation();
  const documentPending = subtasks.some(({ resources }) => resources.length === 0);

  /**
   * Filters the latest subtasks by the third party id
   */
  const latestSubtasksFiltered = useMemo(() => {
    const subtasksMap = subtasks.reduce<Record<number, CollaborationSubtask>>((acc, subtask) => {
      const thirdPartyId = subtask.thirdParty.id;

      if (!acc[thirdPartyId] || subtask.createdAt > acc[thirdPartyId].createdAt) {
        acc[thirdPartyId] = subtask;
      }

      return acc;
    }, {});

    return Object.values(subtasksMap);
  }, [subtasks]);

  /**
   * If documentPending is true shows a warning tag else shows a positive tag
   */
  const { color, kind, text } = useMemo(() => {
    const status = documentPending ? 'documentPending' : 'documentApproved';

    return getTagOptionByStatus(t, theme, status);
  }, [documentPending, t, theme]);

  return (
    <>
      <div
        data-testid="document-upload-task-item"
        className={taskContainer}
      >
        <Tag
          variant="solid"
          kind={kind}
          color={color}
          size="small"
        >
          {text}
        </Tag>
        <DocumentUploadTaskTitle
          uniqueId={uniqueId}
          documentTypeLabel={documentTypeLabel}
          categoryLabel={categoryLabel}
          required={required}
          description={description}
        />
        {latestSubtasksFiltered.map(({ resources, id, thirdParty }) => {
          const [firstResource] = resources;

          return (
            <DocumentUploadSubtaskDetails
              key={id}
              resource={firstResource}
              thirdPartyName={`${thirdParty.firstName} ${thirdParty.lastName}`}
              onDocumentClick={onDocumentClick}
            />
          );
        })}
        {reason && <DocumentUploadDetailsReason reason={reason} />}
      </div>
    </>
  );
};
