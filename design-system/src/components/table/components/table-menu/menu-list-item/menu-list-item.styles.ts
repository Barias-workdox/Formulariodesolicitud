import { DEFAULT_FONT } from '@tokens';

import type { DesignSystemTheme } from '../../../../../themes';
import type { ListOverrides } from 'baseui/list';
import type { StyleObject } from 'styletron-react';

/**
 * Returns the overrides for the ListItem component in the table menu.
 */
export const listItemOverrides = (theme: DesignSystemTheme, disabled: boolean): ListOverrides => ({
  Root: {
    style: {
      cursor: disabled ? 'not-allowed' : 'pointer',
      background: disabled ? theme.colors.neutralWashed : theme.colors.bgBase,
      borderBottom: `1px solid ${theme.colors.divisionLine}`,
      paddingTop: theme.spacing.spacingXs,
      paddingBottom: theme.spacing.spacingXs,
      ...DEFAULT_FONT,
    },
  },
  Content: {
    style: {
      minHeight: 0,
      border: 0,
    },
  },
  ArtworkContainer: {
    style: {
      color: theme.colors.neutralSubdued,
      width: '3rem',
    },
  },
});

/**
 * Returns the style object for the caption (label) of a menu list item.
 */
export const listItemCaptionStyles = (
  theme: DesignSystemTheme,
  disabled: boolean,
): StyleObject => ({
  margin: 0,
  color: disabled ? theme.colors.neutralDepressed : theme.colors.neutralSubdued,
});
