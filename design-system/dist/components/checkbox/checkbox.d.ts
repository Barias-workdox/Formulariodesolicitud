import { CheckboxProps as BaseWebCheckboxProps } from 'baseui/checkbox';
export type CheckboxProps = BaseWebCheckboxProps & {
    'data-testid'?: string;
    id?: string;
    /** Custom styles for the checkbox container */
    className?: string;
    /** If true the text label gets the form-control styles */
    labelAsFormControl?: boolean;
};
/**
 * Styled checkbox component
 *
 * if labelAsFormControl is true the child text gets the label styles of the form control
 */
export declare const Checkbox: import('react').ForwardRefExoticComponent<BaseWebCheckboxProps & {
    'data-testid'?: string;
    id?: string;
    /** Custom styles for the checkbox container */
    className?: string;
    /** If true the text label gets the form-control styles */
    labelAsFormControl?: boolean;
} & import('react').RefAttributes<HTMLInputElement>>;
