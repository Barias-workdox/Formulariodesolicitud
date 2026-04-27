import { type RefObject, useEffect, useState } from 'react';

import { scrollToBottom, validateIsScrolledToBottom } from '@utils/dom.utils';

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
export const useVirtualizedMessageScroll = ({
  childrenLength,
  contentRef,
  isGeneratingAnswer,
  listRef,
  messageAnimationDurationMs,
  messagesScrollOffset,
  virtualItemsLength,
}: UseMessagesScrollOptions): void => {
  const [firstRender, setFirstRender] = useState(true);
  const [localIsGeneratingAnswer, setLocalIsGeneratingAnswer] = useState(isGeneratingAnswer);

  /**
   * Automatically scrolls to the bottom of the list on the first render
   * when virtual items are loaded.
   */
  useEffect(() => {
    if (firstRender && virtualItemsLength) {
      scrollToBottom({ element: listRef.current, tolerance: messagesScrollOffset });
      setFirstRender(false);
    }
  }, [firstRender, listRef, messagesScrollOffset, virtualItemsLength]);

  /**
   * Smoothly scrolls to the bottom of the list whenever the number of children changes.
   */
  useEffect(() => {
    if (!childrenLength) return;

    scrollToBottom({
      element: listRef.current,
      tolerance: messagesScrollOffset,
      behavior: 'smooth',
    });
  }, [childrenLength, listRef, messagesScrollOffset]);

  /**
   * Observes the size of the content element to handle resizing events.
   * Automatically scrolls to the bottom if a new message is being generated
   * and the user is already at the bottom.
   */
  useEffect(() => {
    if (!contentRef?.current) return;

    const contentElement = contentRef.current;

    /**
     * Handles the resize event, checking if the user is at the bottom
     * and scrolling if necessary.
     */
    const handleResize = (): void => {
      const isScrolledToBottom = validateIsScrolledToBottom({
        element: listRef.current,
        tolerance: messagesScrollOffset,
      });

      if (isGeneratingAnswer && isScrolledToBottom) {
        scrollToBottom({
          element: listRef.current,
          tolerance: messagesScrollOffset,
          behavior: 'smooth',
        });
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);

    resizeObserver.observe(contentElement);

    return (): void => {
      resizeObserver.disconnect();
    };
  }, [contentRef, isGeneratingAnswer, listRef, messagesScrollOffset]);

  /**
   * Watches the `isGeneratingAnswer` state to trigger smooth scrolling
   * once the answer generation is completed. It also manages a local state
   * to synchronize animations and handle transitions.
   */
  useEffect(() => {
    if (isGeneratingAnswer && !localIsGeneratingAnswer) {
      setLocalIsGeneratingAnswer(true);
    } else if (!isGeneratingAnswer && localIsGeneratingAnswer) {
      // Waits for the message generation animation before scrolling to the bottom.
      setTimeout(() => {
        scrollToBottom({
          element: listRef.current,
          tolerance: messagesScrollOffset,
          behavior: 'smooth',
        });
      }, messageAnimationDurationMs);

      setLocalIsGeneratingAnswer(false);
    }
  }, [
    isGeneratingAnswer,
    listRef,
    localIsGeneratingAnswer,
    messageAnimationDurationMs,
    messagesScrollOffset,
  ]);
};
