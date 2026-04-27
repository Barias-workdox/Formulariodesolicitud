import { forwardRef, type ReactElement } from 'react';

import { Close } from '@carbon/icons-react';
import { StyledDropdownListItem } from 'baseui/select';

import { DEFAULT_FONT } from '@tokens';
import { getItemIndex } from '@utils/baseui.utils';

import { StyledRoot } from '../input/input';

import { ArrowIcon } from './components';
import { SelectDropdownContainer } from './components/select-dropdown-container';
import { SelectOptgroupHeader } from './components/select-optgroup-header';

import type { GetOverridesParams } from './select.interfaces';
import type { StyleOverrideProps } from '@themes/theme.interfaces';
import type { SelectOverrides, Option } from 'baseui/select';
import type { TagOverrides } from 'baseui/tag';
import type { StyleObject } from 'styletron-standard';

/**
 * Customized DropdownListItem component that adds a data-testid attribute to the list item.
 */
const DropdownListItem = forwardRef<
  HTMLLIElement,
  { dataTestId: string; options: Option[]; item: Option }
>(function DropdownListItem({ dataTestId, options, ...props }, ref): JSX.Element {
  const {
    item: { id },
  } = props;
  const index = getItemIndex(options, id);
  const itemDataTestId = `${dataTestId}__item-${index ?? id}`;

  return (
    <StyledDropdownListItem
      ref={ref}
      data-testid={itemDataTestId}
      {...props}
    />
  );
});

/**
 * Get the select overrides customized by the Design System theme and kind
 */
export const getOverrides = ({
  kind,
  zIndex,
  dataTestId,
  name,
  isBorderless,
  isOpen = false,
  options,
}: GetOverridesParams): SelectOverrides => ({
  Root: {
    props: {
      'data-testid': dataTestId,
    },
  },
  DropdownContainer: {
    component: SelectDropdownContainer,
  },
  Dropdown: {
    style: {
      padding: 0,
      boxShadow: 'none',
    },
  },
  DropdownListItem: {
    style: ({ $isHighlighted, $theme }): StyleObject => ({
      padding: '10px',
      color: $isHighlighted ? $theme.colors.neutral : $theme.colors.neutralDepressed,
      borderBottomWidth: '1px',
      borderBottomColor: $theme.colors.divisionLine,
      borderBottomStyle: 'solid',
      ...DEFAULT_FONT,
      ':last-child': {
        borderBottomColor: 'transparent',
      },
      ...(isBorderless && {
        ...$theme.typography.ParagraphMedium,
        border: 'none',
      }),
    }),
    component: DropdownListItem,
  },
  ControlContainer: {
    component: StyledRoot,
    props: {
      $kind: kind,
    },
    style: ({ $disabled, $size }): StyleObject => ({
      cursor: $disabled ? 'not-allowed' : 'auto',
      ...((kind === 'borderless' || isBorderless) && {
        border: 'none',
      }),
      ...($size === 'default' && {
        minHeight: '44px',
      }),
    }),
  },
  ValueContainer: {
    props: {
      ...(dataTestId && { 'data-testid': `${dataTestId}-value` }),
    },
    style: ({ $size, $theme, $disabled, $isFocused }: StyleOverrideProps): StyleObject => ({
      display: 'flex',
      alignItems: 'center',
      gap: $theme.spacing.spacingXs,
      ...DEFAULT_FONT,
      backgroundColor:
        kind === 'white' || $isFocused
          ? $theme.colors.bgBase
          : $theme.colors.neutralBase || $theme.colors.neutralWashed,
      color: $disabled ? $theme.colors.neutralDepressed : $theme.colors.neutralStrong,
      ...($size === 'compact'
        ? $theme.typography.ParagraphXSmall
        : $theme.typography.ParagraphSmall),
      ...(kind === 'borderless' && {
        fontWeight: 500,
      }),
      ...(isBorderless && {
        ...$theme.typography.ParagraphMedium,
      }),
    }),
  },
  SingleValue: {
    style: { height: 'auto' },
  },
  Tag: {
    props: {
      overrides: {
        Root: {
          style: ({ $theme, $disabled }: StyleOverrideProps): StyleObject => ({
            backgroundColor: $disabled ? $theme.colors.neutralSubtle : $theme.colors.peaceSubtle,
            color: $disabled ? $theme.colors.neutralDepressed : $theme.colors.brandStrong,
            fontSize: '12px',
            display: 'flex',
            alignItems: 'center',
            lineHeight: 'normal',
            margin: 0,
            ...DEFAULT_FONT,
          }),
        },
        ActionIcon: () => <Close size={12} />,
      } as TagOverrides,
    },
  },
  Popover: {
    props: {
      overrides: {
        Body: {
          style: ({ $theme }): StyleObject => ({
            boxShadow: $theme.lighting.shadowDefault,
            ...(kind === 'borderless' && { marginTop: '12px' }),
            zIndex,
          }),
        },
      },
    },
  },
  Input: {
    props: {
      'data-testid': `${dataTestId}__input`,
      ...(name && { name }),
    },
  },
  Placeholder: {
    style: ({ $theme, $disabled }): StyleObject => ({
      marginLeft: `-${$theme.spacing.spacingXs}`,
      ...DEFAULT_FONT,
      ...(isBorderless && {
        color: $disabled ? $theme.colors.neutralDepressed : $theme.colors.neutralSubdued,
        ...$theme.typography.ParagraphMedium,
      }),
    }),
  },
  OptionContent: {
    style: ({ $theme, $selected }): StyleObject => ({
      ...(isBorderless &&
        $selected && {
          color: $theme.colors.neutralStrong,
          fontWeight: 'bold',
        }),
    }),
  },
  SelectArrow: {
    props: {
      overrides: {
        Svg: {
          component: function ArrowIconWrappper(): ReactElement {
            return (
              <ArrowIcon
                isOpen={isOpen}
                isBorderless={isBorderless}
              />
            );
          },
        },
      },
    },
  },
  ClearIcon: {
    component: () => <></>,
  },
  StatefulMenu: {
    props: {
      overrides: {
        EmptyState: {
          style: ({ $theme }) => ({
            color: $theme.colors.neutralSubdued,
          }),
        },
        OptgroupHeader: {
          component: ({ children, ...headerProps }): JSX.Element => {
            return (
              <SelectOptgroupHeader
                count={options?.[children].length}
                isBorderless={isBorderless}
                {...headerProps}
              >
                {children}
              </SelectOptgroupHeader>
            );
          },
        },
      },
    },
  },
});
