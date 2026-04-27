import { useMemo } from 'react';

import { Drawer, DrawerHeader } from '@components/drawer';
import { useTranslation } from '@components/utils';

import { getSubtasks } from '../../collaboration.utils';
import { DocumentApprovalDetails } from '../document-approval-details';

import type { DrawerProps } from '../../../drawer';
import type { CollaborationSubtask } from '../../interfaces';
import type { CollaborationInvitation } from '../legacy-collaboration';

export interface DocumentApprovalDetailsDrawerProps extends DrawerProps {
  /** Support for the new DTO multiple collaboration kinds  */
  subtasks?: CollaborationSubtask[];
  /** @deprecated Only required for legacy support */
  invitations?: CollaborationInvitation[];
}

/**
 * Drawer wrapper of document approval details component
 */
export const DocumentApprovalDetailsDrawer = ({
  isOpen,
  onClose,
  subtasks: rawSubtasks = [],
  invitations = [],
}: DocumentApprovalDetailsDrawerProps): JSX.Element => {
  const { t } = useTranslation();

  const subtasks = useMemo(() => getSubtasks(invitations, rawSubtasks), [invitations, rawSubtasks]);

  return (
    <Drawer
      isOpen={isOpen}
      autoFocus={false}
      onClose={onClose}
    >
      <DrawerHeader
        onClose={onClose}
        title={t('collaborationDetails.collaborationHistory')}
      />
      <DocumentApprovalDetails subtasks={subtasks} />
    </Drawer>
  );
};
