import type { ReactNode } from 'react';

import type { MenuItemProps } from './menu-item';
import type { DesignSystemTheme } from '../../../themes';
import type { StatefulMenuProps } from '../stateful-menu';
import type { StyleObject } from 'styletron-react';

/** Reusable menu item ListItem section styles */
export const menuItemListItemStyles = ({
  theme,
  optionListBorderBottom,
}: {
  theme: DesignSystemTheme;
  optionListBorderBottom: MenuItemProps['optionListBorderBottom'];
}): StyleObject => ({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  padding: `${theme.spacing.spacingXs} ${theme.spacing.spacingMd}`,
  ':hover': {
    backgroundColor: theme.colors.neutralBase,
  },
  ':has(*)[aria-disabled="false"]': {
    ':hover': {
      backgroundColor: theme.colors.neutralBase,
    },
    color: theme.colors.neutralSubdued,
  },
  ...(optionListBorderBottom && {
    ':not(:first-child)': {
      borderTop: `1px solid ${theme.colors.neutralWashed}`,
    },
  }),
  a: {
    textDecoration: 'none',
  },
});

/**
 * The default generated getItemLabel in the MenuItem override property. Cannot be used as a react hook component
 * because it is a nested override get property of the Option override component
 */
export const defaultGetItemLabel = ({
  item,
  itemLabelKey,
  dataTestId,
  theme,
}: {
  item: MenuItemProps['item'];
  itemLabelKey: StatefulMenuProps['itemLabelKey'];
  dataTestId: StatefulMenuProps['data-testid'];
  theme: DesignSystemTheme;
}): ReactNode => {
  const { id, startEnhancer } = item;
  const label = item[itemLabelKey];

  return (
    <div
      data-testid={`${dataTestId}--option-${id}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing.spacingMd,
      }}
    >
      {startEnhancer} {label}
    </div>
  );
};
