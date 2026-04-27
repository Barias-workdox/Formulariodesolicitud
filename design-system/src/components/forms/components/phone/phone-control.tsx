import { useTranslation } from '@components/utils';

import { InputControl } from '../input';

import type { InputControlProps } from '../input';
import type { CountryCodeType } from '@components/utils/interfaces';

export interface PhoneControlProps extends InputControlProps {
  /** Used to map country specific standardized texts */
  countryCode?: CountryCodeType;
}

type PhoneTextsType = { label: string; placeholder: string };

const allPhoneTextsByCountry: Partial<Record<CountryCodeType, PhoneTextsType>> = {
  BRA: {
    label: 'forms.BRA.phone.label',
    placeholder: 'forms.BRA.phone.placeholder',
  },
  ECU: {
    label: 'forms.ECU.phone.label',
    placeholder: 'forms.ECU.phone.placeholder',
  },
};

const defaultPhoneNumberTexts: PhoneTextsType = {
  label: 'forms.default.phone.label',
  placeholder: 'forms.default.phone.placeholder',
};

/**
 * Component that implement a form control phone number wrapped on controller provided
 * by react hook form. It allows the consumer to provide a country code and get specific
 * standardized texts, but they can also be overrode by supplying them directly
 */
export const PhoneControl = ({ countryCode, ...rest }: PhoneControlProps): JSX.Element => {
  const { t } = useTranslation();

  const { label, placeholder } =
    (countryCode && allPhoneTextsByCountry[countryCode]) ?? defaultPhoneNumberTexts;

  return (
    <InputControl
      label={t(label)}
      placeholder={t(placeholder)}
      {...rest}
    />
  );
};
