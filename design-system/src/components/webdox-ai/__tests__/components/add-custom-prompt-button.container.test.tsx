import { userEvent } from '@testing-library/user-event';

import { CustomPromptAction } from '@components/webdox-ai/constants';
import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { customPromptsMock } from '../../__mocks__/custom-prompts.mock';
import { AddCustomPromptButtonContainer } from '../../components/add-custom-prompt-button';
import { useCustomPromptModalsContext } from '../../hooks/use-custom-prompt-modals-context.hook';

import type {
  AddCustomPromptButtonContainerProps,
  AddCustomPromptButtonProps,
} from '../../components/add-custom-prompt-button';
import type { RenderType } from '@test/test-utils';

vi.mock('../../hooks/use-custom-prompt-modals-context.hook', () => ({
  useCustomPromptModalsContext: vi.fn(),
}));

const mockUseCustomPromptModalsContext = vi.mocked(useCustomPromptModalsContext);

const dataTestId = 'data-testid';
const mockOpenModal = testHelpers.fn();

const defaultProps: AddCustomPromptButtonContainerProps = {
  dataTestId,
  customPrompts: customPromptsMock,
  isEditingDisabled: false,
  isOpen: false,
  onClose: vi.fn(),
  onOpen: vi.fn(),
  onCustomPromptClick: vi.fn(),
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<AddCustomPromptButtonProps>): RenderType => {
  return render(
    <AddCustomPromptButtonContainer
      {...defaultProps}
      {...props}
    />,
  );
};

beforeEach(() => {
  vi.clearAllMocks();

  mockUseCustomPromptModalsContext.mockReturnValue({
    isEditingDisabled: false,
    openModal: mockOpenModal,
  });
});

describe('AddCustomPromptButtonContainer - tests', () => {
  const { t } = renderUseTranslation();

  beforeEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should execute `onCreateButtonClick` correctly', async () => {
    renderComponent({ isOpen: true });

    await userEvent.click(screen.getByText(t('webdoxAI.chat.customPrompts.addCustomPrompt')));

    expect(mockOpenModal).toHaveBeenCalledWith({
      kind: CustomPromptAction.Create,
    });
  });

  it('should execute `onCustomPromptDelete` correctly', async () => {
    const [firstPrompt] = customPromptsMock;

    renderComponent({ isOpen: true });

    await userEvent.click(
      screen.getByTestId(`${dataTestId}__popover__item-${firstPrompt.id}--delete-button`),
    );

    expect(mockOpenModal).toHaveBeenCalledWith({
      customPrompt: firstPrompt,
      kind: CustomPromptAction.Delete,
    });
  });

  it('should execute `onCustomPromptEdit` correctly', async () => {
    const [firstPrompt] = customPromptsMock;

    renderComponent({ isOpen: true });

    await userEvent.click(
      screen.getByTestId(`${dataTestId}__popover__item-${firstPrompt.id}--edit-button`),
    );

    expect(mockOpenModal).toHaveBeenCalledWith({
      customPrompt: firstPrompt,
      kind: CustomPromptAction.Edit,
    });
  });
});
