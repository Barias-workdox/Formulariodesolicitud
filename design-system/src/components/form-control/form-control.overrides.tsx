import { FormControlLabel } from './components/form-control-label';
import { captionStyles } from './form-control.styles';

import type { FormControlProps } from './form-control';
import type { FormControlOverrides } from 'baseui/form-control';
import type { StyleObject } from 'styletron-react';

type GetFormControlBaseOverridesParams = Pick<
  FormControlProps,
  | 'currentCharactersQuantity'
  | 'infoTooltip'
  | 'labelWithHorizontalPadding'
  | 'maxLength'
  | 'showCharacterCounter'
  | 'customOverrides'
  | 'zIndex'
  | 'required'
>;

/**
 * Returns overrides for the `FormControl` component to customize its appearance and behavior.
 */
export const getFormControlBaseOverrides = ({
  currentCharactersQuantity,
  infoTooltip,
  labelWithHorizontalPadding,
  maxLength,
  showCharacterCounter,
  customOverrides = {},
  zIndex,
  required,
}: GetFormControlBaseOverridesParams): FormControlOverrides => ({
  LabelContainer: {
    style: { margin: 0 },
  },
  Label: {
    component: function StyledLabelComponent({
      children,
      $disabled,
    }: {
      children: string;
      $disabled: boolean;
    }): JSX.Element {
      // If children is a ReactNode, it will be rendered without changes
      return typeof children === 'object' ? (
        children
      ) : (
        <FormControlLabel
          label={children}
          labelWithHorizontalPadding={labelWithHorizontalPadding}
          disabled={$disabled}
          infoTooltip={infoTooltip}
          showCharacterCounter={showCharacterCounter}
          currentCharactersQuantity={currentCharactersQuantity}
          maxLength={maxLength}
          zIndex={zIndex}
          required={required}
        />
      );
    },
  },
  Caption: {
    style: ({ $theme, $error }): StyleObject => ({
      ...captionStyles($theme, $error),
      ...customOverrides.Caption,
    }),
  },
});

/**
 * Removes margins from parts of the `FormControl` component to achieve a more compact appearance.
 * This is particularly useful in layouts where space is at a premium or when a denser UI is desired.
 */
export const noExternalMarginOverrides: FormControlOverrides = {
  ControlContainer: { style: { margin: 0 } },
  Caption: { style: { marginBottom: 0 } },
};
