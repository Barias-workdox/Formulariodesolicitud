import { ReactElement } from 'react';
import { CollaborationResourceStatus } from '../../../../../interfaces';
export interface DocumentStatusTagProps {
    status: CollaborationResourceStatus;
    useLongText?: boolean;
}
/** Set the styled Tag for every document status value */
export declare const DocumentStatusTag: ({ status, useLongText, }: DocumentStatusTagProps) => ReactElement;
