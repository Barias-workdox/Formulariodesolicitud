import { render, screen, testHelpers } from '@test/test-utils';

import { VirtualizedMessagesList } from '../../components/chat/chat-messages/components/virtualized-messages-list';

import type { VirtualizedMessagesListProps } from '../../components/chat/chat-messages/components/virtualized-messages-list';
import type { RenderType } from '@test/test-utils';

import '@test/__mocks__/use-virtualizer.mock';

const scrollToMock = testHelpers.fn();

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (
  props?: Partial<VirtualizedMessagesListProps>,
): { addNewMessage(): void } & RenderType => {
  const messages = ['Message 1', 'Message 2'];

  const addNewMessage = (): void => {
    messages.push('Message 3');
  };

  const renderResult = render(
    <VirtualizedMessagesList {...props}>
      {messages.map((message) => (
        <div key={message}>{message}</div>
      ))}
    </VirtualizedMessagesList>,
  );

  return { ...renderResult, addNewMessage };
};

beforeEach(() => {
  Element.prototype.scrollTo = scrollToMock;
  testHelpers.useFakeTimers();
  testHelpers.clearAllMocks();
});

describe('VirtualizedMessagesList - tests', () => {
  it('should render correctly', () => {
    renderComponent();

    expect(screen.getByText('Message 1')).toBeInTheDocument();
    expect(screen.getByText('Message 2')).toBeInTheDocument();
  });

  it('should automatically scroll to the bottom on initial render', () => {
    renderComponent();

    expect(scrollToMock).toHaveBeenCalled();
  });

  it('should scroll to the bottom when new messages are added', () => {
    const { addNewMessage } = renderComponent();

    addNewMessage();

    expect(scrollToMock).toHaveBeenCalled();
  });
});
