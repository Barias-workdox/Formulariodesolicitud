import { ReactElement } from 'react';
import { SelectProps } from '../../../../../../select/next/select.interfaces';
import { CountryCodeType } from '../../../../../../utils/interfaces';
import { WithTestId, WithZIndex } from '../../../../../../../interfaces/common.interfaces';
export interface CountryAndAreaSelectorWithPopoverProps extends WithZIndex, WithTestId {
    countryOptions?: CountryCodeType[];
    areaOptions?: SelectProps['options'];
    onCountryChange?: SelectProps['onChange'];
    selectedCountry?: SelectProps['value'];
    onAreaChange?: SelectProps['onChange'];
    selectedArea?: SelectProps['value'];
}
/**
 * Component that displays a country and area selector with a popover.
 */
export declare const CountryAndAreaSelectorWithPopover: ({ dataTestId, zIndex, onCountryChange, onAreaChange, selectedArea, selectedCountry, countryOptions, areaOptions, }: CountryAndAreaSelectorWithPopoverProps) => ReactElement;
