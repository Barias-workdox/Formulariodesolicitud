import { ReactElement } from 'react';
import { InputControlProps } from '../input';
import { CountryCodeType } from '../../../utils/interfaces';
export interface NicInputControlProps extends InputControlProps {
    /** Used to map country specific standardized texts */
    countryCode?: CountryCodeType;
}
/**
 * Component that implement a form control input wrapped on controller provided by react hook form
 */
export declare const NicInputControl: ({ "data-testid": dataTestId, name, label, disabled, caption, defaultValue, control, formControlOverrides, countryCode, placeholder, infoTooltip, noExternalMargins, ...rest }: NicInputControlProps) => ReactElement;
