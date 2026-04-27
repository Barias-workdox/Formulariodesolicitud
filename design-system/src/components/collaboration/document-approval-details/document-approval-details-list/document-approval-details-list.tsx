import { Avatar } from '@components/avatar';
import { Text } from '@components/text';
import { StatefulTooltipNext } from '@components/tooltip-next';
import { useCss } from '@components/utils/hooks/use-css';
import { useTranslation } from '@components/utils/i18n/utils';

import { CollaborationDocumentTag } from './collaboration-document-tag';
import { styles } from './document-approval-details-list.styles';

import type { CollaborationResource, CollaborationSubtask, ThirdParty } from '../../interfaces';

export interface DocumentApprovalDetailsListProps {
  selectedDocumentId: string | number;
  subtasks: CollaborationSubtask[];
}

/** Return the combination name between the first name and last name of the collaborator. */
export const getThirdPartyName = (thirdParty: ThirdParty): string =>
  `${thirdParty.firstName} ${thirdParty.lastName}`.trim() ?? '';

/** Get document selected by the documentId into the documents in the invitation  */
const getCurrentDocument = (
  subtask: CollaborationSubtask,
  documentId: string | number,
): CollaborationResource => {
  if (!subtask || !documentId) {
    return null;
  }

  return subtask.resources.find(({ document }) => document.id === documentId) || null;
};

/**
 * Part of document approval details by document.
 * Renders the list of collaboration document status by collaborator.
 */
export const DocumentApprovalDetailsList = ({
  subtasks,
  selectedDocumentId,
}: DocumentApprovalDetailsListProps): JSX.Element => {
  const { t } = useTranslation();

  const {
    itemListContentStyles,
    thirdPartyContentStyles,
    itemListWrapperStyles,
    reasonRejectionLabelStyles,
    theme,
  } = useCss(styles);

  return (
    <div>
      {subtasks.map((subtask) => {
        const document = getCurrentDocument(subtask, selectedDocumentId);

        // If does not exist a document with the selected id into the invitation then we render no item.
        if (!document) {
          return null;
        }

        return (
          <div
            aria-label="document-approval-list"
            key={subtask.id}
            className={itemListWrapperStyles}
          >
            <Avatar
              size="32px"
              name={getThirdPartyName(subtask.thirdParty)}
            />
            <div className={itemListContentStyles}>
              <div className={thirdPartyContentStyles}>
                <Text
                  variant="bodySmall"
                  $style={styles.thirdPartyText()}
                  color={theme.colors.neutral}
                >
                  {getThirdPartyName(subtask.thirdParty)}
                </Text>
                <Text
                  variant="bodySmall"
                  $style={styles.thirdPartyText()}
                  color={theme.colors.neutralSubdued}
                >
                  <StatefulTooltipNext
                    placement="bottom"
                    showArrow
                    content={subtask.thirdParty.email}
                  >
                    {subtask.thirdParty.email}
                  </StatefulTooltipNext>
                </Text>
              </div>
              <CollaborationDocumentTag
                status={document.status || 'pending'}
                date={document.updatedAt}
              />
              {document.status === 'rejected' && (
                <Text
                  variant="bodySmall"
                  $style={styles.reasonRejectionStyles(theme)}
                >
                  <span className={reasonRejectionLabelStyles}>
                    {`${t('collaborationDetails.reason')}: `}
                  </span>
                  {document.rejectionReason}
                </Text>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
