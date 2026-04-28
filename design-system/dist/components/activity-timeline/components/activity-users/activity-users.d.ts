import { ReactElement } from 'react';
import { IActivity } from '../../activity-timeline.interfaces';
export type ActivityUsersProps = Pick<IActivity['extraData'], 'users'>;
/**
 * Component that displays a list of users in the activity timeline
 *
 * @deprecated Use the `Timeline` API instead
 */
export declare const ActivityUsers: ({ users }: ActivityUsersProps) => ReactElement;
