import { InputProps } from '../../../../../../input/next/input.interfaces';
/**
 * Get the input overrides for the input selector component.
 */
export declare const getInputOverrides: ({ isOpen, handleOpen, }: {
    isOpen: boolean;
    handleOpen(): void;
}) => InputProps["overrides"];
