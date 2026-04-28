import { DesignSystemTheme } from '../../../../../../../themes/theme.interfaces';
import { HeadingOverrides, ListOverrides } from 'baseui/list';
import { StyleObject } from 'styletron-react';
export declare const styles: {
    listStyles: (theme: DesignSystemTheme) => StyleObject;
    documentInfoStyles: (theme: DesignSystemTheme) => StyleObject;
    documentNameTextStyles: () => StyleObject;
};
/** Document List item overrides */
export declare const documentsListItemOverrides: (theme: DesignSystemTheme, { dataTestId, isSelected }: {
    dataTestId: string;
    isSelected: boolean;
}) => ListOverrides;
/** Document List heading overrides */
export declare const documentsListHeadingOverrides: (theme: DesignSystemTheme) => HeadingOverrides;
