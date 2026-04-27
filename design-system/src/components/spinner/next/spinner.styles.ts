import type { SpinnerKind, SpinnerSize, SpinnerConfig, SpinnerColors } from './spinner.interface';
import type { TextVariant } from '@components/text/text.interface';
import type { DesignSystemColorType } from '@themes';
import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

/** Parameters for creating spinner styles */
interface StyleParams {
  theme: DesignSystemTheme;
  config: SpinnerConfig;
  colors: SpinnerColors;
  isRelative: boolean;
  opacity: number;
  backgroundColor: DesignSystemColorType;
}

/** Get size configuration utility */
export const getSizeConfig = (size: SpinnerSize, customSize?: number): SpinnerConfig => {
  if (customSize) {
    const strokeWidth = Math.max(1, Math.round(customSize * 0.125)); // 12.5% of size

    return {
      size: customSize,
      strokeWidth,
      radius: customSize / 2 - strokeWidth / 2,
      center: customSize / 2,
    };
  }

  switch (size) {
    case 'small':
      return {
        size: 16,
        strokeWidth: 2,
        radius: 6,
        center: 8,
      };
    case 'large':
      return {
        size: 24,
        strokeWidth: 3,
        radius: 9,
        center: 12,
      };
    default:
      return {
        size: 20,
        strokeWidth: 2.5,
        radius: 8.25,
        center: 10,
      };
  }
};

/** Get colors based on kind */
export const getSpinnerColors = (
  kind: SpinnerKind,
  theme: DesignSystemTheme,
  customColor?: string,
): SpinnerColors => {
  switch (kind) {
    case 'brand':
      return {
        primary: theme.colors.brand,
        textColor: theme.colors.neutral,
      };
    case 'contrast':
      return {
        primary: theme.colors.neutralBase,
        textColor: theme.colors.textBase,
      };
    case 'custom': {
      const resolvedColor =
        customColor && theme.colors[customColor as keyof typeof theme.colors]
          ? theme.colors[customColor as keyof typeof theme.colors]
          : customColor || theme.colors.brand;

      return {
        primary: resolvedColor,
        textColor: theme.colors.neutral,
      };
    }
    default:
      return {
        primary: theme.colors.brand,
        textColor: theme.colors.neutral,
      };
  }
};

/** Get text variant based on spinner size to ensure consistency with design system */
export const getTextVariantFromSize = (size: SpinnerSize): TextVariant => {
  switch (size) {
    case 'small':
      return 'microCopy';
    case 'medium':
      return 'bodySmall';
    case 'large':
      return 'body';
    default:
      return 'body';
  }
};

/** Creates spinner styles based on configuration */
export const createSpinnerStyles = ({
  theme,
  config,
  isRelative,
  opacity,
  backgroundColor,
}: StyleParams & { size: SpinnerSize }): Record<string, StyleObject> => ({
  container: {
    margin: 'auto',
    display: 'block',
    shapeRendering: 'auto',
  },

  spinnerAnimation: {
    animationName: {
      '0%': {
        transform: `rotate(0deg)`,
      },
      '100%': {
        transform: `rotate(360deg)`,
      },
    },
    animationDuration: '1s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    transformOrigin: `${config.center}px ${config.center}px`,
  },

  overlay: {
    position: isRelative ? 'absolute' : 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.colors[backgroundColor] || backgroundColor,
    opacity,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },

  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing.spacing2xs,
  },

  inlineWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing.spacing2xs,
  },

  hiddenSpinner: {
    opacity: 0,
    pointerEvents: 'none',
  },
});

export type SpinnerStyles = ReturnType<typeof createSpinnerStyles>;
