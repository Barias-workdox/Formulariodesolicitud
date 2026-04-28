import { ChatMessageTypeV2 } from '../../../interfaces';
import { LegalWhisperChatComposerProps } from '../chat-composer';
import { WithTestId, WithZIndex } from '../../../../../interfaces/common.interfaces';
export type LegalWhisperChatMessagesProps = LegalWhisperChatComposerProps & WithTestId<WithZIndex<{
    messages: ChatMessageTypeV2[];
}>>;
declare const MemoizedChatMessages: import('react').MemoExoticComponent<({ areaOptions, selectedArea, countryOptions, selectedCountry, dataTestId, disabled, isGeneratingAnswer, messages, showSuggestionList, showSettingsSelector, showUnratedAnswerAlert, suggestionList, zIndex, onAreaChange, onCountryChange, onCreateMessage, onRateAnswer, onSuggestionClick, }: LegalWhisperChatMessagesProps) => JSX.Element>;
export { MemoizedChatMessages as LegalWhisperChatMessages };
