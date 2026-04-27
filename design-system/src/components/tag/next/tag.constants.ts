import { COMMON_HEIGHT_20, COMMON_HEIGHT_24, COMMON_HEIGHT_32 } from '@constants/common.constants';

import type { TagStateColors, TagKind, TagShape, TagSize, TagVariant } from './tag.interfaces';
import type { DesignSystemColorType } from '@themes';
import type { StyleObject } from 'styletron-react';

export const DEFAULT_SHAPE: TagShape = 'pill';

export const DEFAULT_SIZE: TagSize = 'md';

/**
 * Width thresholds for tag content rendering behavior:
 * - TOOLTIP_THRESHOLD: Always show tooltip when width exceeds this (180px)
 * - ELLIPSIS_THRESHOLD: Force ellipsis and always show tooltip when width exceeds this (240px)
 */
export const TOOLTIP_THRESHOLD = 180;

export const ELLIPSIS_THRESHOLD = 240;

export const MAP_ICON_COLOR: Record<TagKind, DesignSystemColorType> = {
  positive: 'positive',
  negative: 'negative',
  warning: 'warning',
  neutral: 'neutral',
  peace: 'peace',
  power: 'power',
  brand: 'brand',
  ai: 'brand',
};

export const MAP_SIZE: Record<TagSize, StyleObject> = {
  sm: {
    height: COMMON_HEIGHT_20,
    gap: '4px',
  },
  md: {
    height: COMMON_HEIGHT_24,
    gap: '8px',
  },
  lg: {
    height: COMMON_HEIGHT_32,
    gap: '12px',
  },
};

export const MAP_SHAPE: Record<TagShape, Record<TagSize, StyleObject>> = {
  rounded: {
    sm: {
      borderRadius: '4px',
    },
    md: {
      borderRadius: '4px',
    },
    lg: {
      borderRadius: '4px',
    },
  },
  pill: {
    sm: {
      borderRadius: COMMON_HEIGHT_20,
    },
    md: {
      borderRadius: COMMON_HEIGHT_24,
    },
    lg: {
      borderRadius: COMMON_HEIGHT_32,
    },
  },
};

export const MAP_BORDER: Record<TagVariant, StyleObject> = {
  light: {
    border: 'none',
  },
  outlined: {
    border: '1px solid',
  },
};

/**
 * Per-kind, per-appearance color mapping for Tag.
 * - default: bg/text/border
 * - hover: bg/border
 * - focus: bg/border
 *
 * Icon color is defined in MAP_ICON_COLOR and does not change with appearance or state.
 */
export const MAP_COLORS: Record<TagKind, Record<TagVariant, TagStateColors>> = {
  positive: {
    light: {
      default: {
        backgroundColor: 'positiveWashed',
        color: 'positiveMedium',
        borderColor: 'positiveWashed',
      },
      hover: {
        backgroundColor: 'positiveSubtle',
        borderColor: 'positiveSubtle',
      },
      focus: {
        backgroundColor: 'positiveWashed',
        borderColor: 'positive',
      },
    },
    outlined: {
      default: {
        backgroundColor: 'bgBase',
        color: 'positiveMedium',
        borderColor: 'positive',
      },
      hover: {
        backgroundColor: 'positiveSubtle',
        borderColor: 'positive',
      },
      focus: {
        backgroundColor: 'bgBase',
        borderColor: 'positive',
      },
    },
  },
  negative: {
    light: {
      default: {
        backgroundColor: 'negativeWashed',
        color: 'negativeMedium',
        borderColor: 'negativeWashed',
      },
      hover: {
        backgroundColor: 'negativeSubtle',
        borderColor: 'negativeSubtle',
      },
      focus: {
        backgroundColor: 'negativeWashed',
        borderColor: 'negative',
      },
    },
    outlined: {
      default: {
        backgroundColor: 'bgBase',
        color: 'negativeMedium',
        borderColor: 'negative',
      },
      hover: {
        backgroundColor: 'negativeSubtle',
        borderColor: 'negative',
      },
      focus: {
        backgroundColor: 'bgBase',
        borderColor: 'negative',
      },
    },
  },
  warning: {
    light: {
      default: {
        backgroundColor: 'warningWashed',
        color: 'warningMedium',
        borderColor: 'warningWashed',
      },
      hover: {
        backgroundColor: 'warningSubtle',
        borderColor: 'warningSubtle',
      },
      focus: {
        backgroundColor: 'warningWashed',
        borderColor: 'warning',
      },
    },
    outlined: {
      default: {
        backgroundColor: 'bgBase',
        color: 'warningMedium',
        borderColor: 'warning',
      },
      hover: {
        backgroundColor: 'warningSubtle',
        borderColor: 'warning',
      },
      focus: {
        backgroundColor: 'bgBase',
        borderColor: 'warning',
      },
    },
  },
  neutral: {
    light: {
      default: {
        backgroundColor: 'neutralBase',
        color: 'neutralMedium',
        borderColor: 'neutralBase',
      },
      hover: {
        backgroundColor: 'neutralWashed',
        borderColor: 'neutralWashed',
      },
      focus: {
        backgroundColor: 'neutralBase',
        borderColor: 'neutralStrong',
      },
    },
    outlined: {
      default: {
        backgroundColor: 'bgBase',
        color: 'neutralMedium',
        borderColor: 'neutralSubtle',
      },
      hover: {
        backgroundColor: 'neutralWashed',
        borderColor: 'neutralWashed',
      },
      focus: {
        backgroundColor: 'bgBase',
        borderColor: 'neutralStrong',
      },
    },
  },
  peace: {
    light: {
      default: {
        backgroundColor: 'peaceWashed',
        color: 'peaceMedium',
        borderColor: 'peaceWashed',
      },
      hover: {
        backgroundColor: 'peaceSubtle',
        borderColor: 'peaceSubtle',
      },
      focus: {
        backgroundColor: 'peaceWashed',
        borderColor: 'peace',
      },
    },
    outlined: {
      default: {
        backgroundColor: 'bgBase',
        color: 'peaceMedium',
        borderColor: 'peace',
      },
      hover: {
        backgroundColor: 'peaceSubtle',
        borderColor: 'peace',
      },
      focus: {
        backgroundColor: 'bgBase',
        borderColor: 'peace',
      },
    },
  },
  power: {
    light: {
      default: {
        backgroundColor: 'powerWashed',
        color: 'powerMedium',
        borderColor: 'powerWashed',
      },
      hover: {
        backgroundColor: 'powerSubtle',
        borderColor: 'powerSubtle',
      },
      focus: {
        backgroundColor: 'powerWashed',
        borderColor: 'power',
      },
    },
    outlined: {
      default: {
        backgroundColor: 'bgBase',
        color: 'power',
        borderColor: 'power',
      },
      hover: {
        backgroundColor: 'powerSubtle',
        borderColor: 'power',
      },
      focus: {
        backgroundColor: 'bgBase',
        borderColor: 'power',
      },
    },
  },
  brand: {
    light: {
      default: {
        backgroundColor: 'brandWashed',
        color: 'brandMedium',
        borderColor: 'brandWashed',
      },
      hover: {
        backgroundColor: 'brandSubtle',
        borderColor: 'brandSubtle',
      },
      focus: {
        backgroundColor: 'brandWashed',
        borderColor: 'brand',
      },
    },
    outlined: {
      default: {
        backgroundColor: 'bgBase',
        color: 'brandMedium',
        borderColor: 'brand',
      },
      hover: {
        backgroundColor: 'brandWashed',
        borderColor: 'brand',
      },
      focus: {
        backgroundColor: 'bgBase',
        borderColor: 'brand',
      },
    },
  },
  ai: {
    light: {
      default: {
        backgroundColor: 'bgBrandAI',
        color: 'brandMedium',
        borderColor: 'transparent',
      },
      hover: {
        backgroundColor: 'bgBrandAIHover',
        borderColor: 'transparent',
      },
      focus: {
        backgroundColor: 'bgBrandAI',
        borderColor: 'brand',
      },
    },
    outlined: {
      default: {
        backgroundColor: 'bgBrandAI',
        color: 'brandMedium',
        borderColor: 'brand',
      },
      hover: {
        backgroundColor: 'bgBrandAIHover',
        borderColor: 'brand',
      },
      focus: {
        backgroundColor: 'bgBrandAI',
        borderColor: 'brand',
      },
    },
  },
};
