import {
  COMMON_ICON_SIZE_16,
  COMMON_ICON_SIZE_20,
  COMMON_ICON_SIZE_32,
  type CommonIconSize,
} from '@constants/common.constants';

import type {
  BackgroundIconAppearance,
  BackgroundIconKind,
  BackgroundIconSize,
  ColorConfig,
} from './background-icon.interfaces';

/**
 * Mapping of BackgroundIcon container sizes to their corresponding icon sizes.
 *
 * Design specifications:
 * - 24px container → 16px icon
 * - 32px container → 16px icon
 * - 44px container → 20px icon
 */
export const BACKGROUND_ICON_SIZE_MAP: Record<BackgroundIconSize, { iconSize: CommonIconSize }> = {
  '24px': {
    iconSize: COMMON_ICON_SIZE_16,
  },
  '32px': {
    iconSize: COMMON_ICON_SIZE_16,
  },
  '44px': {
    iconSize: COMMON_ICON_SIZE_20,
  },
};

/**
 * Default values for the BackgroundIcon component.
 */
export const BACKGROUND_ICON_DEFAULTS = {
  size: COMMON_ICON_SIZE_32,
  kind: 'brand' as const,
  appearance: 'filled' as const,
  shape: 'round' as const,
} as const;

/**
 * Test ID base for the BackgroundIcon component.
 */
export const BACKGROUND_ICON_TEST_ID = 'background-icon';

/**
 * Kinds that support badge functionality.
 * Only 'brand' and 'neutral' kinds can display badges.
 */
export const BADGE_ENABLED_KINDS: ReadonlyArray<BackgroundIconKind> = ['brand', 'neutral'] as const;

/**
 * Color mapping system for BackgroundIcon component.
 * Maps each kind and appearance combination to the appropriate background and icon color tokens.
 *
 * Design pattern:
 * - filled: Uses stronger background colors with base/washed icon colors for high contrast
 * - tonal: Uses subtle background colors with standard icon colors for softer appearance
 */
export const BACKGROUND_ICON_COLORS: Record<
  BackgroundIconKind,
  Record<BackgroundIconAppearance, ColorConfig>
> = {
  brand: {
    filled: {
      backgroundColor: 'brandSubdued',
      iconColor: 'iconBase',
    },
    tonal: {
      backgroundColor: 'brandSubtle',
      iconColor: 'brand',
    },
  },
  neutral: {
    filled: {
      backgroundColor: 'neutralSubdued',
      iconColor: 'iconBase',
    },
    tonal: {
      backgroundColor: 'neutralSubtle',
      iconColor: 'neutral',
    },
  },
  positive: {
    filled: {
      backgroundColor: 'positiveSubdued',
      iconColor: 'iconBase',
    },
    tonal: {
      backgroundColor: 'positiveSubtle',
      iconColor: 'positive',
    },
  },
  negative: {
    filled: {
      backgroundColor: 'negativeSubdued',
      iconColor: 'iconBase',
    },
    tonal: {
      backgroundColor: 'negativeSubtle',
      iconColor: 'negative',
    },
  },
  warning: {
    filled: {
      backgroundColor: 'warningSubdued',
      iconColor: 'iconBase',
    },
    tonal: {
      backgroundColor: 'warningSubtle',
      iconColor: 'warning',
    },
  },
  peace: {
    filled: {
      backgroundColor: 'peaceSubdued',
      iconColor: 'iconBase',
    },
    tonal: {
      backgroundColor: 'peaceSubtle',
      iconColor: 'peace',
    },
  },
  power: {
    filled: {
      backgroundColor: 'powerSubdued',
      iconColor: 'iconBase',
    },
    tonal: {
      backgroundColor: 'powerSubtle',
      iconColor: 'power',
    },
  },
  sweet: {
    filled: {
      backgroundColor: 'sweetSubdued',
      iconColor: 'iconBase',
    },
    tonal: {
      backgroundColor: 'sweetSubtle',
      iconColor: 'sweet',
    },
  },
  heat: {
    filled: {
      backgroundColor: 'heatSubdued',
      iconColor: 'iconBase',
    },
    tonal: {
      backgroundColor: 'heatSubtle',
      iconColor: 'heat',
    },
  },
};

/**
 * Disabled state color configuration.
 */
export const DISABLED_COLORS: ColorConfig = {
  backgroundColor: 'neutralSubtle',
  iconColor: 'neutralSubdued',
};
