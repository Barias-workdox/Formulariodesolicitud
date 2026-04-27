import { useFormContext } from '../../hooks';

import { UserSelectControl } from './user-select-control';

import type { UserSelectControlProps } from './user-select-control';

export type UserSelectControlContainerProps = Omit<UserSelectControlProps, 'control'>;

/**
 * Reusable container with the form context and form provider, used in nested forms elements.
 * This implementation does not require to receive the form methods as parameters
 */
export const UserSelectControlContainer = (props: UserSelectControlContainerProps): JSX.Element => {
  const methods = useFormContext();

  return (
    <UserSelectControl
      {...methods}
      {...props}
    />
  );
};
