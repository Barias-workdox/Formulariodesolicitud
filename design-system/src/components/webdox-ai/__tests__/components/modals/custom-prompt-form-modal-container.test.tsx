import { userEvent } from '@testing-library/user-event';

import {
  CustomPromptFormModalContainer,
  type CustomPromptFormModalContainerProps,
} from '@components/webdox-ai/modals/custom-prompt-form-modal/custom-prompt-form-modal.container';
import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import type { CustomPrompt } from '@components/webdox-ai/interfaces';
import type { RenderType } from '@test/test-utils';

const mockOnClose = testHelpers.fn();
const mockOnSubmit = testHelpers.fn();

const defaultProps: CustomPromptFormModalContainerProps = {
  isOpen: true,
  onClose: mockOnClose,
  onSubmit: mockOnSubmit,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<CustomPromptFormModalContainerProps>): RenderType => {
  return render(
    <CustomPromptFormModalContainer
      {...defaultProps}
      {...props}
    />,
  );
};

describe('CustomPromptFormModalContainer - tests', () => {
  const { t } = renderUseTranslation();

  beforeEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the component correctly', () => {
    renderComponent();

    expect(screen.getByText(t('webdoxAI.chat.customPrompts.formModal.title'))).toBeInTheDocument();
    expect(
      screen.getByText(t('webdoxAI.chat.customPrompts.formModal.promptTitle.label')),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(
        t('webdoxAI.chat.customPrompts.formModal.promptTitle.placeholder'),
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('webdoxAI.chat.customPrompts.formModal.promptContent.label')),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(
        t('webdoxAI.chat.customPrompts.formModal.promptContent.placeholder'),
      ),
    ).toBeInTheDocument();
    expect(screen.getByText(t('general.cancel'))).toBeInTheDocument();
    expect(screen.getByText(t('general.save'))).toBeInTheDocument();
  });

  it('should execute `onClose` correctly', async () => {
    renderComponent();

    await userEvent.click(screen.getByText(t('general.cancel')));

    expect(mockOnClose).toHaveBeenCalled();
  });

  it('should execute `onSubmit` correctly', async () => {
    renderComponent();

    await userEvent.type(
      screen.getByPlaceholderText(
        t('webdoxAI.chat.customPrompts.formModal.promptTitle.placeholder'),
      ),
      'Example title',
    );
    await userEvent.type(
      screen.getByPlaceholderText(
        t('webdoxAI.chat.customPrompts.formModal.promptContent.placeholder'),
      ),
      'Example content',
    );
    await userEvent.click(screen.getByText(t('general.save')));

    expect(mockOnSubmit).toHaveBeenCalled();
  });

  it('should initialize correctly with default values', async () => {
    const defaultPrompt: CustomPrompt = {
      id: 1,
      title: 'Title 1',
      content: 'Content 1',
    };

    renderComponent({ customPrompt: defaultPrompt });

    expect(
      screen.getByPlaceholderText(
        t('webdoxAI.chat.customPrompts.formModal.promptTitle.placeholder'),
      ),
    ).toHaveValue(defaultPrompt.title);
    expect(
      screen.getByPlaceholderText(
        t('webdoxAI.chat.customPrompts.formModal.promptContent.placeholder'),
      ),
    ).toHaveValue(defaultPrompt.content);
  });
});
