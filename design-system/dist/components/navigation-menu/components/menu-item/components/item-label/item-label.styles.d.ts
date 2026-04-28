import { ItemLabelProps } from './item-label';
import { TextProps } from '../../../../../text';
export type ItemLabelTextStyles = {
    color: TextProps['color'];
    fontWeight: TextProps['fontWeight'];
};
/** Returns the text styles for an item label based on its `disabled` and `isActive` states. */
export declare const getItemLabelTextStyles: ({ disabled, isActive, isSelected, }: Pick<ItemLabelProps, "disabled" | "isActive" | "isSelected">) => ItemLabelTextStyles;
export declare const StyledRoot: import('styletron-react').StyletronComponent<"div", {}>;
export declare const StyledLabelContainer: import('styletron-react').StyletronComponent<"span", {}>;
