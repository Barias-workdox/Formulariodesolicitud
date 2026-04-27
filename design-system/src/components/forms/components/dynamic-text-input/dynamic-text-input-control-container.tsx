import { useFormContext } from '../../hooks';

import { DynamicTextInputControl } from './dynamic-text-input-control';

import type { DynamicTextInputControlProps } from './dynamic-text-input-control';

export type DynamicTextInputControlContainerProps = Omit<DynamicTextInputControlProps, 'control'>;

/**
 * Reusable container with the form context and form provider, used in nested forms elements.
 * This implementation does not require to receive the form methods as parameters
 */
export const DynamicTextInputControlContainer = (
  props: DynamicTextInputControlContainerProps,
): JSX.Element => {
  const methods = useFormContext();

  return (
    <DynamicTextInputControl
      {...methods}
      {...props}
    />
  );
};
