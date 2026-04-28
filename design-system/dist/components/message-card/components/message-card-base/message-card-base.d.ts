import { FocusEvent, SyntheticEvent } from 'react';
import { MessageCardService, MessageCardStylesConfiguration } from '../../message-card.interfaces';
import { MessageCardTitleProps } from '../message-card-title';
import { CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon';
import { BackgroundIconProps } from '../../../background-icon/background-icon.interfaces';
import { WithIsHoveredProps } from '../../../hocs/with-is-hovered';
import { TextProps } from '../../../text';
import { WithTestId } from '../../../../interfaces/common.interfaces';
import { OverrideObject, Overrides } from '../../../../themes/theme.interfaces';
interface MessageCardOverrides extends Overrides {
    BackgroundIcon?: OverrideObject<BackgroundIconProps>;
    Button?: OverrideObject<MessageCardStylesConfiguration>;
    Description?: OverrideObject<TextProps>;
    Title?: OverrideObject<MessageCardTitleProps>;
}
interface InternalMessageCardBaseProps extends Pick<MessageCardTitleProps, 'titleDirection' | 'title'>, WithIsHoveredProps {
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
export declare const MessageCardBase: (props: {
    'data-testid'?: string;
    dataTestId?: string;
} & InternalMessageCardBaseProps) => import('react').ReactElement;
export {};
