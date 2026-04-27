import { forwardRef, useMemo } from 'react';
import type { CSSProperties, ReactElement, ReactNode } from 'react';

import { OptionList } from 'baseui/menu';

import { mergeOverridesDeep } from '@components/utils/baseui/helpers';
import { useCss } from '@components/utils/hooks/use-css';

import { MenuItemLabel } from './menu-item-label';
import { menuItemListItemStyles } from './menu-item.styles';

import type { DesignSystemTheme } from '../../../themes';
import type { PopoverPlacementType } from '../../popover';
import type { OptionListProps } from 'baseui/menu';
import type { StyleObject } from 'styletron-react';

export type MenuItemProps = OptionListProps & {
  baseDataTestId?: string;
  index: number;
  optionListBorderBottom?: boolean;
  placementChildMenu?: PopoverPlacementType;
  style?: CSSProperties;
};

type getItemLabelProps = {
  optionListBorderBottom?: boolean;
  /** To indicate which property from the item has to been used as label */
  itemLabelKey?: string;
  placementChildMenu?: MenuItemProps['placementChildMenu'];
  isLoading?: boolean;
  disabled?: boolean;
  selected?: boolean;
  startEnhancer?: ReactNode;
  endEnhancer?: ReactNode;
  /** Function to build a custom label using data from the item */
  itemLabelTemplate?(any): ReactNode;
};

/**
 * Function than return a MenuItemLabel to use in MenuItem.
 * There are two ways to define the item label. The first way is
 * the itemLabelKey to take some property as a label. The second way is
 * the itemLabelTemplate function that returns the label taking the item data as parameters.
 */
export const getItemLabel = ({
  startEnhancer,
  endEnhancer,
  isLoading,
  disabled,
  selected,
  itemLabelTemplate,
  itemLabelKey = 'label',
  ...rest
}: getItemLabelProps): ReactElement => (
  <MenuItemLabel
    startEnhancer={startEnhancer}
    endEnhancer={endEnhancer}
    isLoading={isLoading}
    disabled={disabled}
    selected={selected}
  >
    {itemLabelTemplate ? itemLabelTemplate(rest) : rest[itemLabelKey]}
  </MenuItemLabel>
);

/**
 * Generates style and prop overrides for the `OptionList` component used in the `MenuItem`.
 */
const useMenuItemOverrides = ({
  dataTestId,
  ref,
  optionListBorderBottom,
  placementChildMenu,
}): OptionListProps['overrides'] => {
  const { theme } = useCss();

  return useMemo(
    () => ({
      ListItem: {
        props: { ref, 'data-testid': dataTestId },
        style: ({ $theme }: { $theme: DesignSystemTheme }): StyleObject => ({
          ...menuItemListItemStyles({ theme: $theme, optionListBorderBottom }),
        }),
      },
      ChildMenuPopover: {
        props: {
          popoverMargin: theme.spacing.spacing2xs,
          placement: placementChildMenu,
        },
      },
    }),
    [dataTestId, optionListBorderBottom, placementChildMenu, ref, theme.spacing.spacing2xs],
  );
};

/**
 * Menu item to use in the Stateful Menu or in the Stateless Menu.
 */
export const MenuItem = forwardRef(function MenuItem(
  {
    baseDataTestId,
    optionListBorderBottom,
    placementChildMenu,
    overrides = {},
    index,
    ...rest
  }: MenuItemProps,
  ref,
): ReactElement {
  const {
    item: { 'data-testid': dataTestId },
  } = rest;

  const baseOverrides = useMenuItemOverrides({
    ref,
    dataTestId: dataTestId ?? `${baseDataTestId}__item--${index}`,
    optionListBorderBottom,
    placementChildMenu,
  });

  const mergedOverrides = useMemo(
    () => mergeOverridesDeep(baseOverrides, overrides),
    [baseOverrides, overrides],
  );

  return (
    <OptionList
      {...rest}
      renderHrefAsAnchor
      $isHighlighted={rest.item.selected || rest.$isHighlighted}
      overrides={mergedOverrides}
    />
  );
});
