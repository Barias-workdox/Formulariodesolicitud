import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { MessageOptions } from './message-options';

import type { MessageOptionsProps } from './message-options';
import type { RenderType } from '@test/test-utils';

const mockOnEditClick = testHelpers.fn();
const mockOnDeleteClick = testHelpers.fn();
const mockClose = testHelpers.fn();

const mockMessage = { example: 'Example' };

const defaultProps = {
  canUpdate: false,
  canDelete: false,
  message: mockMessage,
  onEditClick: mockOnEditClick,
  onDeleteClick: mockOnDeleteClick,
  close: mockClose,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<MessageOptionsProps>): RenderType => {
  return render(
    <MessageOptions
      {...defaultProps}
      {...props}
    />,
  );
};

describe('MessageOptions - test', () => {
  it('should render the menu options correctly when canUpdate prop is true', () => {
    renderComponent({ canUpdate: true });

    expect(screen.getByText('Editar')).toBeInTheDocument();
    expect(screen.queryByText('Eliminar')).not.toBeInTheDocument();
  });

  it('should render the menu options correctly when canDelete prop is true', () => {
    renderComponent({ canDelete: true });

    expect(screen.getByText('Eliminar')).toBeInTheDocument();
    expect(screen.queryByText('Editar')).not.toBeInTheDocument();
  });

  it('should execute onDeleteClick and close functions when delete option is clicked', async () => {
    renderComponent({ canDelete: true });

    const deleteOption = screen.getByText('Eliminar');

    await userEvent.click(deleteOption);

    expect(mockOnDeleteClick).toBeCalledWith(mockMessage);
    expect(mockClose).toBeCalled();
  });

  it('should execute onEditClick and close functions when delete option is clicked', async () => {
    renderComponent({ canUpdate: true });

    const editOption = screen.getByText('Editar');

    await userEvent.click(editOption);

    expect(mockOnEditClick).toBeCalledWith(mockMessage);
    expect(mockClose).toBeCalled();
  });
});
