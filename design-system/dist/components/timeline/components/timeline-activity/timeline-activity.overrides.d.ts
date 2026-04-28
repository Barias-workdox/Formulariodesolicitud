import { ReactNode } from 'react';
import { StepOverrides } from 'baseui/progress-steps';
type GetOverridesParams = {
    indicator: ReactNode;
};
/** Get the step overrides customized by the Design System theme and kind */
export declare const getOverrides: ({ indicator }: GetOverridesParams) => StepOverrides;
export {};
