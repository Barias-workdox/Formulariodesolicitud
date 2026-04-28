import { COMMON_ICON_SIZE_24 } from '../../../../constants/common.constants';
import { DesignSystemTheme, DesignSystemColorType } from '../../../../themes';
import { KindValues } from '../../toast';
import { KindType } from '../../toast/toast.interface';
import { CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon';
import { StyleObject } from 'styletron-react';
export declare const toasterContainerStyles: {
    bodyWrapper: () => StyleObject;
    childrenWrapper: (theme: DesignSystemTheme) => StyleObject;
};
/**
 * Overrides for the BackgroundIcon component used in toasts
 */
export declare const backgroundIconOverrides: {
    Root: {
        style: ({ $theme }: {
            $theme: DesignSystemTheme;
        }) => StyleObject;
    };
};
/**
 * Return type for getToastIconProps function
 */
export type ToastIconProps = {
    icon: CarbonIconType;
    backgroundColor: DesignSystemColorType;
    iconColor: DesignSystemColorType;
    shape: 'square';
    size: typeof COMMON_ICON_SIZE_24;
    overrides: typeof backgroundIconOverrides;
};
/**
 * Gets BackgroundIcon props for toast kinds, eliminating the need for type casting
 */
export declare const getToastIconProps: (kindValues: KindValues) => ToastIconProps;
/**
 * Styles for the toaster based on its kind
 */
export declare const getKindValues: (kind: KindType) => KindValues;
/**
 * Styles for the BodyStyle wrapper component with responsive width support
 */
export declare const styledBody: (theme: DesignSystemTheme, { style, width }: {
    style: KindValues;
    width?: string;
}) => StyleObject;
