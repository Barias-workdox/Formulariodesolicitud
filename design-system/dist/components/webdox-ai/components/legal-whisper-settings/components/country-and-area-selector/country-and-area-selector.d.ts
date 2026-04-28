import { SelectProps } from '../../../../../select/next';
import { CountryCodeType } from '../../../../../utils/interfaces/country-code.interface';
import { WithTestId, WithZIndex } from '../../../../../../interfaces/common.interfaces';
export interface CountryAndAreaSelectorProps extends WithZIndex, WithTestId {
    areaOptions: SelectProps['options'];
    countryOptions: CountryCodeType[];
    selectedArea?: SelectProps['value'];
    selectedCountry?: SelectProps['value'];
    onAreaChange: SelectProps['onChange'];
    onCountryChange: SelectProps['onChange'];
}
/**
 * CountryAndAreaSelector is a component that displays the country and area selectors.
 */
export declare const CountryAndAreaSelector: ({ areaOptions, countryOptions, dataTestId, onAreaChange, onCountryChange, selectedArea, selectedCountry, zIndex, }: CountryAndAreaSelectorProps) => JSX.Element;
