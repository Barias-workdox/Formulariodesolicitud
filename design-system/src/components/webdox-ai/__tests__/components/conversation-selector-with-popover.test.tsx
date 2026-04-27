import userEvent from '@testing-library/user-event';

import { legalWhisperConversationsMock } from '@components/webdox-ai/__mocks__/legal-whisper-conversations.mock';
import { ConversationSelectorWithPopover } from '@components/webdox-ai/components/chat/chat-composer/components/conversation-selector-with-popover/conversation-selector-with-popover';
import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';
import { noop } from '@utils/noop';

import '@test/__mocks__/use-virtualizer.mock';

import type { ConversationSelectorWithPopoverProps } from '@components/webdox-ai/components/chat/chat-composer/components/conversation-selector-with-popover/conversation-selector-with-popover';
import type { RenderType } from '@test/test-utils';

const baseDataTestId = 'conversation-selector-with-popover';

const onSelectConversationMock = testHelpers.fn();
const onCreateConversationMock = testHelpers.fn();
const onEditConversationMock = testHelpers.fn();
const onDeleteConversationMock = testHelpers.fn();
const onSearchMock = testHelpers.fn();

const defaultProps: ConversationSelectorWithPopoverProps = {
  onLoadMoreConversations: noop,
  isLoadingMore: false,
  conversations: legalWhisperConversationsMock,
  dataTestId: baseDataTestId,
  selectedConversation: legalWhisperConversationsMock[0],
  onSelectConversation: onSelectConversationMock,
  onCreateConversation: onCreateConversationMock,
  onEditConversation: onEditConversationMock,
  onDeleteConversation: onDeleteConversationMock,
  onSearch: onSearchMock,
};

const renderComponent = (props?: Partial<ConversationSelectorWithPopoverProps>): RenderType =>
  render(
    <div>
      <ConversationSelectorWithPopover
        {...defaultProps}
        {...props}
      />
    </div>,
  );

describe('ConversationSelectorWithPopover - tests', () => {
  const { t } = renderUseTranslation();

  it('should render correctly the conversation input', async () => {
    renderComponent();

    expect(screen.getByDisplayValue(legalWhisperConversationsMock[0].title)).toBeInTheDocument();
    expect(
      screen.queryByText(t('webdoxAI.legalWhisperSettings.recentConversations')),
    ).not.toBeInTheDocument();
  });

  it('should show the conversations list when the input is focused', async () => {
    renderComponent();

    const inputElement = screen.getByDisplayValue(legalWhisperConversationsMock[0].title);

    await userEvent.click(inputElement);

    expect(
      await screen.findByText(t('webdoxAI.legalWhisperSettings.recentConversations')),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(t('general.search'))).toBeInTheDocument();

    legalWhisperConversationsMock.forEach((conversation) => {
      expect(screen.getByText(conversation.title)).toBeInTheDocument();
    });
    expect(
      screen.getByText(t('webdoxAI.legalWhisperSettings.newConversation')),
    ).toBeInTheDocument();
  });

  it('should show the empty state when there are no conversations', async () => {
    renderComponent({ conversations: [], searchValue: 'test' });

    const inputElement = screen.getByDisplayValue(legalWhisperConversationsMock[0].title);

    await userEvent.click(inputElement);

    expect(
      screen.getByText(t('webdoxAI.legalWhisperSettings.recentConversationsEmptyState.title')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        t('webdoxAI.legalWhisperSettings.recentConversationsEmptyState.description'),
      ),
    ).toBeInTheDocument();
  });

  it('should call onSearch when the search input changes', async () => {
    renderComponent();

    const inputElement = screen.getByDisplayValue(legalWhisperConversationsMock[0].title);

    await userEvent.click(inputElement);

    const searchInput = screen.getByPlaceholderText(t('general.search'));

    await userEvent.type(searchInput, 'test');

    expect(onSearchMock).toHaveBeenCalled();
  });

  it('should call onSelectConversation when the conversation item is clicked', async () => {
    renderComponent();

    const inputElement = screen.getByDisplayValue(legalWhisperConversationsMock[0].title);

    await userEvent.click(inputElement);

    const conversationItem = screen.getByText(legalWhisperConversationsMock[1].title);

    await userEvent.click(conversationItem);

    expect(onSelectConversationMock).toHaveBeenCalledWith(legalWhisperConversationsMock[1]);
  });

  it('should call onCreateConversation when the new conversation button is clicked', async () => {
    renderComponent();

    const inputElement = screen.getByDisplayValue(legalWhisperConversationsMock[0].title);

    await userEvent.click(inputElement);

    const newConversationButton = screen.getByText(
      t('webdoxAI.legalWhisperSettings.newConversation'),
    );

    await userEvent.click(newConversationButton);

    expect(onCreateConversationMock).toHaveBeenCalled();
  });

  it('should call onEditConversation when the edit conversation button is clicked', async () => {
    renderComponent();

    const inputElement = screen.getByDisplayValue(legalWhisperConversationsMock[0].title);

    await userEvent.click(inputElement);

    const editConversationButton = screen.getByTestId(
      `${baseDataTestId}__conversation-list-item-0--edit-button`,
    );

    await userEvent.click(editConversationButton);

    expect(onEditConversationMock).toHaveBeenCalledWith(legalWhisperConversationsMock[0]);
  });

  it('should call onDeleteConversation when the delete conversation button is clicked', async () => {
    renderComponent();

    const inputElement = screen.getByDisplayValue(legalWhisperConversationsMock[0].title);

    await userEvent.click(inputElement);

    const deleteConversationButton = screen.getByTestId(
      `${baseDataTestId}__conversation-list-item-0--delete-button`,
    );

    await userEvent.click(deleteConversationButton);

    expect(onDeleteConversationMock).toHaveBeenCalledWith(legalWhisperConversationsMock[0]);
  });

  it('should call onSearch when the clear search button is clicked', async () => {
    renderComponent({ searchValue: 'test' });

    const inputElement = screen.getByDisplayValue(legalWhisperConversationsMock[0].title);

    await userEvent.click(inputElement);

    const clearSearchButton = screen.getByTestId(
      `${baseDataTestId}__search-input__end-enhancer--clear-button`,
    );

    await userEvent.click(clearSearchButton);

    expect(onSearchMock).toHaveBeenCalledWith('');
  });
});
