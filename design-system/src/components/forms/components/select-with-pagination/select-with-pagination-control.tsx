import type { ReactElement } from 'react';

import { Controller } from 'react-hook-form';

import { FormControl, type FormControlProps } from '@components/form-control';
import {
  SelectWithPagination,
  type SelectWithPaginationProps,
} from '@components/select-with-pagination/next';

import type { ControllerProps } from 'react-hook-form';

export type SelectWithPaginationControlProps = Pick<
  FormControlProps,
  'label' | 'caption' | 'disabled' | 'noExternalMargins' | 'infoTooltip'
> &
  Omit<SelectWithPaginationProps, 'inputRef' | 'onChange'> &
  Omit<ControllerProps, 'render'> & {
    formControlOverrides?: FormControlProps['overrides'];
  };

/**
 * Component that implement a form control select wrapped on controller provided by react hook form
 */
export const SelectWithPaginationControl = ({
  name,
  label,
  disabled,
  multi = false,
  options,
  searchable = true,
  caption,
  control,
  formControlOverrides,
  noExternalMargins,
  infoTooltip,
  zIndex,
  required,
  ...rest
}: SelectWithPaginationControlProps): ReactElement => (
  <Controller
    name={name}
    control={control}
    render={({ field: { ref, ...field }, fieldState: { error } }): ReactElement => (
      <FormControl
        label={label}
        disabled={disabled}
        caption={caption}
        error={error?.message}
        htmlFor={name}
        overrides={formControlOverrides}
        noExternalMargins={noExternalMargins}
        infoTooltip={infoTooltip}
        zIndex={zIndex}
        required={required}
      >
        <SelectWithPagination
          {...field}
          inputRef={ref}
          options={options}
          multi={multi}
          searchable={searchable}
          zIndex={zIndex}
          {...rest}
        />
      </FormControl>
    )}
  />
);
