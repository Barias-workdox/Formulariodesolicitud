import { RefObject } from 'react';
import { Value } from 'baseui/select';
/**
 * A country selection component that extends the base Select component with country-specific functionality.
 *
 * - Displays a flag icon when no country is selected
 * - Automatically focuses the associated phone input after country selection
 */
export declare const CountrySelect: import('react').ForwardRefExoticComponent<{
    zIndex?: number;
} & import('../../../hocs/with-is-hovered').WithIsHoveredProps & Omit<import('baseui/select').SelectProps, "size" | "value" | "onChange" | "options" | "onCreate"> & {
    'data-testid'?: string;
    className?: string;
    kind?: import('../../../select/next').SelectKind;
    leading?: import('../../../input/next').EnhancerType;
    options: import('baseui/select').Options;
    size?: import('../../../input/next').Size;
    value?: Value;
    width?: import('styletron-standard').StyleObject["width"];
    name?: string;
    onChange(value: Value): void;
    onCreate?(value: Value): void;
} & {
    'data-testid'?: string;
    dataTestId?: string;
} & {
    inputRef: RefObject<HTMLInputElement>;
    countryCodeAriaLabel?: string;
    onCountryChange(params: Value): void;
} & import('react').RefAttributes<unknown>>;
