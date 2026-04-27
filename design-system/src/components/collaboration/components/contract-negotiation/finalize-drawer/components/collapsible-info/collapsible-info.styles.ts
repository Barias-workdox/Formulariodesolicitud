import type { CollapsibleBoxProps } from '@components/collapsible-box';
import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

/** Custom collapsible box overrides */
export const collapsibleBoxOverrides = (
  theme: DesignSystemTheme,
): CollapsibleBoxProps['overrides'] => ({
  Title: { style: { ...theme.typography.ParagraphSmall } },
  HeaderContainer: {
    style: {
      padding: `${theme.spacing.spacingXs} ${theme.spacing.spacingXl}`,
      borderBottom: `1px solid ${theme.colors.neutralWashed}`,
    },
  },
});

export const styles = {
  collapsibleContainerStyles: (theme: DesignSystemTheme): StyleObject => ({
    padding: theme.spacing.spacingXl,
  }),
  statusContainerStyles: (theme: DesignSystemTheme): StyleObject => ({
    borderBottom: `1px solid ${theme.colors.neutralWashed}`,
    paddingBottom: theme.spacing.spacingMd,
  }),
  lastEditionContainerStyles: (theme: DesignSystemTheme): StyleObject => ({
    borderBottom: `1px solid ${theme.colors.neutralWashed}`,
    paddingBottom: theme.spacing.spacingMd,
    paddingTop: theme.spacing.spacingMd,
  }),
  approvalsContainerStyles: (theme: DesignSystemTheme): StyleObject => ({
    paddingTop: theme.spacing.spacingMd,
  }),
  thirdPartiesContainerStyles: (theme: DesignSystemTheme): StyleObject => ({
    paddingTop: theme.spacing.spacingXs,
    display: 'grid',
    gap: theme.spacing.spacingMd,
  }),
  titleTextStyles: (theme: DesignSystemTheme): StyleObject => ({
    ...theme.typography.LabelXSmall,
    paddingBottom: theme.spacing.spacingXs,
  }),
};
