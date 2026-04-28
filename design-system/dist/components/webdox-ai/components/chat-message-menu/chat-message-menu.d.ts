import { ChatBotCopyToClipboardPayload } from '../../../interfaces/webdox-ai.interfaces';
import { ButtonProps } from '../../../button';
import { FeedbackKind } from '../feedback-button';
import { ChatBotChatMessageType } from '../../interfaces';
import { WithTestId, WithZIndex } from '../../../../interfaces/common.interfaces';
export interface ChatMessageMenuProps extends WithZIndex, WithTestId {
    id: ChatBotChatMessageType['id'];
    content: ChatBotChatMessageType['value'];
    /** If a feedback is submitted, the selected option will be rendered without more interactions */
    selectedFeedback?: FeedbackKind;
    /** If some feedback query is loading, the feedbacks should be disabled */
    isLoading?: boolean;
    /** If true will render the feedback icon buttons */
    renderFeedback?: boolean;
    /** If true will render the retry button */
    renderRetry?: boolean;
    /** If true will render the copy to clipboard button */
    renderCopyToClipboard?: boolean;
    buttonKind?: ButtonProps['kind'];
    /** Triggers when the user clicks the copy to clipboard button on a chatbot's message */
    onCopyToClipboardButtonClick(payload: ChatBotCopyToClipboardPayload, isError?: boolean): void;
    /** Triggers when the positive or negative feedback button is clicked */
    onFeedbackButtonClick(id: ChatBotChatMessageType['id'], kind: FeedbackKind): void;
    /** Triggers when the retry button is clicked */
    onRetryAnswerGeneration(data: Pick<ChatBotChatMessageType, 'id'>): void;
}
/**
 * The Webdox AI chat menu for each message. Will only apply for
 * bot messages
 *
 */
export declare const ChatMessageMenu: ({ dataTestId, id, content, zIndex, isLoading, selectedFeedback, renderFeedback, renderCopyToClipboard, renderRetry, onFeedbackButtonClick, onCopyToClipboardButtonClick, onRetryAnswerGeneration, }: ChatMessageMenuProps) => JSX.Element;
