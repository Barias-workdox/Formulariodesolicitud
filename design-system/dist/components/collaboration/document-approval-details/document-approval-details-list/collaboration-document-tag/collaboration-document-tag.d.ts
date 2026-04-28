import { CollaborationResourceStatus } from '../../../interfaces';
export interface CollaborationDocumentTagProps {
    status: CollaborationResourceStatus;
    date: string;
}
/** Set the styled Tag for every collaboration status value */
export declare const CollaborationDocumentTag: ({ status, date, }: CollaborationDocumentTagProps) => JSX.Element;
