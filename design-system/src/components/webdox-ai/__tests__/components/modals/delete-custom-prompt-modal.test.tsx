import { userEvent } from '@testing-library/user-event';

import {
  DeleteCustomPromptModal,
  type DeleteCustomPromptModalProps,
} from '@components/webdox-ai/modals';
import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import type { RenderType } from '@test/test-utils';

const mockOnClose = testHelpers.fn();
const mockOnSubmit = testHelpers.fn();

const defaultProps: DeleteCustomPromptModalProps = {
  isOpen: true,
  onClose: mockOnClose,
  onSubmit: mockOnSubmit,
  isLoading: false,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<DeleteCustomPromptModalProps>): RenderType => {
  return render(
    <DeleteCustomPromptModal
      {...defaultProps}
      {...props}
    />,
  );
};

describe('DeleteCustomPromptModal - tests', () => {
  const { t } = renderUseTranslation();

  beforeEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the component correctly', () => {
    renderComponent();

    expect(
      screen.getByText(t('webdoxAI.chat.customPrompts.deleteModal.title')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('webdoxAI.chat.customPrompts.deleteModal.subtitle')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('webdoxAI.chat.customPrompts.deleteModal.description')),
    ).toBeInTheDocument();
    expect(screen.getByText(t('general.cancel'))).toBeInTheDocument();
    expect(
      screen.getByText(t('webdoxAI.chat.customPrompts.deleteModal.submit')),
    ).toBeInTheDocument();
  });

  it('should execute `onClose` correctly', async () => {
    renderComponent();

    await userEvent.click(screen.getByText(t('general.cancel')));

    expect(mockOnClose).toHaveBeenCalled();
  });

  it('should execute `onSubmit` correctly', async () => {
    renderComponent();

    await userEvent.click(screen.getByText(t('webdoxAI.chat.customPrompts.deleteModal.submit')));

    expect(mockOnSubmit).toHaveBeenCalled();
  });
});
