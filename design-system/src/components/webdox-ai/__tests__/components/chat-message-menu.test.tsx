import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { ChatMessageMenu } from '../../components/chat-message-menu';

import type { ChatMessageMenuProps } from '../../components/chat-message-menu';
import type { RenderType } from '@test/test-utils';

const mockOnFeedbackButtonClick = testHelpers.fn();
const mockOnCopyToClipboardClick = testHelpers.fn();
const mockOnRetryAnswerGeneration = testHelpers.fn();

const dataTestId = 'data-testid';

const defaultProps: ChatMessageMenuProps = {
  dataTestId,
  id: '1',
  content: 'content',
  onFeedbackButtonClick: mockOnFeedbackButtonClick,
  onCopyToClipboardButtonClick: mockOnCopyToClipboardClick,
  onRetryAnswerGeneration: mockOnRetryAnswerGeneration,
  isLoading: false,
  selectedFeedback: undefined,
  renderFeedback: true,
  renderRetry: true,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (
  props?: Partial<ChatMessageMenuProps>,
): RenderType & {
  copyToClipboardButton: HTMLElement;
  negativeFeedback: HTMLElement;
  positiveFeedback: HTMLElement;
  retryButton: HTMLElement;
} => {
  const container = render(
    <ChatMessageMenu
      {...defaultProps}
      {...props}
    />,
  );

  const defaultElement = document.createElement('div');

  return {
    ...container,
    copyToClipboardButton:
      screen.queryByTestId(`${dataTestId}--copy-to-clipboard-button-1`) ?? defaultElement,
    negativeFeedback:
      screen.queryByTestId(`${dataTestId}--negative-feedback-button-1`) ?? defaultElement,
    positiveFeedback:
      screen.queryByTestId(`${dataTestId}--positive-feedback-button-1`) ?? defaultElement,
    retryButton: screen.queryByTestId(`${dataTestId}--retry-button-1`) ?? defaultElement,
  };
};

describe('chat-message-menu tests', () => {
  beforeEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the component successfully', async () => {
    const { copyToClipboardButton, negativeFeedback, positiveFeedback } = renderComponent();

    expect(copyToClipboardButton).toBeInTheDocument();

    await userEvent.click(positiveFeedback);
    expect(mockOnFeedbackButtonClick).toHaveBeenLastCalledWith(defaultProps.id, 'positive');
    await userEvent.click(negativeFeedback);
    expect(mockOnFeedbackButtonClick).toHaveBeenLastCalledWith(defaultProps.id, 'negative');
  });

  it('should render the component correctly when called with feedback = `positive`', async () => {
    const { positiveFeedback, negativeFeedback } = renderComponent({
      selectedFeedback: 'positive',
    });

    expect(positiveFeedback).toBeInTheDocument();
    expect(negativeFeedback).toBeInTheDocument();
    expect(positiveFeedback).toMatchSnapshot('positive active');
    expect(negativeFeedback).toMatchSnapshot('negative inactive');
  });

  it('should render the component correctly when called with feedback = `negative`', async () => {
    const { negativeFeedback, positiveFeedback } = renderComponent({
      selectedFeedback: 'negative',
    });

    expect(negativeFeedback).toBeInTheDocument();
    expect(positiveFeedback).toBeInTheDocument();
    expect(negativeFeedback).toMatchSnapshot('negative active');
    expect(positiveFeedback).toMatchSnapshot('positive inactive');
  });

  it('should render the component correctly when called with feedback undefined', async () => {
    const { negativeFeedback, positiveFeedback } = renderComponent({
      selectedFeedback: 'negative',
    });

    expect(negativeFeedback).toBeInTheDocument();
    expect(positiveFeedback).toBeInTheDocument();
    expect(negativeFeedback).toMatchSnapshot('negative inactive');
    expect(positiveFeedback).toMatchSnapshot('positive inactive');
  });

  it('should not render feedback buttons when renderFeedback = `false`', async () => {
    const { positiveFeedback, negativeFeedback } = renderComponent({ renderFeedback: false });

    expect(positiveFeedback).not.toBeInTheDocument();
    expect(negativeFeedback).not.toBeInTheDocument();
  });

  it('should trigger copy to clipboard handler on click', async () => {
    const { copyToClipboardButton } = renderComponent({ renderFeedback: false });

    await userEvent.click(copyToClipboardButton);

    expect(mockOnCopyToClipboardClick).toHaveBeenLastCalledWith(
      expect.objectContaining({ id: '1' }),
      true,
    );
  });

  it('should render retry button when renderRetry = `true`', async () => {
    const { retryButton } = renderComponent({
      renderRetry: true,
    });

    await userEvent.click(retryButton);

    expect(retryButton).toBeInTheDocument();
    expect(mockOnRetryAnswerGeneration).toHaveBeenCalledOnce();
  });
});
