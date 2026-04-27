import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers, waitFor } from '@test/test-utils';

import { MessageOptionsPopover } from './message-options-popover';

import type { MessageOptionsPopoverProps } from './message-options-popover';
import type { RenderType } from '@test/test-utils';

const mockOnEditClick = testHelpers.fn();
const mockOnDeleteClick = testHelpers.fn();

const mockMessage = { example: 'Example' };

const defaultProps = {
  canUpdate: true,
  canDelete: true,
  isLoading: false,
  isAuthor: true,
  message: mockMessage,
  onEditClick: mockOnEditClick,
  onDeleteClick: mockOnDeleteClick,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<MessageOptionsPopoverProps>): RenderType => {
  return render(
    <MessageOptionsPopover
      {...defaultProps}
      {...props}
    />,
  );
};

describe('MessageOptionsPopover - test', () => {
  it('should render the menu options when isAuthor prop is true', async () => {
    renderComponent();

    const menuButton = screen.getByRole('button');

    await userEvent.click(menuButton);

    expect(screen.getByText('Editar')).toBeInTheDocument();
    expect(screen.getByText('Eliminar')).toBeInTheDocument();
  });

  it('should not render the menu options when isAuthor prop is false', () => {
    renderComponent({ isAuthor: false });

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('should execute onDeleteClick function and close the popover when delete option is clicked', async () => {
    renderComponent({ canDelete: true });

    const menuButton = screen.getByRole('button');

    await userEvent.click(menuButton);

    const deleteOption = screen.getByText('Eliminar');

    await userEvent.pointer({ keys: '[MouseLeft]', target: deleteOption });

    await waitFor(() => {
      expect(mockOnDeleteClick).toHaveBeenLastCalledWith(mockMessage);
    });

    await waitFor(() => {
      expect(screen.queryByText('Eliminar')).not.toBeInTheDocument();
    });
  });

  it('should execute onEditClick function and close the popover when delete option is clicked', async () => {
    renderComponent({ canUpdate: true });

    const menuButton = screen.getByRole('button');

    await userEvent.click(menuButton);

    let editOption;

    await waitFor(() => {
      editOption = screen.getByText('Editar');
    });

    await userEvent.pointer({ keys: '[MouseLeft]', target: editOption });

    await waitFor(() => {
      expect(mockOnEditClick).toHaveBeenLastCalledWith(mockMessage);
    });

    await waitFor(() => {
      expect(screen.queryByText('Editar')).not.toBeInTheDocument();
    });
  });
});
