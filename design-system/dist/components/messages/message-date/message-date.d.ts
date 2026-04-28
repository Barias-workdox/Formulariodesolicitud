import { ReactElement } from 'react';
export interface MessageDateProps {
    isEditing: boolean;
    updatedAt: string;
    createdAt: string;
}
/**
 * Date of the message.
 * If there are differences between created and updated dates then it will mean that the message is updated.
 */
export declare const MessageDate: ({ isEditing, updatedAt, createdAt, }: MessageDateProps) => ReactElement;
