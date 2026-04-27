import { MultipleAvatars } from '..';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Content/MultipleAvatars',
  component: MultipleAvatars,
  args: {
    avatars: [{ name: 'Alberto Díaz' }, { name: 'Emisael Carrera' }, { name: 'Omar Garay' }],
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/PbZuyyTRGoXBcqFm848rvy/%F0%9F%92%A0-Nuclear-Components?node-id=20317-17727&embed-host=share',
    },
  },
} as Meta<typeof MultipleAvatars>;

/** A MultipleAvatars */
const Template: StoryFn<typeof MultipleAvatars> = (args) => {
  return <MultipleAvatars {...args} />;
};

export const Default = Template.bind({});

export const BrainVariant = Template.bind({});

export const GroupsVariant = Template.bind({});

export const CompaniesVariant = Template.bind({});

BrainVariant.args = {
  variant: 'brain',
};

GroupsVariant.args = {
  variant: 'groups',
};

CompaniesVariant.args = {
  variant: 'companies',
};
