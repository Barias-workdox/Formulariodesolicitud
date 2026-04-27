import type { ReactElement } from 'react';

import { Controller } from 'react-hook-form';

import { DynamicTextInput } from '@components/dynamic-text-input';
import { FormControl } from '@components/form-control';

import type { DynamicTextInputProps } from '@components/dynamic-text-input';
import type { FormControlProps } from '@components/form-control';
import type { ControllerProps } from 'react-hook-form';

export type DynamicTextInputControlProps = Omit<FormControlProps, 'children'> &
  Omit<DynamicTextInputProps, 'value' | 'onChange' | 'onBlur'> &
  Omit<ControllerProps, 'render'> & {
    formControlProps?: FormControlProps;
  };

/**
 * Component that implements an DynamicTextInput wrapped on Controller provided by react hook form
 */
export const DynamicTextInputControl = ({
  'data-testid': dataTestId,
  name,
  control,
  label,
  disabled,
  caption,
  defaultValue = '',
  formControlProps,
  variant,
  fontWeight,
  endEnhancer,
  placeholder,
}: DynamicTextInputControlProps): ReactElement => (
  <Controller
    name={name}
    control={control}
    defaultValue={defaultValue}
    render={({ field, fieldState: { error } }): ReactElement => (
      <FormControl
        label={label}
        disabled={disabled}
        caption={caption}
        error={error?.message}
        htmlFor={name}
        noExternalMargins
        {...formControlProps}
      >
        <DynamicTextInput
          data-testid={dataTestId}
          disabled={disabled}
          variant={variant}
          fontWeight={fontWeight}
          endEnhancer={endEnhancer}
          placeholder={placeholder}
          {...field}
        />
      </FormControl>
    )}
  />
);
