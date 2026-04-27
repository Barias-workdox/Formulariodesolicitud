import { useMemo, useState } from 'react';

import { TableDivisionLine } from '@components/table/components';
import { useCss } from '@components/utils/hooks/use-css';

import { getSubtasks } from '../collaboration.utils';

import { DeletedDocumentAlert } from './deleted-document-alert';
import { DocumentApprovalDetailsLastUpdate } from './document-approval-details-last-update';
import { DocumentApprovalDetailsList } from './document-approval-details-list';
import { DocumentApprovalDetailsSelector } from './document-approval-details-selector';
import { styles } from './document-approval-details.styles';

import type { CollaborationSubtask } from '../interfaces';
import type { Option } from './document-approval-details-selector';
import type { CollaborationInvitation } from './legacy-collaboration';

export interface DocumentApprovalDetailsProps {
  /** @deprecated Only required for legacy support */
  invitations?: CollaborationInvitation[];
  /** Support for the new DTO multiple collaboration kinds  */
  subtasks?: CollaborationSubtask[];
}

/**
 * Support legacy implementation and new DTO multiple collaboration kinds
 *
 * Document approval details by document.
 * Shows per each document into the collaboration invite, the document status per collaborator.
 * Renders a document selector and a list of document collaboration status per collaborator.
 */
export const DocumentApprovalDetails = ({
  invitations = [],
  subtasks: rawSubtasks = [],
}: DocumentApprovalDetailsProps): JSX.Element => {
  const { wrapper } = useCss(styles);
  const [documentSelected, setDocumentSelected] = useState<Option[]>([]);

  const [{ deletedAt: firstDocumentDeletedAt = undefined, id: firstDocumentId = null } = {}] =
    documentSelected;
  const isSelectedDocumentDeleted = firstDocumentDeletedAt !== undefined;

  const subtasks = useMemo(() => getSubtasks(invitations, rawSubtasks), [invitations, rawSubtasks]);

  return (
    <div className={wrapper}>
      <DocumentApprovalDetailsSelector
        documentSelected={documentSelected}
        setDocumentSelected={setDocumentSelected}
        subtasks={subtasks}
      />
      <DocumentApprovalDetailsLastUpdate
        subtasks={subtasks}
        showSubtitleText={!isSelectedDocumentDeleted}
      />
      {isSelectedDocumentDeleted && <DeletedDocumentAlert deletedAt={firstDocumentDeletedAt} />}
      <TableDivisionLine />
      <DocumentApprovalDetailsList
        subtasks={subtasks}
        selectedDocumentId={firstDocumentId}
      />
    </div>
  );
};
