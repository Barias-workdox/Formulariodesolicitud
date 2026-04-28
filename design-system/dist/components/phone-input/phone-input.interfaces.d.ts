import { DesignSystemTheme } from '../../themes/theme.interfaces';
import { PhoneInputProps as BasePhoneInputProps } from 'baseui/phone-input';
export interface InputStyleParams {
    $isFocused: boolean;
    $error: boolean;
    $positive: boolean;
    $theme: DesignSystemTheme;
}
export interface PhoneInputBaseOverridesProps {
    dataTestId?: string;
    isBorderless?: boolean;
}
/**
 * Some properties are mandatory in the internal component of BaseUI
 * which are not required in this implementation, for this reason the interface is created as follows.
 */
export interface PhoneInputProps {
    'data-testid'?: string;
    maxDropdownHeight?: BasePhoneInputProps['maxDropdownHeight'];
    maxDropdownWidth?: BasePhoneInputProps['maxDropdownWidth'];
    name?: BasePhoneInputProps['name'];
    disabled?: BasePhoneInputProps['disabled'];
    positive?: BasePhoneInputProps['positive'];
    error?: BasePhoneInputProps['error'];
    required?: BasePhoneInputProps['required'];
    overrides?: BasePhoneInputProps['overrides'];
    size?: BasePhoneInputProps['size'];
    country?: BasePhoneInputProps['country'];
    text: BasePhoneInputProps['text'];
    onCountryChange: BasePhoneInputProps['onCountryChange'];
    onTextChange: BasePhoneInputProps['onTextChange'];
}
