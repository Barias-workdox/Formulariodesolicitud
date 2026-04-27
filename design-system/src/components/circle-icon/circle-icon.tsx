import { BackgroundIcon } from '../background-icon';

import type { CarbonIconProps, CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon';
import type { DesignSystemColorType } from '@themes/theme.interfaces';

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
export const CircleIcon = ({
  Icon,
  iconColor = 'neutral',
  backgroundColor = 'neutralBase',
  width = '50px',
  height = '50px',
  iconWidth = 24,
  iconHeight = 24,
  iconSize = 16,
}: CircleIconProps): JSX.Element => {
  return (
    <BackgroundIcon
      shape="round"
      icon={{
        Icon,
        color: iconColor,
        width: iconWidth,
        height: iconHeight,
        size: iconSize,
      }}
      background={{
        color: backgroundColor,
        width,
        height,
      }}
    />
  );
};
