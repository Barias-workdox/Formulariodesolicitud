import type { TabsOrientationType, TabsProps } from './tabs';
import type { DesignSystemTheme, StyleOverrideProps } from '../../themes';
import type { TabsOverrides } from 'baseui/tabs-motion';
import type { StyleObject } from 'styletron-standard';

/**
 * An object containing style overrides for the Tabs component
 * in its default appearance. The default appearance uses a
 * full-width layout with a flexible container, suitable
 * for standard use cases.
 */
export const defaultTabsOverrides: TabsOverrides = {
  Root: {
    style: ({ $orientation }): StyleObject => ({
      flex: 1,
      display: 'flex',
      overflow: 'hidden',
      ...($orientation === 'horizontal' ? { flexDirection: 'column' } : { flex: undefined }),
    }),
  },
  TabList: {
    style: ({ $orientation, $theme }: StyleOverrideProps): StyleObject => ({
      backgroundColor: 'transparent',
      padding: `0 ${$theme.spacing.spacingXl}`,
      marginBottom: '-1px',
      ...($orientation === 'vertical' && { marginRight: '-2px' }),
    }),
  },
  TabBorder: {
    style: ({ $theme, $orientation }: StyleOverrideProps): StyleObject => ({
      backgroundColor: $orientation === 'horizontal' ? $theme.colors.divisionLine : 'transparent',
      ...($orientation === 'horizontal' ? { height: '1px' } : { width: '1px' }),
    }),
  },
  TabHighlight: {
    style: ({
      $theme,
      $orientation,
    }: {
      $theme: DesignSystemTheme;
      $orientation: TabsOrientationType;
    }): StyleObject => ({
      backgroundColor: $theme.colors.brand,
      ...($orientation === 'horizontal' ? { height: '1px' } : { width: '1px', right: '1px' }),
    }),
  },
};

/**
 * An object containing style overrides for the Tabs component
 * in its medium appearance. The medium appearance uses a more
 * compact layout with less padding and a fixed container,
 * suitable for use cases that require a denser UI.
 */
export const mediumTabsOverrides: TabsOverrides = {
  Root: {
    style: ({ $orientation }): StyleObject => ({
      flexShrink: 0,
      display: $orientation === 'horizontal' ? 'inline-block' : 'inline-flex',
    }),
  },
  TabList: {
    style: ({ $orientation }: StyleOverrideProps) => ({
      padding: 0,
      marginBottom: $orientation === 'horizontal' ? '-1px' : 0,
      marginRight: 0,
    }),
  },
  TabBorder: {
    style: ({ $theme, $orientation }: StyleOverrideProps) => ({
      display: $orientation === 'horizontal' ? 'block' : 'none',
      backgroundColor: $theme.colors.divisionLine,
      ...($orientation === 'horizontal' ? { height: '1px' } : { width: '1px' }),
    }),
  },
  TabHighlight: {
    style: ({ $theme, $orientation }: StyleOverrideProps) => ({
      backgroundColor: $theme.colors.brand,
      ...($orientation === 'horizontal' ? { height: '1px' } : { width: '1px' }),
    }),
  },
};

/**
 * A mapping object that associates different 'kind' values
 * to their respective style overrides for the Tabs component.
 * This allows for easy switching between different appearances
 * of the Tabs component based on the 'kind' prop.
 */
export const overridesByKindMap: Record<TabsProps['kind'], TabsOverrides> = {
  default: defaultTabsOverrides,
  medium: mediumTabsOverrides,
};
