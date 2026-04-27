import type { StatefulTabsProps } from '@components/tabs';
import type { SpacingKey } from '@tokens';
import type { Typography } from 'baseui/themes';

export interface GetHeaderTabOverridesProps {
  paddingSize: SpacingKey;
  tabPaddingSize: SpacingKey;
  topPaddingSize: SpacingKey;
  tabFontSize: keyof Typography;
}

/**
 * Header Tab Overrides
 */
export const getHeaderTabOverrides = ({
  paddingSize,
  tabPaddingSize,
  topPaddingSize,
  tabFontSize,
}: GetHeaderTabOverridesProps) =>
  ({
    TabList: {
      style: ({ $theme }) => ({
        padding: `${$theme.spacing[topPaddingSize]} ${$theme.spacing[paddingSize]} 0 ${$theme.spacing[paddingSize]} `,
      }),
    },
    Tab: {
      style: ({ $theme }) => ({
        paddingTop: $theme.spacing[tabPaddingSize],
        paddingBottom: $theme.spacing[tabPaddingSize],
        ...$theme.typography[tabFontSize],
        fontWeight: 500,
      }),
    },
    TabPanel: {
      style: ({ $theme, children }) => ({
        /**
         * render padding only if there are children to avoid extra space
         */
        padding: children ? $theme.spacing[paddingSize] : 0,
      }),
    },
  }) as const satisfies StatefulTabsProps['overrides'];
