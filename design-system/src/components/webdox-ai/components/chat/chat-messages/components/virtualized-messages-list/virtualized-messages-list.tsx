import { useRef } from 'react';
import type { ReactElement, ReactNode } from 'react';

import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useVirtualizer } from '@tanstack/react-virtual';

import {
  MESSAGES_SCROLL_OFFSET,
  MESSAGE_ANIMATION_DURATION_MS,
  VIRTUALIZED_LIST_ITEMS_GAP,
  VIRTUALIZED_LIST_OVERSCAN,
  VIRTUALIZED_LIST_PADDING,
  VIRTUALIZED_MESSAGE_ESTIMATE_SIZE,
} from '@components/webdox-ai/constants/webdox-ai.constants';
import { useVirtualizedMessageScroll } from '@components/webdox-ai/hooks';

import { StyledContainer } from './styled-components/styled-container';
import { StyledVirtualizedFloatingWrapper } from './styled-components/styled-virtualized-floating-wrapper';
import { StyledVirtualizedWrapper } from './styled-components/styled-virtualized-wrapper';

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
export const VirtualizedMessagesList = ({
  children,
  isGeneratingAnswer = false,
}: VirtualizedMessagesListProps): ReactElement => {
  const listRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const childrenLength = children.length;

  const virtualizer = useVirtualizer({
    count: childrenLength,
    getScrollElement: () => listRef.current,
    estimateSize: () => VIRTUALIZED_MESSAGE_ESTIMATE_SIZE,
    overscan: VIRTUALIZED_LIST_OVERSCAN,
    gap: VIRTUALIZED_LIST_ITEMS_GAP,
    paddingStart: VIRTUALIZED_LIST_PADDING,
    paddingEnd: VIRTUALIZED_LIST_PADDING,
  });

  const virtualItems = virtualizer.getVirtualItems();

  useVirtualizedMessageScroll({
    childrenLength,
    contentRef,
    isGeneratingAnswer,
    listRef,
    messageAnimationDurationMs: MESSAGE_ANIMATION_DURATION_MS,
    messagesScrollOffset: MESSAGES_SCROLL_OFFSET,
    virtualItemsLength: virtualItems.length,
  });

  const [animateRef] = useAutoAnimate({
    duration: MESSAGE_ANIMATION_DURATION_MS,
  });

  return (
    <StyledContainer ref={listRef}>
      <StyledVirtualizedWrapper
        ref={contentRef}
        $minHeight={virtualizer.getTotalSize()}
      >
        <StyledVirtualizedFloatingWrapper $firstElementPosition={virtualItems[0]?.start}>
          {virtualItems.map((virtualItem) => {
            return (
              <div
                key={virtualItem.key}
                ref={virtualizer.measureElement}
                data-index={virtualItem.index}
              >
                <div ref={animateRef}>{children[virtualItem.index]}</div>
              </div>
            );
          })}
        </StyledVirtualizedFloatingWrapper>
      </StyledVirtualizedWrapper>
    </StyledContainer>
  );
};
