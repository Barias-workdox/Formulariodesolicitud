import { VirtualizedMenuProps } from './virtualized-menu';
import { MenuOverrides } from 'baseui/menu';
export type OverridesParams = Pick<VirtualizedMenuProps, 'dataTestId' | 'items' | 'maxHeight' | 'itemLabelTemplate' | 'itemSize' | 'onItemSelect'>;
/**
 * Generates overrides for the VirtualizedMenu component.
 */
export declare const getOverrides: (params: OverridesParams) => MenuOverrides;
