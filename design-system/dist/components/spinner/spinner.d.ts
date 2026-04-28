import { ReactElement } from 'react';
import { WithTestId } from '../../interfaces/common.interfaces';
type Size = 'sm' | 'md' | 'lg';
export type SpinnerProps = WithTestId & {
    size?: Size;
    color?: string;
    secondaryColor?: string;
};
/** Styled spinner component */
export declare function Spinner({ 'data-testid': dataTestId, size, color, secondaryColor, }: SpinnerProps): ReactElement;
export {};
