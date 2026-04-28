import { ReactElement } from 'react';
import { WithTestId } from '../../../interfaces/common.interfaces';
export interface MessageDeleteProps extends WithTestId {
    show: boolean;
    message: unknown;
    onCancel(): void;
    onConfirm(): void;
}
/**
 * Confirmation to delete a message.
 * The confirmation contains a black overlay at background and a box with confirm and cancel buttons.
 */
export declare const MessageDelete: ({ dataTestId, show, message, onCancel, onConfirm, }: MessageDeleteProps) => ReactElement;
