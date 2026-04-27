import { useCss } from '@components/utils/hooks/use-css';

import type { SectionedCardProps } from '@components/layouts';
import type { StyleOverrideProps } from '@themes/theme.interfaces';
import type { SelectOverrides } from 'baseui/select';
import type { StyleObject } from 'styletron-react';

interface UseSectionedCardOverridesReturn {
  getSectionedCardOverrides(params?: {
    maxHeight?: string;
    fullHeight?: boolean;
  }): SectionedCardProps['overrides'];
}

/** Custom hook for generating overrides for SectionedCard component. */
export const useSectionedCardOverrides = (): UseSectionedCardOverridesReturn => {
  const { theme } = useCss();

  /** Retrieves overrides for the SectionedCard component within Tabs. */
  const getSectionedCardOverrides: UseSectionedCardOverridesReturn['getSectionedCardOverrides'] = ({
    fullHeight = false,
    maxHeight = 'unset',
  } = {}) => {
    const flexValue = fullHeight ? 1 : 'unset';

    return {
      Header: {
        padding: theme.spacing.spacingXs,
      },
      Root: {
        margin: 0,
        width: 'unset',
        flex: flexValue,
      },
      Body: {
        maxHeight,
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing.spacingXs,
        padding: theme.spacing.spacingXs,
        flex: flexValue,
      },
    };
  };

  return {
    getSectionedCardOverrides,
  };
};

export const selectOverrides: SelectOverrides = {
  ControlContainer: {
    style: ({ $theme, $isFocused }: StyleOverrideProps): StyleObject => ({
      border: `solid 1px ${$isFocused ? $theme.colors.power : $theme.colors.neutralSubtle}`,
    }),
  },
  ValueContainer: {
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      color: $theme.colors.neutral,
      paddingLeft: $theme.spacing.spacingXs,
    }),
  },
  IconsContainer: {
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      paddingRight: $theme.spacing.spacingXs,
    }),
  },
};
