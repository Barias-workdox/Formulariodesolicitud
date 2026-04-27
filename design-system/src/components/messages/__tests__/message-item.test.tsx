import { userEvent } from '@testing-library/user-event';

import {
  afterEach,
  describe,
  expect,
  it,
  render,
  renderUseTranslation,
  screen,
  testHelpers,
  waitFor,
} from '@test/test-utils';

import { formatDatetime } from '../../utils/strings/date.utils';
import { MessageItem } from '../message-item';

import type { MessageItemProps } from '../message-item';
import type { RenderType } from '@test/test-utils';

const mockOnUpdate = testHelpers.fn();
const mockOnDelete = testHelpers.fn();

const createdAt = '2022-04-16T13:15:23.690-04:00';
const updatedAt = '2022-04-16T13:15:23.690-04:00';

const mockMessage = {
  author: {
    id: 1,
    name: 'Author Example',
    email: 'example@mail.com',
    label: 'Label Example',
    mentionModel: 'stepResponsible',
  },
  content: 'Example message',
  createdAt,
  id: 1,
  read: true,
  updatedAt,
};

const defaultProps: MessageItemProps = {
  dataTestId: 'dataTestId',
  isLoading: false,
  isMentionable: false,
  canUpdate: false,
  canDelete: false,
  currentUserId: 1,
  message: mockMessage,
  barColor: 'negativeSubtle',
  labelColor: 'negative',
  direction: 'normal',
  onDelete: mockOnDelete,
  onUpdate: mockOnUpdate,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<MessageItemProps>): RenderType => {
  return render(
    <MessageItem
      {...defaultProps}
      {...props}
    />,
  );
};

describe('MessageItem - tests', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the message correctly', () => {
    renderComponent();

    expect(screen.getByText(mockMessage.author.name, { exact: false })).toBeInTheDocument();
    expect(screen.getByText(mockMessage.author.label)).toBeInTheDocument();
    expect(screen.getByText(mockMessage.content)).toBeInTheDocument();
    expect(screen.getByText(formatDatetime(updatedAt, 'es'))).toBeInTheDocument();
    expect(screen.queryByText('NUEVO COMENTARIO')).not.toBeInTheDocument();
  });

  it('should render the message correctly when the message is not read', () => {
    renderComponent({ message: { ...mockMessage, read: false } });

    expect(screen.getByText('NUEVO COMENTARIO')).toBeInTheDocument();
  });

  it('should render the menu options when canUpdate prop is true', async () => {
    renderComponent({ canUpdate: true });

    const menuButton = screen.getByRole('button');

    await userEvent.click(menuButton);

    expect(screen.getByText('Editar')).toBeInTheDocument();
  });

  it('should render the menu options when canDelete prop is true', async () => {
    renderComponent({ canDelete: true });

    const menuButton = screen.getByRole('button');

    await userEvent.click(menuButton);

    expect(screen.getByText('Eliminar')).toBeInTheDocument();
  });

  it('should execute onDelete function when delete button is clicked', async () => {
    renderComponent({ canDelete: true });

    const menuButton = screen.getByRole('button');

    await userEvent.click(menuButton);

    const deleteButton = screen.getByText('Eliminar');

    await userEvent.pointer({ keys: '[MouseLeft]', target: deleteButton });

    const modalDeleteButton = await screen.findByText('Eliminar');

    await userEvent.pointer({ keys: '[MouseLeft]', target: modalDeleteButton });

    await waitFor(() => {
      expect(mockOnDelete).toHaveBeenLastCalledWith(mockMessage);
    });
  });

  it('should execute onUpdate function when edit button is clicked and should close the edit mode', async () => {
    mockOnUpdate.mockResolvedValue({ isSuccess: true });
    renderComponent({ canUpdate: true });

    const menuButton = screen.getByRole('button');

    await userEvent.click(menuButton);

    const editButton = screen.getByText('Editar');

    await userEvent.pointer({ keys: '[MouseLeft]', target: editButton });

    const saveButton = await screen.findByText('Guardar');

    await userEvent.click(saveButton);

    await waitFor(() =>
      expect(mockOnUpdate).toHaveBeenLastCalledWith({ mentions: 0, message: mockMessage }),
    );
  });

  it('should close the edit mode when cancel button is clicked', async () => {
    mockOnUpdate.mockResolvedValue({ isSuccess: true });
    renderComponent({ canUpdate: true });

    const { t } = renderUseTranslation();

    const menuButton = screen.getByRole('button');

    await userEvent.click(menuButton);

    const editButton = screen.getByText('Editar');

    await userEvent.pointer({ keys: '[MouseLeft]', target: editButton });

    let cancelButton;

    await waitFor(() => {
      cancelButton = screen.getByText(t('general.cancel'));
    });
    await userEvent.click(cancelButton);

    expect(screen.queryByText('Guardar')).not.toBeInTheDocument();
  });

  it('should close the delete message when cancel button is clicked', async () => {
    renderComponent({ canDelete: true });

    const menuButton = screen.getByRole('button');

    await userEvent.click(menuButton);

    const deleteButton = screen.getByText('Eliminar');

    await userEvent.pointer({ keys: '[MouseLeft]', target: deleteButton });

    const cancelButton = screen.getByText('Cancelar');

    await userEvent.click(cancelButton);

    await waitFor(() => {
      expect(screen.queryByText('Eliminar')).not.toBeInTheDocument();
    });
  });

  it('should find the message container element by data-testid', () => {
    renderComponent();

    expect(screen.getByTestId('dataTestId')).toBeInTheDocument();
  });

  it('should render the CustomContentComponent instead of the raw content', () => {
    const customText =
      'Laborum enim labore officia laboris reprehenderit commodo non dolor id eiusmod reprehenderit sunt id.';

    renderComponent({
      message: { ...mockMessage, CustomContentComponent: <span>{customText}</span> },
    });

    expect(screen.getByText(customText)).toBeInTheDocument();
    expect(screen.queryByText(mockMessage.content)).not.toBeInTheDocument();
  });
});
