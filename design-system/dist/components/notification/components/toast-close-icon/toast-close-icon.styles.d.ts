import { DesignSystemTheme } from '../../../../themes';
import { StyleObject } from 'styletron-react';
/**
 * Styled wrapper component for the close icon with proper styling
 */
export declare const CloseIconWrapper: import('styletron-react').StyletronComponent<"div", {}>;
/**
 * Enhanced focus styles for the close button in toast context
 */
export declare const closeButtonFocusOverrides: {
    BaseButton: {
        style: ({ $theme }: {
            $theme: DesignSystemTheme;
        }) => StyleObject;
    };
};
