import { CollaborationDocument, CollaborationTask } from '../interfaces';
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
export declare const DocumentUploadDetails: ({ tasks, onDocumentClick, }: DocumentUploadDetailsProps) => JSX.Element;
