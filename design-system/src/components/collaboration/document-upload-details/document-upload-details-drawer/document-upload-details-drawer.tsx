import { WatsonHealthStackedScrolling_1 } from '@carbon/icons-react';

import { Drawer, DrawerHeader } from '@components/drawer';
import { useTranslation } from '@components/utils/i18n/utils';

import { DocumentUploadDetails } from '../document-upload-details';

import type { DrawerProps } from '../../../drawer';
import type { CollaborationDocument, CollaborationTask } from '../../interfaces';

export interface DocumentUploadDetailsDrawerProps extends DrawerProps {
  tasks: CollaborationTask[];
  onDocumentClick(documentId: CollaborationDocument['id']): void;
}

/**
 * Drawer of document upload details component
 */
export const DocumentUploadDetailsDrawer = ({
  isOpen,
  onClose,
  tasks,
  onDocumentClick,
}: DocumentUploadDetailsDrawerProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Drawer
      isOpen={isOpen}
      autoFocus={false}
      onClose={onClose}
    >
      <DrawerHeader
        onClose={onClose}
        title={t('collaborationUploadDetails.collaborationActivity')}
        icon={<WatsonHealthStackedScrolling_1 size={20} />}
      />
      <DocumentUploadDetails
        onDocumentClick={onDocumentClick}
        tasks={tasks}
      />
    </Drawer>
  );
};
