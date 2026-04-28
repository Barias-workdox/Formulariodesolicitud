import { DesignSystemTheme } from '../../themes';
import { PopoverOverrides } from 'baseui/popover';
import { StyleObject } from 'styletron-react';
/** Overrides styles for the basePopover component */
export declare const popoverStyledOverrides: (width: number) => PopoverOverrides;
export declare const userMultiselectStyles: {
    containerWrapper: (theme: DesignSystemTheme, { disabled }: {
        disabled?: boolean;
    }) => StyleObject;
    contentStyles: StyleObject;
    valueWrapper: () => StyleObject;
    counterBadge: (theme: DesignSystemTheme, { disabled }: {
        disabled?: boolean;
    }) => StyleObject;
    contentWrapper: StyleObject;
    textValueWrapper: () => StyleObject;
    textValue: (theme: DesignSystemTheme, { disabled }: {
        disabled?: boolean;
    }) => StyleObject;
};
