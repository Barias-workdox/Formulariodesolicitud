import { ListItemSize, StyledRootProps } from './list-item.interfaces';
import { TextVariant } from '../../../text';
import { DesignSystemTheme } from '../../../../themes/theme.interfaces';
import { StyleObject } from 'styletron-react';
export declare const propertiesBySize: Record<ListItemSize, {
    height: string;
    label: TextVariant;
    details: TextVariant;
}>;
export declare const styles: {
    textDetails: ({ theme, $isClickable, $isHovered, $disabled, $active }: {
        theme: any;
        $isClickable: any;
        $isHovered: any;
        $disabled: any;
        $active: any;
    }) => StyleObject;
    labelContainer: (theme: DesignSystemTheme) => StyleObject;
};
export declare const StyledListItemRoot: import('styletron-react').StyletronComponent<"li", StyledRootProps>;
export declare const StyledButtonRoot: import('styletron-react').StyletronComponent<"button", StyledRootProps>;
export declare const StyledListItemInner: import('styletron-react').StyletronComponent<"div", StyledRootProps>;
export declare const StyledListItemInfo: import('styletron-react').StyletronComponent<"div", StyledRootProps>;
export declare const StyledListItemIconWrap: import('styletron-react').StyletronComponent<"div", StyledRootProps>;
export declare const StyledListItemIconInner: import('styletron-react').StyletronComponent<"div", StyledRootProps>;
