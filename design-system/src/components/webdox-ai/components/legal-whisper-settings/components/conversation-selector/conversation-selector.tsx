import type { ChangeEvent } from 'react';
import { useCallback } from 'react';

import { Search } from '@carbon/icons-react';

import { Input } from '@components/input/next';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { useCss } from '@components/utils/hooks/use-css';
import { LegalWhisperConversationsListEmptyState } from '@components/webdox-ai/components/legal-whisper-conversations-list-empty-state';
import { VirtualizedConversationsList } from '@components/webdox-ai/components/virtualized-conversations-list';

import {
  VIRTUALIZED_LIST_ITEM_ESTIMATE_SIZE,
  VIRTUALIZED_LIST_ITEMS_GAP,
} from '../../legal-whisper-settings.constants';

import { ConversationListItem } from './components/conversation-list-item';
import { StyledContainer, StyledEmptyStateWrapper } from './styled-components';

import type { InputProps } from '@components/input/next';
import type { LegalWhisperConversationListItemType } from '@components/webdox-ai/interfaces/legal-whisper.interfaces';
import type { WithZIndex, WithTestId } from '@interfaces/common.interfaces';

export interface ConversationSelectorProps extends WithZIndex, WithTestId {
  conversations: LegalWhisperConversationListItemType[];
  isLoadingMore?: boolean;
  selectedConversation?: LegalWhisperConversationListItemType;
  searchValue?: string;
  onSelectConversation(conversation: LegalWhisperConversationListItemType): void;
  onEditConversation(conversation: LegalWhisperConversationListItemType): void;
  onDeleteConversation(conversation: LegalWhisperConversationListItemType): void;
  onLoadMoreConversations(): void;
  onSearch(query: string): void;
}

/**
 * Component that displays the conversation selector.
 * It is used in the legal whisper settings component.
 * It displays the recent conversations and allows the user to search for a specific conversation.
 * It also allows the user to select a conversation and edit or delete it.
 */
export const ConversationSelector = ({
  dataTestId,
  zIndex,
  conversations,
  isLoadingMore = false,
  selectedConversation,
  searchValue = '',
  onSelectConversation,
  onEditConversation,
  onDeleteConversation,
  onLoadMoreConversations,
  onSearch,
}: ConversationSelectorProps): JSX.Element => {
  const { t } = useTranslation();
  const { theme } = useCss();

  const noResults = conversations.length === 0 && searchValue.trim().length > 0;

  /**
   * Handles the clear of the search input
   */
  const handleClearSearch = useCallback((): void => {
    onSearch('');
  }, [onSearch]);

  /**
   * Handles the search of the conversations
   */
  const handleSearch: InputProps['onChange'] = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      onSearch(e.target.value);
    },
    [onSearch],
  );

  return (
    <StyledContainer>
      <Text
        variant="body"
        fontWeight="700"
        margin={`${theme.spacing.spacingXs} 0`}
      >
        {t('webdoxAI.legalWhisperSettings.recentConversations')}
      </Text>
      <Input
        startEnhancer={<Search />}
        onClear={handleClearSearch}
        value={searchValue}
        onChange={handleSearch}
        placeholder={t('general.search')}
      />
      {noResults ? (
        <StyledEmptyStateWrapper>
          <LegalWhisperConversationsListEmptyState />
        </StyledEmptyStateWrapper>
      ) : (
        <VirtualizedConversationsList
          ConversationListItemComponent={ConversationListItem}
          conversations={conversations}
          dataTestId={dataTestId}
          estimateSize={VIRTUALIZED_LIST_ITEM_ESTIMATE_SIZE}
          isLoadingMore={isLoadingMore}
          listGap={VIRTUALIZED_LIST_ITEMS_GAP}
          onDeleteConversation={onDeleteConversation}
          onEditConversation={onEditConversation}
          onPageEnd={onLoadMoreConversations}
          onSelectConversation={onSelectConversation}
          selectedConversation={selectedConversation}
          zIndex={zIndex}
        />
      )}
    </StyledContainer>
  );
};
