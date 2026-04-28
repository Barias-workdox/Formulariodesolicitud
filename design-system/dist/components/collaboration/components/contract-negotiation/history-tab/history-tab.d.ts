import { CollaborationActivity, CollaborationUser } from '../../../interfaces';
import { TimelineProps } from '../../../../timeline';
export type HistoryTabProps = Pick<TimelineProps, 'isLoading' | 'onPageEnd'> & {
    'data-testid': string;
    activities: CollaborationActivity[];
    responsible: CollaborationUser;
    onClose(): void;
};
/** HistoryTab is a component that renders the ActivitiesTimeline component */
export declare const HistoryTab: ({ "data-testid": dataTestId, isLoading, activities, responsible, onPageEnd, onClose, }: HistoryTabProps) => JSX.Element;
