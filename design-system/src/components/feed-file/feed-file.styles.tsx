import { themedStyled } from '@themes/utilities';

import type { DesignSystemColorType } from '@themes/theme.interfaces';
import type { PopoverOverrides } from 'baseui/popover';
import type { StyleObject } from 'styletron-react';

/**
 * Styled container used to wrap and display a list of `FeedFile` components
 */
export const StyledFeedFileContainer = themedStyled('ul', ({ $theme }) => ({
  display: 'flex',
  flexFlow: 'row wrap',
  gap: $theme.spacing.spacingXs,
  overflowX: 'auto',
  backgroundColor: $theme.colors.neutralWashed,
  padding: $theme.spacing.spacingMd,
  margin: 0,
  maxHeight: '355px',
}));

export const StyledFeedFile = themedStyled<'li', { $backgroundColor?: DesignSystemColorType }>(
  'li',
  ({ $theme, $backgroundColor = 'bgBase' }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: $theme.spacing.spacingXs,
    gap: $theme.spacing.spacingXs,
    width: '100%',
    backgroundColor: $theme.colors[$backgroundColor],
    boxSizing: 'border-box',
  }),
);

export const StyledFeedFileInfo = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  ...$theme.typography.ParagraphSmall,
  color: $theme.colors.neutralSubdued,
  gap: $theme.spacing.spacingXs,
  lineHeight: 0,
  width: '100%',
}));

export const StyledFeedFileName = themedStyled('div', () => ({
  flex: 1,
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  whiteSpace: 'nowrap',
}));

export const StyledPathAndNameContainer = themedStyled('div', () => ({
  display: 'flex',
  minWidth: 0,
}));

export const StyledPathContainer = themedStyled('div', () => ({
  flexShrink: 1,
  minWidth: 0,
}));

export const StyledNameContainer = themedStyled('div', () => ({
  flexShrink: 0,
}));

export const styles = {
  documentNameStyles: ($theme): StyleObject => ({
    margin: 0,
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: $theme.colors.neutralSubdued,
  }),
};

/**
 * Generates overrides for the body style of a file tooltip component.
 */
export const feedFileTooltipOverrides = (): PopoverOverrides => ({
  Body: {
    style: {
      maxWidth: '284px',
    },
  },
});
