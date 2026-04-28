import { GetItemLabelFn } from 'baseui/menu';
import { PopoverPlacement } from 'baseui/popover';
import { StyleObject } from 'styletron-react';
export interface MenuCommonProps {
    itemLabelKey?: string;
    itemLabelTemplate?: GetItemLabelFn;
    optionListBorderBottom?: boolean;
    placementChildMenu?: PopoverPlacement;
    menuWidth?: StyleObject['minWidth'];
}
