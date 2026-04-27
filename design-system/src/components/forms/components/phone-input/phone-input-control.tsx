import { Controller } from 'react-hook-form';

import { FormControl } from '@components/form-control';
import { findFirstErrorMessage } from '@components/forms/validations/utils/rhf-controller.utils';
import { PhoneInput } from '@components/phone-input/next';

import type { FormControlProps } from '@components/form-control';
import type { PhoneInputProps } from '@components/phone-input/next';
import type { Country } from 'baseui/phone-input';
import type { ControllerProps } from 'react-hook-form';

export type PhoneInputValue = Pick<PhoneInputProps, 'country' | 'text'>;

export type PhoneInputControlProps = Omit<FormControlProps, 'children'> &
  Omit<ControllerProps, 'render'> &
  Omit<PhoneInputProps, 'text' | 'onTextChange' | 'country' | 'onCountryChange'> & {
    formControlOverrides?: FormControlProps['overrides'];
  };

/**
 * Component that implement a form control phone input wrapped on controller provided by react hook form
 * Handles both country and text values in a single form field
 */
export const PhoneInputControl = ({
  'data-testid': dataTestId,
  name,
  label,
  disabled,
  caption,
  control,
  formControlOverrides,
  noExternalMargins = false,
  infoTooltip,
  required,
  ...rest
}: PhoneInputControlProps): JSX.Element => (
  <Controller
    name={name}
    control={control}
    render={({ field: { value, onChange, ref, ...field }, fieldState: { error } }): JSX.Element => {
      // Get the first error message from nested error object
      const firstErrorMessage = findFirstErrorMessage(error);

      // Ensure value has the correct structure
      const phoneValue: PhoneInputValue =
        typeof value === 'object' && value !== null && 'text' in value
          ? (value as unknown as PhoneInputValue)
          : { text: '', country: undefined };

      /**
       * Handle text input changes
       */
      const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        onChange({
          ...phoneValue,
          text: e.currentTarget.value,
        });
      };

      /**
       * Handle country selection changes
       */
      const handleCountryChange = (option: Country[]): void => {
        const [country] = option;

        onChange({
          ...phoneValue,
          country,
        });
      };

      return (
        <FormControl
          label={label}
          disabled={disabled}
          caption={caption}
          error={firstErrorMessage}
          labelWithHorizontalPadding
          overrides={formControlOverrides}
          noExternalMargins={noExternalMargins}
          infoTooltip={infoTooltip}
          required={required}
        >
          <PhoneInput
            {...field}
            {...rest}
            data-testid={dataTestId}
            name={name}
            inputRef={ref}
            text={phoneValue.text}
            country={phoneValue.country}
            onTextChange={handleTextChange}
            onCountryChange={handleCountryChange}
          />
        </FormControl>
      );
    }}
  />
);
