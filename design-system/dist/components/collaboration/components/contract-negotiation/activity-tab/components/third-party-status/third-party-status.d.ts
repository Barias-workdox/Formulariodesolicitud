import { ReactElement } from 'react';
import { CollaborationActivityDocumentThirdParty } from '../../../../../interfaces';
export interface ThirdPartyStatusProps {
    thirdParty: Omit<CollaborationActivityDocumentThirdParty, 'id'>;
}
/** Component that renders the status of a third party on a document of the collaboration */
export declare const ThirdPartyStatus: ({ thirdParty: { name, status, approvedAt }, }: ThirdPartyStatusProps) => ReactElement;
