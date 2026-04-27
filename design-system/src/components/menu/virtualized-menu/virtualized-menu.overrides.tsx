import { VirtualizedList } from './components/virtualized-list';

import type { VirtualizedMenuProps } from './virtualized-menu';
import type { MenuOverrides } from 'baseui/menu';

export type OverridesParams = Pick<
  VirtualizedMenuProps,
  'dataTestId' | 'items' | 'maxHeight' | 'itemLabelTemplate' | 'itemSize' | 'onItemSelect'
>;

/**
 * Generates overrides for the VirtualizedMenu component.
 */
export const getOverrides = (params: OverridesParams): MenuOverrides => ({
  List: {
    component: VirtualizedList,
    props: { ...params },
  },
});
