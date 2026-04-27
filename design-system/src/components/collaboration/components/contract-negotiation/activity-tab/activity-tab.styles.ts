import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const styles = {
  activityTabContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  } as StyleObject,
  tabMainContainer: {
    height: '100%',
    overflow: 'auto',
  } as StyleObject,
  tabContentStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    flexDirection: 'column',
    padding: `${theme.spacing.spacingMd} ${theme.spacing.spacingMd} 0`,
    overflowY: 'auto',
    gap: theme.spacing.spacingXl,
  }),
  approversContainerStyles: (theme: DesignSystemTheme): StyleObject => ({
    padding: `${theme.spacing.spacingXl} ${theme.spacing.spacingMd}`,
  }),
  selectContainerStyles: (theme: DesignSystemTheme): StyleObject => ({
    paddingTop: theme.spacing.spacingXs,
    paddingBottom: theme.spacing.spacingMd,
  }),
  thirdPartyGridContainerStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'grid',
    gap: theme.spacing.spacingXl,
  }),
};
