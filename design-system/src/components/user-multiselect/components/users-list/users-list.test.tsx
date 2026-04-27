import { createRef } from 'react';

import { userEvent } from '@testing-library/user-event';

import { render } from '@test/test-utils';

import { UsersList, getSortedUsers } from './users-list';

import type { UsersListProps } from './users-list';
import type { RenderType } from '@test/test-utils';

const defaultProps = {
  users: [
    {
      id: 1,
      fullName: 'Carolina Maria Rodriguez',
      email: 'carolina@mail.com',
    },
    { id: 2, fullName: 'Andres Perez', email: 'andres@mail.com' },
    { id: 3, fullName: 'John Dow', email: 'john@mail.com' },
    { id: 4, fullName: 'Pablo Rodriguez', email: 'carolina@mail.com' },
  ],
  checkedUsers: [{ id: 4, fullName: 'Pablo Rodriguez', email: 'carolina@mail.com' }],
  focusInput: (): void => createRef<HTMLInputElement>().current?.focus(),
  placeholder: 'Seleccionar usuarios',
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<UsersListProps>): RenderType => {
  /** Callback to update the checkedUsers */
  const onChange = (checkedUsersUpdated): void => (defaultProps.checkedUsers = checkedUsersUpdated);

  return render(
    <UsersList
      {...defaultProps}
      updateCheckedUsers={onChange}
      {...props}
    />,
  );
};

describe('UsersList - test', () => {
  it('should display a not found message when `users = []`', () => {
    const { getByText } = renderComponent({ ...defaultProps, users: [] });

    expect(getByText('No hay resultados')).toBeInTheDocument();
  });

  it('should filter correctly the user-list by user name', async () => {
    const { getByPlaceholderText, getByRole, getByText, queryByText } = renderComponent();

    await userEvent.click(getByRole('button'));
    const input = getByPlaceholderText(defaultProps.placeholder) as HTMLInputElement;

    expect(queryByText('Andres Perez')).toBeInTheDocument();
    await userEvent.type(input, 'John');
    expect(getByText('John Dow')).toBeInTheDocument();
    expect(queryByText('Andres Perez')).not.toBeInTheDocument();
  });

  it('should filter correctly the user-list by user email', async () => {
    const { getByPlaceholderText, getByRole, getByText, queryByText } = renderComponent();

    await userEvent.click(getByRole('button'));
    const input = getByPlaceholderText(defaultProps.placeholder) as HTMLInputElement;

    expect(queryByText('Andres Perez')).toBeInTheDocument();
    await userEvent.type(input, 'john@mail.com');
    expect(getByText('John Dow')).toBeInTheDocument();
    expect(queryByText('Andres Perez')).not.toBeInTheDocument();
  });

  it('should display a not found message', async () => {
    const { getByPlaceholderText, getByRole, getByText } = renderComponent();

    await userEvent.click(getByRole('button'));
    const input = getByPlaceholderText(defaultProps.placeholder) as HTMLInputElement;

    await userEvent.type(input, 'hello');

    expect(getByText('No hay resultados')).toBeInTheDocument();
  });

  it('should return an user list ordered', () => {
    const userList = getSortedUsers(defaultProps.users, defaultProps.checkedUsers);

    expect(userList).toEqual([
      { id: 4, fullName: 'Pablo Rodriguez', email: 'carolina@mail.com' },
      { id: 2, fullName: 'Andres Perez', email: 'andres@mail.com' },
      {
        id: 1,
        fullName: 'Carolina Maria Rodriguez',
        email: 'carolina@mail.com',
      },
      { id: 3, fullName: 'John Dow', email: 'john@mail.com' },
    ]);
  });

  it('should select the user when it is clicked', async () => {
    const { getAllByRole } = renderComponent();

    expect(getAllByRole('checkbox', { checked: true }).length).toBe(1);
    await userEvent.click(getAllByRole('checkbox', { checked: false })[0]);
    expect(getAllByRole('checkbox', { checked: true }).length).toBe(2);
  });

  it('should unselect the user when a selected user is clicked', async () => {
    const { getAllByRole, queryAllByRole } = renderComponent();

    expect(getAllByRole('checkbox', { checked: true }).length).toBe(1);
    await userEvent.click(getAllByRole('checkbox', { checked: true })[0]);
    expect(queryAllByRole('checkbox', { checked: true }).length).toBe(0);
  });

  it('the save button should be disabled when the selected users are equals to checkedUsers', async () => {
    const { getByRole, getAllByRole } = renderComponent();

    expect(getByRole('button')).toBeDisabled();
    await userEvent.click(getAllByRole('checkbox', { checked: false })[0]);
    expect(getByRole('button')).not.toBeDisabled();
  });

  it('should update the checked users when the save button is clicked', async () => {
    const { getAllByRole, getByRole } = renderComponent();

    expect(defaultProps.checkedUsers.length).toBe(1);
    expect(getAllByRole('checkbox', { checked: true }).length).toBe(1);
    await userEvent.click(getAllByRole('checkbox', { checked: false })[0]);

    expect(getAllByRole('checkbox', { checked: true }).length).toBe(2);
    await userEvent.click(getByRole('button'));
    expect(defaultProps.checkedUsers.length).toBe(2);
  });
});
