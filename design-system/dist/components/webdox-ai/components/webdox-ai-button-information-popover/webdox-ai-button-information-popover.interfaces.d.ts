import { InformationPopoverProps } from '../../../information-popover';
import { ChatBotUser } from '../../interfaces';
export interface InformationPopoverCommonProps extends Pick<InformationPopoverProps, 'data-testid' | 'children' | 'overrides' | 'isOpen' | 'onClick' | 'onClickOutside' | 'onEsc' | 'close'> {
    user: Pick<ChatBotUser, 'firstName'>;
    sendTextValue?: string;
    isDisabled?: boolean;
    onSendClick?(value: string): void;
}
export type PopoverVariant = 'active' | 'genericError' | 'loading' | 'processFailedError' | 'legalWhisperGreetings' | 'suiteAIGreetings' | 'encryptedDocument';
