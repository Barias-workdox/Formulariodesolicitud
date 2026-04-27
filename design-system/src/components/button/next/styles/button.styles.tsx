import { DEFAULT_FONT, TYPOGRAPHY_LINE_HEIGHTS } from '@tokens';
import { getTransitionStyles } from '@utils/styles.utils';

import { RESPONSIVE_SIZE_MAP, SIZE_CONFIG, TRANSITION_PROPERTIES } from '../button.constants';
import { getButtonStyles } from '../button.utils';
import { ButtonSpinner } from '../components/button-spinner';

import type { ButtonKind, ButtonSize } from '../button.interfaces';
import type { GetOverridesProps } from './button.styles.interfaces';
import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { ButtonOverrides } from 'baseui/button';
import type { StyleObject } from 'styletron-react';

/** Returns WCAG AAA compliant focus ring styles */
const getFocusStyles = (theme: DesignSystemTheme, kind: ButtonKind): StyleObject => {
  return {
    ':focus-visible': {
      outlineOffset: '2px',
      outlineWidth: '2px',
      outlineStyle: 'solid',
      outlineColor: kind === 'contrast' ? theme.colors.borderBase : theme.colors.neutral,
      boxShadow: 'none',
    },
  };
};

/**
 * Returns disabled styles for the button.
 */
const getDisabledStyles = (theme: DesignSystemTheme): StyleObject => {
  return {
    ':disabled': {
      backgroundColor: theme.colors.neutralWashed,
      borderColor: theme.colors.neutralWashed,
      color: theme.colors.neutralDepressed,
    },
  };
};

/** Returns responsive styles for mobile viewports */
const getResponsiveStyles = (theme: DesignSystemTheme, size: ButtonSize): StyleObject => {
  const responsiveStyles = SIZE_CONFIG[RESPONSIVE_SIZE_MAP[size]];

  return {
    [`@media (max-width: ${theme.breakpoints.small}px)`]: {
      height: responsiveStyles.height,
      fontSize: responsiveStyles.fontSize,
      padding: `0 ${theme.spacing[responsiveStyles.padding]}`,
    },
  };
};

/** Returns full-width layout styles when enabled */
const getFullWidthStyles = (fullWidth: boolean): StyleObject => {
  if (!fullWidth) return {};

  return {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
};

/**
 * Returns the complete BaseUI overrides object for the Button component.
 * Generates all necessary style overrides for BaseUI Button including
 * the base button, enhancers, and loading spinner components.
 */
export const getOverrides = ({
  dataTestId,
  isLoading,
  disabled,
  fullWidth,
  size,
  kind,
  appearance,
}: GetOverridesProps): ButtonOverrides => {
  const isInactive = disabled || isLoading;

  return {
    BaseButton: {
      props: { 'data-testid': dataTestId },
      style: ({ $theme, $isSelected }): StyleObject => {
        const variantStyles = getButtonStyles($theme, kind, appearance);
        const sizeStyles = SIZE_CONFIG[size];

        return {
          // Typography
          ...DEFAULT_FONT,
          fontSize: sizeStyles.fontSize,
          fontWeight: 400,
          lineHeight: TYPOGRAPHY_LINE_HEIGHTS.normal,
          textAlign: 'center',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',

          // Layout
          borderRadius: $theme.borders.borderSm,
          height: sizeStyles.height,
          padding: `0 ${$theme.spacing[sizeStyles.padding]}`,
          cursor: isInactive ? 'not-allowed' : 'pointer',
          ...getFullWidthStyles(fullWidth),

          // State styles
          ...($isSelected ? variantStyles.button.active : variantStyles.button.default),

          // Interactions
          transition: getTransitionStyles([...TRANSITION_PROPERTIES]),
          ...(!isInactive && {
            ':hover': variantStyles.button.hover,
            ':active': variantStyles.button.active,
          }),
          ...getFocusStyles($theme, kind),
          ...getDisabledStyles($theme),

          // Media queries
          ...getResponsiveStyles($theme, size),
        };
      },
    },

    LoadingSpinner: {
      props: () => ({
        disabled,
        kind,
        appearance,
      }),
      component: ButtonSpinner,
    },
  };
};
