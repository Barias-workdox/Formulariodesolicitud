import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { customPromptsMock } from '../../__mocks__/custom-prompts.mock';
import { AddCustomPromptButton } from '../../components/add-custom-prompt-button';

import type { AddCustomPromptButtonProps } from '../../components/add-custom-prompt-button';
import type { RenderType } from '@test/test-utils';

const mockOnClose = testHelpers.fn();
const mockOnCreateButtonClick = testHelpers.fn();
const mockOnCustomPromptClick = testHelpers.fn();
const mockOnOpen = testHelpers.fn();
const mockOnCustomPromptDelete = testHelpers.fn();
const mockOnCustomPromptEdit = testHelpers.fn();

const dataTestId = 'data-testid';

const defaultProps: AddCustomPromptButtonProps = {
  dataTestId,
  customPrompts: customPromptsMock,
  isEditingDisabled: false,
  isOpen: false,
  onClose: mockOnClose,
  onCreateButtonClick: mockOnCreateButtonClick,
  onCustomPromptClick: mockOnCustomPromptClick,
  onCustomPromptDelete: mockOnCustomPromptDelete,
  onCustomPromptEdit: mockOnCustomPromptEdit,
  onOpen: mockOnOpen,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<AddCustomPromptButtonProps>): RenderType => {
  return render(
    <AddCustomPromptButton
      {...defaultProps}
      {...props}
    />,
  );
};

describe('AddCustomPromptButton - tests', () => {
  const { t } = renderUseTranslation();

  beforeEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the component correctly', async () => {
    renderComponent();

    const button = await screen.findByTestId(`${dataTestId}__button`);

    await userEvent.hover(button);

    expect(button).toBeInTheDocument();
    expect(
      await screen.findByText(t('webdoxAI.chat.customPrompts.mySavedPrompts')),
    ).toBeInTheDocument();
  });

  it('should render the popover content correctly', () => {
    renderComponent({ isOpen: true });

    expect(screen.getByText(t('webdoxAI.chat.customPrompts.myPrompts'))).toBeInTheDocument();
    expect(screen.getByText(`(${customPromptsMock.length})`)).toBeInTheDocument();
    expect(screen.getByText(t('webdoxAI.chat.customPrompts.addCustomPrompt'))).toBeInTheDocument();
  });

  it.each(customPromptsMock)(
    'should render custom prompt item correctly within popover',
    ({ content, id, title }) => {
      renderComponent({ isOpen: true });

      expect(screen.getByText(title || content)).toBeInTheDocument();
      expect(
        screen.getByTestId(`${dataTestId}__popover__item-${id}--edit-button`),
      ).toBeInTheDocument();
      expect(
        screen.getByTestId(`${dataTestId}__popover__item-${id}--delete-button`),
      ).toBeInTheDocument();
    },
  );

  it('should execute `onOpen` correctly', async () => {
    renderComponent();

    await userEvent.click(screen.getByTestId(`${dataTestId}__button`));

    expect(mockOnOpen).toHaveBeenCalled();
  });

  it('should execute `onClose` correctly', async () => {
    renderComponent({ isOpen: true });

    await userEvent.keyboard('{Escape}');

    expect(mockOnClose).toHaveBeenCalled();
  });

  it('should execute `onCreateButtonClick` correctly', async () => {
    renderComponent({ isOpen: true });

    await userEvent.click(screen.getByText(t('webdoxAI.chat.customPrompts.addCustomPrompt')));

    expect(mockOnCreateButtonClick).toHaveBeenCalled();
  });

  it('should execute `onCustomPromptClick` correctly', async () => {
    const [firstPrompt] = customPromptsMock;

    renderComponent({ isOpen: true });

    await userEvent.click(screen.getByText(firstPrompt.title || firstPrompt.content));

    expect(mockOnCustomPromptClick).toHaveBeenCalledWith(firstPrompt);
  });

  it('should execute `onCustomPromptDelete` correctly', async () => {
    const [firstPrompt] = customPromptsMock;

    renderComponent({ isOpen: true });

    await userEvent.click(
      screen.getByTestId(`${dataTestId}__popover__item-${firstPrompt.id}--delete-button`),
    );

    expect(mockOnCustomPromptDelete).toHaveBeenCalledWith(firstPrompt);
  });

  it('should execute `onCustomPromptEdit` correctly', async () => {
    const [firstPrompt] = customPromptsMock;

    renderComponent({ isOpen: true });

    await userEvent.click(
      screen.getByTestId(`${dataTestId}__popover__item-${firstPrompt.id}--edit-button`),
    );

    expect(mockOnCustomPromptEdit).toHaveBeenCalledWith(firstPrompt);
  });

  it('should disable buttons when `isEditingDisabled` is `true`', async () => {
    const [firstPrompt] = customPromptsMock;

    renderComponent({ isOpen: true, isEditingDisabled: true });

    expect(
      screen.getByTestId(`${dataTestId}__popover__item-${firstPrompt.id}--edit-button`),
    ).toHaveProperty('disabled', true);
    expect(
      screen.getByTestId(`${dataTestId}__popover__item-${firstPrompt.id}--delete-button`),
    ).toHaveProperty('disabled', true);
    expect(screen.getByText(t('webdoxAI.chat.customPrompts.addCustomPrompt'))).toHaveProperty(
      'disabled',
      true,
    );
  });
});
