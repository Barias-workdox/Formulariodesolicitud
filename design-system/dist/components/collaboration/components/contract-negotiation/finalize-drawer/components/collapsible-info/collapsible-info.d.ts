import { ReactElement } from 'react';
import { CollaborationActivityDocument, CollaborationResourceStatusInfo } from '../../../../../interfaces';
export type CollapsibleInfoProps = {
    document: Pick<CollaborationActivityDocument, 'id' | 'updatedAt' | 'thirdParties' | 'officeDocumentVersion'>;
    status: CollaborationResourceStatusInfo;
};
/**
 * Component that renders the required information of a document
 */
export declare const CollapsibleInfo: ({ document: { id, updatedAt, thirdParties, officeDocumentVersion }, status, }: CollapsibleInfoProps) => ReactElement;
