import { Bullhorn, CheckmarkOutline, Error, Warning } from '@carbon/icons-react';

import { ReactComponent as BrainIcon } from '@assets/icons/webdox-ai/brain-icon.svg';
import { ClearButton } from '@components/clear-button/clear-button';
import { themedStyled } from '@themes/utilities';

import type { NotificationDirection, NotificationProps } from './notification';
import type { BackgroundIconProps } from '@components/background-icon/background-icon.interfaces';
import type { DesignSystemTheme, StyleOverrideProps } from '@themes/theme.interfaces';
import type { BlockOverrides } from 'baseui/block';
import type { ToastOverrides } from 'baseui/toast';
import type { StyleObject } from 'styletron-react';

type OverrideProps = Pick<NotificationProps, 'data-testid' | 'size' | 'kind'> & {
  theme: DesignSystemTheme;
};

/** Custom **size** variants for the `Notification` component */
const sizeVariants = ($theme: DesignSystemTheme): Record<OverrideProps['size'], StyleObject> => ({
  default: {
    padding: $theme.spacing.spacingMd,
  },
  small: {
    padding: `${$theme.spacing.spacingXs} ${$theme.spacing.spacingMd}`,
  },
});

/** Custom **kind** variants for the `Notification` component */
const kindVariants = (
  $theme: DesignSystemTheme,
): Record<NotificationProps['kind'], StyleObject> => ({
  info: {
    color: $theme.colors.brandMedium,
    backgroundColor: $theme.colors.brandWashed,
  },
  infoAI: {
    color: $theme.colors.brandMedium,
    backgroundColor: $theme.colors.brandWashed,
  },
  negative: {
    color: $theme.colors.negativeMedium,
    backgroundColor: $theme.colors.negativeWashed,
  },
  positive: {
    color: $theme.colors.positiveMedium,
    backgroundColor: $theme.colors.positiveWashed,
  },
  warning: {
    color: $theme.colors.warningMedium,
    backgroundColor: $theme.colors.warningWashed,
  },
});

export const iconVariants: Record<NotificationProps['kind'], BackgroundIconProps> = {
  info: {
    Icon: Bullhorn,
    iconColor: 'brandMedium',
    backgroundColor: 'brandSubtle',
  },
  infoAI: {
    Icon: BrainIcon,
    iconColor: 'brandMedium',
    backgroundColor: 'brandSubtle',
  },
  negative: {
    Icon: Error,
    iconColor: 'negativeStrong',
    backgroundColor: 'negativeSubtle',
  },
  positive: {
    Icon: CheckmarkOutline,
    iconColor: 'positiveStrong',
    backgroundColor: 'positiveSubtle',
  },
  warning: {
    Icon: Warning,
    iconColor: 'warningStrong',
    backgroundColor: 'warningSubtle',
  },
};

/** Custom base overrides for the `Notification` component */
export const getNotificationBaseOverrides = ({
  'data-testid': dataTestId,
  size,
  kind,
  theme,
}: OverrideProps): ToastOverrides => ({
  CloseIcon: {
    component: ClearButton,
    props: {
      'data-testid': `${dataTestId}--close-button`,
      iconColor: kindVariants(theme)[kind].color,
    },
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      width: $theme.spacing.spacingMd,
      height: $theme.spacing.spacingMd,
    }),
  },
  Body: {
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      margin: '0px',
      width: 'auto',
      alignItems: 'center',
      borderRadius: $theme.spacing.spacing2xs,
      ...sizeVariants($theme)[size],
      ...kindVariants($theme)[kind],
    }),
  },
  InnerContainer: {
    style: (): StyleObject => ({
      width: '100%',
    }),
  },
});

export const StyledNotification = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: $theme.spacing.spacingMd,
}));

export const StyledNotificationContent = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: $theme.spacing.spacingMd,
}));

export const StyledNotificationActionContainer = themedStyled<'div', { $closeable: boolean }>(
  'div',
  ({ $theme, $closeable }) => ({
    ...($closeable && { paddingRight: $theme.spacing.spacingXs }),
  }),
);

export const StyledNotificationTexts = themedStyled<'div', { $direction: NotificationDirection }>(
  'div',
  ({ $theme, $direction }) => ({
    display: $direction === 'vertical' ? 'flex' : undefined,
    gap: $direction === 'horizontal' ? $theme.spacing.spacing2xs : undefined,
    flexDirection: 'column',
  }),
);

/** Overrides for the title text in the `Notification` component. */
export const getTitleOverrides = (
  theme: DesignSystemTheme,
  kind: NotificationProps['kind'],
): BlockOverrides => ({
  Block: {
    style: {
      display: 'inline',
      fontWeight: '600',
      wordBreak: 'break-word',
      color: kindVariants(theme)[kind].color,
    },
  },
});

/** Overrides for the description text in the `Notification` component. */
export const getDescriptionOverrides = (
  theme: DesignSystemTheme,
  direction: NotificationDirection,
  hasTitle: boolean,
  kind: NotificationProps['kind'],
): BlockOverrides => ({
  Block: {
    style: {
      display: 'inline',
      marginLeft: direction === 'horizontal' && hasTitle ? theme.spacing.spacing2xs : undefined,
      color: kindVariants(theme)[kind].color,
    },
  },
});
