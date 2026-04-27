import type { DesignSystemColorType } from '@themes';

export type MessageCardColorsConfig = {
  backgroundIcon: {
    iconColor: DesignSystemColorType;
    backgroundColor: DesignSystemColorType;
  };
  titleTextColor: DesignSystemColorType;
  contentTextColor: DesignSystemColorType;
};

export type MessageCardService = 'default' | 'brain' | 'legalWhisper' | 'smartContract';

export type MessageCardStatus = 'default' | 'active' | 'disabled' | 'hovered';

export type MessageCardColorsMapValue = Record<MessageCardService, MessageCardColorsConfig>;

export type MessageCardTitleDirection = 'row' | 'column';

export type MessageCardStylesConfiguration = {
  $direction?: MessageCardTitleDirection;
  $disabled?: boolean;
  $hasDescription?: boolean;
  $isActive?: boolean;
  $isHovered?: boolean;
  $iconPosition?: 'default' | 'left';
  $service?: MessageCardService;
};
