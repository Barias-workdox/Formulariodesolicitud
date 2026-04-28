import { CollaborationActivityDocument } from './contract-negotiation.interfaces';
export type CollaborationActivityDocumentsForm = CollaborationActivityDocument & {
    index: number;
    value: boolean;
};
export interface FinalizeNegotiationFormFields {
    documents: CollaborationActivityDocumentsForm[];
}
export interface CancelCollaborationFormFields {
    message: string;
}
