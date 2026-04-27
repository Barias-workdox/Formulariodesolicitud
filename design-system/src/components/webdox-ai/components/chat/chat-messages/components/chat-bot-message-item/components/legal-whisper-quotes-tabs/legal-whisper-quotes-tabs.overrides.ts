import { COMMON_HEIGHT_32 } from '@constants/common.constants';

import type { TabsCustomProps } from '@components/tabs';
import type { StyleOverrideProps } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

/**
 * Overrides for the LegalWhisperQuotes tabs
 */
export const tabsOverrides: TabsCustomProps['overrides'] = {
  Root: {
    style: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      overflow: 'hidden',
    },
  },
  TabBorder: {
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      backgroundColor: $theme.colors.neutralSubtle,
    }),
  },
  TabHighlight: {
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      backgroundColor: $theme.colors.brand,
    }),
  },
  TabList: {
    style: { padding: 0, margin: 0 },
  },
  Tab: {
    style: ({ $isActive, $theme }: StyleOverrideProps): StyleObject => ({
      ...$theme.typography.ParagraphSmall,
      margin: 0,
      height: COMMON_HEIGHT_32,
      flex: 1,
      padding: `0 ${$theme.spacing.spacingSm}`,
      whiteSpace: 'nowrap',
      fontWeight: '400',
      ...($isActive && {
        fontWeight: '500',
        letterSpacing: 0,
        color: $theme.colors.brand,
        backgroundColor: $theme.colors.bgBase,
        ':hover': {
          color: $theme.colors.brand,
          backgroundColor: $theme.colors.bgBase,
        },
        ':focus-visible': {
          color: $theme.colors.brand,
          backgroundColor: $theme.colors.bgBase,
        },
      }),
    }),
  },
  TabPanel: {
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      backgroundColor: $theme.colors.bgBase,
      padding: `${$theme.spacing.spacingXs} 0 0`,
    }),
  },
};
