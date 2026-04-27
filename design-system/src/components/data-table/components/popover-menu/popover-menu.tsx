import type { Attributes, PropsWithChildren, ReactElement } from 'react';

import { PopoverMenuEmpty } from './components/popover-menu-empty';
import { PopoverMenuItem } from './components/popover-menu-item';
import { PopoverMenuTitle } from './components/popover-menu-title';
import { StyledPopoverMenu, StyledPopoverMenuContainer } from './styled-components';

/**
 * This component is used to create a container for a popover menu.
 * It can contain multiple menu items, titles, or other components as its children.
 */
export const PopoverMenu = (props: PropsWithChildren<Attributes>): ReactElement => {
  return <StyledPopoverMenu {...props} />;
};

PopoverMenu.Container = StyledPopoverMenuContainer;
PopoverMenu.Title = PopoverMenuTitle;
PopoverMenu.List = StyledPopoverMenu;
PopoverMenu.Item = PopoverMenuItem;
PopoverMenu.Empty = PopoverMenuEmpty;
