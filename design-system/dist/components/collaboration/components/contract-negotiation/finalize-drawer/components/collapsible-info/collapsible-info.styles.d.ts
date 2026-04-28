import { CollapsibleBoxProps } from '../../../../../../collapsible-box';
import { DesignSystemTheme } from '../../../../../../../themes/theme.interfaces';
import { StyleObject } from 'styletron-react';
/** Custom collapsible box overrides */
export declare const collapsibleBoxOverrides: (theme: DesignSystemTheme) => CollapsibleBoxProps["overrides"];
export declare const styles: {
    collapsibleContainerStyles: (theme: DesignSystemTheme) => StyleObject;
    statusContainerStyles: (theme: DesignSystemTheme) => StyleObject;
    lastEditionContainerStyles: (theme: DesignSystemTheme) => StyleObject;
    approvalsContainerStyles: (theme: DesignSystemTheme) => StyleObject;
    thirdPartiesContainerStyles: (theme: DesignSystemTheme) => StyleObject;
    titleTextStyles: (theme: DesignSystemTheme) => StyleObject;
};
