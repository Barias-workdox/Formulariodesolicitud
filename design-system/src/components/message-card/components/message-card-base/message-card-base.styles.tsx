import { themedStyled } from '@themes/utilities';

import { MIN_MESSAGE_CARD_WIDTH } from '../../message-card.constants';

import type {
  MessageCardService,
  MessageCardStylesConfiguration,
} from '../../message-card.interfaces';
import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

/** Retrieves the active state color map of the buttons */
const getActiveButtonColorMap = (
  $theme: DesignSystemTheme,
): Record<MessageCardService, StyleObject> => ({
  default: {
    color: $theme.colors.neutralStrong,
    borderColor: $theme.colors.brand,
    backgroundColor: $theme.colors.brandWashed,
  },
  brain: {
    color: $theme.colors.neutralStrong,
    borderColor: $theme.colors.power,
    backgroundColor: $theme.colors.powerWashed,
  },
  legalWhisper: {
    color: $theme.colors.neutralStrong,
    borderColor: $theme.colors.sweet,
    backgroundColor: $theme.colors.sweetWashed,
  },
  smartContract: {
    color: $theme.colors.neutralStrong,
    borderColor: $theme.colors.positive,
    backgroundColor: $theme.colors.positiveWashed,
  },
});

/** Retrieves a color map for buttons based on message card service. */
const getButtonColorsMap = ({
  $theme,
  $isActive,
  $service,
}: {
  $theme: DesignSystemTheme;
  $isActive?: boolean;
  $service: MessageCardService;
}): StyleObject => {
  if ($isActive) {
    return getActiveButtonColorMap($theme)[$service];
  }

  return {
    borderColor: $theme.colors.neutralSubtle,
    backgroundColor: $theme.colors.bgBase,
    ':hover': {
      borderColor: $theme.colors.neutralSubtle,
      backgroundColor: $theme.colors.neutralBase,
    },
  };
};

export const StyledBaseButton = themedStyled<'button', MessageCardStylesConfiguration>(
  'button',
  ({ $theme, $service = 'default', $isActive, $iconPosition = 'default' }) => {
    const serviceStyles = getButtonColorsMap({ $theme, $isActive, $service });

    return {
      alignItems: 'start',
      border: 'solid 1px',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: $iconPosition === 'default' ? 'column' : 'row',
      gap: $theme.spacing.spacing2xs,
      height: 'fit-content',
      justifyContent: 'start',
      minWidth: MIN_MESSAGE_CARD_WIDTH,
      outline: 'unset',
      padding: $theme.spacing.spacingXs,
      width: 'fit-content',
      borderRadius: $theme.borders.borderSm,
      ...($iconPosition === 'left'
        ? { alignItems: 'center', justifyContent: 'space-between', gap: $theme.spacing.spacingXs }
        : {}),

      ...serviceStyles,

      ':disabled': {
        cursor: 'not-allowed',
        borderColor: $theme.colors.neutralSubtle,
        backgroundColor: $theme.colors.neutralWashed,
      },
    };
  },
);
