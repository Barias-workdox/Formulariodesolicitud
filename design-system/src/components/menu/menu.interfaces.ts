import type { GetItemLabelFn } from 'baseui/menu';
import type { PopoverPlacement } from 'baseui/popover';
import type { StyleObject } from 'styletron-react';

export interface MenuCommonProps {
  itemLabelKey?: string;
  itemLabelTemplate?: GetItemLabelFn;
  optionListBorderBottom?: boolean;
  placementChildMenu?: PopoverPlacement;
  menuWidth?: StyleObject['minWidth'];
}
