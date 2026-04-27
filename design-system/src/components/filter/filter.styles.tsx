import { heightMap } from '@components/button/button.styles';
import { getTransitionStyles } from '@utils/styles.utils';

import { FILTER_MAX_WIDTH, FILTER_MIN_WIDTH, POPOVER_MIN_WIDTH } from './filter.constants';

import type { FilterKind, FilterOverrides } from './filter.interfaces';
import type { DesignSystemTheme, StyleOverrideProps } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

type StyleParams = {
  $theme: DesignSystemTheme;
  $kind: FilterKind;
  $isActive: boolean;
};

/**
 * Returns a style object containing color, background color, and border color based on the theme, filter kind, and activity state.
 */
const getButtonColors = ({ $theme, $kind, $isActive }: StyleParams): StyleObject => {
  if ($isActive) {
    return {
      color: $theme.colors.brandMedium,
      backgroundColor: $theme.colors.brandWashed,
      borderColor: $theme.colors.brandDepressed,
    };
  }

  switch ($kind) {
    case 'stroked':
      return {
        color: $theme.colors.neutralSubdued,
        backgroundColor: $theme.colors.bgBase,
        borderColor: $theme.colors.neutralSubtle,
      };

    case 'filled':
      return {
        color: $theme.colors.neutralSubdued,
        backgroundColor: $theme.colors.neutralBase || $theme.colors.neutralWashed,
        borderColor: $theme.colors.neutralBase || $theme.colors.neutralWashed,
      };

    default:
      throw new Error(`Unknown kind: ${$kind}`);
  }
};

/**
 * Generates style overrides for the filter button based on its active state.
 */
export const getOverrides = ({
  $isActive,
  $isOpen,
  $width,
  $minWidth = FILTER_MIN_WIDTH,
  $maxWidth = FILTER_MAX_WIDTH,
  $popoverMinWidth = POPOVER_MIN_WIDTH,
}: {
  $isActive: boolean;
  $isOpen: boolean;
  $width?: number;
  $minWidth?: StyleObject['minWidth'];
  $maxWidth?: StyleObject['maxWidth'];
  $popoverMinWidth?: StyleObject['minWidth'];
}): FilterOverrides => ({
  Button: {
    props: {
      overrides: {
        BaseButton: {
          style: ({ $theme, $kind, $disabled }: StyleOverrideProps): StyleObject => {
            const focusHoverStyles = {
              color: $theme.colors.neutral,
              borderColor: $theme.colors.neutralSubtle,
              backgroundColor: $theme.colors.neutralSubtle,
            };

            return {
              ...getButtonColors({ $theme, $kind, $isActive }),
              border: '1px solid',
              padding: `0 ${$theme.spacing.spacingXs}`,
              gap: $theme.spacing.spacingXs,
              minWidth: $minWidth,
              maxWidth: $maxWidth,
              ...(!$isActive && $isOpen && !$disabled && focusHoverStyles),
              ...(!$isActive &&
                !$disabled && {
                  ':hover': focusHoverStyles,
                  ':focus': focusHoverStyles,
                  ':hover div[data-end-enhancer=true]': {
                    borderColor: `${$theme.colors.neutralDepressed}`,
                  },
                }),
              ':disabled div[data-end-enhancer=true]': {
                borderColor: $theme.colors.neutralDepressed,
              },
            };
          },
        },
        StartEnhancer: {
          style: {
            padding: 0,
            margin: 0,
            flexShrink: 0,
          },
        },
        EndEnhancer: {
          props: {
            // Property used to identify the element for parent :hover styling
            'data-end-enhancer': 'true',
          },
          style: ({ $theme, $size }: StyleOverrideProps) => ({
            transition: getTransitionStyles(['border-color']),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: `0 -${$theme.spacing.spacingXs} 0 0`,
            height: heightMap[$size],
            width: `calc(${heightMap[$size]} - 2px)`,
            flexShrink: 0,
            borderLeft: '1px solid',
            borderColor: $isActive ? $theme.colors.brandDepressed : $theme.colors.neutralSubtle,
          }),
        },
      },
    },
  },
  Popover: {
    props: {
      overrides: {
        Body: {
          style: {
            width: `${$width}px`,
            minWidth: $popoverMinWidth,
          },
        },
      },
    },
  },
});
