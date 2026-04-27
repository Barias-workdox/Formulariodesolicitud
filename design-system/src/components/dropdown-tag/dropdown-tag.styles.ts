import { ChevronDown } from '@carbon/icons-react';

import { Text } from '@components/text';
import { noop } from '@utils/noop';

import type {
  ColorGroup,
  DropdownTagOverridesParams,
  SupportedKind,
  TagColorsByKind,
} from './dropdown-tag.interfaces';
import type { MenuOverrides } from 'baseui/menu';
import type { TagOverrides } from 'baseui/tag';
import type { StyleObject } from 'styletron-react';

/**
 * The border color setup for each kind based in the theme colors.
 */
const allColorsByKind: TagColorsByKind = {
  success: {
    borderColor: 'positive',
  },
  error: {
    borderColor: 'negative',
  },
  default: {
    borderColor: 'neutralSubtle',
  },
};

/** Reusable utility to get the selected color by kind */
export const getColors = (kind: SupportedKind): ColorGroup =>
  allColorsByKind[kind] ?? allColorsByKind['default'];

/** Styled DropdownTag overrides */
export const dropdownTagOverrides = ({
  dataTestId,
  kind,
  disabled,
}: DropdownTagOverridesParams): TagOverrides => {
  const { borderColor } = getColors(kind);

  return {
    Root: {
      style: ({ $theme, $disabled }): StyleObject => ({
        margin: 0,
        backgroundColor: $disabled ? $theme.colors.neutralSubtle : $theme.colors.bgBase,
        border: '1px solid',
        borderColor: $disabled ? $theme.colors.neutralSubtle : $theme.colors[borderColor],
        cursor: $disabled ? 'not-allowed' : 'pointer',
        transition: 'all .25s ease-in-out',
        ':hover': {
          borderColor: $theme.colors.neutralSubtle,
          backgroundColor: $theme.colors.neutralWashed,
        },
        ':active': {
          borderColor: $theme.colors.neutral,
          backgroundColor: $theme.colors.bgBase,
        },
      }),
      props: {
        'data-testid': dataTestId,
        $disabled: disabled,
      },
    },
    Text: {
      props: {
        variant: 'microCopy',
        margin: 0,
        fontWeight: '400',
        $disabled: disabled,
      },
      component: Text,
      style: ({ $theme, $disabled }): StyleObject => ({
        display: 'flex',
        alignItems: 'center',
        color: $disabled ? $theme.colors.neutralDepressed : $theme.colors.neutral,
        maxWidth: '100%',
        textWrap: 'nowrap',
      }),
    },
    ActionIcon: {
      component: ChevronDown,
      props: { size: 12 },
    },
    Action: {
      style: ({ $theme }): StyleObject => ({
        color: $theme.colors.neutral,
      }),
      props: {
        onClick: noop,
      },
    },
  };
};

/** Styled Menu overrides for DropdownTag component */
export const menuOverrides: MenuOverrides = {
  List: {
    style: {
      overflow: 'auto',
      maxHeight: '250px',
    } as StyleObject,
  },
};
