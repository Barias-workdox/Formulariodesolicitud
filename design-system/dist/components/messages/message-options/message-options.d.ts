import { ReactElement } from 'react';
import { WithTestId } from '../../../interfaces/common.interfaces';
export interface MessageOptionsProps extends WithTestId {
    canUpdate: boolean;
    canDelete: boolean;
    message: unknown;
    onEditClick(item: unknown): void;
    onDeleteClick(item: unknown): void;
    close(): void;
}
/**
 * Options of the message to show in the message options popover.
 * Edit option will toggle a textarea in the message to be edited.
 * Delete option will show a confirmation modal to delete the message.
 */
export declare const MessageOptions: ({ dataTestId, canUpdate, canDelete, message, onEditClick, onDeleteClick, close, }: MessageOptionsProps) => ReactElement;
