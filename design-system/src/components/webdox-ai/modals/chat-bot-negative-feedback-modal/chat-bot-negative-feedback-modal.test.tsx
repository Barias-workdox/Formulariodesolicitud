import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { ChatBotNegativeFeedbackModalContainer } from './chat-bot-negative-feedback-modal.container';

import type { ChatBotNegativeFeedbackModalContainerProps } from './chat-bot-negative-feedback-modal.container';
import type { TFunction } from '@components/utils/index';
import type { RenderType } from '@test/test-utils';

const mockOnSubmitForm = testHelpers.fn();
const mockOnClose = testHelpers.fn();

const defaultProps: ChatBotNegativeFeedbackModalContainerProps = {
  'data-testid': 'data-testid',
  isOpen: true,
  isLoading: false,
  onClose: mockOnClose,
  onSubmit: mockOnSubmitForm,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (
  props?: Partial<ChatBotNegativeFeedbackModalContainerProps>,
): RenderType & {
  t: TFunction;
} => {
  const { t } = renderUseTranslation();

  const container = render(
    <ChatBotNegativeFeedbackModalContainer
      {...defaultProps}
      {...props}
    />,
  );

  return {
    ...container,
    t,
  };
};

describe('chat-bot-negative-feedback-modal tests', () => {
  beforeEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should not render the component when `isOpen` is `false`', () => {
    const { t } = renderComponent({ isOpen: false });

    expect(screen.queryByText(t('webdoxAI.chat.feedback.modal.title'))).not.toBeInTheDocument();
  });

  it('should render the component successfully', async () => {
    const { t } = renderComponent();

    const cancelButton = screen.getByRole('button', {
      name: t('webdoxAI.chat.feedback.modal.cancelButton'),
    });
    const submitButton = screen.getByRole('button', {
      name: t('webdoxAI.chat.feedback.modal.submitButton'),
    });

    expect(
      screen.queryByPlaceholderText(t('webdoxAI.chat.feedback.modal.commentsPlaceholder')),
    ).not.toBeInTheDocument();

    // Select all radio buttons within the radio group
    const radioButtonsOptions = screen.getAllByRole('radio');

    // Assert that no radio button is selected
    radioButtonsOptions.forEach((radioButton) => {
      expect(radioButton).not.toBeChecked();
    });
    await userEvent.click(radioButtonsOptions[3]);

    const commentsTextarea = screen.getByPlaceholderText(
      t('webdoxAI.chat.feedback.modal.commentsPlaceholder'),
    );

    expect(screen.getByText(t('webdoxAI.chat.feedback.modal.negative.body'))).toBeInTheDocument();

    // try to click the submit with empty values
    await userEvent.click(submitButton);
    expect(mockOnSubmitForm).not.toHaveBeenCalled();

    // check cancel button
    await userEvent.click(cancelButton);
    expect(mockOnClose).toHaveBeenCalledTimes(1);

    // fill the values and check submit is enabled
    await userEvent.click(radioButtonsOptions[0]);
    await userEvent.type(commentsTextarea, 'value');
    await userEvent.click(submitButton);

    expect(mockOnSubmitForm).toHaveBeenCalledTimes(1);
  });
});
