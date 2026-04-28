import { ReactElement, ReactNode } from 'react';
import { MessageActionResponse, MessageBarColorParams, MessageOverrides, MessageType, MessagesUser } from './messages.interfaces';
export interface MessagesProps {
    'data-testid'?: string;
    isLoading: boolean;
    isMentionable?: boolean;
    isSubmitting?: boolean;
    isPaginated?: boolean;
    canCreate: boolean;
    canDelete: boolean;
    canUpdate: boolean;
    currentUserId: number;
    /** If not supplied, the override messages should be used */
    messages?: MessageType[];
    users?: MessagesUser[];
    direction?: 'normal' | 'reverse';
    /** Used to show/hide the message list bottom border */
    showBorder?: boolean;
    /** Will render the inquiry message section loading */
    isInquiryLoading?: boolean;
    /**
     * Used to render a custom component when the messages list is empty
     *
     * @deprecated - use emptyMessageComponent to override the complete component. This prop
     * will be removed on the next major release
     */
    emptyMessage?: ReactNode;
    overrides?: MessageOverrides;
    barColors?: MessageBarColorParams['barsOverrides'];
    onCreate?(value: {
        content: string;
        mentions: number;
    }): Promise<MessageActionResponse>;
    onUpdate?(value: {
        message: MessageType;
        mentions: number;
    }): Promise<MessageActionResponse>;
    onDelete?(message: MessageType): void;
    onPageEnd?(): void;
    onInquiryClick?(message: MessageType): void;
}
/**
 * Single component to construct the messages organism.
 * It will construct the message list and the message composer with all its properties.
 */
export declare const Messages: ({ "data-testid": dataTestId, isLoading, isMentionable, isSubmitting, isPaginated, canCreate, canUpdate, canDelete, currentUserId, messages, users, direction, showBorder, emptyMessage, isInquiryLoading, overrides, barColors, onCreate, onUpdate, onDelete, onPageEnd, onInquiryClick, }: MessagesProps) => ReactElement;
