import { ActivityType } from '../../activity-timeline.interfaces';
import { StepOverrides } from 'baseui/progress-steps';
export interface GetOverridesParams {
    dataTestId: string;
    type: ActivityType;
}
/**
 * Get the step overrides customized by the Design System theme and kind.
 */
export declare const getOverrides: ({ dataTestId, type }: GetOverridesParams) => StepOverrides;
