import { Text } from '@components/text';

import { CollapsibleContent } from '../collapsible-content';

import type { CollapsibleContentProps } from '../collapsible-content.interfaces';
import type { Meta } from '@storybook/react-vite';

export default {
  title: 'Components/Content/CollapsibleContent',
  component: CollapsibleContent,
} as Meta<typeof CollapsibleContent>;

const Template = (args) => <CollapsibleContent {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Default Collapsible Content',
  initialState: false,
  children: (
    <Text
      variant="body"
      margin={0}
    >
      This is the content that can be collapsed or expanded.
    </Text>
  ),
} satisfies Partial<CollapsibleContentProps>;

export const Open = Template.bind({});

Open.args = {
  title: 'Open Collapsible Content',
  initialState: true,
  children: (
    <Text
      variant="body"
      margin={0}
    >
      This content is visible by default.
    </Text>
  ),
} satisfies Partial<CollapsibleContentProps>;

export const WithLongContent = Template.bind({});

WithLongContent.args = {
  title: 'Collapsible Content with Long Text',
  initialState: false,
  children: (
    <div>
      <Text
        variant="body"
        margin={0}
      >
        This is a longer piece of content that can be collapsed.
      </Text>
      <Text
        variant="body"
        margin={0}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </Text>
      <Text
        variant="body"
        margin={0}
      >
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
      <Text
        variant="body"
        margin={0}
      >
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.
      </Text>
    </div>
  ),
} satisfies Partial<CollapsibleContentProps>;
