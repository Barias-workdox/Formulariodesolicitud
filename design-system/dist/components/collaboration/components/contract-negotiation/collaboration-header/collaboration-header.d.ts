import { ReactElement, ReactNode } from 'react';
import { CollaborationStatus } from '../../../interfaces';
export interface CollaborationHeaderProps {
    collaborationName: string;
    customerName: string;
    status: CollaborationStatus;
    action?: ReactNode;
    options?: ReactNode;
}
/**
 * Header for collaboration details section in organisms.
 * Displays the name of the collaboration and the associated customer name.
 */
export declare const CollaborationHeader: ({ collaborationName, customerName, status, action, options, }: CollaborationHeaderProps) => ReactElement;
