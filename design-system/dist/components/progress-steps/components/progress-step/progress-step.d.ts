import { ReactElement } from 'react';
import { mediaQueries } from '../../../../themes/v3/tokens/breakpoints';
export type ProgressStepSize = 'sm' | 'md';
export type ProgressStepType = 'default' | 'compressed';
export type ProgressStepKind = 'default' | 'checked' | 'warning' | 'pending';
export interface ProgressStepProps {
    'data-testid'?: string;
    /** The index of the step, used to determine the icon displayed. */
    index?: number;
    /** The title or label of the step. */
    title: string;
    /** Determines the size of the step. 'sm' renders a smaller step, while 'md' renders a larger one. */
    size?: 'sm' | 'md';
    /**
     * Determines if the text should be replaced with a Tooltip. This logic depends on the `responsiveBreakpoint` property
     * in order to hide the text according to the current screen size.
     */
    hideText?: boolean;
    /** Sets the responsive breakpoint at which the text will be hidden. Defaults to `medium` */
    responsiveBreakpoint?: keyof typeof mediaQueries;
    /**
     * Specifies the visual state of the step.
     *  - 'default': Displays the step number.
     *  - 'checked': Displays a checkmark, indicating completion.
     *  - 'warning': Displays a warning icon.
     *  - 'pending': Displays the step number, indicating a pending status.
     */
    kind: ProgressStepKind;
    /**
     * Determines the layout type of the step.
     *  - 'default': Renders the step with a vertical layout.
     *  - 'compressed': Renders the step with a horizontal layout.
     */
    type?: ProgressStepType;
    /** Sets a custom width for the step. Only applicable when `type` is not 'compressed'. */
    $width?: string;
    /** Callback function triggered when the step is clicked. Not applicable if `kind` is 'pending'. */
    onClick?(): void;
}
/**
 * `ProgressStep` is a versatile component designed to represent an individual step within a progress indicator sequence.
 * It supports various visual styles and interaction states, making it suitable for different progress tracking scenarios.
 *
 * Renders a React element representing an individual step in a progress indicator.
 *
 * The hover styling will only works if `onClick` prop is declared before.
 *
 * If `index`prop is not defined the step icon to be rendered will be `Undefined` from carbon icons.
 *
 * @example
 * // Basic usage
 * <ProgressStep index="0" title="Step 1" kind="default" />
 */
export declare const ProgressStep: ({ "data-testid": dataTestId, size, kind, hideText, responsiveBreakpoint, type, title, index, $width, onClick, }: ProgressStepProps) => ReactElement;
