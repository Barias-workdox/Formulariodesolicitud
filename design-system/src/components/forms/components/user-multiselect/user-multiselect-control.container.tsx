import { useFormContext } from '../../hooks';

import { UserMultiselectControl } from './user-multiselect-control';

import type { UserMultiselectControlProps } from './user-multiselect-control';

export type UserMultiselectControlContainerProps = Omit<UserMultiselectControlProps, 'control'>;

/**
 * Reusable container with the form context and form provider, used in nested forms elements.
 * This implementation does not require to receive the form methods as parameters
 */
export const UserMultiselectControlContainer = (
  props: UserMultiselectControlContainerProps,
): JSX.Element => {
  const methods = useFormContext();

  return (
    <UserMultiselectControl
      {...methods}
      {...props}
    />
  );
};
