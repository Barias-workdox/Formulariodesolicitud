import { useFormContext } from '../../hooks';

import { AmountInputControl, type AmountInputControlProps } from './amount-input-control';

export type AmountInputControlContainerProps = Omit<AmountInputControlProps, 'control'>;

/**
 * Reusable container with the form context and form provider, used in nested forms elements.
 * This implementation does not require to receive the form methods as parameters
 */
export const AmountInputControlContainer = (
  props: AmountInputControlContainerProps,
): JSX.Element => {
  const methods = useFormContext();

  return (
    <AmountInputControl
      {...methods}
      {...props}
    />
  );
};
