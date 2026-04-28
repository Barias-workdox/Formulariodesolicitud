import { ReactElement } from 'react';
import { InputControlProps } from '../input';
import { CountryCodeType } from '../../../utils/interfaces';
export interface AmountInputControlProps extends InputControlProps {
    /** Used to map country specific standardized texts */
    countryCode?: CountryCodeType;
}
/**
 * Component that implement a form control input wrapped on controller provided by react hook form
 */
export declare const AmountInputControl: ({ "data-testid": dataTestId, name, label, disabled, caption, defaultValue, control, formControlOverrides, placeholder, infoTooltip, noExternalMargins, required, ...rest }: AmountInputControlProps) => ReactElement;
