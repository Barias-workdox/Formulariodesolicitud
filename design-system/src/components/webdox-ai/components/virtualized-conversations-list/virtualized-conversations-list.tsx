import { useRef } from 'react';

import { useVirtualizer } from '@tanstack/react-virtual';

import { Spinner } from '@components/spinner/next';
import { useInfiniteScrollPagination } from '@hooks/use-infinite-scroll-pagination.hook';

import { StyledConversationsListSpinnerWrapper, StyledList } from './styled-components';
import { VIRTUALIZED_LIST_OVERSCAN } from './virtualized-conversations-list.constants';

import type { LegalWhisperConversationListItemType } from '@components/webdox-ai/interfaces/legal-whisper.interfaces';
import type { WithTestId, WithZIndex } from '@interfaces/common.interfaces';

interface ConversationListItemProps extends WithTestId, WithZIndex {
  conversation: LegalWhisperConversationListItemType;
  isSelected: boolean;
  isLast: boolean;
  onDeleteConversation(): void;
  onEditConversation(): void;
  onClick(): void;
}

interface VirtualizedConversationsListProps extends WithZIndex, WithTestId {
  conversations: LegalWhisperConversationListItemType[];
  selectedConversation?: LegalWhisperConversationListItemType;
  isLoadingMore?: boolean;
  estimateSize: number;
  listGap?: number;
  ConversationListItemComponent: React.ComponentType<ConversationListItemProps>;
  onPageEnd(): void;
  onSelectConversation(conversation: LegalWhisperConversationListItemType): void;
  onDeleteConversation(conversation: LegalWhisperConversationListItemType): void;
  onEditConversation(conversation: LegalWhisperConversationListItemType): void;
}

/**
 * Component that displays a virtualized list of conversations.
 * It is used in the conversation selector component.
 * It displays the recent conversations and allows the user to search for a specific conversation.
 * It also allows the user to select a conversation and edit or delete it.
 */
export const VirtualizedConversationsList = ({
  conversations,
  dataTestId,
  isLoadingMore,
  estimateSize,
  ConversationListItemComponent,
  listGap,
  onDeleteConversation,
  onEditConversation,
  onPageEnd,
  onSelectConversation,
  selectedConversation,
  zIndex,
}: VirtualizedConversationsListProps): JSX.Element => {
  const parentRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: conversations.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => estimateSize,
    overscan: VIRTUALIZED_LIST_OVERSCAN,
    gap: listGap,
  });

  const { endOfPageNode } = useInfiniteScrollPagination({
    onPageEnd: () => {
      if (!isLoadingMore) {
        onPageEnd();
      }
    },
  });

  return (
    <StyledList ref={parentRef}>
      <div style={{ height: `${rowVirtualizer.getTotalSize()}px`, position: 'relative' }}>
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
          const shouldShowEndOfPageNode = virtualRow.index === conversations.length - 5;
          const isLast = virtualRow.index === conversations.length - 1;
          const conversation = conversations[virtualRow.index];

          return (
            <div
              key={virtualRow.key}
              data-index={virtualRow.index}
              ref={rowVirtualizer.measureElement}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: `${virtualRow.size}px`,
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              <ConversationListItemComponent
                conversation={conversation}
                dataTestId={`${dataTestId}__conversation-list-item-${virtualRow.index}`}
                isLast={isLast}
                isSelected={conversation.id === selectedConversation?.id}
                onClick={() => onSelectConversation(conversation)}
                onDeleteConversation={() => onDeleteConversation(conversation)}
                onEditConversation={() => onEditConversation(conversation)}
                zIndex={zIndex}
              />
              {shouldShowEndOfPageNode && !isLoadingMore && endOfPageNode}
              {isLast && isLoadingMore && (
                <StyledConversationsListSpinnerWrapper>
                  <Spinner
                    dataTestId={`${dataTestId}__loading-more-spinner`}
                    kind="custom"
                    size="medium"
                  />
                </StyledConversationsListSpinnerWrapper>
              )}
            </div>
          );
        })}
      </div>
    </StyledList>
  );
};
