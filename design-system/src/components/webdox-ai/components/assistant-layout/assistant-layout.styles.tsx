import { COMMON_HEIGHT_32 } from '@constants/common.constants';
import { themedStyled } from '@themes/utilities';

import type { TabsCustomProps } from '@components/tabs';
import type { StyleOverrideProps } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const StyledContainer = themedStyled('div', ({ $theme }) => ({
  boxSizing: 'border-box',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  overflow: 'hidden',
  backgroundColor: $theme.colors.bgBase,
}));

export const StyledHeader = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: $theme.spacing.spacingXs,
  padding: $theme.spacing.spacingMd,
}));

export const StyledBrainIconContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  minWidth: COMMON_HEIGHT_32,
  minHeight: COMMON_HEIGHT_32,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: $theme.spacing.spacing2xs,
  background: $theme.colors.bgBrandAI,
}));

export const StyledChatContainer = themedStyled('div', () => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  overflow: 'hidden',
  zIndex: 1,
}));

/**
 * Overrides for the AssistantLayout tabs
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
  TabHighlight: {
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      backgroundColor: $theme.colors.brand,
    }),
  },
  TabBorder: {
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      backgroundColor: $theme.colors.neutralDepressed,
      margin: `0 ${$theme.spacing.spacingMd}`,
    }),
  },
  TabList: {
    style: {
      padding: 0,
      margin: 0,
    },
  },
  TabBar: {
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      padding: `0 ${$theme.spacing.spacingMd}`,
    }),
  },
  Tab: {
    style: ({ $isActive, $theme }: StyleOverrideProps): StyleObject => ({
      margin: 0,
      flex: 1,
      padding: `${$theme.spacing.spacingSm} 0`,
      fontWeight: '400',
      ...($isActive && {
        letterSpacing: 0,
        color: $theme.colors.brand,
        ':hover': {
          color: $theme.colors.brand,
        },
        ':focus-visible': {
          color: $theme.colors.brand,
          outlineColor: $theme.colors.brand,
        },
      }),
    }),
  },
  TabPanel: {
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      backgroundColor: $theme.colors.bgBase,
      padding: 0,
    }),
  },
};
