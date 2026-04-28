import { CollaborationDocument, CollaborationSubtask, CollaborationTask } from '../../interfaces';
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
/**
 * Displays document upload task information and
 * a list of subtasks with uploaded and pending uploaded documents
 */
export declare const DocumentUploadTaskDetails: ({ subtasks, documentTypeLabel, categoryLabel, reason, uniqueId, required, description, onDocumentClick, }: DocumentUploadTaskDetailsProps) => JSX.Element;
