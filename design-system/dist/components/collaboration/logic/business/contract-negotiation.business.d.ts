import { CollaborationActivity, CollaborationActivityDocument, CollaborationActivityDocumentThirdParty, CollaborationDocument, CollaborationResource, CollaborationResourceStatusInfo, CollaborationStatus, CollaborationSubtask } from '../../interfaces';
/** All collaboration states considered active. */
export declare const activeCollaborationStates: CollaborationStatus[];
/**
 * Function that generates an array with all the documents in the collaborations
 * with the third parties and his statuses
 */
export declare const getActivityDocuments: (negotiableDocuments: CollaborationResource[], collaborationSubtasks: CollaborationSubtask[]) => CollaborationActivityDocument[];
/**
 * Utility function that retrieves a selected document from a list of collaboration
 * activity documents
 */
export declare const getActivitySelectedDocument: (activityDocuments: CollaborationActivityDocument[], { id, negotiable }: Pick<CollaborationDocument, "id" | "negotiable">) => CollaborationActivityDocument;
type ThirdPartyStatus = Pick<CollaborationActivityDocumentThirdParty, 'status'>;
type Document = {
    thirdParties: ThirdPartyStatus[];
};
/**
 * General statuses of the documents.
 * If one person is remaining of approval the status remains pending
 */
export declare const generalDocumentsStatuses: (documents: Document[]) => CollaborationResourceStatusInfo[];
/** Filter the available activities entries on the contract negotiation history scope */
export declare const filterContractNegotiationActivities: (activities: CollaborationActivity[]) => CollaborationActivity[];
export {};
