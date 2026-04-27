import { useEffect } from 'react';

import { ChatMessages } from '@components/webdox-ai/components/chat';
import { ChatBotNegativeFeedbackModalContainer } from '@components/webdox-ai/modals';
import { render, screen } from '@test/test-utils';

import { WebdoxAIChatController } from '../../controllers/webdox-ai-chat.controller';

import type { WebdoxAIChatControllerProps } from '../../controllers/webdox-ai-chat.controller';
import type { ChatBotConversationTypeV2 } from '@components/webdox-ai/interfaces';
import type { MockedFunction } from '@test/test-utils';

const ChatMessagesMocked = ChatMessages as MockedFunction<typeof ChatMessages>;
const ChatBotNegativeFeedbackModalContainerMocked =
  ChatBotNegativeFeedbackModalContainer as MockedFunction<
    typeof ChatBotNegativeFeedbackModalContainer
  >;

vi.mock('@components/webdox-ai/modals', () => ({
  ChatBotNegativeFeedbackModalContainer: vi.fn(({ 'data-testid': dataTestId }) => (
    <div data-testid={`${dataTestId}-negative-feedback`} />
  )),
}));

vi.mock('@components/webdox-ai/components/chat', () => ({
  ChatMessages: vi.fn(({ 'data-testid': dataTestId }) => (
    <div data-testid={`${dataTestId}-chat-messages`} />
  )),
}));

const defaultProps: WebdoxAIChatControllerProps = {
  'data-testid': 'data-testid',
  conversation: undefined,
  onCreateMessage: vi.fn(),
  onSettingsClick: vi.fn(),
  onCopyToClipboardButtonClick: vi.fn(),
  onSubmitFeedback: vi.fn(),
  onSuggestionsClick: vi.fn(),
  onTempAnswerSubmit: vi.fn(),
  onStopAnswerGeneration: vi.fn(),
};

const baseMessageData = {
  id: '',
  createdAt: '',
};

const answerData = {
  ...baseMessageData,
  id: 'my_answer',
  variant: 'persist',
  value: '',
  feedback: {},
};
const conversationData = {
  ...baseMessageData,
  title: '',
  questions: [
    {
      ...baseMessageData,
      answers: [answerData],
      variant: 'persist',
      value: '',
    },
  ],
} as ChatBotConversationTypeV2;

const renderComponent = (props?: Partial<WebdoxAIChatControllerProps>) =>
  render(
    <WebdoxAIChatController
      {...defaultProps}
      {...props}
    />,
  );

describe('WebdoxAIChatController', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });
  it('should render the component', () => {
    renderComponent();
    expect(screen.getByTestId('data-testid-negative-feedback')).toBeInTheDocument();
    expect(screen.getByTestId('data-testid-chat-messages')).toBeInTheDocument();
  });

  it('should call onCreateMessage when the user sends a message', () => {
    const questionText = 'question';

    ChatMessagesMocked.mockImplementation(({ onCreateMessage }) => {
      onCreateMessage(questionText);

      return <></>;
    });
    renderComponent();
    expect(defaultProps.onCreateMessage).toHaveBeenCalledWith(questionText, {
      origin: 'brainCompanion',
    });
  });

  it('should call onSettingsClick when the settings button is clicked', () => {
    ChatMessagesMocked.mockImplementation(({ onSettingsClick }) => {
      onSettingsClick();

      return <></>;
    });
    renderComponent();
    expect(defaultProps.onSettingsClick).toHaveBeenCalled();
  });

  it('should call onCopyToClipboardButtonClick when the copy to clipboard button is clicked', () => {
    ChatMessagesMocked.mockImplementation(({ messages: [_, answer] }) => {
      useEffect(() => {
        if (answer.kind === 'answer') {
          answer.onCopyToClipboardButtonClick(
            {
              id: 'my_answer',
              variant: 'persist',
              value: '',
              createdAt: '',
            },
            true,
          );
        }
      }, [answer]);

      return <></>;
    });

    renderComponent({
      conversation: conversationData,
    });

    expect(defaultProps.onCopyToClipboardButtonClick).toHaveBeenCalledWith(
      {
        createdAt: '',
        id: 'my_answer',
        value: '',
        feedback: {},
        variant: 'persist',
      },
      true,
    );
  });

  it('should call onSubmitFeedback when feedback changes (positive feedback)', () => {
    ChatMessagesMocked.mockImplementation(({ messages: [_, answer] }) => {
      useEffect(() => {
        if (answer.kind === 'answer') {
          answer.onFeedbackButtonClick(answer.id, 'positive');
        }
      }, [answer]);

      return <></>;
    });

    renderComponent({
      conversation: conversationData,
    });
    expect(defaultProps.onSubmitFeedback).toHaveBeenCalledWith({
      answer: answerData,
      feedbackKind: 'positive',
      messageId: 'my_answer',
      values: {
        comments: '',
        option: 'custom',
      },
    });
  });

  it('should not call onSubmitFeedback when handleFeedbackSubmit is called from modal', () => {
    const values = {
      comments: 'testing',
      option: 'custom' as const,
    };

    ChatBotNegativeFeedbackModalContainerMocked.mockImplementation(({ onSubmit }) => {
      onSubmit(values);

      return <></>;
    });

    renderComponent({
      conversation: conversationData,
    });

    expect(defaultProps.onSubmitFeedback).not.toHaveBeenCalled();
  });

  it('should call onSubmitFeedback when handleFeedbackSubmit is called from modal', () => {
    const values = {
      comments: 'testing',
      option: 'custom' as const,
    };

    ChatMessagesMocked.mockImplementation(({ messages: [_, answer] }) => {
      useEffect(() => {
        if (answer.kind === 'answer') {
          answer.onFeedbackButtonClick(answer.id, 'negative');
        }
      }, [answer]);

      return <></>;
    });
    ChatBotNegativeFeedbackModalContainerMocked.mockImplementation(({ onSubmit }) => {
      onSubmit(values);

      return <></>;
    });

    renderComponent({
      conversation: conversationData,
    });

    expect(defaultProps.onSubmitFeedback).toHaveBeenCalledWith({
      answer: answerData,
      feedbackKind: 'negative',
      messageId: 'my_answer',
      values,
    });
  });

  it('should call onSuggestionsClick when the suggestions button is clicked', () => {
    ChatMessagesMocked.mockImplementation(({ onSuggestionsClick }) => {
      onSuggestionsClick();

      return <></>;
    });
    renderComponent();
    expect(defaultProps.onSuggestionsClick).toHaveBeenCalled();
  });

  it('should call onStopAnswerGeneration when the stop button is clicked', () => {
    ChatMessagesMocked.mockImplementation(({ onStopAnswerGeneration }) => {
      onStopAnswerGeneration();

      return <></>;
    });
    renderComponent();
    expect(defaultProps.onStopAnswerGeneration).toHaveBeenCalled();
  });
});
