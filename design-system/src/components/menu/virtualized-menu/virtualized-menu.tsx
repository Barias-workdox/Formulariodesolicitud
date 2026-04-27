import { useMemo } from 'react';
import type { ReactElement } from 'react';

import { mergeOverrides } from 'baseui';

import { StatefulMenu } from '../stateful-menu';

import { getOverrides } from './virtualized-menu.overrides';

import type { StatefulMenuProps } from '../stateful-menu';
import type { StyleObject } from 'styletron-react';

export type VirtualizedMenuProps = StatefulMenuProps & {
  maxHeight: StyleObject['maxHeight'];
  itemSize: number;
};

/**
 * A virtualized version of the Menu component, optimized for rendering a large number of items efficiently.
 *
 * @example
 * ```jsx
 * <VirtualizedMenu
 *   items={[
 *     { id: 'item1', label: 'Item 1' },
 *     { id: 'item2', label: 'Item 2' },
 *     // ... more items
 *   ]}
 *   maxHeight="300px"
 * />
 * ```
 */
export const VirtualizedMenu = ({ overrides, ...rest }: VirtualizedMenuProps): ReactElement => {
  const mergedOverrides = useMemo(
    () => mergeOverrides(getOverrides(rest), overrides),
    [overrides, rest],
  );

  return (
    <StatefulMenu
      {...rest}
      overrides={mergedOverrides}
    />
  );
};
