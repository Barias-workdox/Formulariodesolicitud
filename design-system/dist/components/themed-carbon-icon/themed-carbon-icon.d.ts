import { ReactSVGElement } from 'react';
import { CarbonIconProps } from '@carbon/icons-react/lib/CarbonIcon';
import { DesignSystemColorType } from '../../themes/theme.interfaces';
import * as CarbonIcon from '@carbon/icons-react';
export type ThemedCarbonIconProps = CarbonIconProps & {
    /** The name of the Carbon icon to render. */
    icon: keyof typeof CarbonIcon;
    /** The theme color token. */
    themeColor?: DesignSystemColorType;
};
/**
 * A themed icon component that renders a Carbon icon with optional theme-based color.
 *
 * @example
 * ```
 * <ThemedCarbonIcon
 *   icon="Calendar"
 *   themeColor="brand"
 * />
 * ```
 */
export declare const ThemedCarbonIcon: import('react').ForwardRefExoticComponent<CarbonIcon.CarbonIconProps & {
    /** The name of the Carbon icon to render. */
    icon: keyof typeof CarbonIcon;
    /** The theme color token. */
    themeColor?: DesignSystemColorType;
} & import('react').RefAttributes<ReactSVGElement>>;
