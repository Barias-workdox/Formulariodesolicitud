import { ReactElement, ReactNode } from 'react';
export interface VirtualizedMessagesListProps {
    children: ReactNode[];
    isGeneratingAnswer?: boolean;
}
/**
 * A virtualized list component for displaying brain chat messages.
 *
 * This component leverages virtualization to efficiently render large lists of messages, * automatically scrolls to the bottom on new messages, and handles dynamic resizing.
 *
 * Features:
 * - Automatic scrolling to the bottom on initial render and new messages.
 * - Resize handling with smooth scrolling when the user is at the bottom.
 * - Virtualization for optimized rendering of large message lists.
 */
export declare const VirtualizedMessagesList: ({ children, isGeneratingAnswer, }: VirtualizedMessagesListProps) => ReactElement;
