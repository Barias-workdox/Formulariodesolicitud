import { SelectProps } from '../../select/next';
import { Option } from 'baseui/select';
/**
 * Returns the label (flag emoji and country name) for the country option
 */
export declare const getSelectorCountryOptionLabel: ({ option: { id, label }, withLabel, }: {
    option: Option;
    withLabel?: boolean;
}) => string;
/**
 * Returns the value (flag emoji and country name) for the country and area option
 */
export declare const getCountryAndAreaValueLabel: ({ countryOption, areaOption, defaultLabel, }: {
    countryOption?: SelectProps["value"];
    areaOption?: SelectProps["value"];
    defaultLabel?: string;
}) => string;
