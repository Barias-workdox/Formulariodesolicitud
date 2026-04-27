import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers, waitFor } from '@test/test-utils';

import { FeedbackButton } from './feedback-button';

import type { FeedbackButtonProps } from './feedback-button.interfaces';
import type { RenderType } from '@test/test-utils';

const mockOnClick = testHelpers.fn();

const defaultProps: FeedbackButtonProps = {
  'data-testid': 'data-testid',
  feedbackKind: 'positive',
  isActive: false,
  disabled: false,
  isLoading: false,
  onClick: mockOnClick,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<FeedbackButtonProps>): RenderType =>
  render(
    <FeedbackButton
      {...defaultProps}
      {...props}
    />,
  );

describe('feedback-button - tests', () => {
  beforeEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the component in isActive = `false` and feedbackKind = `positive`', async () => {
    renderComponent();

    const { t } = renderUseTranslation();

    const button = screen.getByRole('button');

    await userEvent.hover(button);
    await waitFor(() => {
      expect(screen.getByText(t('feedbackButton.positive'))).toBeInTheDocument();
    });

    await userEvent.click(button);
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('should render the component in isActive = `true` and feedbackKind = `positive`', async () => {
    renderComponent({ isActive: true });

    const { t } = renderUseTranslation();

    const button = screen.getByRole('button');

    await userEvent.hover(button);
    await waitFor(() => {
      expect(screen.getByText(t('feedbackButton.undo'))).toBeInTheDocument();
    });
  });

  it('should render the component in isActive = `false` and feedbackKind = `negative`', async () => {
    renderComponent({ feedbackKind: 'negative' });

    const { t } = renderUseTranslation();

    const button = screen.getByRole('button');

    await userEvent.hover(button);
    await waitFor(() => {
      expect(screen.getByText(t('feedbackButton.negative'))).toBeInTheDocument();
    });
  });

  it('should render the component in isActive = `true` and feedbackKind = `negative`', async () => {
    renderComponent({ feedbackKind: 'negative', isActive: true });

    const { t } = renderUseTranslation();

    const button = screen.getByRole('button');

    await userEvent.hover(button);
    await waitFor(() => {
      expect(screen.getByText(t('feedbackButton.undo'))).toBeInTheDocument();
    });
  });
});
