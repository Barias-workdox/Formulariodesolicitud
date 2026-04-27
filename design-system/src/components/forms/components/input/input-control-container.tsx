import { useFormContext } from '../../hooks';

import { InputControl } from './input-control';

import type { InputControlProps } from './input-control';

export type InputControlContainerProps = Omit<InputControlProps, 'control'>;

/**
 * Reusable container with the form context and form provider, used in nested forms elements.
 * This implementation does not require to receive the form methods as parameters
 */
export const InputControlContainer = (props: InputControlContainerProps): JSX.Element => {
  const methods = useFormContext();

  return (
    <InputControl
      {...methods}
      {...props}
    />
  );
};
