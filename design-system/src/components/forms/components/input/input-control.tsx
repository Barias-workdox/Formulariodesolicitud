import type { ReactElement } from 'react';
import { useRef } from 'react';

import { Controller } from 'react-hook-form';

import { FormControl } from '@components/form-control';
import { Input } from '@components/input/next';

import type { FormControlProps } from '@components/form-control';
import type { InputProps } from '@components/input/next';
import type { ControllerProps } from 'react-hook-form';

export type InputControlProps = Omit<FormControlProps, 'children'> &
  Omit<InputProps, 'inputRef'> &
  Omit<ControllerProps, 'render'> & {
    formControlOverrides?: FormControlProps['overrides'];
  };

/**
 * Component that implement a form control input wrapped on controller provided by react hook form
 */
export const InputControl = ({
  'data-testid': dataTestId,
  name,
  label,
  disabled,
  caption,
  defaultValue = '',
  control,
  formControlOverrides,
  noExternalMargins,
  infoTooltip,
  required,
  ...rest
}: InputControlProps): ReactElement => {
  const inputRef = useRef<HTMLInputElement>();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { ref, ...field }, fieldState: { error } }): ReactElement => {
        ref(inputRef.current);

        return (
          <FormControl
            label={label}
            disabled={disabled}
            caption={caption}
            error={error?.message}
            htmlFor={name}
            labelWithHorizontalPadding
            overrides={formControlOverrides}
            noExternalMargins={noExternalMargins}
            infoTooltip={infoTooltip}
            required={required}
          >
            <Input
              {...field}
              inputRef={inputRef}
              data-testid={dataTestId}
              required={required}
              {...rest}
            />
          </FormControl>
        );
      }}
    />
  );
};
