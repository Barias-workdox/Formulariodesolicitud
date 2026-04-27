import {
  COMMON_FONT_SIZE_10,
  COMMON_FONT_SIZE_14,
  COMMON_FONT_SIZE_16,
  COMMON_HEIGHT_24,
  COMMON_HEIGHT_32,
  COMMON_HEIGHT_44,
  COMMON_HEIGHT_56,
} from '@constants/common.constants';
import { getFocusWithinStyles } from '@themes/theme.utils';
import { DEFAULT_FONT } from '@tokens';
import { getTransitionStyles } from '@utils/styles.utils';

import { Spinner } from '../spinner';

import type { ButtonProps, KindType, SizeType } from './button.interfaces';
import type { SpinnerProps } from '../spinner';
import type { StyleOverrideProps } from '@themes/theme.interfaces';
import type { ButtonOverrides } from 'baseui/button';
import type { StyleObject } from 'styletron-react';

export const fontSizeMap: Partial<Record<SizeType, StyleObject['fontSize']>> = {
  [COMMON_HEIGHT_32]: COMMON_FONT_SIZE_14,
  [COMMON_HEIGHT_44]: COMMON_FONT_SIZE_16,
  /** @deprecated Use common sizes instead */
  default: COMMON_FONT_SIZE_16,
  /** @deprecated Use common sizes instead */
  compact: COMMON_FONT_SIZE_14,
  /** @deprecated Use common sizes instead */
  mini: COMMON_FONT_SIZE_10,
};

export const heightMap: Partial<Record<SizeType, StyleObject['height']>> = {
  [COMMON_HEIGHT_24]: COMMON_HEIGHT_24,
  [COMMON_HEIGHT_32]: COMMON_HEIGHT_32,
  [COMMON_HEIGHT_44]: COMMON_HEIGHT_44,
  [COMMON_HEIGHT_56]: COMMON_HEIGHT_56,
  /** @deprecated Use common sizes instead */
  default: COMMON_HEIGHT_44,
  /** @deprecated Use common sizes instead */
  compact: COMMON_HEIGHT_32,
  /** @deprecated Use "auto" instead */
  mini: 'auto',
  /** @deprecated Use common sizes instead */
  auto: 'auto',
};

/**
 * Calculates the horizontal padding for buttons based on the specified button size.
 */
const getHorizontalPadding = ({
  $theme,
}: StyleOverrideProps): Partial<Record<SizeType, string>> => ({
  [COMMON_HEIGHT_24]: $theme.spacing.spacingSm,
  [COMMON_HEIGHT_32]: $theme.spacing.spacingMd,
  [COMMON_HEIGHT_44]: $theme.spacing.spacingXl,
  /** @deprecated Use common sizes instead */
  default: $theme.spacing.spacingXl,
  /** @deprecated Use common sizes instead */
  compact: $theme.spacing.spacingMd,
});

const spinnerColorsMap: Partial<Record<KindType, Pick<SpinnerProps, 'color' | 'secondaryColor'>>> =
  {
    primary: { color: 'brandDepressed', secondaryColor: 'transparent' },
    'primary-brain': { color: 'power', secondaryColor: 'transparent' },
    'primary-whisper': { color: 'sweetDepressed', secondaryColor: 'transparent' },
    positive: { color: 'positive', secondaryColor: 'transparent' },
    'dark-positive': { color: 'positive', secondaryColor: 'transparent' },
    negative: { color: 'negative', secondaryColor: 'transparent' },
    'dark-negative': { color: 'negative', secondaryColor: 'transparent' },
    warning: { color: 'warningStrong', secondaryColor: 'transparent' },
    'tertiary-brain': { color: 'power', secondaryColor: 'transparent' },
    'tertiary-whisper': { color: 'sweet', secondaryColor: 'transparent' },
    'action-brain': { color: 'power', secondaryColor: 'transparent' },
  };

/**
 * Retrieves a color map for buttons based on their kind, incorporating default and focus/active styles.
 * Includes definitions for standardized and non-standardized design variants.
 */
export const getColorsMap = ({ $theme }: StyleOverrideProps): Record<KindType, StyleObject> => {
  /**
   * Generates a StyleObject that applies the specified styles to both the ':focus' and ':active' pseudo-classes.
   */
  const getFocusAndActiveStyles = (style: StyleObject): StyleObject => ({
    ':focus': style,
    ':active': style,
    ':focus-within': getFocusWithinStyles($theme),
  });

  return {
    primary: {
      color: $theme.colors.textBase,
      borderColor: $theme.colors.brand,
      backgroundColor: $theme.colors.brand,
      ':hover': {
        borderColor: $theme.colors.brandMedium,
        backgroundColor: $theme.colors.brandMedium,
      },
      ...getFocusAndActiveStyles({
        color: $theme.colors.brand,
        borderColor: $theme.colors.brandStrong,
        backgroundColor: $theme.colors.transparent,
      }),
    },
    secondary: {
      color: $theme.colors.brand,
      borderColor: $theme.colors.brand,
      backgroundColor: $theme.colors.bgBase,
      ':hover': {
        borderColor: $theme.colors.brandSubtle,
        backgroundColor: $theme.colors.brandSubtle,
      },
      ...getFocusAndActiveStyles({
        color: $theme.colors.brandMedium,
        borderColor: $theme.colors.brandMedium,
        backgroundColor: $theme.colors.transparent,
      }),
    },
    tertiary: {
      color: $theme.colors.neutralSubdued,
      borderColor: $theme.colors.neutralSubtle,
      backgroundColor: $theme.colors.bgBase,
      ':hover': {
        color: $theme.colors.neutral,
        borderColor: $theme.colors.neutralSubtle,
        backgroundColor: $theme.colors.neutralSubtle,
      },
      ...getFocusAndActiveStyles({
        color: $theme.colors.neutral,
        borderColor: $theme.colors.neutral,
        backgroundColor: $theme.colors.transparent,
      }),
    },
    positive: {
      color: $theme.colors.positiveMedium,
      borderColor: $theme.colors.positiveSubtle,
      backgroundColor: $theme.colors.positiveSubtle,
      ':hover': {
        color: $theme.colors.positiveMedium,
        borderColor: $theme.colors.positiveDepressed,
        backgroundColor: $theme.colors.positiveDepressed,
      },
      ...getFocusAndActiveStyles({
        color: $theme.colors.positiveMedium,
        borderColor: $theme.colors.positiveMedium,
        backgroundColor: $theme.colors.transparent,
      }),
    },
    'dark-positive': {
      color: $theme.colors.textBase,
      borderColor: $theme.colors.positive,
      backgroundColor: $theme.colors.positive,
      ':hover': {
        color: $theme.colors.textBase,
        borderColor: $theme.colors.positiveMedium,
        backgroundColor: $theme.colors.positiveMedium,
      },
      ...getFocusAndActiveStyles({
        color: $theme.colors.positiveMedium,
        borderColor: $theme.colors.positive,
        backgroundColor: $theme.colors.transparent,
      }),
    },
    negative: {
      color: $theme.colors.negative,
      borderColor: $theme.colors.negativeSubtle,
      backgroundColor: $theme.colors.negativeSubtle,
      ':hover': {
        color: $theme.colors.negativeMedium,
        borderColor: $theme.colors.negativeDepressed,
        backgroundColor: $theme.colors.negativeDepressed,
      },
      ...getFocusAndActiveStyles({
        color: $theme.colors.negativeMedium,
        borderColor: $theme.colors.negative,
        backgroundColor: $theme.colors.transparent,
      }),
    },
    'dark-negative': {
      color: $theme.colors.textBase,
      borderColor: $theme.colors.negative,
      backgroundColor: $theme.colors.negative,
      ':hover': {
        color: $theme.colors.textBase,
        borderColor: $theme.colors.negativeMedium,
        backgroundColor: $theme.colors.negativeMedium,
      },
      ...getFocusAndActiveStyles({
        color: $theme.colors.negativeMedium,
        borderColor: $theme.colors.negative,
        backgroundColor: $theme.colors.transparent,
      }),
    },
    warning: {
      color: $theme.colors.warningStrong,
      borderColor: $theme.colors.warningSubtle,
      backgroundColor: $theme.colors.warningSubtle,
      ':hover': {
        color: $theme.colors.warningStrong,
        borderColor: $theme.colors.warningDepressed,
        backgroundColor: $theme.colors.warningDepressed,
      },
      ...getFocusAndActiveStyles({
        color: $theme.colors.warningStrong,
        borderColor: $theme.colors.warningSubdued,
        backgroundColor: $theme.colors.transparent,
      }),
    },
    control: {
      color: $theme.colors.neutral,
      borderColor: $theme.colors.neutralWashed,
      backgroundColor: $theme.colors.neutralWashed,
      ':hover': {
        color: $theme.colors.neutralMedium,
        borderColor: $theme.colors.neutralSubtle,
        backgroundColor: $theme.colors.neutralSubtle,
      },
      ...getFocusAndActiveStyles({
        color: $theme.colors.neutral,
        borderColor: $theme.colors.neutral,
        backgroundColor: $theme.colors.transparent,
      }),
    },
    selection: {
      color: $theme.colors.brandMedium,
      borderColor: $theme.colors.brandWashed,
      backgroundColor: $theme.colors.brandWashed,
      ':hover': {
        color: $theme.colors.brandMedium,
        borderColor: $theme.colors.brandSubtle,
        backgroundColor: $theme.colors.brandSubtle,
      },
      ...getFocusAndActiveStyles({
        color: $theme.colors.brandMedium,
        borderColor: $theme.colors.brandMedium,
        backgroundColor: $theme.colors.transparent,
      }),
    },
    'link-secondary': {
      color: $theme.colors.brand,
      borderColor: 'transparent',
      backgroundColor: $theme.colors.transparent,
      ':hover': {
        color: $theme.colors.brandMedium,
        borderColor: $theme.colors.brandSubtle,
        backgroundColor: $theme.colors.brandSubtle,
        textDecoration: 'underline',
      },
      ...getFocusAndActiveStyles({
        color: $theme.colors.brandMedium,
        borderColor: $theme.colors.brandMedium,
        backgroundColor: $theme.colors.transparent,
        textDecoration: 'underline',
      }),
    },
    'link-secondary-brain': {
      color: $theme.colors.power,
      borderColor: 'transparent',
      backgroundColor: $theme.colors.transparent,
      ':hover': {
        color: $theme.colors.powerMedium,
        borderColor: $theme.colors.powerSubtle,
        backgroundColor: $theme.colors.powerSubtle,
        textDecoration: 'underline',
      },
      ...getFocusAndActiveStyles({
        color: $theme.colors.powerMedium,
        borderColor: $theme.colors.powerMedium,
        backgroundColor: $theme.colors.transparent,
        textDecoration: 'underline',
      }),
    },
    'link-tertiary': {
      color: $theme.colors.neutralSubdued,
      borderColor: 'transparent',
      backgroundColor: $theme.colors.transparent,
      ':hover': {
        color: $theme.colors.neutral,
        borderColor: $theme.colors.neutralSubtle,
        backgroundColor: $theme.colors.neutralSubtle,
        textDecoration: 'underline',
      },
      ...getFocusAndActiveStyles({
        color: $theme.colors.neutral,
        borderColor: $theme.colors.neutral,
        backgroundColor: $theme.colors.transparent,
        textDecoration: 'underline',
      }),
    },
    'ghost-secondary': {
      color: $theme.colors.brand,
      borderColor: 'transparent',
      backgroundColor: $theme.colors.transparent,
      ':hover': {
        color: $theme.colors.brandMedium,
      },
      ...getFocusAndActiveStyles({
        color: $theme.colors.brandMedium,
        borderColor: $theme.colors.brandSubtle,
      }),
    },
    'ghost-tertiary': {
      color: $theme.colors.neutralSubdued,
      borderColor: 'transparent',
      backgroundColor: $theme.colors.transparent,
      ':hover': {
        color: $theme.colors.neutral,
      },
      ...getFocusAndActiveStyles({
        color: $theme.colors.neutral,
        borderColor: $theme.colors.neutralSubtle,
      }),
    },
    // ℹ️ Variant not standardized in DS 1.1
    quaternary: {
      color: $theme.colors.brand,
      borderColor: $theme.colors.brandDepressed,
      backgroundColor: $theme.colors.brandSubtle,
      ':hover': {
        color: $theme.colors.brandMedium,
        borderColor: $theme.colors.brandSubdued,
        backgroundColor: $theme.colors.brandSubtle,
      },
      ...getFocusAndActiveStyles({
        color: $theme.colors.brandMedium,
        borderColor: $theme.colors.brandMedium,
        backgroundColor: $theme.colors.transparent,
      }),
    },
    'primary-brain': {
      color: $theme.colors.iconBase,
      borderColor: $theme.colors.power,
      backgroundColor: $theme.colors.power,
      ':hover': {
        borderColor: $theme.colors.powerMedium,
        backgroundColor: $theme.colors.powerMedium,
      },
      ...getFocusAndActiveStyles({
        color: $theme.colors.brandStrong,
        borderColor: $theme.colors.brandStrong,
        backgroundColor: $theme.colors.transparent,
      }),
    },
    'primary-whisper': {
      color: $theme.colors.iconBase,
      borderColor: $theme.colors.sweet,
      backgroundColor: $theme.colors.sweet,
      ':hover': {
        borderColor: $theme.colors.sweetMedium,
        backgroundColor: $theme.colors.sweetMedium,
      },
      ...getFocusAndActiveStyles({
        color: $theme.colors.sweet,
        borderColor: $theme.colors.sweet,
        backgroundColor: $theme.colors.transparent,
      }),
    },
    'secondary-brain': {
      color: $theme.colors.power,
      borderColor: $theme.colors.power,
      backgroundColor: $theme.colors.bgBase,
      ':hover': {
        borderColor: $theme.colors.powerSubtle,
        backgroundColor: $theme.colors.powerSubtle,
      },
      ...getFocusAndActiveStyles({
        color: $theme.colors.brandMedium,
        borderColor: $theme.colors.brandMedium,
        backgroundColor: $theme.colors.transparent,
      }),
    },
    'tertiary-brain': {
      color: $theme.colors.neutralSubdued,
      borderColor: $theme.colors.neutralSubtle,
      backgroundColor: $theme.colors.bgBase,
      ':hover': {
        background: $theme.colors.powerSubtle,
        borderColor: $theme.colors.powerSubtle,
        color: $theme.colors.power,
      },
      ...getFocusAndActiveStyles({
        color: $theme.colors.neutralSubdued,
        borderColor: $theme.colors.neutralSubtle,
        backgroundColor: $theme.colors.bgBase,
      }),
    },
    'tertiary-whisper': {
      color: $theme.colors.neutralSubdued,
      borderColor: $theme.colors.neutralSubtle,
      backgroundColor: $theme.colors.bgBase,
      ':hover': {
        background: $theme.colors.sweetSubtle,
        borderColor: $theme.colors.sweetSubtle,
        color: $theme.colors.neutral,
      },
      ...getFocusAndActiveStyles({
        color: $theme.colors.sweet,
        borderColor: $theme.colors.sweet,
        backgroundColor: $theme.colors.bgBase,
      }),
    },
    'quaternary-brain': {
      color: $theme.colors.positiveMedium,
      borderColor: $theme.colors.natureSubtle,
      backgroundColor: $theme.colors.natureSubtle,
      ':hover': {
        background: $theme.colors.natureDepressed,
        borderColor: $theme.colors.natureDepressed,
        color: $theme.colors.positiveStrong,
      },
      ...getFocusAndActiveStyles({
        color: $theme.colors.positiveMedium,
        borderColor: $theme.colors.nature,
        backgroundColor: $theme.colors.bgBase,
      }),
    },
    'quaternary-whisper': {
      color: $theme.colors.sweetMedium,
      borderColor: $theme.colors.sweetSubtle,
      backgroundColor: $theme.colors.sweetSubtle,
      ':hover': {
        background: $theme.colors.sweetDepressed,
        borderColor: $theme.colors.sweetDepressed,
        color: $theme.colors.sweetStrong,
      },
      ...getFocusAndActiveStyles({
        color: $theme.colors.sweetMedium,
        borderColor: $theme.colors.sweetDepressed,
        backgroundColor: $theme.colors.bgBase,
      }),
    },
    'action-brain': {
      color: $theme.colors.textBase,
      borderColor: $theme.colors.neutralSubdued,
      backgroundColor: $theme.colors.neutralSubdued,
      ':hover': {
        background: $theme.colors.power,
        borderColor: $theme.colors.power,
        color: $theme.colors.textBase,
      },
      ...getFocusAndActiveStyles({
        color: $theme.colors.power,
        borderColor: $theme.colors.power,
        backgroundColor: $theme.colors.bgBase,
      }),
    },
  };
};

/**
 * Retrieves a border map for buttons based on their kind.
 */
export const getBorderMap = ({
  $theme,
}: StyleOverrideProps): Partial<Record<KindType, StyleObject>> => {
  return {
    'tertiary-brain': {
      borderRadius: $theme.spacing.spacing2xs,
    },
    'tertiary-whisper': {
      borderRadius: $theme.spacing.spacing2xs,
    },
    'quaternary-whisper': {
      borderRadius: $theme.spacing.spacing2xs,
    },
    'quaternary-brain': {
      borderRadius: $theme.spacing.spacing2xs,
    },
  };
};

/**
 * Retrieves disabled state styles for buttons.
 */
export const getDisabledColors = ({ $theme }: StyleOverrideProps): StyleObject => ({
  ':disabled': {
    color: $theme.colors.neutralDepressed,
    borderColor: $theme.colors.neutralSubtle,
    backgroundColor: $theme.colors.neutralSubtle,
  },
});

/**
 * Computes the override styles for buttons based on their properties.
 */
export const getOverrides = ({
  'data-testid': dataTestId,
  paddingLeft,
  paddingRight,
  fullWidth,
  responsive,
}: ButtonProps): ButtonOverrides => ({
  BaseButton: {
    props: {
      'data-testid': dataTestId,
    },
    style: ({ $theme, $size, $disabled, $kind }): StyleObject => {
      const horizontalPadding = getHorizontalPadding({ $theme })[$size];

      return {
        ...DEFAULT_FONT,
        outline: 'none',
        border: '1px solid',
        borderRadius: $theme.spacing.spacing2xs,
        boxShadow: 'none',
        lineHeight: '100%',
        fontWeight: 400,
        width: fullWidth ? '100%' : undefined,
        height: responsive ? COMMON_HEIGHT_32 : heightMap[$size],
        fontSize: fontSizeMap[$size] || fontSizeMap.default,
        whiteSpace: responsive ? 'nowrap' : undefined,
        transition: getTransitionStyles(['color', 'border-color', 'background-color']),
        padding: responsive
          ? `0 ${$theme.spacing.spacingMd} 0 ${$theme.spacing.spacingMd}`
          : `0 ${paddingRight ?? horizontalPadding} 0 ${paddingLeft ?? horizontalPadding}`,
        ...($disabled ? getDisabledColors({ $theme }) : getColorsMap({ $theme })[$kind]),
        ...getBorderMap({ $theme })[$kind],
        [$theme.mediaQuery.small]: {
          height: responsive ? COMMON_HEIGHT_44 : (heightMap[$size] ?? heightMap.default),
        },
      };
    },
  },
  LoadingSpinnerContainer: {
    style: { marginTop: 0, marginBottom: 0 },
  },
  LoadingSpinner: {
    props: ({ $kind }) => ({
      size: 'sm',
      ...spinnerColorsMap[$kind],
    }),
    component: Spinner,
  },
});
