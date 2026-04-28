import { ReactElement } from 'react';
import { CollaborationStatus } from '../../../../../interfaces';
export interface CollaborationHeaderTagProps {
    status: CollaborationStatus;
}
/** Component that communicates the status of a collaboration */
export declare const CollaborationHeaderTag: ({ status }: CollaborationHeaderTagProps) => ReactElement;
