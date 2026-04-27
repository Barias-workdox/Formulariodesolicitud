import type { SectionedCardProps } from './sectioned-card';
import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export interface StylesOptions {
  hasElevation: boolean;
  hasBody: boolean;
  overrides: SectionedCardProps['overrides'];
}

export const styles = {
  rootStyles: (
    theme: DesignSystemTheme,
    { hasElevation, overrides: { Root = {} } }: StylesOptions,
  ): StyleObject => ({
    display: 'flex',
    flexDirection: 'column',
    border: `1px solid ${theme.colors.neutralSubtle}`,
    boxShadow: hasElevation ? `0px 3px 0px 0px ${theme.colors.neutralSubtle}` : undefined,
    backgroundColor: theme.colors.bgBase,
    width: '100%',
    margin: '0 auto',
    marginBottom: theme.spacing.spacingMd,
    ...Root,
  }),
  headerStyles: (
    theme: DesignSystemTheme,
    { hasBody, overrides: { Header = {} } }: StylesOptions,
  ): StyleObject => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.spacingMd,
    gap: theme.spacing.spacingMd,
    borderBottom: hasBody ? `1px solid ${theme.colors.neutralSubtle}` : undefined,
    ...Header,
  }),
  headerTitleStyles: {
    flex: 1,
    flexGrow: 1,
    flexBasis: 0,
  } as StyleObject,
  headerTitleTextStyles: {
    wordBreak: 'break-word',
    margin: 0,
  } as StyleObject,
  bodyStyles: (
    theme: DesignSystemTheme,
    { overrides: { Body = {} } }: StylesOptions,
  ): StyleObject => ({
    padding: theme.spacing.spacingMd,
    flexGrow: 1,
    ...Body,
  }),
  footerStyles: (
    theme: DesignSystemTheme,
    { overrides: { Footer = {} } }: StylesOptions,
  ): StyleObject => ({
    borderTop: `1px solid ${theme.colors.neutralSubtle}`,
    padding: `${theme.spacing.spacingXs} ${theme.spacing.spacingMd}`,
    ...Footer,
  }),
};
