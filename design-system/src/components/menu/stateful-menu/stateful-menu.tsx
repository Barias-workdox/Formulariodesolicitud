import { forwardRef, type ReactNode } from 'react';

import { StatefulMenu as StatefulMenuBase } from 'baseui/menu';

import { COMMON_FLOATING_MAX_HEIGHT } from '@constants/common.constants';
import { getItemIndex } from '@utils/baseui.utils';

import { PLACEMENT } from '../../popover';
import { useCss } from '../../utils/hooks/use-css';
import { MenuItem, getItemLabel } from '../components';
import { menuItemListItemStyles } from '../components/menu-item.styles';

import type { DesignSystemTheme } from '../../../themes';
import type { MenuCommonProps } from '../menu.interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';
import type {
  Items,
  OptionListProps,
  StatefulMenuProps as StatefulMenuBaseProps,
} from 'baseui/menu';
import type { StyleObject } from 'styletron-standard';

export type StatefulMenuProps = WithTestId & StatefulMenuBaseProps & MenuCommonProps;

/**
 * Customized OptionList component that adds a data-testid attribute to the list item.
 */
const OptionComponent = forwardRef(function OptionComponent(
  { dataTestId, items, ...rest }: OptionListProps & { dataTestId: string; items: Items },
  ref,
): ReactNode {
  const {
    item: { id },
  } = rest;

  const index = getItemIndex(items, id);

  return (
    <MenuItem
      ref={ref}
      {...rest}
      index={index}
      baseDataTestId={dataTestId}
    />
  );
});

/**
 * Stateful Menu to nest various hierarchical navigation, features, or settings.
 * Each menu item can include a label, startEnhancer and endEnhancer. It can take
 * several status: disabled, selected or isLoading.
 * To identify each item is necessary to include it an id.
 *
 * @example
 * Here is a simple example:
 * ```
 * { id: "option1",
 *    label: "Option 1",
 *    isLoading: false,
 *    disabled: false,
 *    selected: true,
 *    startEnhancer: <Icon />,
 *    endEnhancer: <Icon />,
 * }
 * ```
 * To build a nested menu is necessary wrap the first menu with the component NestedMenu
 * provided by baseui library and define the getChildMenu on the menu option using the overrides
 * to return a StatefulMenu.
 */
export const StatefulMenu = ({
  dataTestId = 'menu',
  itemLabelKey = 'label',
  itemLabelTemplate,
  optionListBorderBottom = true,
  placementChildMenu = PLACEMENT.rightBottom,
  menuWidth: rawMenuWidth,
  overrides = {},
  ...rest
}: StatefulMenuProps): JSX.Element => {
  const { theme } = useCss();
  const { items } = rest;

  const menuWidth = typeof rawMenuWidth === 'number' ? `${rawMenuWidth}px` : rawMenuWidth;

  return (
    <StatefulMenuBase
      {...rest}
      overrides={{
        ...overrides,
        OptgroupHeader: {
          ...overrides.OptgroupHeader,
          style: ({ $theme }: { $theme: DesignSystemTheme }): StyleObject => ({
            ...$theme.typography.ParagraphSmall,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            padding: $theme.spacing.spacingMd,
            color: $theme.colors.neutral,
            fontWeight: 500,
            borderBottom: !optionListBorderBottom ? `1px solid ${$theme.colors.divisionLine}` : '',
          }),
        },
        List: {
          ...overrides?.List,
          style: (): StyleObject => ({
            padding: 0,
            minWidth: menuWidth,
            maxHeight: COMMON_FLOATING_MAX_HEIGHT,
            boxShadow: 'none',
            listStyleType: 'none',
            ':focus': {
              outline: 'none',
            },
            ...overrides.List?.style,
          }),
        },
        Option: {
          props: {
            dataTestId,
            items,
            optionListBorderBottom,
            placementChildMenu,
            getItemLabel: (params): ReactNode =>
              getItemLabel({ ...params, itemLabelKey, itemLabelTemplate }),
            ...overrides.Option?.props,
          },
          style: menuItemListItemStyles({ theme, optionListBorderBottom }),
          ...overrides.Option?.style,
          /**
           * This component override sometimes doesn't work, but it is correctly implemented
           * based on baseui documentation. To avoid the problem, just send the override with
           * component: undefined from the consumer and use the Option props and styles overrides only.
           *
           * Always try to use this implementation and use the component: undefined override only as a
           * last resort
           */
          component: OptionComponent,
          ...overrides.Option?.component,
        },
      }}
    />
  );
};
