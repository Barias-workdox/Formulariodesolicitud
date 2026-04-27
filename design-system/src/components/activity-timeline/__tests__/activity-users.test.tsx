import { userEvent } from '@testing-library/user-event';

import { render, screen, waitFor } from '@test/test-utils';

import { ActivityUsers } from '../components/activity-users';

import { mockActivityNewUsers } from './activities.mock';

import type { ActivityUsersProps } from '../components/activity-users';
import type { RenderType } from '@test/test-utils';

const {
  extraData: { users },
} = mockActivityNewUsers;

const defaultProps: ActivityUsersProps = {
  users,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<ActivityUsersProps>): RenderType => {
  return render(
    <ActivityUsers
      {...defaultProps}
      {...props}
    />,
  );
};

describe('ActivityUsers - tests', () => {
  it('should render the component correctly', () => {
    renderComponent();

    const [{ email, firstName, lastName }] = users;
    const fullName = `${firstName} ${lastName}`;

    expect(screen.getByText(email)).toBeInTheDocument();
    expect(screen.getByText(fullName)).toBeInTheDocument();
  });

  it('should display the tooltips correctly', async () => {
    renderComponent();

    const [{ email, firstName, lastName }] = users;
    const fullName = `${firstName} ${lastName}`;

    await userEvent.hover(screen.getByText(fullName));

    await waitFor(() => {
      expect(screen.getAllByText(fullName).length).toEqual(2);
    });

    await userEvent.hover(screen.getByText(email));

    await waitFor(() => {
      expect(screen.getAllByText(email).length).toEqual(2);
    });
  });
});
