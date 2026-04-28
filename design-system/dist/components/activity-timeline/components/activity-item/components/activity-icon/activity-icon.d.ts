import { ActivityType } from '../../../../activity-timeline.interfaces';
export interface ActivityIconProps {
    'data-testid'?: string;
    type: ActivityType;
}
/**
 * A component for displaying an icon associated with a specific
 * activity type.
 */
export declare const ActivityIcon: ({ type, "data-testid": dataTestId, }: ActivityIconProps) => JSX.Element;
