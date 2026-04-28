import { ButtonProps } from '../button';
import { StatefulTooltipNextProps } from '../tooltip-next';
import { WithTestId, WithZIndex } from '../../interfaces/common.interfaces';
export interface MessageBoxProps extends WithTestId, WithZIndex {
    /** Reference to additional elements used to determine if the message box should close when clicking outside. */
    addonsRef?: React.RefObject<HTMLDivElement>;
    buttonProps?: Pick<ButtonProps, 'kind' | 'startEnhancer' | 'endEnhancer' | 'disabled'> & {
        text?: string;
    };
    closeOnClickAway?: boolean;
    defaultValue?: string;
    disabled?: boolean;
    /** Indicates when the message box is at full height. */
    isExpanded: boolean;
    isLoading?: boolean;
    /** Indicates when the message box is open and ready for use, also showing action buttons. */
    isOpen: boolean;
    infoTooltip?: StatefulTooltipNextProps['content'];
    isWritingDisabled?: boolean;
    extraActions?: React.ReactNode;
    placeholder?: string;
    maxLength?: number;
    onCreate?(value: string): void;
    setIsExpanded(isExpanded: boolean): void;
    setIsOpen(isOpen: boolean): void;
}
/**
 * This component renders a message box with a textarea for composing messages. It includes functionality
 * for expanding and collapsing the textarea, and handles input, paste, and key down events.
 *
 * @deprecated Use the new MessageBox component instead.
 */
export declare const MessageBox: ({ "data-testid": dataTestId, addonsRef, buttonProps, closeOnClickAway, defaultValue, disabled, isExpanded, isLoading, isOpen, infoTooltip, isWritingDisabled, extraActions, placeholder, zIndex, maxLength, onCreate, setIsExpanded, setIsOpen, }: MessageBoxProps) => JSX.Element;
