import { SelectProps } from '../../../select/next';
import { CountryCodeType } from '../../../utils/interfaces/country-code.interface';
import { WithTestId, WithZIndex } from '../../../../interfaces/common.interfaces';
export interface LegalWhisperSettingsProps extends WithZIndex, WithTestId {
    areaOptions: SelectProps['options'];
    countryOptions: CountryCodeType[];
    selectedArea?: SelectProps['value'];
    selectedCountry?: SelectProps['value'];
    onAreaChange: SelectProps['onChange'];
    onCountryChange: SelectProps['onChange'];
}
/**
 * LegalWhisperSettings is a component that displays the settings for the Legal Whisper feature.
 */
export declare const LegalWhisperSettings: ({ areaOptions, countryOptions, dataTestId, onAreaChange, onCountryChange, selectedArea, selectedCountry, zIndex, }: LegalWhisperSettingsProps) => JSX.Element;
