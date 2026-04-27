import type { ReactElement } from 'react';

import { Step } from 'baseui/progress-steps';

import type { StepProps } from 'baseui/progress-steps';

export type TimelineStepProps = StepProps;

/** Wrapper utility component that can be used if custom Timeline steps are required */
export const TimelineStep = ({ children, ...props }: TimelineStepProps): ReactElement => {
  return <Step {...props}>{children}</Step>;
};
