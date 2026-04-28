import { SelectProps } from '../../../../select/next';
import { CountryCodeType } from '../../../../utils/interfaces';
import { SuggestionItemType } from '../../../interfaces/legal-whisper.interfaces';
import { WithTestId, WithZIndex } from '../../../../../interfaces/common.interfaces';
export type LegalWhisperChatComposerProps = WithTestId<WithZIndex<{
    areaOptions: SelectProps['options'];
    selectedArea?: SelectProps['value'];
    countryOptions: CountryCodeType[];
    selectedCountry?: SelectProps['value'];
    disabled: boolean;
    isGeneratingAnswer?: boolean;
    showSuggestionList?: boolean;
    showUnratedAnswerAlert: boolean;
    /**
     * This is used to show the area and country selector and conversation selector.
     */
    showSettingsSelector: boolean;
    suggestionList: SuggestionItemType[];
    onAreaChange: SelectProps['onChange'];
    onCountryChange: SelectProps['onChange'];
    onCreateMessage(content: string): Promise<void>;
    onRateAnswer(): void;
    onSuggestionClick(suggestion: SuggestionItemType): void;
}>>;
/**
 * Legal Whisper Chat Composer component
 *
 * This component is used to compose a message for the legal whisper chat.
 * It includes a selector for the area and country, a suggestion list, and a unrated answer alert.
 */
export declare const LegalWhisperChatComposer: ({ areaOptions, selectedArea, countryOptions, selectedCountry, dataTestId, disabled, isGeneratingAnswer, showSuggestionList, showUnratedAnswerAlert, showSettingsSelector, suggestionList, zIndex, onAreaChange, onCountryChange, onCreateMessage, onRateAnswer, onSuggestionClick, }: LegalWhisperChatComposerProps) => JSX.Element;
