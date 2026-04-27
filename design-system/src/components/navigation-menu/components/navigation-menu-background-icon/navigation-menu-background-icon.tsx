import { BackgroundIcon } from '@components/background-icon/next';

import type { BackgroundIconProps, BackgroundIconSize } from '@components/background-icon/next';
import type { MenuItemSize } from '@components/navigation-menu/navigation-menu.interfaces';

const BACKGROUND_ICON_SIZE_BY_MENU_ITEM_SIZE: Record<MenuItemSize, BackgroundIconSize> = {
  default: '24px',
  large: '32px',
};

export type NavigationMenuBackgroundIconProps = Omit<BackgroundIconProps, 'size'> & {
  /**
   * Menu item size used to infer the background icon container size.
   * Defaults to "default".
   */
  menuItemSize?: MenuItemSize;
  /**
   * Explicit background icon size override.
   * If provided, it takes precedence over the inferred size.
   */
  size?: BackgroundIconProps['size'];
};

/**
 * A wrapper around `BackgroundIcon` with sensible defaults for `NavigationMenu` usage.
 */
export const NavigationMenuBackgroundIcon = ({
  menuItemSize = 'default',
  size,
  ...props
}: NavigationMenuBackgroundIconProps): JSX.Element => {
  return (
    <BackgroundIcon
      {...props}
      size={size ?? BACKGROUND_ICON_SIZE_BY_MENU_ITEM_SIZE[menuItemSize]}
    />
  );
};
