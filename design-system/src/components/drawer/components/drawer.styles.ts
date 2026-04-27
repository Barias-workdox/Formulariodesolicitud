import { DEFAULT_FONT } from '@tokens';

import type { DesignSystemTheme } from '../../../themes';
import type { DrawerOverrides } from 'baseui/drawer';
import type { StyleObject } from 'styletron-standard';

export const drawerHeaderStyles = {
  headerContainerStyles: (): StyleObject => ({
    display: 'grid',
    gridAutoFlow: 'column',
    columnGap: '10px',
    alignItems: 'center',
    fontWeight: 500,
    ...DEFAULT_FONT,
  }),
};

export const drawerFooterStyles = {
  footerContainerStyles: (
    $theme: DesignSystemTheme,
    { overrides = {} }: { overrides?: StyleObject },
  ): StyleObject => ({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: $theme.spacing.spacingMd,
    borderTop: `1px solid ${$theme.colors.neutralSubtle}`,
    gap: $theme.spacing.spacingXs,
    marginTop: 'auto',
    ...overrides,
  }),
};

export const drawerBodyStyles = {
  bodyContainerStyles: (
    theme: DesignSystemTheme,
    { padding, overrides = {} }: { padding?: StyleObject['padding']; overrides?: StyleObject },
  ): StyleObject => ({
    padding: padding ?? theme.spacing.spacingMd,
    overflowY: 'auto',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    ...overrides,
  }),
};

/**
 * Returns the overrides for the drawer component.
 */
export const drawerOverrides = ({
  zIndex,
  overrides = {},
}: {
  zIndex?: number;
  overrides?: DrawerOverrides;
}): DrawerOverrides => ({
  Root: {
    style: {
      // Required to be over DocumentViewerModal, which has zIndex: 4
      zIndex,
    },
  },
  Close: {
    style: {
      display: 'none',
    },
  },
  DrawerBody: {
    style: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      height: '100%',
      margin: 0,
    },
  },
  ...overrides,
});
