import { useFormContext } from '../../hooks';

import { PhoneInputControl } from './phone-input-control';

import type { PhoneInputControlProps } from './phone-input-control';

export type PhoneInputControlContainerProps = Omit<PhoneInputControlProps, 'control'>;

/**
 * Reusable container with the form context and form provider, used in nested forms elements.
 * This implementation does not require to receive the form methods as parameters
 */
export const PhoneInputControlContainer = (props: PhoneInputControlContainerProps): JSX.Element => {
  const methods = useFormContext();

  return (
    <PhoneInputControl
      {...methods}
      {...props}
    />
  );
};
