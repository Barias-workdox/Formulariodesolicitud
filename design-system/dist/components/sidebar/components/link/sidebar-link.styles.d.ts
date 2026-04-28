import { DesignSystemTheme } from '../../../../themes/theme.interfaces';
import { StyleObject } from 'styletron-react';
type StyleParams = {
    isAvatar: boolean;
    isActive: boolean;
    isHovered: boolean;
    isDisabled: boolean;
    isCollapsed: boolean;
};
/**
 * Styles for the SidebarLink component using the useCss pattern
 */
export declare const styles: {
    rootStyles: (theme: DesignSystemTheme, { isAvatar, isActive, isHovered, isDisabled, isCollapsed }: StyleParams) => StyleObject;
    chevronStyles: (theme: DesignSystemTheme) => StyleObject;
};
export {};
