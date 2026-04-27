import { type FocusEvent, type SyntheticEvent, useMemo } from 'react';

import { BackgroundIcon } from '@components/background-icon';
import { withIsHovered } from '@components/hocs/with-is-hovered';
import { Text } from '@components/text';
import { noop } from '@utils/noop';
import { getOverride, getOverrideProps } from '@utils/overrides.utils';

import { getMessageCardColorsMap } from '../../message-card.styles';
import { MessageCardTitle } from '../message-card-title';

import { StyledBaseButton } from './message-card-base.styles';

import type {
  MessageCardService,
  MessageCardStylesConfiguration,
} from '../../message-card.interfaces';
import type { MessageCardTitleProps } from '../message-card-title';
import type { CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon';
import type { BackgroundIconProps } from '@components/background-icon/background-icon.interfaces';
import type { WithIsHoveredProps } from '@components/hocs/with-is-hovered';
import type { TextProps } from '@components/text';
import type { WithTestId } from '@interfaces/common.interfaces';
import type { OverrideObject, Overrides } from '@themes/theme.interfaces';

interface MessageCardOverrides extends Overrides {
  BackgroundIcon?: OverrideObject<BackgroundIconProps>;
  Button?: OverrideObject<MessageCardStylesConfiguration>;
  Description?: OverrideObject<TextProps>;
  Title?: OverrideObject<MessageCardTitleProps>;
}

interface InternalMessageCardBaseProps
  extends Pick<MessageCardTitleProps, 'titleDirection' | 'title'>, WithIsHoveredProps {
  /** Optional description text for the message card. */
  description?: string;
  disabled?: boolean;
  isActive?: boolean;
  Icon?: CarbonIconType;
  /** The shape of the icon's background. */
  iconShape?: BackgroundIconProps['shape'];
  /** The position of the icon in relation of the text  */
  iconPosition?: 'default' | 'left';
  /** The style variant of the message card. Determines the color scheme and appearance of the card. */
  service?: MessageCardService;
  overrides?: MessageCardOverrides;
  onBlur?(event: MouseEvent | FocusEvent<Element, Element>): void;
  onClick?(event: SyntheticEvent<HTMLButtonElement>): void;
  onFocus?(event: FocusEvent<HTMLButtonElement>): void;
}

export type MessageCardBaseProps = WithTestId<InternalMessageCardBaseProps>;

/**
 * Renders a message card that acts as a button with customizable icon, title, and description.
 */
const MessageCardBaseComponent = ({
  'data-testid': dataTestId = 'message-card',
  disabled = false,
  isActive = false,
  service = 'default',
  titleDirection = 'row',
  iconShape = 'round',
  iconPosition = 'default',
  isHovered = false,
  Icon,
  title,
  description,
  overrides,
  onBlur = noop,
  onClick = noop,
  onFocus = noop,
}: MessageCardBaseProps): JSX.Element => {
  const {
    BackgroundIcon: BackgroundIconOverride,
    Button: ButtonOverride,
    Description: DescriptionOverride,
    Title: TitleOverride,
  } = overrides || {};

  const BackgroundIconComponent = getOverride(BackgroundIconOverride) || BackgroundIcon;
  const Button = getOverride(ButtonOverride) || StyledBaseButton;
  const Description = getOverride(DescriptionOverride) || Text;
  const Title = getOverride(TitleOverride) || MessageCardTitle;

  const { backgroundIcon, contentTextColor } = useMemo(
    () =>
      getMessageCardColorsMap({
        $disabled: disabled,
        $isActive: isActive,
        $isHovered: isHovered,
      })[service],
    [disabled, isActive, isHovered, service],
  );

  const hasDescription = !!description;

  /** renders the Icon component */
  const IconComponent = useMemo((): JSX.Element => {
    if (!Icon) {
      return null;
    }
    const { iconColor, backgroundColor } = backgroundIcon;

    return (
      <BackgroundIconComponent
        data-testid={`${dataTestId}__title-icon-${iconPosition}`}
        Icon={Icon}
        shape={iconShape}
        size="24px"
        iconColor={iconColor}
        backgroundColor={backgroundColor}
        {...getOverrideProps(BackgroundIconOverride)}
      />
    );
  }, [
    Icon,
    BackgroundIconComponent,
    dataTestId,
    iconShape,
    iconPosition,
    backgroundIcon,
    BackgroundIconOverride,
  ]);

  /** Renders the legible content of the message card component */
  const renderContent = (): JSX.Element => (
    <>
      <Title
        data-testid={`${dataTestId}__title`}
        Icon={IconComponent}
        showIcon={iconPosition === 'default'}
        title={title}
        disabled={disabled}
        isActive={isActive}
        isHovered={isHovered}
        service={service}
        titleDirection={titleDirection}
        {...getOverrideProps(TitleOverride)}
      />
      {hasDescription && (
        <Description
          variant="bodySmall"
          margin={0}
          color={contentTextColor}
          width="100%"
          {...getOverrideProps(DescriptionOverride)}
        >
          {description}
        </Description>
      )}
    </>
  );

  return (
    <Button
      $service={service}
      data-testid={`${dataTestId}--button`}
      disabled={disabled}
      aria-selected={isActive}
      $iconPosition={iconPosition}
      onBlur={onBlur}
      onClick={onClick}
      onFocus={onFocus}
      $isActive={isActive}
      {...getOverrideProps(ButtonOverride)}
    >
      {Icon && iconPosition === 'left' && IconComponent}
      {Icon && iconPosition === 'left' ? <div>{renderContent()}</div> : renderContent()}
    </Button>
  );
};

export const MessageCardBase = withIsHovered(MessageCardBaseComponent);
