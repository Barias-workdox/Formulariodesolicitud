import type { ChatBotAnswerVariantV2 } from './chat-bot.interfaces';
import type { ChatBotChatMessageType } from './chat-message.interface';
import type { GenerativeTextProps } from '../../generative-text';
import type { SelectOption } from '../../select';
import type { CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon';

export type StyledChatBotGenerativeTextProps = Omit<GenerativeTextProps, '$style' | 'variant'>;

export interface MessageListItemType extends Pick<SelectOption, 'id' | 'label' | 'disabled'> {
  /** It is a longer text than the label */
  value?: string;
  Icon?: CarbonIconType;
  /** Indicates if the current item will not trigger anything outside the chat conversation */
  isInternal?: boolean;
}

export type TempSystemAnswerParamsType = {
  /** Title describing the content or purpose of the response. */
  title?: string;
  /**
   * Clarifying or informational text displayed in the component's footer.
   * Provides additional context for the user.
   */
  footerText?: string;
};

export type TempAnswerParamsType = {
  item?: MessageListItemType;
  options?: MessageListItemType[];
  disabled?: boolean;
} & TempSystemAnswerParamsType;

type TempAnswerSubmitPayloadType = Partial<TempAnswerParamsType> & {
  /** The parent's message id */
  id: ChatBotChatMessageType['id'];
};

export type TempAnswerSubmitCallbackType = (
  variant: ChatBotAnswerVariantV2,
  payload?: Partial<TempAnswerSubmitPayloadType>,
) => void;

export interface TempAnswerProps extends TempAnswerParamsType {
  onSubmit?: TempAnswerSubmitCallbackType;
}
