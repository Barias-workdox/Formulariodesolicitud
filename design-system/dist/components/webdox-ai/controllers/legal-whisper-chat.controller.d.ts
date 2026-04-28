import { ReactElement } from 'react';
import { LegalWhisperConversation } from '../interfaces/legal-whisper.interfaces';
import { ChatBotCopyToClipboardPayload } from '../interfaces/webdox-ai.interfaces';
import { LegalWhisperChatMessagesProps } from '../components/chat';
import { WithTestId, WithZIndex } from '../../../interfaces/common.interfaces';
export type LegalWhisperChatControllerProps = WithTestId<WithZIndex<Pick<LegalWhisperChatMessagesProps, 'suggestionList' | 'disabled' | 'onCreateMessage' | 'onSuggestionClick' | 'isGeneratingAnswer' | 'areaOptions' | 'selectedArea' | 'countryOptions' | 'selectedCountry' | 'onAreaChange' | 'onCountryChange' | 'onRateAnswer' | 'showUnratedAnswerAlert' | 'showSettingsSelector' | 'showSuggestionList'> & {
    conversation?: LegalWhisperConversation;
    onCopyToClipboardButtonClick(payload: ChatBotCopyToClipboardPayload): void;
}>>;
/**
 * Legal Whisper Chat Controller
 * This controller is used to manage the legal whisper chat.
 * It includes the chat messages, the chat composer, and the chat messages list.
 */
export declare const LegalWhisperChatController: ({ areaOptions, selectedArea, conversation, countryOptions, selectedCountry, dataTestId, disabled, isGeneratingAnswer, showSettingsSelector, showSuggestionList, showUnratedAnswerAlert, suggestionList, zIndex, onAreaChange, onCopyToClipboardButtonClick, onCountryChange, onCreateMessage, onRateAnswer, onSuggestionClick, }: LegalWhisperChatControllerProps) => ReactElement;
