import { CheckmarkOutline, ErrorOutline, Information, WarningHex } from '@carbon/icons-react';

import { COMMON_ICON_SIZE_24 } from '@constants/common.constants';

import type { DesignSystemTheme, DesignSystemColorType } from '../../../../themes';
import type { KindValues } from '../../toast';
import type { KindType } from '../../toast/toast.interface';
import type { CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon';
import type { StyleObject } from 'styletron-react';

export const toasterContainerStyles = {
  bodyWrapper: (): StyleObject => ({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  }),
  childrenWrapper: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    justifyContent: 'space-between',
    flexGrow: 1,
    paddingLeft: theme.spacing.spacingXs,
  }),
};

/**
 * Overrides for the BackgroundIcon component used in toasts
 */
export const backgroundIconOverrides = {
  Root: {
    style: ({ $theme }: { $theme: DesignSystemTheme }): StyleObject => ({
      borderRadius: $theme.borders.borderCircle,
    }),
  },
};

/**
 * Return type for getToastIconProps function
 */
export type ToastIconProps = {
  icon: CarbonIconType;
  backgroundColor: DesignSystemColorType;
  iconColor: DesignSystemColorType;
  shape: 'square';
  size: typeof COMMON_ICON_SIZE_24;
  overrides: typeof backgroundIconOverrides;
};

/**
 * Gets BackgroundIcon props for toast kinds, eliminating the need for type casting
 */
export const getToastIconProps = (kindValues: KindValues): ToastIconProps => ({
  icon: kindValues.icon,
  backgroundColor: kindValues.iconBackgroundColor,
  iconColor: kindValues.iconColor,
  shape: 'square',
  size: COMMON_ICON_SIZE_24,
  overrides: backgroundIconOverrides,
});

/**
 * Styles for the toaster based on its kind
 */
export const getKindValues = (kind: KindType): KindValues => {
  const kindValues: Record<KindType, KindValues> = {
    positive: {
      icon: CheckmarkOutline,
      iconColor: 'positive',
      iconBackgroundColor: 'positiveSubtle',
      leftBorderColor: 'positiveDepressed',
    },
    negative: {
      icon: ErrorOutline,
      iconColor: 'negative',
      iconBackgroundColor: 'negativeSubtle',
      leftBorderColor: 'negativeDepressed',
    },
    warning: {
      icon: WarningHex,
      iconColor: 'warning',
      iconBackgroundColor: 'warningSubtle',
      leftBorderColor: 'warningDepressed',
    },
    info: {
      icon: Information,
      iconColor: 'brand',
      iconBackgroundColor: 'brandSubtle',
      leftBorderColor: 'brandDepressed',
    },
  };

  return kindValues[kind];
};

/**
 * Styles for the BodyStyle wrapper component with responsive width support
 */
export const styledBody = (
  theme: DesignSystemTheme,
  { style, width }: { style: KindValues; width?: string },
): StyleObject => {
  const { leftBorderColor } = style;

  return {
    backgroundColor: theme.colors.neutralMedium,
    borderLeft: `8px solid ${theme.colors[leftBorderColor]}`,
    boxSizing: 'border-box',
    marginTop: theme.spacing.spacingMd,
    marginBottom: 0,
    padding: theme.spacing.spacingXs,
    zIndex: 1,
    width: 'calc(100% - 32px)',
    [theme.mediaQuery.medium]: {
      width: '60vw',
    },
    [theme.mediaQuery.large]: {
      width: '40vw',
    },
    [theme.mediaQuery.extralarge]: {
      width: '20vw',
    },
    ...(width ? { width } : {}),
  };
};
