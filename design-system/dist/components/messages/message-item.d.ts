import { ReactElement } from 'react';
import { MessageType, MessagesProps } from '.';
import { DesignSystemColorType } from '../../themes/theme.interfaces';
export interface MessageItemProps<T extends object = object> extends Pick<MessagesProps, 'isLoading' | 'isMentionable' | 'canUpdate' | 'canDelete' | 'currentUserId' | 'users' | 'direction' | 'onUpdate' | 'onDelete' | 'isInquiryLoading' | 'onInquiryClick'> {
    dataTestId: string;
    message: MessageType<T>;
    barColor: DesignSystemColorType;
    labelColor: DesignSystemColorType;
}
/**
 * Message item as a single component.
 * Contains all sub-components that complements the message details.
 * It contains the message layout as container and header, the author details,
 * the content editable as optional, the message date, the popover for options,
 * and the confirmation to delete the message.
 */
export declare const MessageItem: ({ dataTestId, isLoading, isMentionable, canUpdate, canDelete, currentUserId, message, users, barColor, labelColor, direction, isInquiryLoading, onUpdate, onDelete, onInquiryClick, }: MessageItemProps) => ReactElement;
