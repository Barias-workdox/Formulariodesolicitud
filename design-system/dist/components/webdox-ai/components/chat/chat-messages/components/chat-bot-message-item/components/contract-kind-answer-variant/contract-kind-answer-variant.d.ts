import { ReactElement } from 'react';
import { ChatBotChatMessageType } from '../../../../../../../interfaces';
import { TempAnswerProps } from '../../../../../../../interfaces/chat-bot-component.interface';
export type ContractKindAnswerVariantProps = Pick<ChatBotChatMessageType, 'id' | 'zIndex'> & Pick<TempAnswerProps, 'item' | 'options' | 'onSubmit'>;
/**
 * Styled placeholder answer by the chat bot. It allows the user
 * to confirm if the supplied contract kind is correct or not
 */
export declare const ContractKindAnswerVariant: ({ id, zIndex, item: { label }, options, onSubmit, }: ContractKindAnswerVariantProps) => ReactElement;
