import { DrawerProps } from '../../../drawer';
import { CollaborationDocument, CollaborationTask } from '../../interfaces';
export interface DocumentUploadDetailsDrawerProps extends DrawerProps {
    tasks: CollaborationTask[];
    onDocumentClick(documentId: CollaborationDocument['id']): void;
}
/**
 * Drawer of document upload details component
 */
export declare const DocumentUploadDetailsDrawer: ({ isOpen, onClose, tasks, onDocumentClick, }: DocumentUploadDetailsDrawerProps) => JSX.Element;
