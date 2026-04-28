import { CollaborationSubtask, ThirdParty } from '../../interfaces';
export interface DocumentApprovalDetailsListProps {
    selectedDocumentId: string | number;
    subtasks: CollaborationSubtask[];
}
/** Return the combination name between the first name and last name of the collaborator. */
export declare const getThirdPartyName: (thirdParty: ThirdParty) => string;
/**
 * Part of document approval details by document.
 * Renders the list of collaboration document status by collaborator.
 */
export declare const DocumentApprovalDetailsList: ({ subtasks, selectedDocumentId, }: DocumentApprovalDetailsListProps) => JSX.Element;
