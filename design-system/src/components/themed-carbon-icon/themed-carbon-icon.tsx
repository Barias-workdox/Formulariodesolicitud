import { forwardRef } from 'react';
import type { ReactSVGElement } from 'react';

import * as CarbonIcon from '@carbon/icons-react';

import { useCss } from '@components/utils/hooks/use-css';

import type { CarbonIconProps, CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon';
import type { DesignSystemColorType } from '@themes/theme.interfaces';

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
export const ThemedCarbonIcon = forwardRef<ReactSVGElement, ThemedCarbonIconProps>(
  function ThemedCarbonIconInner({ icon, color, themeColor, ...rest }, ref) {
    const { theme } = useCss();
    const Icon: CarbonIconType = (CarbonIcon as unknown)[icon];

    return (
      <Icon
        ref={ref}
        color={theme.colors[themeColor] || color}
        {...rest}
      />
    );
  },
);

ThemedCarbonIcon.displayName = 'ThemedCarbonIcon';
