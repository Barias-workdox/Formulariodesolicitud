import type { DesignSystemTheme } from '../../../../themes';
import type { StyleObject } from 'styletron-react';

type StyleOptions = {
  documentUploaded?: boolean;
};

export const subtasksStyles = {
  wrapperStyles: (theme: DesignSystemTheme, { documentUploaded }: StyleOptions): StyleObject => ({
    padding: theme.spacing.spacingMd,
    border: `1px solid ${theme.colors.neutralSubtle}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.spacingMd,
    backgroundColor: theme.colors.bgBase,
    borderRadius: theme.borders.borderSm,
    cursor: 'default',
    ...(documentUploaded && {
      backgroundColor: theme.colors.brandWashed,
      border: 'none',
      cursor: 'pointer',
    }),
  }),
  documentTitle: (theme: DesignSystemTheme, { documentUploaded }: StyleOptions): StyleObject => ({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    margin: 0,
    textDecoration: 'none',
    color: theme.colors.neutral,
    ...(documentUploaded && {
      textDecoration: 'underline',
    }),
  }),
  titleWrapper: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing.spacingMd,
  }),
};
