import { ReactElement } from 'react';
import { ChatBotChatMessageType } from '../../../../../../../interfaces';
import { TempAnswerProps } from '../../../../../../../interfaces/chat-bot-component.interface';
export type PromptsSuggestionAnswerVariantProps = Pick<ChatBotChatMessageType, 'id' | 'zIndex'> & Pick<TempAnswerProps, 'options' | 'onSubmit'>;
/** A Styled list dynamic prompts from consumer and a description */
export declare const PromptsSuggestionAnswerVariant: ({ zIndex, id, onSubmit, options, }: PromptsSuggestionAnswerVariantProps) => ReactElement;
