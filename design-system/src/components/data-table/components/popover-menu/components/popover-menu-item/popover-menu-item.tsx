import type { ReactElement, ReactNode } from 'react';

import { StyledPopoverMenuItemButton } from './popover-menu-item.styles';

import type { WithTestId } from '@interfaces/common.interfaces';
import type { StyleObject } from 'styletron-react';

type PopoverMenuItemProps = WithTestId & {
  children: ReactNode;
  disabled?: boolean;
  $styles?: StyleObject;
  onClick(): void;
};

/**
 * This component is used to create individual menu items within a popover menu.
 * It allows you to define the content of the item and specify an `onClick` handler
 * to trigger an action when the item is clicked.
 */
export const PopoverMenuItem = ({
  dataTestId = 'data-table__popover-menu--item',
  children,
  $styles = {},
  disabled,
  onClick,
}: PopoverMenuItemProps): ReactElement => {
  return (
    <li>
      <StyledPopoverMenuItemButton
        data-testid={dataTestId}
        type="button"
        disabled={disabled}
        $style={$styles}
        onClick={onClick}
      >
        {children}
      </StyledPopoverMenuItemButton>
    </li>
  );
};
