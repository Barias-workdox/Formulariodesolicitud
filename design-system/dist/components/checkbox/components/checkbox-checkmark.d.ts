import { ReactElement } from 'react';
type CheckmarkProps = {
    dataTestId?: string;
    checked: boolean;
    disabled?: boolean;
};
/**
 * Renders a Carbon checkbox icon based on the `checked` and `disabled` states.
 */
export declare const CheckboxCheckmark: ({ dataTestId, checked, disabled, }: CheckmarkProps) => ReactElement;
export {};
