import { CSSProperties, ReactElement, ReactNode } from 'react';
import { PopoverPlacementType } from '../../popover';
import { OptionListProps } from 'baseui/menu';
export type MenuItemProps = OptionListProps & {
    baseDataTestId?: string;
    index: number;
    optionListBorderBottom?: boolean;
    placementChildMenu?: PopoverPlacementType;
    style?: CSSProperties;
};
type getItemLabelProps = {
    optionListBorderBottom?: boolean;
    /** To indicate which property from the item has to been used as label */
    itemLabelKey?: string;
    placementChildMenu?: MenuItemProps['placementChildMenu'];
    isLoading?: boolean;
    disabled?: boolean;
    selected?: boolean;
    startEnhancer?: ReactNode;
    endEnhancer?: ReactNode;
    /** Function to build a custom label using data from the item */
    itemLabelTemplate?(any: any): ReactNode;
};
/**
 * Function than return a MenuItemLabel to use in MenuItem.
 * There are two ways to define the item label. The first way is
 * the itemLabelKey to take some property as a label. The second way is
 * the itemLabelTemplate function that returns the label taking the item data as parameters.
 */
export declare const getItemLabel: ({ startEnhancer, endEnhancer, isLoading, disabled, selected, itemLabelTemplate, itemLabelKey, ...rest }: getItemLabelProps) => ReactElement;
/**
 * Menu item to use in the Stateful Menu or in the Stateless Menu.
 */
export declare const MenuItem: import('react').ForwardRefExoticComponent<OptionListProps & {
    baseDataTestId?: string;
    index: number;
    optionListBorderBottom?: boolean;
    placementChildMenu?: PopoverPlacementType;
    style?: CSSProperties;
} & import('react').RefAttributes<unknown>>;
export {};
