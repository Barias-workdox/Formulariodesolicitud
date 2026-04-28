import { ReactElement } from 'react';
import { CollaborationDetails } from '../../../interfaces';
export type BannerCollaborationProps = Pick<CollaborationDetails, 'status' | 'cancelledAt' | 'finishedAt'>;
/**
 * Component that indicates the status of a collaboration.
 *
 * This banner is only active when the status of the collaboration is `finished` or `canceled`
 */
export declare const BannerCollaboration: ({ status, finishedAt, cancelledAt, }: BannerCollaborationProps) => ReactElement;
