import { ButtonProps as BaseButtonProps } from 'baseui/button';
/**
 * A styled button component that extends the functionality of the base UI button component with custom styling and behavior.
 */
export declare const Button: import('react').ForwardRefExoticComponent<Omit<BaseButtonProps, "size" | "kind"> & {
    'data-testid'?: string;
    dataTestId?: string;
} & {
    kind?: import('./button.interfaces').KindType;
    size?: import('./button.interfaces').SizeType;
    fullWidth?: boolean;
    paddingLeft?: string | 0;
    paddingRight?: string | 0;
    responsive?: boolean;
    onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
    onMouseDown?: React.MouseEventHandler<HTMLButtonElement>;
    onMouseUp?: React.MouseEventHandler<HTMLButtonElement>;
} & import('react').RefAttributes<HTMLButtonElement>>;
