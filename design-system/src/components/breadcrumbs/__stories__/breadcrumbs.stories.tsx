import { Text } from '@components/text';

import { Breadcrumbs } from '../breadcrumbs';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Navigation/Breadcrumbs',
  component: Breadcrumbs,
  args: {
    children: [
      <Text
        key="1"
        variant="body"
        margin={0}
        color="neutralSubdued"
      >
        Deserunt pariatur elit irure officia quis fugiat aliquip incididunt excepteur.
      </Text>,
      <Text
        key="2"
        variant="body"
        margin={0}
        color="blue140"
      >
        Test
      </Text>,
      <Text
        key="3"
        variant="body"
        margin={0}
        color="neutralSubdued"
      >
        Item 23
      </Text>,
    ],
    showTrailingSeparator: false,
  },
} as Meta<typeof Breadcrumbs>;

/** A Breadcrumbs */
const Template: StoryFn<typeof Breadcrumbs> = (args) => {
  return <Breadcrumbs {...args} />;
};

export const Default = Template.bind({});
