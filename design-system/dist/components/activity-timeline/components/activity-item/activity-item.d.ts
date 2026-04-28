import { ReactNode } from 'react';
import { IActivity } from '../../activity-timeline.interfaces';
import { StepProps } from 'baseui/progress-steps';
export interface ActivityItemProps extends Pick<IActivity, 'type' | 'createdAt' | 'description' | 'overrides'>, Omit<StepProps, 'overrides'> {
    'data-testid'?: string;
    children?: ReactNode;
}
/**
 * Renders a single item in an activity timeline.
 *
 * @deprecated Use the `Timeline` API instead
 */
export declare const ActivityItem: ({ "data-testid": dataTestId, type, description, createdAt, children, overrides: { Icon }, ...others }: ActivityItemProps) => JSX.Element;
