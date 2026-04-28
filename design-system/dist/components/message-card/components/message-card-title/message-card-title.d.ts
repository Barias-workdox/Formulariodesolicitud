import { WithIsHoveredProps } from '../../../hocs/with-is-hovered';
import { MessageCardService, MessageCardStylesConfiguration, MessageCardTitleDirection } from '../../message-card.interfaces';
import { TextProps } from '../../../text';
import { WithTestId } from '../../../../interfaces/common.interfaces';
import { OverrideObject, Overrides } from '../../../../themes/theme.interfaces';
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
export type MessageCardTitleProps = MessageCardTitleBaseProps & ({
    showIcon?: false;
    Icon?: React.ReactElement;
} | {
    showIcon: true;
    Icon: React.ReactElement;
});
/**
 * Renders the title section of a message card, including an icon and the title text.
 * This component is typically used within a message card and handles the layout and styles
 * of the title based on the card's state (disabled, active) and related service.
 */
export declare const MessageCardTitle: ({ "data-testid": dataTestId, disabled, Icon, showIcon, isActive, isHovered, service: service, title, titleDirection, overrides, }: MessageCardTitleProps) => JSX.Element;
export {};
