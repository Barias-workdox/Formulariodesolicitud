import { ChatBotNegativeFeedbackModalProps } from './chat-bot-negative-feedback-modal';
import { NegativeFeedbackFormValues } from '../../interfaces';
export interface ChatBotNegativeFeedbackModalContainerProps extends Pick<ChatBotNegativeFeedbackModalProps, 'data-testid' | 'isOpen' | 'isLoading' | 'onClose' | 'zIndex'> {
    'data-testid': string;
    onSubmit(values: NegativeFeedbackFormValues): void;
}
/**
 * Container of the chat bot Negative feedback modal. Will have the form layer
 * wrapper only. All requests will be handled in the parent container
 */
export declare const ChatBotNegativeFeedbackModalContainer: ({ "data-testid": dataTestId, isOpen, isLoading, zIndex, onClose, onSubmit, }: ChatBotNegativeFeedbackModalContainerProps) => JSX.Element;
