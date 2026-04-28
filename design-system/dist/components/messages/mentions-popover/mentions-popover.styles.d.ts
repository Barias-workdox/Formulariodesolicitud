import { DesignSystemTheme } from '../../../themes';
import { InputOverrides } from 'baseui/input';
import { PopoverOverrides } from 'baseui/popover';
import { StyleObject } from 'styletron-standard';
export declare const searcherStyles: {
    containerStyles: (theme: DesignSystemTheme) => StyleObject;
};
export declare const listStyles: {
    containerStyles: StyleObject;
    itemLabelTemplateStyles: (theme: DesignSystemTheme) => StyleObject;
    emptyListStyles: (theme: DesignSystemTheme) => StyleObject;
    userDataStyles: StyleObject;
    labelStyles: (theme: DesignSystemTheme) => StyleObject;
};
/**
 * Get the mentions-popover searcher input overrides customized by the Design System theme and kind
 */
export declare const getSearcherInputOverrides: ({ dataTestId, }: {
    dataTestId: string;
}) => InputOverrides;
export declare const popoverOverrides: PopoverOverrides;
