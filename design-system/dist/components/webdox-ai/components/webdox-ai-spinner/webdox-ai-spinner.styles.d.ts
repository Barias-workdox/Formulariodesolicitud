import { DesignSystemTheme } from '../../../../themes/theme.interfaces';
import { StyleObject } from 'styletron-react';
export declare const styles: {
    iconStyles: (theme: DesignSystemTheme) => StyleObject;
    spinnerStyles: {
        animationName: {
            '0%': {
                transform: string;
            };
            '100%': {
                transform: string;
            };
        };
        animationDuration: string;
        animationTimingFunction: string;
        animationIterationCount: string;
        transformOrigin: string;
    };
};
