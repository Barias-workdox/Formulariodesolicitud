import { ReactElement, ReactNode } from 'react';
interface MessageEmptyStateProps {
    emptyMessage?: ReactNode;
}
/**
 * Message that is shown when the messages organism doesn't has any message.
 */
export declare const MessageEmptyState: ({ emptyMessage }: MessageEmptyStateProps) => ReactElement;
export {};
