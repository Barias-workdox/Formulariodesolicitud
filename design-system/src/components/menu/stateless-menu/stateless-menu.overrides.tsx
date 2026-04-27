import { forwardRef, type ReactNode } from 'react';

import { getItemIndex } from '@utils/baseui.utils';

import { PLACEMENT } from '../../popover';
import { MenuItem, getItemLabel } from '../components';

import type { StatelessMenuProps } from './stateless-menu';
import type { DesignSystemTheme } from '../../../themes';
import type { MenuOverrides, OptionListProps } from 'baseui/menu';
import type { StyleObject } from 'styletron-standard';

type OptionComponentProps = Pick<
  StatelessMenuProps,
  | 'dataTestId'
  | 'items'
  | 'itemLabelKey'
  | 'itemLabelTemplate'
  | 'optionListBorderBottom'
  | 'placementChildMenu'
> &
  OptionListProps;

/**
 * Customized OptionList component that adds a data-testid attribute to the list item.
 */
const OptionComponent = forwardRef(function OptionComponent(
  { dataTestId, items, itemLabelKey, itemLabelTemplate, ...rest }: OptionComponentProps,
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
      baseDataTestId={dataTestId}
      index={index}
      getItemLabel={(params): ReactNode =>
        getItemLabel({ ...params, itemLabelKey, itemLabelTemplate })
      }
    />
  );
});

/**
 * Gets the base overrides for the StatelessMenu component with options to customize it.
 */
export const getBaseOverrides = ({
  dataTestId = 'menu',
  items,
  itemLabelKey = 'label',
  itemLabelTemplate,
  optionListBorderBottom = true,
  placementChildMenu = PLACEMENT.rightBottom,
  menuWidth,
}: Partial<StatelessMenuProps> = {}): MenuOverrides => ({
  OptgroupHeader: {
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
    style: (): StyleObject => ({
      padding: 0,
      minWidth: menuWidth,
      boxShadow: 'none',
      ':focus': {
        outline: 'none',
      },
    }),
  },
  Option: {
    props: {
      dataTestId,
      items,
      itemLabelKey,
      itemLabelTemplate,
      optionListBorderBottom,
      placementChildMenu,
    },
    component: OptionComponent,
  },
});
