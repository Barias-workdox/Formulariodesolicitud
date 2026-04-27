import type { TitleLayoutProps } from '@components/layouts';
import type { DesignSystemTheme } from '@themes/index';
import type { StyleObject } from 'styletron-react';

const HEADER_MIN_HEIGHT = '74px';

export const styles = {
  containerStyles: (): StyleObject => ({
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  }),
  contentStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    margin: theme.spacing.spacingMd,
    border: `1px solid ${theme.colors.neutralSubtle}`,
    borderRadius: theme.borders.borderSm,
  }),
  headerStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: HEADER_MIN_HEIGHT,
    borderBottom: `solid 1px ${theme.colors.neutralSubtle}`,
    padding: `0 ${theme.spacing.spacingXl}`,
  }),
  headerRightContainerStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.spacingMd,
  }),
  footerStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    borderTop: `solid 1px ${theme.colors.neutralSubtle}`,
    padding: theme.spacing.spacingMd,
    gap: theme.spacing.spacingXs,
  }),
};

/** Title Layout Overrides */
export const titleLayoutOverrides = (): TitleLayoutProps['overrides'] => ({
  Root: {
    maxWidth: '50%',
  },
});
