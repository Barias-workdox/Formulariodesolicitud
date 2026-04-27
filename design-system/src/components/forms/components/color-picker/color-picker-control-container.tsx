import { useFormContext } from '../../hooks';

import { ColorPickerControl } from './color-picker-control';

import type { ColorPickerControlProps } from './color-picker-control';

export type ColorPickerControlContainerProps = Omit<ColorPickerControlProps, 'control'>;

/**
 * Reusable container with the form context and form provider, used in nested forms elements.
 * This implementation does not require to receive the form methods as parameters
 */
export const ColorPickerControlContainer = (
  props: ColorPickerControlContainerProps,
): JSX.Element => {
  const methods = useFormContext();

  return (
    <ColorPickerControl
      {...methods}
      {...props}
    />
  );
};
