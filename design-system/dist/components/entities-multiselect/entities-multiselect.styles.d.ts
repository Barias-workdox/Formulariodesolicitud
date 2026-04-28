import { DesignSystemTheme } from '../../themes';
import { TitleLayoutProps } from '../layouts';
import { PopoverOverrides } from 'baseui/popover';
import { StyleObject } from 'styletron-react';
/** Overrides styles for the basePopover component */
export declare const popoverStyledOverrides: (width: number) => PopoverOverrides;
export declare const entitiesMultiselectStyles: {
    containerWrapper: (theme: DesignSystemTheme, { disabled, $hasError }: {
        disabled?: boolean;
        $hasError?: boolean;
    }) => StyleObject;
    contentStyles: StyleObject;
    contentWrapper: (theme: DesignSystemTheme) => StyleObject;
    leadingWrapper: (theme: DesignSystemTheme) => StyleObject;
    textValue: (theme: DesignSystemTheme, { disabled }: {
        disabled?: boolean;
    }) => StyleObject;
    placeholderWrapper: (theme: DesignSystemTheme) => StyleObject;
    endIconWrapper: (theme: DesignSystemTheme) => StyleObject;
};
export declare const entitiesMultiSelectListStyles: {
    wrapper: (theme: DesignSystemTheme) => StyleObject;
    inputWrapper: (theme: DesignSystemTheme) => StyleObject;
    bodyStyles: (theme: DesignSystemTheme) => StyleObject;
    noResultsWrapper: StyleObject;
    separatorStyle: (theme: DesignSystemTheme) => StyleObject;
    optionsListHeaderStyle: (theme: DesignSystemTheme) => StyleObject;
    optionsListHeaderLabelStyle: (_theme: DesignSystemTheme) => StyleObject;
    listOptionStyle: (_theme: DesignSystemTheme) => StyleObject;
};
/** Overrides styles for the TitleLayout component */
export declare const titleLayoutStyledOverrides: () => TitleLayoutProps["overrides"];
