import { ReactElement } from 'react';
import { ProgressStepProps } from './components/progress-step/progress-step';
export interface ProgressStepsProps extends Pick<ProgressStepProps, 'size' | 'type' | 'hideText' | 'responsiveBreakpoint'> {
    /**  The `ProgressStep` components that will be managed by `ProgressSteps`. */
    children: ReactElement<ProgressStepProps> | ReactElement<ProgressStepProps>[];
    'data-testid'?: string;
    /** Specifies a uniform width for all steps when `type` is 'default'. */
    stepWidth?: string;
    /**
     * Callback function triggered when any step is clicked.
     * Receives the index of the clicked step as an argument.
     */
    onStepClick?(index: number): void;
}
/**
 * `ProgressSteps` is a container component that manages a sequence of `ProgressStep` components, providing structure and layout.
 * It supports both compressed and default layouts, with optional click handling for each step.
 * Renders a react element representing a sequence of progress steps.
 *
 * @example
 * // Basic usage with two steps
 * <ProgressSteps>
 *   <ProgressStep title="Step 1" kind="default" />
 *   <ProgressStep title="Step 2" kind="checked" />
 * </ProgressSteps>
 */
export declare const ProgressSteps: ({ "data-testid": dataTestId, size, type, hideText, responsiveBreakpoint, stepWidth, children, onStepClick, }: ProgressStepsProps) => ReactElement;
