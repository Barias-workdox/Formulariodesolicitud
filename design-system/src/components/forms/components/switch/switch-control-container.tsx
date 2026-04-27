import { useFormContext } from '../../hooks';

import { SwitchControl } from './switch-control';

import type { SwitchControlProps } from './switch-control';

export type SwitchControlContainerProps = Omit<SwitchControlProps, 'control'>;

/**
 * Reusable container with the form context and form provider, used in nested forms elements.
 * This implementation does not require to receive the form methods as parameters
 */
export const SwitchControlContainer = (props: SwitchControlContainerProps): JSX.Element => {
  const methods = useFormContext();

  return (
    <SwitchControl
      {...methods}
      {...props}
    />
  );
};
