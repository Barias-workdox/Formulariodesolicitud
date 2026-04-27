import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { StatefulMenu } from './stateful-menu';

const defaultPropsWithOptionGroups = {
  items: {
    __ungrouped: [
      {
        id: 'option1',
        label: 'Option 1',
      },
    ],
    Options: [
      {
        id: 'option2',
        label: 'Option 2',
      },
      {
        id: 'option3',
        label: 'Option 3',
        disabled: true,
      },
      {
        id: 'option4',
        label: 'Option 4',
      },
    ],
  },
};

it('should execute correctly when some option is clicked', async () => {
  const mockAction = testHelpers.fn();

  render(
    <StatefulMenu
      {...defaultPropsWithOptionGroups}
      optionListBorderBottom={false}
      onItemSelect={mockAction}
    />,
  );

  const [firstOption] = screen.getAllByRole('option');

  await userEvent.click(firstOption);

  expect(mockAction).toBeCalledTimes(1);
});
