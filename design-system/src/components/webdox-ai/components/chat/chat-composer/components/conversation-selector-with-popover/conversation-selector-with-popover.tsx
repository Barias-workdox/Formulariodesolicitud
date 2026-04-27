import { useCallback, useState } from 'react';
import type { ChangeEvent, ReactElement } from 'react';

import { RequestQuote, Search } from '@carbon/icons-react';

import { Footer } from '@components/footer';
import { Header } from '@components/header';
import { Input } from '@components/input/next';
import { StatelessPopover } from '@components/popover';
import { useTranslation } from '@components/utils';
import { LegalWhisperConversationsListEmptyState } from '@components/webdox-ai/components/legal-whisper-conversations-list-empty-state';
import { VirtualizedConversationsList } from '@components/webdox-ai/components/virtualized-conversations-list';

import { InputSelector } from '../input-selector';

import { ConversationListItem } from './components';
import { VIRTUALIZED_LIST_ITEM_ESTIMATE_SIZE } from './conversation-selector-with-popover.constants';
import { popoverOverrides } from './conversation-selector-with-popover.overrides';
import { StyledBody, StyledList, StyledPopoverContent } from './styled-components';

import type { InputProps } from '@components/input/next';
import type { LegalWhisperConversationListItemType } from '@components/webdox-ai/interfaces/legal-whisper.interfaces';
import type { WithTestId, WithZIndex } from '@interfaces/common.interfaces';

export interface ConversationSelectorWithPopoverProps extends WithZIndex, WithTestId {
  conversations: LegalWhisperConversationListItemType[];
  isLoadingMore?: boolean;
  selectedConversation?: LegalWhisperConversationListItemType;
  searchValue?: string;
  onSelectConversation(conversation: LegalWhisperConversationListItemType): void;
  onCreateConversation(): void;
  onEditConversation(conversation: LegalWhisperConversationListItemType): void;
  onDeleteConversation(conversation: LegalWhisperConversationListItemType): void;
  onLoadMoreConversations(): void;
  onSearch(query: string): void;
}

/**
 * Component that displays a conversation selector with a popover.
 */
export const ConversationSelectorWithPopover = ({
  dataTestId = 'conversation-selector-with-popover',
  conversations = [],
  isLoadingMore,
  selectedConversation,
  searchValue = '',
  onSelectConversation,
  onCreateConversation,
  onEditConversation,
  onDeleteConversation,
  onSearch,
  onLoadMoreConversations,
  zIndex,
}: ConversationSelectorWithPopoverProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation();

  const noResults = conversations.length === 0 && searchValue.trim().length > 0;

  /**
   * Handles the close of the popover
   */
  const handleClose = useCallback((): void => {
    onSearch('');
    setIsOpen(false);
  }, [onSearch]);

  /**
   * Handles the open of the popover
   */
  const handleOpen = useCallback((): void => {
    setIsOpen(true);
  }, []);

  /**
   * Handles the search of the conversations
   */
  const handleSearch: InputProps['onChange'] = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      onSearch(e.target.value);
    },
    [onSearch],
  );

  /**
   * Handles the clear of the search input
   */
  const handleClearSearch = useCallback((): void => {
    onSearch('');
  }, [onSearch]);

  /**
   * Handles the creation of a new conversation.
   * It creates a new conversation and closes the popover.
   */
  const handleCreateConversation = useCallback((): void => {
    onCreateConversation();
    handleClose();
  }, [onCreateConversation, handleClose]);

  return (
    <StatelessPopover
      isOpen={isOpen}
      onClickOutside={handleClose}
      onEsc={handleClose}
      ignoreBoundary
      placement="topRight"
      zIndex={zIndex}
      overrides={popoverOverrides}
      content={
        <StyledPopoverContent>
          <Header
            title={t('webdoxAI.legalWhisperSettings.recentConversations')}
            onClose={handleClose}
            size="xsmall"
          />
          <StyledBody>
            <Input
              data-testid={`${dataTestId}__search-input`}
              autoFocus
              startEnhancer={<Search />}
              onClear={handleClearSearch}
              value={searchValue}
              onChange={handleSearch}
              placeholder={t('general.search')}
            />
            {noResults ? (
              <LegalWhisperConversationsListEmptyState />
            ) : (
              <StyledList>
                <VirtualizedConversationsList
                  ConversationListItemComponent={ConversationListItem}
                  estimateSize={VIRTUALIZED_LIST_ITEM_ESTIMATE_SIZE}
                  conversations={conversations}
                  dataTestId={dataTestId}
                  isLoadingMore={isLoadingMore}
                  onDeleteConversation={onDeleteConversation}
                  onEditConversation={onEditConversation}
                  onPageEnd={onLoadMoreConversations}
                  onSelectConversation={onSelectConversation}
                  selectedConversation={selectedConversation}
                  zIndex={zIndex}
                />
              </StyledList>
            )}
          </StyledBody>
          <Footer
            size="small"
            fullWidthActions
            actions={
              <Footer.Button
                appearance="outlined"
                onClick={handleCreateConversation}
                startEnhancer={RequestQuote}
              >
                {t('webdoxAI.legalWhisperSettings.newConversation')}
              </Footer.Button>
            }
          />
        </StyledPopoverContent>
      }
      showArrow
    >
      <InputSelector
        value={selectedConversation?.title ?? ''}
        isOpen={isOpen}
        handleOpen={handleOpen}
        zIndex={zIndex}
        dataTestId={dataTestId}
      />
    </StatelessPopover>
  );
};
