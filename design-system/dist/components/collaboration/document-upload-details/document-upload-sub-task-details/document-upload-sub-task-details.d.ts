import { CollaborationDocument, CollaborationResource } from '../../interfaces';
export interface DocumentUploadSubtaskDetailsProps {
    resource: CollaborationResource | undefined;
    thirdPartyName: string;
    onDocumentClick(documentId: CollaborationDocument['id']): void;
}
/**
 * Render the information of the Subtask
 * If the document is uploaded and clicked on, the document is displayed in a modal viewer.
 */
export declare const DocumentUploadSubtaskDetails: ({ resource, thirdPartyName, onDocumentClick, }: DocumentUploadSubtaskDetailsProps) => JSX.Element;
