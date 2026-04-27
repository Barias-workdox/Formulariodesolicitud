import type { DesignSystemTheme } from '../../../../themes';
import type { StyleObject } from 'styletron-react';

export const reasonStyles = {
  wrapper: (theme: DesignSystemTheme): StyleObject => ({
    backgroundColor: theme.colors.neutralWashed,
    padding: theme.spacing.spacingXs,
    borderRadius: theme.borders.borderSm,
  }),
  title: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing.spacingXs,
  }),
  reasonText: (theme: DesignSystemTheme): StyleObject => ({
    margin: 0,
    lineHeight: theme.spacing.spacingXl,
    wordBreak: 'break-word',
  }),
};
