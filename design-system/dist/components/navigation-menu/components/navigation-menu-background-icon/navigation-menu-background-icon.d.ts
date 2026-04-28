import { BackgroundIconProps } from '../../../background-icon/next';
import { MenuItemSize } from '../../navigation-menu.interfaces';
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
export declare const NavigationMenuBackgroundIcon: ({ menuItemSize, size, ...props }: NavigationMenuBackgroundIconProps) => JSX.Element;
