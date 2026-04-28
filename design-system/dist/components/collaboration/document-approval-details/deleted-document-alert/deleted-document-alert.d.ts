import { ReactElement } from 'react';
export interface DeletedDocumentAlertProps {
    deletedAt: string;
}
/**
 * Part of document approval details by document.
 * Shows an alert to indicate that the document has been deleted.
 */
export declare const DeletedDocumentAlert: ({ deletedAt }: DeletedDocumentAlertProps) => ReactElement;
