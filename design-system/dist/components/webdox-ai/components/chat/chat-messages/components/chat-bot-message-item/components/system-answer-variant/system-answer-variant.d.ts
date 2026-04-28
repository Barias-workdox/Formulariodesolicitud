import { ReactElement } from 'react';
import { ChatBotChatMessageType } from '../../../../../../../interfaces';
export type SystemAnswerVariantProps = Pick<ChatBotChatMessageType, 'value' | 'tempProps'>;
/** The Styled main answer got directly from the Chat Bot */
export declare const SystemAnswerVariant: ({ value, tempProps, }: SystemAnswerVariantProps) => ReactElement;
