import { ReactElement } from 'react';
import { ChatBotChatMessageType } from '../../../../../../../interfaces';
export type GenerativeAnswerVariantProps = Pick<ChatBotChatMessageType, 'staticContent' | 'value' | 'question' | 'zIndex'>;
/** Styled generative text component */
export declare const GenerativeAnswerVariant: ({ value, staticContent, question, zIndex, }: GenerativeAnswerVariantProps) => ReactElement;
