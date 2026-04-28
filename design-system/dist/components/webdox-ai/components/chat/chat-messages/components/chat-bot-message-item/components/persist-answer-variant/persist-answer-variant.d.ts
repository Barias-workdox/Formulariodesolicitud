import { ReactElement } from 'react';
import { ChatBotChatMessageType } from '../../../../../../../interfaces';
import { WithTestId } from '../../../../../../../../../interfaces/common.interfaces';
export type PersistAnswerVariantProps = WithTestId<Pick<ChatBotChatMessageType, 'activeAnswerId' | 'createdAt' | 'feedback' | 'id' | 'isFeedbackLoading' | 'onCopyToClipboardButtonClick' | 'onFeedbackButtonClick' | 'onRetryAnswerGeneration' | 'question' | 'quotes' | 'selectedAnswerReference' | 'showCopyToClipboard' | 'showFeedback' | 'showRetry' | 'suiteAIOption' | 'tempProps' | 'updateActiveMessage' | 'updateAnswerReference' | 'value' | 'zIndex'>>;
/** The Styled main answer got directly from the Chat Bot */
export declare const PersistAnswerVariant: ({ dataTestId, createdAt, activeAnswerId, feedback, id, isFeedbackLoading, question, quotes, selectedAnswerReference, showCopyToClipboard, showFeedback, showRetry, suiteAIOption, tempProps, value, zIndex, onCopyToClipboardButtonClick, onFeedbackButtonClick, onRetryAnswerGeneration, updateActiveMessage, updateAnswerReference, }: PersistAnswerVariantProps) => ReactElement;
