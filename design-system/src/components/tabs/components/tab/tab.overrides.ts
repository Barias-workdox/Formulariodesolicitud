import type { ReactElement } from 'react';

import { DEFAULT_FONT } from '@tokens';

import { mergeOverridesDeep } from '../../../utils/baseui/helpers';

import type { StyleOverrideProps } from '../../../../themes';
import type { TabsProps } from '../../tabs';
import type { TabOverrides } from 'baseui/tabs-motion';
import type { StyleObject } from 'styletron-standard';

/**
 * Generates common styles for a Tab within the Tabs component.
 */
const commonTabStyles = ({ $theme, $isActive }: StyleOverrideProps): StyleObject => ({
  color: $isActive ? $theme.colors.brand : $theme.colors.neutralSubdued,
  backgroundColor: 'transparent',
  fontWeight: $isActive ? 500 : 400,
  letterSpacing: $isActive ? '-0.05px' : undefined,
  ...DEFAULT_FONT,
  ':hover': {
    background: 'transparent',
    color: $isActive ? $theme.colors.brand : $theme.colors.neutral,
  },
  ':focus-visible': {
    background: 'transparent',
    color: $isActive ? $theme.colors.brand : $theme.colors.neutral,
    outline: `1px solid ${$theme.colors.brand}`,
    outlineOffset: '-1px',
  },
});

/**
 * Generates common styles for a TabPanel within the Tabs component.
 */
const commonTabPanelStyles = ({ $theme, $orientation }: StyleOverrideProps): StyleObject => ({
  flex: 1,
  overflow: 'auto',
  backgroundColor: $theme.colors.neutralBase,
  ...($orientation === 'horizontal'
    ? {
        padding: $theme.spacing.spacingXl,
      }
    : {
        padding: 0,
      }),
});

/**
 * An object that provides default style overrides for the Tab and TabPanel within the Tabs component.
 * The default style aims to provide a clean and minimalist design. For the Tab, the styles focus on font size, colors, and state transitions.
 * For the TabPanel, common styles are applied which are suitable for most use cases.
 */
const defaultTabOverrides: TabOverrides = {
  Tab: {
    style: ({ $isActive, $theme }: StyleOverrideProps): StyleObject => ({
      ...commonTabStyles({ $theme, $isActive }),
      fontSize: $theme.typography.ParagraphXSmall.fontSize,
    }),
  },
  TabPanel: {
    style: commonTabPanelStyles,
  },
};

/**
 * An object providing style overrides for the Tab and TabPanel within the Tabs component, with a focus on medium-sized design.
 * Compared to the default style, the medium style has a larger height, increased padding, and a bigger font size for Tabs.
 * For the TabPanel, it inherits common styles which are suitable for most use cases.
 */
export const mediumTabOverrides: TabOverrides = {
  Tab: {
    style: ({ $theme, $isActive }: StyleOverrideProps): StyleObject => ({
      ...commonTabStyles({ $theme, $isActive }),
      height: '44px',
      gap: $theme.spacing.spacingXs,
      padding: `0 ${$theme.spacing.spacingMd}`,
      fontSize: $theme.typography.ParagraphMedium.fontSize,
    }),
  },
  TabPanel: {
    style: commonTabPanelStyles,
  },
  ArtworkContainer: {
    style: {
      margin: 0,
    },
  },
};

/**
 * A mapping object that links the kind of Tabs ('default' or 'medium') to their respective style overrides.
 * This object is useful when you want to easily switch between different design styles for the Tabs component.
 */
const overridesByKindMap: Record<TabsProps['kind'], TabOverrides> = {
  default: defaultTabOverrides,
  medium: mediumTabOverrides,
};

/**
 * This function retrieves style overrides for the Tab component based
 * on the provided kind ('default' or 'medium'). It merges the base
 * overrides with the overrides specific to the chosen kind, and
 * optionally hides the TabPanel if `showPanels` is set to false.
 */
export const getTabOverridesByKind = ({
  'data-testid': dataTestId,
  overrides = {},
  showPanels = true,
  kind,
}: {
  'data-testid'?: string;
  kind: TabsProps['kind'];
  overrides?: TabOverrides;
  showPanels?: boolean;
}): TabOverrides => {
  const baseOverrides: TabOverrides = {
    Tab: {
      props: {
        'data-testid': dataTestId,
      },
    },
  };

  const showPanelOverrides: TabOverrides = !showPanels
    ? {
        TabPanel: { component: (): ReactElement => null },
      }
    : {};

  return mergeOverridesDeep(baseOverrides, overridesByKindMap[kind], showPanelOverrides, overrides);
};
