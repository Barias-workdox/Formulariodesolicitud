import { WithTestId } from '../../../../interfaces/common.interfaces';
type ArrowIconWrapperProps = WithTestId & {
    isOpen: boolean;
    disabled?: boolean;
    toggleIsOpen(): void;
};
/**
 * This component is a wrapper of the ArrowIcon component used in the Select
 *
 * The ArrowIconWrapper will be used to show/hidden the popover with the user list content
 */
export declare const ArrowIconWrapper: ({ dataTestId, isOpen, toggleIsOpen, disabled, }: ArrowIconWrapperProps) => JSX.Element;
export {};
