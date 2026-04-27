import { userEvent } from '@testing-library/user-event';

import { expect, render, screen, testHelpers } from '@test/test-utils';

import { mentionsMock } from '../__mocks__/mentions.mock';

import { MentionsPopover } from './mentions-popover';

import type { UsersPopoverControlledProps } from './mentions-popover';
import type { RenderType } from '@test/test-utils';

import '@test/__mocks__/use-virtualizer.mock';

const mockOnEsc = testHelpers.fn();
const mockOnUserSelected = testHelpers.fn();
const mockSetIsOpen = testHelpers.fn();

const defaultProps = {
  isOpen: undefined,
  onEsc: mockOnEsc,
  onUserSelected: mockOnUserSelected,
  setIsOpen: mockSetIsOpen,
  users: mentionsMock,
  width: '300px',
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<UsersPopoverControlledProps>): RenderType =>
  render(
    <MentionsPopover
      {...defaultProps}
      {...props}
    />,
  );

describe('MentionsPopover - test', () => {
  it('should call onEsc function when the escape button is pressed', async () => {
    renderComponent({ isOpen: true });

    const searchInput = screen.getByPlaceholderText('Buscar');

    await userEvent.click(searchInput);
    await userEvent.keyboard('{Escape}');

    expect(mockOnEsc).toBeCalled();
  });

  it('should call onUserSelected when the user label item is selected', async () => {
    renderComponent({ isOpen: true });

    const userOption = screen.getByText('Example1');

    await userEvent.click(userOption);

    expect(mockOnUserSelected).toBeCalledWith(mentionsMock[0]);
  });

  it('should call onUserSelected when the user menu option is selected', async () => {
    renderComponent({ isOpen: true });

    const [userOption] = screen.getAllByRole('option');

    await userEvent.click(userOption);

    expect(mockOnUserSelected).toBeCalledWith(mentionsMock[0]);
  });

  it('should filter the users list when the search input changes', async () => {
    renderComponent({ isOpen: true });

    expect(screen.getAllByRole('option').length).toEqual(2);

    const searchInput = screen.getByPlaceholderText('Buscar');

    await userEvent.type(searchInput, mentionsMock[0].email);

    expect(screen.getAllByRole('option').length).toEqual(1);
    expect(screen.getByText(mentionsMock[0].email)).toBeInTheDocument();
  });

  it('should filter the users list by email when the search input changes', async () => {
    renderComponent({ isOpen: true });

    expect(screen.getAllByRole('option').length).toEqual(2);

    const searchInput = screen.getByPlaceholderText('Buscar');

    // Filter by user email
    await userEvent.type(searchInput, mentionsMock[0].email);

    expect(screen.getAllByRole('option').length).toEqual(1);
    expect(screen.getByText(mentionsMock[0].email)).toBeInTheDocument();
    expect(screen.queryByText(mentionsMock[1].email)).not.toBeInTheDocument();
  });

  it('should filter the users list by user name when the search input changes', async () => {
    renderComponent({ isOpen: true });

    expect(screen.getAllByRole('option').length).toEqual(2);

    const searchInput = screen.getByPlaceholderText('Buscar');

    // Filter by user name
    await userEvent.type(searchInput, mentionsMock[0].name);

    expect(screen.getAllByRole('option').length).toEqual(1);
    expect(screen.getByText(mentionsMock[0].name)).toBeInTheDocument();
    expect(screen.queryByText(mentionsMock[1].name)).not.toBeInTheDocument();
  });

  it('should render the empty message when there are not users to show', async () => {
    renderComponent({ isOpen: true });

    expect(screen.getAllByRole('option').length).toEqual(2);

    const searchInput = screen.getByPlaceholderText('Buscar');

    await userEvent.type(searchInput, 'text');

    expect(screen.getByText('No hay resultados')).toBeInTheDocument();
  });
});
