import type { PropsWithChildren } from 'react';

import { MenuItem } from './components/menu-item';
import { NavigationMenuBackgroundIcon } from './components/navigation-menu-background-icon/navigation-menu-background-icon';
import { StyledRoot } from './navigation-menu.styles';

/**
 * `NavigationMenu` is a container component used to group and display navigation menu items.
 * It renders the provided child components inside a styled root container.
 *
 * TODO: This version lacks support for nested menus, dynamic shrink behavior and support for overrides.
 */
const NavigationMenuComponent = ({ children }: PropsWithChildren<object>): JSX.Element => {
  return <StyledRoot>{children}</StyledRoot>;
};

const NavigationMenu = Object.assign(NavigationMenuComponent, {
  MenuItem,
  BackgroundIcon: NavigationMenuBackgroundIcon,
});

export { NavigationMenu };
