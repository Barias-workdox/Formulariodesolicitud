import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { MessageDelete } from './message-delete';

import type { MessageDeleteProps } from './message-delete';
import type { RenderType } from '@test/test-utils';

const mockOnCancel = testHelpers.fn();
const mockOnConfirm = testHelpers.fn();

const defaultProps = {
  show: true,
  message: {
    id: 1,
    content: 'Lorem ipsum dolor sit amet',
    author: {
      id: 1,
      name: 'John Doe',
      label: 'Colaborador',
    },
    read: true,
    createdAt: '2022-05-20T23:33:01.612Z',
    updatedAt: '2022-05-20T23:50:01.612Z',
  },
  onCancel: mockOnCancel,
  onConfirm: mockOnConfirm,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<MessageDeleteProps>): RenderType =>
  render(
    <MessageDelete
      {...defaultProps}
      {...props}
    />,
  );

describe('MessageDelete - test', () => {
  it('should execute on cancel function when cancel button is clicked', async () => {
    renderComponent();

    const [cancelButton] = screen.getAllByRole('button');

    await userEvent.click(cancelButton);

    expect(mockOnCancel).toBeCalled();
  });

  it('should execute on confirm function when delete button is clicked', async () => {
    renderComponent();

    const [, deleteButton] = screen.getAllByRole('button');

    await userEvent.click(deleteButton);

    expect(mockOnConfirm).toBeCalled();
  });
});
