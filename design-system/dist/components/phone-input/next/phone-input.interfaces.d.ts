import { ForwardedRef, Ref, RefObject } from 'react';
import { InputKind, Size } from '../../input/next';
import { SelectProps } from '../../select/next';
import { WithTestId } from '../../../interfaces/common.interfaces';
import { DesignSystemTheme } from '../../../themes/theme.interfaces';
import { PhoneInputProps as BasePhoneInputProps, Country } from 'baseui/phone-input';
export interface InputStyleParams {
    $isFocused: boolean;
    $error: boolean;
    $positive: boolean;
    $theme: DesignSystemTheme;
}
export interface PhoneInputBaseOverridesProps {
    dataTestId?: string;
    ref: ForwardedRef<HTMLElement>;
    name?: string;
    kind: InputKind;
    size: Size;
    clearable?: boolean;
    inputRef: RefObject<HTMLInputElement>;
    countryCodeAriaLabel?: string;
    onCountryChange: SelectProps['onChange'];
}
/**
 * Some properties are mandatory in the internal component of BaseUI
 * which are not required in this implementation, for this reason the interface is created as follows.
 */
export interface PhoneInputProps extends WithTestId<Omit<Partial<BasePhoneInputProps>, 'size' | 'onCountryChange' | 'country'>> {
    kind?: InputKind;
    size?: Size;
    name?: string;
    /** Used to get a ref to the tel input element */
    inputRef?: Ref<HTMLInputElement>;
    /**
     * Country selection.
     *
     * - If omitted / `undefined`, the component will render an "empty" country state (no flag selected).
     */
    country?: Country;
    countryCodeAriaLabel?: string;
    onCountryChange: SelectProps['onChange'];
    onTextChange: BasePhoneInputProps['onTextChange'];
}
