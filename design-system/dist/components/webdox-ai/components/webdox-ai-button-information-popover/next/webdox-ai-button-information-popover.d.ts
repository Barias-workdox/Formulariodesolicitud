import { PopoverVariant } from './webdox-ai-button-information-popover.interfaces';
import { InformationPopoverProps } from '../../../../information-popover';
import { ChatBotUser, WebdoxAIOptionType } from '../../../interfaces';
export interface WebdoxAIButtonInformationPopoverProps extends Pick<InformationPopoverProps, 'data-testid' | 'children' | 'overrides' | 'isOpen' | 'onClick' | 'onClickOutside' | 'onEsc' | 'close' | 'placement'> {
    variant: PopoverVariant;
    isDisabled?: boolean;
    sendTextValue?: string;
    user: Pick<ChatBotUser, 'firstName'>;
    onSubmit?(params: {
        optionType: WebdoxAIOptionType;
        value: string;
    }): void;
}
/**
 * A component that renders an information popover based on the provided variant.
 *
 * This component uses a customizable `InformationPopover` that supports various content and styles
 * defined by the provided `variant`. It allows integration of children, custom overrides, and handlers
 * for user interactions such as sending text, closing the popover, or reacting to clicks outside of the popover.
 */
export declare const WebdoxAIButtonInformationPopover: ({ "data-testid": dataTestId, user, variant, children, overrides, isDisabled, sendTextValue, onSubmit, ...rest }: WebdoxAIButtonInformationPopoverProps) => JSX.Element;
