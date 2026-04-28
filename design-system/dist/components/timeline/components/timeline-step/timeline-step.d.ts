import { ReactElement } from 'react';
import { StepProps } from 'baseui/progress-steps';
export type TimelineStepProps = StepProps;
/** Wrapper utility component that can be used if custom Timeline steps are required */
export declare const TimelineStep: ({ children, ...props }: TimelineStepProps) => ReactElement;
