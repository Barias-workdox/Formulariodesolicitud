import { userEvent } from '@testing-library/user-event';

import { render, testHelpers, screen, renderUseTranslation } from '@test/test-utils';

import { UserMultiselect, getRemainingUsersLabel } from './user-multiselect';

import type { UserMultiselectProps } from './user-multiselect';
import type { RenderType } from '@test/test-utils';

const mockOnClick = testHelpers.fn();

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
  placeholder: 'Nombre, apellido, correo',
  onChange: mockOnClick,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<UserMultiselectProps>): RenderType => {
  return render(
    <UserMultiselect
      {...defaultProps}
      {...props}
    />,
  );
};

describe('UserMultiselect - test', () => {
  const { t } = renderUseTranslation();

  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should open the popover when the arrowIcon is clicked', async () => {
    renderComponent();

    const dropdownBtn = screen.getByTestId('user-multiselect__wrapper');

    await userEvent.click(dropdownBtn);

    expect(screen.getByText('John Dow')).toBeInTheDocument();
  });

  it('should execute correctly the save button is clicked', async () => {
    renderComponent();

    const dropdownBtn = screen.getByTestId('user-multiselect__wrapper');

    await userEvent.click(dropdownBtn);

    expect(screen.getAllByRole('checkbox', { checked: true }).length).toBe(1);
    await userEvent.click(screen.getAllByRole('checkbox', { checked: false })[0]);
    expect(screen.getAllByRole('checkbox', { checked: true }).length).toBe(2);

    expect(mockOnClick.mock.calls.length).toBe(0);

    const saveBtn = screen.getByText(t('general.save'));

    await userEvent.click(saveBtn);

    expect(mockOnClick.mock.calls.length).toBe(1);
  });

  it('should return the remaining users correctly', () => {
    const remainingUsersLabel = getRemainingUsersLabel(2);

    expect(remainingUsersLabel).toEqual('+1');
  });
});
