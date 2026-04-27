import type { RefObject } from 'react';

import { Controller } from 'react-hook-form';

import { FormControl } from '../../../form-control';
import { Textarea } from '../../../textarea/next';

import type { FormControlProps } from '../../../form-control';
import type { TextareaProps } from '../../../textarea';
import type { ControllerProps } from 'react-hook-form';

export type TextareaControlProps = Omit<FormControlProps, 'children'> &
  TextareaProps &
  Omit<ControllerProps, 'render'> & {
    formControlOverrides?: FormControlProps['overrides'];
  };

/**
 * Component that requires a controller from the form context and implements Textarea form control
 * from DS
 */
export const TextareaControl = ({
  'data-testid': dataTestId,
  name,
  label,
  disabled,
  caption,
  control,
  defaultValue,
  infoTooltip,
  showCharacterCounter,
  labelWithHorizontalPadding,
  maxLength,
  formControlOverrides,
  currentCharactersQuantity,
  noExternalMargins,
  required,
  ...rest
}: TextareaControlProps): JSX.Element => (
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
        showCharacterCounter={showCharacterCounter}
        labelWithHorizontalPadding={labelWithHorizontalPadding}
        maxLength={maxLength}
        overrides={formControlOverrides}
        currentCharactersQuantity={currentCharactersQuantity ?? field.value?.length}
        noExternalMargins={noExternalMargins}
        required={required}
      >
        <Textarea
          {...field}
          // Required to avoid TS error hard to fix with Typescript
          inputRef={ref as unknown as RefObject<HTMLTextAreaElement>}
          data-testid={dataTestId}
          {...rest}
        />
      </FormControl>
    )}
  />
);
