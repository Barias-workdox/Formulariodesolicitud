import { EntitiesMultiSelect } from '@components/entities-multiselect';

import { useFormContext } from '../../hooks';

import type { EntitiesMultiselectControlProps } from './entities-multiselect-control';

export type EntitiesMultiselectControlContainerProps = Omit<
  EntitiesMultiselectControlProps,
  'control'
>;

/**
 * Reusable container with the form context and form provider, used in nested forms elements.
 * This implementation does not require to receive the form methods as parameters
 */
export const EntitiesMultiselectControlContainer = (
  props: EntitiesMultiselectControlContainerProps,
): JSX.Element => {
  const methods = useFormContext();

  return (
    <EntitiesMultiSelect
      {...methods}
      {...props}
    />
  );
};
