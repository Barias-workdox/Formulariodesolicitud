import { ReactElement } from 'react';
import { CollaborationResourceStatusInfo } from '../../../../../interfaces';
export type StatusIconProps = {
    'data-testid': string;
    status: CollaborationResourceStatusInfo;
};
/**
 * Component that renders an icon that indicates the state of the document
 */
export declare const StatusIcon: ({ "data-testid": dataTestId, status, }: StatusIconProps) => ReactElement;
