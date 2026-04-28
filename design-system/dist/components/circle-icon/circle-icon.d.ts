import { CarbonIconProps, CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon';
import { DesignSystemColorType } from '../../themes/theme.interfaces';
/** @deprecated - this interface is part of DS legacy */
interface CircleIconProps {
    Icon: CarbonIconType;
    iconColor?: DesignSystemColorType;
    backgroundColor?: DesignSystemColorType;
    width?: string;
    height?: string;
    /** Width in pixels (only number part) */
    iconWidth?: number;
    /** Height in pixels (only number part) */
    iconHeight?: number;
    /** Size of the icon (only number part) */
    iconSize?: CarbonIconProps['size'];
}
/**
 * Styled component with a circle and an icon on the center. By default, it has predefined widths, heights and colors,
 * but they can be overridden if required
 *
 * @deprecated - use `BackgroundIcon`, this is a variant with shape = `round`
 */
export declare const CircleIcon: ({ Icon, iconColor, backgroundColor, width, height, iconWidth, iconHeight, iconSize, }: CircleIconProps) => JSX.Element;
export {};
