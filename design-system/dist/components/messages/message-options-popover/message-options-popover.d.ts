import { ReactElement } from 'react';
import { MessageOptionsProps } from '../message-options';
export type MessageOptionsPopoverProps = Omit<MessageOptionsProps, 'close'> & {
    'data-testid'?: string;
    canUpdate: boolean;
    canDelete: boolean;
    isLoading: boolean;
    /**
     * Is the current user the author of the message?
     */
    isAuthor: boolean;
};
/**
 * Popover to show the message options.
 * Will be rendered if is the author of the message.
 */
export declare const MessageOptionsPopover: ({ "data-testid": dataTestId, canUpdate, canDelete, isLoading, message, onEditClick, onDeleteClick, isAuthor, }: MessageOptionsPopoverProps) => ReactElement;
