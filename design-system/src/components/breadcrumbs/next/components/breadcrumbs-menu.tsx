import type { ReactNode } from 'react';

import { OverflowMenuHorizontal } from '@carbon/icons-react';

import { IconButton } from '@components/button';
import { StatefulMenu } from '@components/menu';
import { Popover } from '@components/popover';

import type { BreadcrumbsMenuItem } from '../breadcrumbs.interfaces';

export interface BreadcrumbsMenuProps {
  dataTestId?: string;
  breadcrumbs: BreadcrumbsMenuItem[];
}

/**
 * A component to display a menu for the breadcrumbs.
 */
export const BreadcrumbsMenu = ({
  dataTestId = 'breadcrumbs-menu',
  breadcrumbs,
}: BreadcrumbsMenuProps): JSX.Element => {
  const menuItems = breadcrumbs.map(({ label, onClick }, index) => ({
    'data-testid': `${dataTestId}__item-${index}`,
    id: `breadcrumb-${index}`,
    label,
    handleClick: onClick,
  }));

  /**
   * Handles the item select event by taking the handleClick function from the item and calling it if it exists.
   */
  const handleItemSelect = ({ item: { handleClick } }): void => {
    handleClick?.();
  };

  return (
    <Popover
      placement="bottom"
      content={(): ReactNode => (
        <StatefulMenu
          data-testid={dataTestId}
          items={menuItems}
          onItemSelect={handleItemSelect}
        />
      )}
    >
      <IconButton
        data-testid={`${dataTestId}__button`}
        kind="ghost-tertiary"
        size="24px"
      >
        <OverflowMenuHorizontal />
      </IconButton>
    </Popover>
  );
};
