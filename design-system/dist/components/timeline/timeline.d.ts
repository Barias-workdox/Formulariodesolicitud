import { ReactElement } from 'react';
import { TimelineType } from './interfaces/timeline.interfaces';
export type TimelineProps = {
    /**
     * Represents a collection of `ReactNode` elements along with their corresponding _identifiers_ used as keys.
     *
     * It is essential that any component intended for rendering within this collection is
     * constructed on top of the `TimelineStep` component.
     */
    activities: TimelineType[];
    /** Default `false` */
    isLoading?: boolean;
    /** Default `false` */
    isPaginated?: boolean;
    /** Callback function that triggers the pagination when the final node is reached */
    onPageEnd?(): void;
};
/**
 * Component that displays a sequence of child components as a timeline of events.
 *
 * The component allows to use infinite pagination. Use this component instead of `ActivityTimeline`
 */
export declare const Timeline: ({ activities, isLoading, isPaginated, onPageEnd, }: TimelineProps) => ReactElement;
