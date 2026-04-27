import { useFormContext } from '../../hooks';

import { PhoneControl } from './phone-control';

import type { PhoneControlProps } from './phone-control';

export type PhoneControlContainerProps = Omit<PhoneControlProps, 'control'>;

/**
 * Reusable container with the form context and form provider, used in nested forms elements.
 * This implementation does not require to receive the form methods as parameters
 */
export const PhoneControlContainer = (props: PhoneControlContainerProps): JSX.Element => {
  const methods = useFormContext();

  return (
    <PhoneControl
      {...methods}
      {...props}
    />
  );
};
