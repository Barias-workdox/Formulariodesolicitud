import type { InformationPopoverProps } from '@components/information-popover';
import type { ChatBotUser } from '@components/webdox-ai/interfaces';

export interface InformationPopoverCommonProps extends Pick<
  InformationPopoverProps,
  | 'data-testid'
  | 'children'
  | 'overrides'
  | 'isOpen'
  | 'onClick'
  | 'onClickOutside'
  | 'onEsc'
  | 'close'
> {
  user: Pick<ChatBotUser, 'firstName'>;
  sendTextValue?: string;
  isDisabled?: boolean;
  onSendClick?(value: string): void;
}

export type PopoverVariant =
  | 'active'
  | 'genericError'
  | 'loading'
  | 'processFailedError'
  | 'legalWhisperGreetings'
  | 'suiteAIGreetings'
  | 'encryptedDocument';
