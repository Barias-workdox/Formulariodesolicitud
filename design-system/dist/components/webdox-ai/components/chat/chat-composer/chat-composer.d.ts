import { ReactElement } from 'react';
import { ChatBotMessageTypePropsV2 } from '../../../interfaces';
export type ChatComposerProps = Pick<ChatBotMessageTypePropsV2, 'zIndex' | 'onCreateMessage' | 'onSuggestionsClick' | 'onSuggestionClick' | 'data-testid' | 'disabled' | 'isSuggestionsLoading' | 'isGeneratingAnswer' | 'onStopAnswerGeneration' | 'onLegalWhisperAreaChange' | 'onLegalWhisperCountryChange' | 'isQuestionWritingAllowed' | 'customPrompts' | 'onExecuteCustomPromptAction'> & {
    placeholder?: string;
    showStopButton?: boolean;
};
/** Chat messages composer component */
export declare const ChatComposer: ({ "data-testid": dataTestId, customPrompts, disabled, isGeneratingAnswer, isQuestionWritingAllowed, isSuggestionsLoading, placeholder, showStopButton, zIndex, onCreateMessage, onExecuteCustomPromptAction, onStopAnswerGeneration, onSuggestionsClick, }: ChatComposerProps) => ReactElement;
