import { InformationPopoverContentCommonProps } from '../../information-popover-content.interfaces';
import { ButtonProps } from '../../../../../../../../button';
export interface ChatShortcutContentProps extends Pick<InformationPopoverContentCommonProps, 'data-testid' | 'isDisabled' | 'sendTextValue' | 'onInputChange'> {
    buttonKind: ButtonProps['kind'];
    buttonText: string;
    description: string;
    placeholder: string;
    onSubmit(value: string): void;
}
/**
 * A component that renders the content of the "Chat Shortcut" popover.
 *
 * This component provides a styled wrapper with detailed information and a message composer
 * that allows users to send input or interact with the chat shortcut functionality.
 */
export declare const ChatShortcutContent: ({ "data-testid": dataTestId, buttonKind, buttonText, description, isDisabled, placeholder, sendTextValue, onInputChange, onSubmit, }: ChatShortcutContentProps) => JSX.Element;
