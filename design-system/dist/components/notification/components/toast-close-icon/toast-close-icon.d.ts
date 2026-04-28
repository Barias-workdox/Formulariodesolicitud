/**
 * Uses the CloseIcon and adds the property alignItems and ref to render correctly in the toast.
 * Wrapped in a styled div that provides proper spacing and alignment.
 */
export declare const CloseIconToast: import('react').ForwardRefExoticComponent<Omit<import('baseui/button').ButtonProps, "size" | "kind"> & {
    'data-testid'?: string;
    dataTestId?: string;
} & {
    kind?: import('../../../button').KindType;
    size?: import('../../../button').SizeType;
    fullWidth?: boolean;
    paddingLeft?: string | 0;
    paddingRight?: string | 0;
    responsive?: boolean;
    onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
    onMouseDown?: React.MouseEventHandler<HTMLButtonElement>;
    onMouseUp?: React.MouseEventHandler<HTMLButtonElement>;
} & import('react').RefAttributes<HTMLButtonElement>>;
