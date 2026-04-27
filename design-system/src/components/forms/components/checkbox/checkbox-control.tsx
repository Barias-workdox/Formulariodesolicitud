import { Controller } from 'react-hook-form';

import { Checkbox } from '@components/checkbox';
import { FormControl } from '@components/form-control';

import type { CheckboxProps } from '@components/checkbox';
import type { FormControlProps } from '@components/form-control';
import type { ControllerProps } from 'react-hook-form';

export type CheckboxControlProps = Omit<FormControlProps, 'children'> &
  CheckboxProps &
  Omit<ControllerProps, 'render'> & {
    formControlOverrides?: FormControlProps['overrides'];
  };

/**
 * Component that requires a controller from the form context and
 * implements Checkbox form control from DS
 */
export const CheckboxControl = ({
  'data-testid': dataTestId,
  name,
  label,
  disabled,
  caption,
  control,
  defaultValue,
  infoTooltip,
  formControlOverrides,
  noExternalMargins,
  required,
  ...rest
}: CheckboxControlProps): JSX.Element => (
  <Controller
    name={name}
    control={control}
    defaultValue={defaultValue}
    render={({ field: { value, ...field }, fieldState: { error } }): JSX.Element => (
      <FormControl
        infoTooltip={infoTooltip}
        label={label}
        disabled={disabled}
        caption={caption}
        error={error?.message}
        htmlFor={name}
        overrides={formControlOverrides}
        noExternalMargins={noExternalMargins}
        required={required}
      >
        <Checkbox
          {...field}
          data-testid={dataTestId}
          checked={value}
          {...rest}
        />
      </FormControl>
    )}
  />
);
