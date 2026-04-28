import { IActivity } from './activity-timeline.interfaces';
export interface ActivityTimelineProps {
    'data-testid'?: string;
    activities: IActivity[];
    isPaginated?: boolean;
    isLoading?: boolean;
    /** A callback function to be called when the end of the page is reached, triggering pagination. */
    onPageEnd?(): void;
}
/**
 * The `ActivityTimeline` component displays a timeline of activities.
 * It can display a list of activities and supports infinite pagination.
 * This component uses the Progress Step from Base Web and displays a
 * spinner when isLoading is true.
 *
 * @deprecated Use the `Timeline` API instead
 */
export declare const ActivityTimeline: ({ "data-testid": dataTestId, activities, isPaginated, isLoading, onPageEnd, }: ActivityTimelineProps) => JSX.Element;
