import { ChatBotChatMessageType } from '../../../../../../../interfaces';
export type ErrorVariantProps = Pick<ChatBotChatMessageType, 'value'>;
/**
 * Component to render an error message from the chat bot.
 */
export declare const ErrorVariant: ({ value }: ErrorVariantProps) => JSX.Element;
