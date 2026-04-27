import { Controller } from 'react-hook-form';

import { ColorPicker } from '@components/color-picker/next/color-picker';
import { FormControl } from '@components/form-control';

import type { ColorPickerProps } from '@components/color-picker/next/color-picker';
import type { FormControlProps } from '@components/form-control';
import type { ControllerProps } from 'react-hook-form';

export type ColorPickerControlProps = Omit<FormControlProps, 'children'> &
  ColorPickerProps &
  Omit<ControllerProps, 'render'>;

/**
 * Component that requires a controller from the form context and implements Radio Group form control
 * from DS
 */
export const ColorPickerControl = ({
  'data-testid': dataTestId,
  name,
  label,
  disabled,
  caption,
  control,
  defaultValue,
  infoTooltip,
  noExternalMargins,
  required,
  ...rest
}: ColorPickerControlProps): JSX.Element => (
  <Controller
    name={name}
    control={control}
    defaultValue={defaultValue}
    render={({ field, fieldState: { error } }): JSX.Element => (
      <FormControl
        infoTooltip={infoTooltip}
        label={label}
        disabled={disabled}
        caption={caption}
        error={error?.message}
        htmlFor={name}
        noExternalMargins={noExternalMargins}
        required={required}
      >
        <ColorPicker
          {...field}
          data-testid={dataTestId}
          {...rest}
        />
      </FormControl>
    )}
  />
);
