import { useFormContext } from '../../hooks';

import { CheckboxControl } from './checkbox-control';

import type { CheckboxControlProps } from './checkbox-control';

export type CheckboxControlContainerProps = Omit<CheckboxControlProps, 'control'>;

/**
 * Reusable container with the form context and form provider, used in nested forms elements.
 * This implementation does not require to receive the form methods as parameters
 */
export const CheckboxControlContainer = (props: CheckboxControlContainerProps): JSX.Element => {
  const methods = useFormContext();

  return (
    <CheckboxControl
      {...methods}
      {...props}
    />
  );
};
