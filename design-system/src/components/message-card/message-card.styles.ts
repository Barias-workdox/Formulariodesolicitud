import { SERVICES } from './message-card.constants';

import type {
  MessageCardColorsConfig,
  MessageCardColorsMapValue,
  MessageCardService,
  MessageCardStatus,
  MessageCardStylesConfiguration,
} from './message-card.interfaces';

const MESSAGE_CARD_TEXT_COLORS_MAP: Record<
  MessageCardStatus,
  Pick<MessageCardColorsConfig, 'titleTextColor' | 'contentTextColor'>
> = {
  default: {
    titleTextColor: 'neutral',
    contentTextColor: 'neutral',
  },
  hovered: {
    titleTextColor: 'neutralMedium',
    contentTextColor: 'neutralMedium',
  },
  active: {
    titleTextColor: 'neutralStrong',
    contentTextColor: 'neutralStrong',
  },
  disabled: {
    titleTextColor: 'neutralDepressed',
    contentTextColor: 'neutralDepressed',
  },
};

const BG_COLOR_BASE_SERVICE_MAP: Record<
  MessageCardService,
  'Power' | 'Brand' | 'Sweet' | 'Positive'
> = {
  default: 'Brand',
  brain: 'Power',
  legalWhisper: 'Sweet',
  smartContract: 'Positive',
};

/** Generates color configuration for the MessageCard Icon based on the service and the status of the card  */
const getMessageCardIconColors = (
  service: MessageCardService,
  status: MessageCardStatus,
): Pick<MessageCardColorsConfig, 'backgroundIcon'> => {
  if (status === 'disabled') {
    return {
      backgroundIcon: {
        iconColor: 'neutralDepressed',
        backgroundColor: 'neutralSubtle',
      },
    };
  }
  const baseService = BG_COLOR_BASE_SERVICE_MAP[service] || 'Brand';

  return {
    backgroundIcon: {
      iconColor: `icon${baseService}Strong`,
      backgroundColor: `bg${baseService}${status === 'active' ? 'Depressed' : 'Subtle'}`,
    },
  };
};

/** Builds the message card colors map based on state */
const buildMessageCardColorsMap = (
  messageCardStatus: MessageCardStatus,
): MessageCardColorsMapValue => {
  const textColors =
    MESSAGE_CARD_TEXT_COLORS_MAP[messageCardStatus] || MESSAGE_CARD_TEXT_COLORS_MAP.default;

  return SERVICES.reduce<MessageCardColorsMapValue>((acc, service) => {
    acc[service] = {
      ...getMessageCardIconColors(service, messageCardStatus),
      ...textColors,
    };

    return acc;
  }, {} as MessageCardColorsMapValue);
};

/** Color map for a disabled message card. */
const disabledMessageCardColorsMap: MessageCardColorsMapValue =
  buildMessageCardColorsMap('disabled');

/** Color map for an active message card. */
const activeMessageCardColorsMap: MessageCardColorsMapValue = buildMessageCardColorsMap('active');

/** Color map for an default message card. */
export const baseMessageCardColorsMap: MessageCardColorsMapValue =
  buildMessageCardColorsMap('default');

/** Color map for an hovered message card */
export const hoveredMessageCardColorsMap: MessageCardColorsMapValue =
  buildMessageCardColorsMap('hovered');

/**
 * Retrieves the appropriate color map based on the current state of the message card.
 * Prioritizes the following states in order:
 * 1. Disabled
 * 2. Active
 * 3. Hovered
 * 4. Default
 */
export const getMessageCardColorsMap = ({
  $disabled,
  $isActive,
  $isHovered,
}: MessageCardStylesConfiguration): MessageCardColorsMapValue => {
  if ($disabled) return disabledMessageCardColorsMap;
  if ($isActive) return activeMessageCardColorsMap;
  if ($isHovered) return hoveredMessageCardColorsMap;

  return baseMessageCardColorsMap;
};
