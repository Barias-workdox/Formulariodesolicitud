import { CollaborationSubtask } from '../interfaces';
import { CollaborationInvitation } from './legacy-collaboration';
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
export declare const DocumentApprovalDetails: ({ invitations, subtasks: rawSubtasks, }: DocumentApprovalDetailsProps) => JSX.Element;
