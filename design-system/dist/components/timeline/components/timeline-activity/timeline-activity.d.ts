import { ReactElement, ReactNode } from 'react';
import { TimelineStepProps } from '../timeline-step';
type Overrides = TimelineStepProps['overrides'];
export type TimelineActivityProps = {
    title: string;
    subtitle: string;
    indicator: ReactNode;
    children?: ReactNode;
    isLast?: TimelineStepProps['isLast'];
    overrides?: Pick<Overrides, 'IconContainer'>;
};
/** Timeline step created to represent an activity with a custom indicator of the step */
export declare const TimelineActivity: ({ title, subtitle, indicator, children, isLast, overrides: { IconContainer }, }: TimelineActivityProps) => ReactElement;
export {};
