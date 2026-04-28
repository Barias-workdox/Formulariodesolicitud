import { ReactElement } from 'react';
import { CollaborationResource, CollaborationResourceStatus } from '../../../interfaces';
export interface BannerDocumentProps {
    status: CollaborationResourceStatus;
    approvedAt: CollaborationResource['approvedAt'];
}
/**
 * Component that indicates the status of a document to a user.
 *
 * This banner is only active when the status of the document is `approved` or `pending`.
 * If the status of the collaboration is `finished` or `cancelled` this banner is not visible.
 */
export declare const BannerDocument: ({ status, approvedAt, }: BannerDocumentProps) => ReactElement;
