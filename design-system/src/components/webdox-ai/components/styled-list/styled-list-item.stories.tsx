import { AddFilled } from '@carbon/icons-react';
import { faker } from '@faker-js/faker';

import { StyledListItem } from './styled-list-item';

import type { StyledListItemProps } from './styled-list-item';
import type { Meta, StoryFn } from '@storybook/react-vite';

type StoryArgsType = StyledListItemProps & { icon: 'show' | 'hide' };

const dummyData = new Array(10).fill(undefined).map((_, index) => ({
  id: `id-${index}`,
  label: faker.music.songName(),
  Icon: AddFilled,
}));

export default {
  title: 'Modules/WebdoxAI/Components/StyledListItem',
  component: StyledListItem,
  args: {
    'data-testid': 'data-testid',
    kind: 'primary',
    children: 'Elit nisi ea et nostrud Lorem id sit.',
    icon: 'show',
  },
  argTypes: {
    icon: {
      control: 'radio',
      options: ['show', 'hide'],
    },
  },
} as Meta<StoryArgsType>;

/** A StyledListItem */
const Template: StoryFn<StoryArgsType> = (args) => {
  return (
    <div style={{ width: '80%' }}>
      <StyledListItem
        {...args}
        artwork={() => (args.icon === 'show' ? <AddFilled /> : <></>)}
      />
    </div>
  );
};

/** A StyledListItem */
const ListTemplate: StoryFn<StoryArgsType> = (args) => {
  return (
    <ul style={{ width: '80%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {dummyData.map(({ id, label, Icon }) => (
        <StyledListItem
          key={id}
          data-testid={id}
          artwork={() => (args.icon === 'show' ? <Icon /> : <></>)}
        >
          {label}
        </StyledListItem>
      ))}
    </ul>
  );
};

export const Default = Template.bind({});

export const List = ListTemplate.bind({});
