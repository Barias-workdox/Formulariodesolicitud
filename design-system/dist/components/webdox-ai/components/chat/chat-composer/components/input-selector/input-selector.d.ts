import { WithTestId, WithZIndex } from '../../../../../../../interfaces/common.interfaces';
export interface InputSelectorProps extends WithZIndex, WithTestId {
    value: string;
    isOpen: boolean;
    handleOpen(): void;
}
/**
 * Input selector component to use with a popover.
 */
export declare const InputSelector: ({ value, isOpen, handleOpen, }: InputSelectorProps) => React.JSX.Element;
