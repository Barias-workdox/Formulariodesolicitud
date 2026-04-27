import type { ReactElement } from 'react';

import { Text } from '@components/text';

export interface ListItemCounterProps {
  quantity: number;
}

/**
 * Renders a counter for the list item.
 */
export const ListItemCounter = ({ quantity = 0 }: ListItemCounterProps): ReactElement => {
  return (
    <Text
      variant="upperDetails"
      color="brand"
    >
      ({quantity})
    </Text>
  );
};
