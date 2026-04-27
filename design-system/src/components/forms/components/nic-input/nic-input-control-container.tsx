import { useFormContext } from '../../hooks';

import { NicInputControl } from './nic-input-control';

import type { NicInputControlProps } from './nic-input-control';

export type NicInputControlContainerProps = Omit<NicInputControlProps, 'control'>;

/**
 * Reusable container with the form context and form provider, used in nested forms elements.
 * This implementation does not require to receive the form methods as parameters
 */
export const NicInputControlContainer = (props: NicInputControlContainerProps): JSX.Element => {
  const methods = useFormContext();

  return (
    <NicInputControl
      {...methods}
      {...props}
    />
  );
};
