import { Dispatch } from 'react';
import { AssistantAIServiceType, AssistantLayoutTabType } from './chat-assistant.interface';
import { MessageListItemType, TempAnswerProps, TempAnswerSubmitCallbackType } from './chat-bot-component.interface';
import { ChatConversationAction } from './chat-bot-conversation-state.interface';
import { ChatBotAnswerTypeV2, ChatBotAnswerVariantV2, ChatBotConversationTypeV2, ChatBotQuestionTypeV2 } from './chat-bot.interfaces';
import { LegalWhisperAnswerType } from './legal-whisper.interfaces';
import { ChatBotFeedbackPayload, CustomPrompt, WebdoxAIOptionType } from './webdox-ai.interfaces';
import { FeedbackKind } from '../../feedback-button';
import { CustomPromptAction } from '../constants';
import { MessageType } from '../../messages';
import { SelectProps } from '../../select/next/select.interfaces';
import { CountryCodeType } from '../../utils/interfaces';
import { WithTestId } from '../../../interfaces/common.interfaces';
export type MessageLayoutKindType = 'default' | 'primary' | 'secondary' | 'tertiary';
export interface AnswerReference {
    id: number;
    sentence?: string;
    position?: number;
}
/** Used to be picked on components with all properties that propagates to child components */
export type ChatBotMessageTypePropsV2 = {
    'data-testid'?: string;
    /** Indicates the last answer the user interacted with. */
    activeAnswerId?: string;
    conversation?: ChatBotConversationTypeV2;
    chatComposerSuggestionList?: MessageListItemType[];
    /** An array of custom prompts to ask predefined questions. */
    customPrompts?: CustomPrompt[];
    suggestionListTitle?: string;
    disabled?: boolean;
    /**
     * @deprecated - used only for legacy support
     */
    zIndex?: number;
    /** @defaultValue `false` */
    showSuggestions?: boolean;
    /** @defaultValue `false` */
    showSuggestionList?: boolean;
    /** @defaultValue `false` */
    isSuggestionsLoading?: boolean;
    showSettings?: boolean;
    /** @defaultValue `false` */
    showFeedback?: boolean;
    /** @defaultValue `false` */
    showRetry?: boolean;
    /** @defaultValue `false` */
    showCopyToClipboard?: boolean;
    /**
     * Indicates if the feedback component is loading
     *
     * @defaultValue `false`
     */
    isFeedbackLoading?: boolean;
    /**
     * Indicates if the latest feedback was successful
     */
    isFeedbackSuccess?: boolean;
    /**
     * Indicates whether an answer is being generated
     */
    isGeneratingAnswer?: boolean;
    /**
     * Disclaimer message to add below the message
     */
    disclaimer?: string;
    /** legal whisper selector */
    showLegalWhisperSelector?: boolean;
    enableQuickActions?: boolean;
    legalWhisperCountrySelected?: SelectProps['value'];
    legalWhisperAreaSelected?: SelectProps['value'];
    legalWhisperCountryOptions?: CountryCodeType[];
    legalWhisperAreaOptions?: SelectProps['options'];
    /**
     * Indicates the layout kind to apply different styles to the question.
     *
     * @defaultValue `secondary`
     */
    questionLayoutKind?: MessageLayoutKindType;
    /**
     * Indicates when only the input is disabled. This is for scenarios where
     * the user cannot write a question and can only use the suggestions.
     */
    isQuestionWritingAllowed?: boolean;
    selectedAnswerReference?: AnswerReference;
    showUnratedAnswerAlert?: boolean;
    onLegalWhisperCountryChange?: SelectProps['onChange'];
    onLegalWhisperAreaChange?: SelectProps['onChange'];
    /**
     * Used to dispatch some actions on the current conversation, mainly for placeholder questions
     * and answers
     */
    conversationDispatch?: Dispatch<ChatConversationAction>;
    /**
     * Some temp answers have some interactions, they will return the kind
     * of answer and the payload to do some side effects on the parent
     */
    onTempAnswerSubmit?: TempAnswerSubmitCallbackType;
    /** Only required when showSuggestions is true */
    onSuggestionsClick?(): void;
    onSuggestionClick?(payload: MessageListItemType): void;
    onSettingsClick?(): void;
    onCreateMessage?(content: string, options?: {
        tab?: AssistantLayoutTabType;
        origin?: AssistantAIServiceType;
        area?: string;
        country?: string;
    }): Promise<void>;
    /** Triggers when the user clicks the copy to clipboard button on a chatbot's message */
    onCopyToClipboardButtonClick?(payload: ChatBotAnswerTypeV2, isError?: boolean): void;
    /** Triggers when the user clicks the copy to clipboard button on contract summary */
    onContractSummaryCopy?(payload?: string): void;
    onSubmitFeedback?(payload: ChatBotFeedbackPayload): void;
    /** Triggers when the positive or negative feedback button is clicked */
    onFeedbackButtonClick?(id: ChatBotAnswerTypeV2['id'], kind: FeedbackKind): void;
    /** To execute when `isGeneratingAnswer` is `true` and main button is clicked. */
    onStopAnswerGeneration?(): void;
    onRetryAnswerGeneration?(data: Pick<ChatBotAnswerTypeV2, 'id'>): void;
    /** To update the last answer the user interacted with. */
    updateActiveMessage?(id: string): void;
    updateAnswerReference?(reference: AnswerReference): void;
    onExecuteCustomPromptAction?(action: CustomPromptAction, payload: CustomPrompt): Promise<void>;
    /**
     * To indicate when the user opens the chat composer.
     */
    onOpenChatComposer?(): void;
    /**
     * Triggers when the user clicks the rate answer button.
     */
    onRateAnswer?(): void;
};
export type UserChatMessageType = MessageType & Pick<ChatBotAnswerTypeV2, 'id' | 'uuid'> & {
    kind: 'question';
    value?: ChatBotAnswerTypeV2['value'];
    layoutKind?: MessageLayoutKindType;
};
export type ChatBotChatMessageType = WithTestId & MessageType & Pick<ChatBotAnswerTypeV2, 'id' | 'uuid' | 'staticContent'> & Pick<LegalWhisperAnswerType, 'quotes'> & Pick<ChatBotMessageTypePropsV2, 'zIndex' | 'showFeedback' | 'showRetry' | 'showCopyToClipboard' | 'onCopyToClipboardButtonClick' | 'isFeedbackLoading' | 'onFeedbackButtonClick' | 'onRetryAnswerGeneration' | 'disclaimer' | 'activeAnswerId' | 'updateActiveMessage' | 'selectedAnswerReference' | 'updateAnswerReference'> & {
    kind: 'answer';
    suiteAIOption?: WebdoxAIOptionType;
    variant?: Exclude<ChatBotAnswerVariantV2, 'placeholder'>;
    feedback?: ChatBotAnswerTypeV2['feedback'];
    value?: ChatBotAnswerTypeV2['value'];
    createdAt?: ChatBotAnswerTypeV2['createdAt'];
    tempProps?: TempAnswerProps;
    question?: ChatBotQuestionTypeV2;
};
export type ChatMessageTypeV2 = ChatBotChatMessageType | UserChatMessageType;
export type ChatMessageEncodedDataType = {
    page?: number;
};
