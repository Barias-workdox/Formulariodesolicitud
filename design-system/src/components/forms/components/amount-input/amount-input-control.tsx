import type { ReactElement, RefObject } from 'react';

import { Controller } from 'react-hook-form';

import { FormControl } from '@components/form-control';
import { commaSeparatedAmount } from '@components/forms/validations';
import { Input } from '@components/input/next';

import type { InputControlProps } from '../input';
import type { CountryCodeType } from '@components/utils/interfaces';

const DATA_TEST_ID = 'amount-input-control';

export interface AmountInputControlProps extends InputControlProps {
  /** Used to map country specific standardized texts */
  countryCode?: CountryCodeType;
}

/**
 * Component that implement a form control input wrapped on controller provided by react hook form
 */
export const AmountInputControl = ({
  'data-testid': dataTestId,
  name,
  label,
  disabled,
  caption,
  defaultValue = '',
  control,
  formControlOverrides,
  placeholder,
  infoTooltip,
  noExternalMargins,
  required,
  ...rest
}: AmountInputControlProps): ReactElement => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { ref, onChange, ...field }, fieldState: { error } }): ReactElement => {
        /**
         * Normalize amount on blur (e.g., ends with comma =\> add 0).
         */
        const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
          const { target } = e;
          const { value } = target;
          if (typeof value === 'string' && value.endsWith(',')) {
            const fixedValue = value + '0';
            if (fixedValue !== value) {
              onChange(fixedValue);
            }
          }

          field.onBlur();
        };

        /**
         * Apply transformations and formatting to the amount (if applicable) while avoiding redundant updates.
         */
        const handleChange = (
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        ): void => {
          onChange(commaSeparatedAmount(e.target?.value));
        };

        return (
          <FormControl
            label={label}
            infoTooltip={infoTooltip}
            disabled={disabled}
            caption={caption}
            error={error?.message}
            htmlFor={name}
            labelWithHorizontalPadding
            overrides={formControlOverrides}
            noExternalMargins={noExternalMargins}
            required={required}
          >
            <Input
              {...field}
              inputRef={ref as unknown as RefObject<HTMLInputElement>}
              data-testid={`${DATA_TEST_ID}-${dataTestId}`}
              placeholder={placeholder}
              onChange={handleChange}
              onBlur={handleBlur}
              {...rest}
            />
          </FormControl>
        );
      }}
    />
  );
};
