import { ReactNode } from 'react';
export interface SelectPlaceholderProps {
    isDisabled: boolean;
    placeholder: ReactNode;
}
/** Render a custom placeholder for the user-select */
export declare const SelectPlaceholder: ({ isDisabled, placeholder, }: SelectPlaceholderProps) => JSX.Element;
