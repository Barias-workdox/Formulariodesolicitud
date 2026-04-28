import { ButtonProps } from '../button';
export type ClearButtonProps = Pick<ButtonProps, 'data-testid' | 'onClick' | 'overrides'> & {
    'aria-label'?: string;
    iconColor?: string;
};
/**
 * A button component that displays a "Close" icon, typically used to clear or dismiss elements such as notifications or input fields.
 */
export declare const ClearButton: import('react').ForwardRefExoticComponent<Pick<ButtonProps, "onClick" | "data-testid" | "overrides"> & {
    'aria-label'?: string;
    iconColor?: string;
} & import('react').RefAttributes<HTMLButtonElement>>;
