import type { ReactElement } from 'react';

import { Controller } from 'react-hook-form';

import { UserMultiselect } from '@components/user-multiselect';

import { FormControl } from '../../../form-control';

import type { FormControlProps } from '../../../form-control';
import type { UserMultiselectProps } from '@components/user-multiselect';
import type { ControllerProps } from 'react-hook-form';

export type UserMultiselectControlProps = Pick<
  FormControlProps,
  'label' | 'caption' | 'disabled' | 'noExternalMargins' | 'infoTooltip'
> &
  Omit<UserMultiselectProps, 'containerRef' | 'onChange'> &
  Omit<ControllerProps, 'render'> & {
    formControlOverrides?: FormControlProps['overrides'];
  };

/**
 * Component that implement a form control user multi select wrapped on controller provided by react hook form
 */
export const UserMultiselectControl = ({
  name,
  label,
  disabled,
  users,
  caption,
  control,
  formControlOverrides,
  noExternalMargins,
  checkedUsers = [],
  infoTooltip,
  ...rest
}: UserMultiselectControlProps): ReactElement => (
  <Controller
    name={name}
    control={control}
    defaultValue={checkedUsers}
    render={({ field: { value, ref, ...field }, fieldState: { error } }): ReactElement => (
      <FormControl
        label={label}
        disabled={disabled}
        caption={caption}
        error={error?.message}
        htmlFor={name}
        overrides={formControlOverrides}
        noExternalMargins={noExternalMargins}
        infoTooltip={infoTooltip}
      >
        <UserMultiselect
          {...field}
          users={users}
          checkedUsers={value}
          inputRef={ref}
          {...rest}
        />
      </FormControl>
    )}
  />
);
