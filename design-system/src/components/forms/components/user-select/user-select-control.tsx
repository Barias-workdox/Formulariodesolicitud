import type { ReactElement } from 'react';

import { Controller } from 'react-hook-form';

import { UserSelect } from '@components/user-select';

import { FormControl } from '../../../form-control';

import type { FormControlProps } from '../../../form-control';
import type { UserSelectProps } from '@components/user-select';
import type { ControllerProps } from 'react-hook-form';

export type UserSelectControlProps = Pick<
  FormControlProps,
  'label' | 'caption' | 'disabled' | 'noExternalMargins' | 'infoTooltip'
> &
  Omit<UserSelectProps, 'inputRef' | 'onChange'> &
  Omit<ControllerProps, 'render'> & {
    formControlOverrides?: FormControlProps['overrides'];
  };

/**
 * Component that implement a form control user select wrapped on controller provided by react hook form
 */
export const UserSelectControl = ({
  name,
  label,
  disabled,
  options,
  caption,
  control,
  formControlOverrides,
  noExternalMargins,
  infoTooltip,
  required,
  ...rest
}: UserSelectControlProps): ReactElement => (
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
        required={required}
      >
        <UserSelect
          {...field}
          inputRef={ref}
          options={options}
          {...rest}
        />
      </FormControl>
    )}
  />
);
