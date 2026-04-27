import type { ReactElement } from 'react';

import { Controller } from 'react-hook-form';

import { FormControl } from '@components/form-control';
import { Select } from '@components/select/next';

import type { FormControlProps } from '@components/form-control';
import type { SelectProps, SelectValue } from '@components/select/next';
import type { ControllerProps } from 'react-hook-form';

export type SelectControlProps = Pick<
  FormControlProps,
  'label' | 'caption' | 'disabled' | 'noExternalMargins' | 'infoTooltip'
> &
  Omit<SelectProps, 'inputRef' | 'onChange'> &
  Omit<ControllerProps, 'render'> & {
    formControlOverrides?: FormControlProps['overrides'];
    /** Used only for side effects. For form handling the onChange event will trigger automatically */
    onChange?: SelectProps['onChange'];
  };

/**
 * Component that implement a form control select wrapped on controller provided by react hook form
 */
export const SelectControl = ({
  'data-testid': dataTestId = 'select',
  name,
  label,
  disabled,
  multi = false,
  options,
  searchable = true,
  caption,
  control,
  formControlOverrides,
  onChange: parentOnChange,
  noExternalMargins,
  infoTooltip,
  required,
  ...rest
}: SelectControlProps): ReactElement => (
  <Controller
    name={name}
    control={control}
    render={({ field: { ref, onChange, ...field }, fieldState: { error } }): ReactElement => {
      /** Triggers the form onChange first and then the parentOnChange for side effects */
      const handleChange = (value: SelectValue): void => {
        onChange(value);

        parentOnChange?.(value);
      };

      return (
        <FormControl
          label={label}
          disabled={disabled}
          caption={caption}
          error={error?.message}
          htmlFor={name}
          overrides={formControlOverrides}
          noExternalMargins={noExternalMargins}
          infoTooltip={infoTooltip}
          required={required}
        >
          <Select
            {...field}
            data-testid={dataTestId}
            inputRef={ref}
            options={options}
            multi={multi}
            searchable={searchable}
            onChange={handleChange}
            {...rest}
          />
        </FormControl>
      );
    }}
  />
);
