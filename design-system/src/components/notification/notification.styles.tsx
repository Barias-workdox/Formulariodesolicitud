import {
  CheckmarkFilled,
  ErrorFilled,
  InformationFilled,
  WarningFilled,
} from '@carbon/icons-react';

import type { DesignSystemTheme } from '../../themes';
import type { KindType } from '../notification';
import type { KindStyleType } from './notification';
import type { StyleObject } from 'styletron-react';

type BaseWebNotificationBodyCustomProps = {
  kindStyle?: KindStyleType;
  marginBottom?: StyleObject['marginBottom'];
  marginLeft?: StyleObject['marginLeft'];
  marginRight?: StyleObject['marginRight'];
  marginTop?: StyleObject['marginTop'];
  width?: StyleObject['width'];
};

/**
 * Get the notification styles by its kind
 */
export const kindStyles = (theme: DesignSystemTheme, kind: KindType): KindStyleType => {
  switch (kind) {
    case 'positive':
      return {
        borderColor: 'transparent',
        borderRadius: theme.spacing.spacing2xs,
        icon: (
          <CheckmarkFilled
            size={20}
            color={theme.colors.positive}
          />
        ),
        color: theme.colors.positiveStrong,
        backgroundColor: theme.colors.positiveSubtle,
      };
    case 'negative':
      return {
        borderColor: 'transparent',
        borderRadius: theme.spacing.spacing2xs,
        icon: (
          <ErrorFilled
            size={20}
            color={theme.colors.negative}
          />
        ),
        color: theme.colors.negativeStrong,
        backgroundColor: theme.colors.negativeSubtle,
      };
    case 'warning':
      return {
        borderColor: 'transparent',
        borderRadius: theme.spacing.spacing2xs,
        icon: (
          <WarningFilled
            size={20}
            color={theme.colors.warning}
          />
        ),
        color: theme.colors.warningStrong,
        backgroundColor: theme.colors.warningSubtle,
      };
    case 'info':
      return {
        borderColor: 'transparent',
        borderRadius: theme.spacing.spacing2xs,
        icon: (
          <InformationFilled
            size={20}
            color={theme.colors.brand}
          />
        ),
        color: theme.colors.brandStrong,
        backgroundColor: theme.colors.brandSubtle,
      };
  }
};

/** Style overrides for the BaseWebNotification InnerContainer prop */
export const InnerContainerStyles = (): StyleObject => ({
  width: '100%',
});

/**
 * Style overrides for the BaseWebNotification Body prop.
 */
export const notificationOverrideStyles = (
  theme: DesignSystemTheme,
  {
    marginTop = 'auto',
    marginBottom = 'auto',
    marginLeft = 'auto',
    marginRight = 'auto',
    width,
    kindStyle,
  }: BaseWebNotificationBodyCustomProps,
): StyleObject => ({
  alignItems: 'center',
  border: `1px solid ${kindStyle.borderColor}`,
  borderLeftWidth: theme.spacing.spacing2xs,
  borderRadius: kindStyle.borderRadius,
  color: kindStyle.color,
  backgroundColor: kindStyle.backgroundColor,
  display: 'flex',
  fontSize: '14px',
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  width,
  gap: theme.spacing.spacingXs,
});

/**
 * Styles BaseWebNotification child component
 */
export const notificationStyles = {
  notificationWrapper: (): StyleObject => ({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  }),
  textWrapper: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    marginLeft: theme.spacing.spacingXs,
    marginRight: theme.spacing.spacingXs,
  }),
  titleStyles: (theme: DesignSystemTheme): StyleObject => ({
    marginRight: theme.spacing.spacing2xs,
  }),
  verticalCenter: (): StyleObject => ({
    alignItems: 'center',
    display: 'flex',
  }),
  endEnhancerWrapper: (theme: DesignSystemTheme): StyleObject => ({
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.spacingXs,
  }),
};
