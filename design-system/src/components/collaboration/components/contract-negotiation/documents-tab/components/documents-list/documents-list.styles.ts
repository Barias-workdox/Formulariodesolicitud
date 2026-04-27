import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { HeadingOverrides, ListOverrides } from 'baseui/list';
import type { StyleObject } from 'styletron-react';

const LIST_HEADING_MIN_HEIGHT = '46px';
const DOCUMENT_NAME_MAX_HEIGHT = '44px';

export const styles = {
  listStyles: (theme: DesignSystemTheme): StyleObject => ({
    margin: 0,
    padding: 0,
    border: `1px solid ${theme.colors.neutralWashed}`,
    borderRadius: theme.borders.borderSm,
    borderBottom: 'unset',
    display: 'flex',
    flexDirection: 'column',
  }),
  documentInfoStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.spacingXs,
  }),
  documentNameTextStyles: (): StyleObject => ({
    wordBreak: 'break-all',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    maxHeight: DOCUMENT_NAME_MAX_HEIGHT,
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
  }),
};

/** Document List item overrides */
export const documentsListItemOverrides = (
  theme: DesignSystemTheme,
  { dataTestId, isSelected }: { dataTestId: string; isSelected: boolean },
): ListOverrides => ({
  Root: {
    props: {
      'data-testid': dataTestId,
    },
    style: {
      margin: 0,
      minHeight: 'auto',
      ...(isSelected && { background: theme.colors.neutralWashed }),
      ':hover': {
        background: theme.colors.neutralWashed,
      },
    },
  },
  Content: {
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: theme.spacing.spacingXs,
      minHeight: 'auto',
      padding: theme.spacing.spacingMd,
      borderBottom: `1px solid ${theme.colors.neutralWashed}`,
    },
  },
});

/** Document List heading overrides */
export const documentsListHeadingOverrides = (theme: DesignSystemTheme): HeadingOverrides => ({
  Root: {
    style: {
      width: 'auto',
      borderBottom: `1px solid ${theme.colors.neutralWashed}`,
      minHeight: LIST_HEADING_MIN_HEIGHT,
    },
  },
  HeadingContainer: {
    style: {
      margin: 0,
      padding: 0,
    },
  },
  Content: {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: LIST_HEADING_MIN_HEIGHT,
      padding: `0 ${theme.spacing.spacingMd}`,
      margin: 0,
    },
  },
});
