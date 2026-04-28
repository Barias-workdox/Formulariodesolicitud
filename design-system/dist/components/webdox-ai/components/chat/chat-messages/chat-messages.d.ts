import { ChatBotMessageTypePropsV2, ChatMessageTypeV2 } from '../../../interfaces/chat-message.interface';
import { WebdoxAIOptionType } from '../../../interfaces/webdox-ai.interfaces';
export interface ChatMessagesProps extends Pick<ChatBotMessageTypePropsV2, 'zIndex' | 'onCreateMessage' | 'onSettingsClick' | 'onSuggestionsClick' | 'showSettings' | 'showSuggestions' | 'showSuggestionList' | 'data-testid' | 'disabled' | 'isSuggestionsLoading' | 'isGeneratingAnswer' | 'isQuestionWritingAllowed' | 'onStopAnswerGeneration' | 'onSuggestionClick' | 'suggestionListTitle' | 'chatComposerSuggestionList' | 'showLegalWhisperSelector' | 'onLegalWhisperAreaChange' | 'onLegalWhisperCountryChange' | 'legalWhisperAreaOptions' | 'legalWhisperCountryOptions' | 'legalWhisperAreaSelected' | 'legalWhisperCountrySelected' | 'customPrompts' | 'onExecuteCustomPromptAction' | 'onOpenChatComposer' | 'showUnratedAnswerAlert' | 'onRateAnswer'> {
    messages: ChatMessageTypeV2[];
    composerPlaceholder?: string;
    showStopButton?: boolean;
    webdoxAIOption?: WebdoxAIOptionType;
}
declare const MemoizedChatMessages: import('react').MemoExoticComponent<({ "data-testid": dataTestId, zIndex, customPrompts, disabled, showSettings, showSuggestions, showLegalWhisperSelector, onLegalWhisperAreaChange, onLegalWhisperCountryChange, legalWhisperAreaOptions, legalWhisperCountryOptions, legalWhisperAreaSelected, legalWhisperCountrySelected, showSuggestionList, chatComposerSuggestionList, suggestionListTitle, isQuestionWritingAllowed, isSuggestionsLoading, messages, isGeneratingAnswer, composerPlaceholder, showStopButton, webdoxAIOption, showUnratedAnswerAlert, onRateAnswer, onCreateMessage, onSuggestionsClick, onSuggestionClick, onSettingsClick, onStopAnswerGeneration, onExecuteCustomPromptAction, onOpenChatComposer, }: ChatMessagesProps) => JSX.Element>;
export { MemoizedChatMessages as ChatMessages };
