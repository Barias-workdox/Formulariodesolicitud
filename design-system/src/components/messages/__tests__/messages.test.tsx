import { userEvent } from '@testing-library/user-event';

import {
  expect,
  render,
  renderUseTranslation,
  screen,
  testHelpers,
  waitFor,
} from '@test/test-utils';

import { messagesMock } from '../__mocks__/messages.mock';
import { Messages } from '../messages';

import type { MessagesProps } from '../messages';
import type { RenderType } from '@test/test-utils';

vi.mock('react-use', () => ({
  useIntersection: (): { isIntersecting: boolean } => ({ isIntersecting: true }),
}));

const mockScrollTo = testHelpers.fn();
const mockOnCreate = testHelpers.fn();
const mockOnUpdate = testHelpers.fn();
const mockOnDelete = testHelpers.fn();

const baseDataTestId = 'messages';

const defaultProps: MessagesProps = {
  'data-testid': baseDataTestId,
  canCreate: true,
  canDelete: true,
  canUpdate: true,
  currentUserId: 1,
  isLoading: false,
  messages: messagesMock,
  onCreate: mockOnCreate,
  onUpdate: mockOnUpdate,
  onDelete: mockOnDelete,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<MessagesProps>): RenderType => {
  return render(
    <Messages
      {...defaultProps}
      {...props}
    />,
  );
};

beforeEach(() => {
  Element.prototype.scrollTo = mockScrollTo;
  testHelpers.clearAllMocks();
});

describe('Messages - test', () => {
  const { t } = renderUseTranslation();

  it('should render correctly', () => {
    renderComponent();

    expect(screen.getByPlaceholderText(t('general.writeMessage'))).toBeInTheDocument();

    messagesMock.forEach(({ content }) => {
      expect(screen.getByText(content)).toBeInTheDocument();
    });
  });

  it('should execute `onUpdate` correctly', async () => {
    mockOnUpdate.mockResolvedValue({ isSuccess: true });

    renderComponent();

    const menuButton = screen.getByTestId(`${baseDataTestId}-1__options-popover--options-button`);

    await userEvent.click(menuButton);

    const editButton = screen.getByText(t('general.edit'));

    await userEvent.click(editButton);

    const saveButton = await screen.findByText(t('general.save'));

    await userEvent.click(saveButton);

    await waitFor(() =>
      expect(mockOnUpdate).toHaveBeenLastCalledWith({ mentions: 0, message: messagesMock[0] }),
    );
  });

  it('should execute `onDelete` correctly', async () => {
    renderComponent();

    const menuButton = screen.getByTestId(`${baseDataTestId}-1__options-popover--options-button`);

    await userEvent.click(menuButton);

    const deleteButton = screen.getByText(t('general.delete'));

    await userEvent.click(deleteButton);

    const modalDeleteButton = await screen.findByText(t('general.delete'));

    await userEvent.click(modalDeleteButton);

    await waitFor(() => {
      expect(mockOnDelete).toHaveBeenLastCalledWith(messagesMock[0]);
    });
  });

  it('should execute `onCreate` correctly', async () => {
    mockOnCreate.mockResolvedValue({ isSuccess: true });

    const textMock = 'Ad sit Lorem incididunt do ut sit enim.';

    renderComponent();

    const textarea = screen.getByPlaceholderText(t('general.writeMessage'));

    await userEvent.type(textarea, textMock);
    await userEvent.click(screen.getByText(t('general.send')));

    await waitFor(() => {
      expect(screen.queryByText(textMock)).not.toBeInTheDocument();
      expect(mockOnCreate).toHaveBeenLastCalledWith({ mentions: 0, content: textMock });
    });
  });
});
