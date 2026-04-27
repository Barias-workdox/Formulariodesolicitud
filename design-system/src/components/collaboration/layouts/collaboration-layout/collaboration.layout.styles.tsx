import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const HEADER_HEIGHT = '58px';

/**
 * Total height obtained by adding the header height (58px) and the banner height (58px).
 */
export const HEADER_WITH_BANNER_HEIGHT = '116px';

export const styles = {
  layoutStyles: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
  } as StyleObject,
  headerStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    height: HEADER_HEIGHT,
    maxHeight: HEADER_HEIGHT,
    borderBottom: `1px solid ${theme.colors.divisionLine}`,
    padding: `0 ${theme.spacing.spacingMd}`,
  }),
  contentStyles: (
    theme: DesignSystemTheme,
    { showBanner = false }: { showBanner?: boolean },
  ): StyleObject => ({
    display: 'flex',
    flex: 1,
    maxHeight: `calc(100vh - ${showBanner ? HEADER_WITH_BANNER_HEIGHT : HEADER_HEIGHT})`,
  }),
};
