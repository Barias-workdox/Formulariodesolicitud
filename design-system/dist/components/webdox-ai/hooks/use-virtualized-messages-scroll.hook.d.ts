import { RefObject } from 'react';
export interface UseMessagesScrollOptions {
    listRef: RefObject<HTMLDivElement>;
    contentRef: RefObject<HTMLDivElement>;
    isGeneratingAnswer: boolean;
    childrenLength: number;
    virtualItemsLength: number;
    messageAnimationDurationMs: number;
    messagesScrollOffset: number;
}
/**
 * A hook that sets up side effects for scrolling logic in a virtualized message list.
 *
 * Responsibilities:
 * - Scrolls to bottom on initial load.
 * - Smoothly scrolls to bottom when new messages appear.
 * - Keeps the scroll anchored to the bottom if the user is there while generating answers.
 * - Waits for animations to complete before scrolling after answer generation finishes.
 * - Observes content resizing to maintain correct scroll position.
 *
 * This hook doesn't return anything. It just sets up the necessary side effects.
 */
export declare const useVirtualizedMessageScroll: ({ childrenLength, contentRef, isGeneratingAnswer, listRef, messageAnimationDurationMs, messagesScrollOffset, virtualItemsLength, }: UseMessagesScrollOptions) => void;
