import type { ReactElement, RefObject } from 'react';

import { Controller } from 'react-hook-form';

import { FormControl } from '@components/form-control';
import { formatRawNic, useNicI18nTexts } from '@components/forms/validations';
import { Input } from '@components/input/next';

import type { InputControlProps } from '../input';
import type { CountryCodeType } from '@components/utils/interfaces';

export interface NicInputControlProps extends InputControlProps {
  /** Used to map country specific standardized texts */
  countryCode?: CountryCodeType;
}

/**
 * Component that implement a form control input wrapped on controller provided by react hook form
 */
export const NicInputControl = ({
  'data-testid': dataTestId,
  name,
  label,
  disabled,
  caption,
  defaultValue = '',
  control,
  formControlOverrides,
  countryCode,
  placeholder,
  infoTooltip,
  noExternalMargins,
  ...rest
}: NicInputControlProps): ReactElement => {
  const {
    label: defaultLabel,
    placeholder: defaultPlaceholder,
    tooltip: defaultTooltip,
  } = useNicI18nTexts({ countryCode });

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { ref, onChange, ...field }, fieldState: { error } }): ReactElement => {
        /**
         * Handle NIC input change, returning an empty string when nullish, otherwise the specific
         * NIC format for the selected country
         */
        const handleChange = (
          event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        ): void => {
          return onChange(
            event.target.value ? formatRawNic({ rawNic: event.target.value, countryCode }) : '',
          );
        };

        return (
          <FormControl
            label={label ?? defaultLabel}
            infoTooltip={infoTooltip ?? defaultTooltip}
            disabled={disabled}
            caption={caption}
            error={error?.message}
            htmlFor={name}
            labelWithHorizontalPadding
            overrides={formControlOverrides}
            noExternalMargins={noExternalMargins}
          >
            <Input
              {...field}
              inputRef={ref as unknown as RefObject<HTMLInputElement>}
              data-testid={dataTestId}
              placeholder={placeholder ?? defaultPlaceholder}
              value={field.value ? formatRawNic({ rawNic: field.value, countryCode }) : ''}
              onChange={handleChange}
              {...rest}
            />
          </FormControl>
        );
      }}
    />
  );
};
