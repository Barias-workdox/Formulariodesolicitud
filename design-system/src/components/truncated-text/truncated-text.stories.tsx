import { TruncatedText } from './truncated-text';

import type { Meta, StoryFn } from '@storybook/react-vite';

const longText =
  'Aliqua fugiat laborum veniam in id cillum ad irure et culpa ad Lorem eiusmod ullamco. Fugiat magna id irure in dolor id. Ipsum proident incididunt aliquip cillum non ea. Ea deserunt adipisicing incididunt sunt do adipisicing culpa nisi. Pariatur anim culpa irure sit ullamco do et. Adipisicing excepteur ea enim commodo minim nostrud dolore exercitation. Nostrud exercitation ullamco nisi officia minim eu laboris mollit culpa quis fugiat exercitation cupidatat. Duis dolore reprehenderit anim deserunt duis cillum anim do consectetur do ut ex nostrud deserunt. Qui minim aute adipisicing nisi.';

export default {
  title: 'Components/Content/TruncatedText',
  component: TruncatedText,
  args: {
    children: longText,
    textProps: {
      variant: 'microCopy',
    },
    tooltipProps: {
      content: longText,
    },
  },
} as Meta<typeof TruncatedText>;

/** A TruncatedText */
const Template: StoryFn<typeof TruncatedText> = (args) => {
  return <TruncatedText {...args} />;
};

export const Default = Template.bind({});
