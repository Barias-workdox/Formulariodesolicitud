import { Controller } from 'react-hook-form';

import { FormControl } from '@components/form-control';
import { RadioGroup } from '@components/radio';

import type { FormControlProps } from '@components/form-control';
import type { RadioGroupProps } from '@components/radio/radio-group.interfaces';
import type { ControllerProps } from 'react-hook-form';

export type RadioGroupControlProps = Omit<FormControlProps, 'children'> &
  RadioGroupProps &
  Omit<ControllerProps, 'render'> & {
    formControlOverrides?: FormControlProps['overrides'];
  };

/**
 * Component that requires a controller from the form context and implements Radio Group form control
 * from DS
 */
export const RadioGroupControl = ({
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
}: RadioGroupControlProps): JSX.Element => (
  <Controller
    name={name}
    control={control}
    defaultValue={defaultValue}
    render={({ field: { ref, ...field }, fieldState: { error } }): JSX.Element => (
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
        <RadioGroup
          {...field}
          ref={ref}
          data-testid={dataTestId}
          aria-label={name}
          {...rest}
        />
      </FormControl>
    )}
  />
);
