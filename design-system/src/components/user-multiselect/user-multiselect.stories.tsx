import { useState } from 'react';

import { UserMultiselect } from '.';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Pickers/UserMultiselect',
  component: UserMultiselect,
  args: {
    users: [
      {
        id: 1,
        fullName: 'Carolina Maria Rodriguez',
        email: 'carolina@mail.com',
      },
      { id: 2, fullName: 'Andres Perez', email: 'andres@mail.com' },
      { id: 3, fullName: 'John Dow', email: 'john@mail.com' },
      { id: 4, fullName: 'Pablo Rodriguez', email: 'carolina@mail.com' },
      { id: 5, fullName: 'Pedro Perez', email: 'andres@mail.com' },
      { id: 6, fullName: 'Carlos Dow', email: 'john@mail.com' },
    ],
    checkedUsers: [
      {
        id: 1,
        fullName: 'Carolina Maria Rodriguez',
        email: 'carolina@mail.com',
      },
    ],
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/eMhywyfWwKMjIyemY3PDoK/Design-System-Webdox-1.0?type=design&node-id=4305-12848&mode=dev',
    },
  },
} as Meta<typeof UserMultiselect>;

/** A UserMultiselect */
const Template: StoryFn<typeof UserMultiselect> = (args) => {
  const [checkedUsers, setCheckedUsers] = useState(args.checkedUsers);

  /** Callback to update the checkedUsers */
  const onChange = (checkedUsersUpdated): void => setCheckedUsers(checkedUsersUpdated);

  return (
    <UserMultiselect
      {...args}
      checkedUsers={checkedUsers}
      onChange={onChange}
    />
  );
};

/** A UserMultiselect with disabled users */
const TemplateWithDisabledUsers: StoryFn<typeof UserMultiselect> = (args) => {
  const [checkedUsers, setCheckedUsers] = useState([
    {
      id: 1,
      fullName: 'Carolina Maria Rodriguez',
      email: 'carolina@mail.com',
      disabled: true,
    },
  ]);

  /** Callback to update the checkedUsers */
  const onChange = (checkedUsersUpdated): void => setCheckedUsers(checkedUsersUpdated);

  const users = [
    ...args.users,
    { id: 7, fullName: 'Gerardo Smith', email: 'gerardo@mail.com', disabled: true },
  ];

  return (
    <UserMultiselect
      {...args}
      users={users}
      checkedUsers={checkedUsers}
      onChange={onChange}
    />
  );
};

export const Default = Template.bind({});

export const CustomPlaceholder = Template.bind({});

CustomPlaceholder.args = {
  placeholder: 'Custom placeholder...',
};

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
};

export const Loading = Template.bind({});

Loading.args = {
  isLoading: true,
};

export const DisabledOnlyUsers = TemplateWithDisabledUsers.bind({});
