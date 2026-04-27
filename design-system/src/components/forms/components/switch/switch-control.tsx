import { Controller } from 'react-hook-form';

import { FormControl } from '../../../form-control';
import { Switch } from '../../../switch';

import type { FormControlProps } from '../../../form-control';
import type { SwitchProps } from '../../../switch';
import type { ControllerProps } from 'react-hook-form';

export type SwitchControlProps = Omit<FormControlProps, 'children'> &
  SwitchProps &
  Omit<ControllerProps, 'render'> & {
    formControlOverrides?: FormControlProps['overrides'];
  };

/**
 * Component that requires a controller from the form context and implements Radio Group form control
 * from DS
 */
export const SwitchControl = ({
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
  ...rest
}: SwitchControlProps): JSX.Element => (
  <Controller
    name={name}
    control={control}
    defaultValue={defaultValue}
    render={({ field: { ref, value, ...field }, fieldState: { error } }): JSX.Element => (
      <FormControl
        infoTooltip={infoTooltip}
        label={label}
        disabled={disabled}
        caption={caption}
        error={error?.message}
        htmlFor={name}
        overrides={formControlOverrides}
        noExternalMargins={noExternalMargins}
      >
        <Switch
          {...field}
          checked={value}
          data-testid={dataTestId}
          aria-label={name}
          inputRef={ref}
          {...rest}
        />
      </FormControl>
    )}
  />
);
