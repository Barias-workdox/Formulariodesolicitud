export interface IColors {
    /** unfilled bar color */
    empty: string;
    /** Center fill color */
    inner: string;
    /** filled bar color */
    fill: string;
    currentText: string;
    totalText: string;
}
interface ProgressCircleProps {
    /** The current number. Should be lower than total */
    current: number;
    /** The maximum number of the percentage. Should be equal or greater than current */
    total: number;
    colors: IColors;
    /** Required to make the size of the component. All nodes are calculated relative to this value in px */
    size: string;
}
/**
 * Renders a styled percentage circle with a filled circular section, based on the current vs total
 * values.
 * Some colors are handled by the state of the component
 */
export declare const ProgressCircle: ({ current, total, colors, size, }: ProgressCircleProps) => JSX.Element;
export {};
