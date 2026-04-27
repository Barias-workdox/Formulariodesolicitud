import { useMemo } from 'react';

import { getMessageCardColorsMap } from '@components/message-card/message-card.styles';
import { Text } from '@components/text';
import { getOverride, getOverrideProps } from '@utils/overrides.utils';

import { StyledRoot } from './message-card-title.styles';

import type { WithIsHoveredProps } from '@components/hocs/with-is-hovered';
import type {
  MessageCardService,
  MessageCardStylesConfiguration,
  MessageCardTitleDirection,
} from '@components/message-card/message-card.interfaces';
import type { TextProps } from '@components/text';
import type { WithTestId } from '@interfaces/common.interfaces';
import type { OverrideObject, Overrides } from '@themes/theme.interfaces';

interface MessageCardTitleOverrides extends Overrides {
  Root?: OverrideObject<MessageCardStylesConfiguration>;
  Title?: OverrideObject<TextProps>;
}

interface MessageCardTitleBaseProps extends WithTestId, WithIsHoveredProps {
  /** The icon component to display alongside the title. */
  Icon?: JSX.Element;
  /** Indicates if the icon must be showed on the title */
  showIcon?: boolean;
  /** The title text of the message card. */
  title: string;
  /** The direction of the title and icon layout. */
  titleDirection?: MessageCardTitleDirection;
  /** Indicates if the message card is disabled, affecting the title's styles. */
  disabled?: boolean;
  /** Indicates if the message card is active, affecting the title's styles. */
  isActive?: boolean;
  /** The style variant of the message card, affecting the title's appearance. */
  service?: MessageCardService;
  overrides?: MessageCardTitleOverrides;
}

export type MessageCardTitleProps = MessageCardTitleBaseProps &
  ({ showIcon?: false; Icon?: React.ReactElement } | { showIcon: true; Icon: React.ReactElement });

/**
 * Renders the title section of a message card, including an icon and the title text.
 * This component is typically used within a message card and handles the layout and styles
 * of the title based on the card's state (disabled, active) and related service.
 */
export const MessageCardTitle = ({
  'data-testid': dataTestId = 'message-card-title',
  disabled,
  Icon,
  showIcon = false,
  isActive,
  isHovered = false,
  service: service = 'default',
  title,
  titleDirection,
  overrides,
}: MessageCardTitleProps): JSX.Element => {
  const { Root: RootOverride, Title: TitleOverride } = overrides || {};

  const Root = getOverride(RootOverride) || StyledRoot;
  const Title = getOverride(TitleOverride) || Text;

  const { titleTextColor } = useMemo(
    () =>
      getMessageCardColorsMap({
        $disabled: disabled,
        $isActive: isActive,
        $isHovered: isHovered,
      })[service],
    [disabled, isActive, isHovered, service],
  );

  return (
    <Root
      $direction={titleDirection}
      data-testid={dataTestId}
      {...getOverrideProps(RootOverride)}
    >
      {Icon && showIcon && Icon}
      <Title
        variant="body"
        margin={0}
        fontWeight="700"
        color={titleTextColor}
        width="100%"
        {...getOverrideProps(TitleOverride)}
      >
        {title}
      </Title>
    </Root>
  );
};
