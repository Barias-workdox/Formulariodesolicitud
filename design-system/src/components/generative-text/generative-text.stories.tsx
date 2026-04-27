import { GenerativeText } from './generative-text';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Inputs/GenerativeText',
  component: GenerativeText,
  args: {
    delay: 500,
    accumulatedText: 'Pariatur sit cupidatat laboris enim sunt',
    generativeText: ' ...',
    joinChar: ' ',
    splitChar: '',
    variant: 'body',
    infinite: true,
    onFinish: () => console.log('finish!'),
    'data-testid': 'data-testid',
  },
} as Meta<typeof GenerativeText>;

/** A GenerativeText */
const Template: StoryFn<typeof GenerativeText> = (args) => {
  return <GenerativeText {...args} />;
};

export const Infinite = Template.bind({});

export const Finite = Template.bind({});

Finite.args = {
  accumulatedText: undefined,
  infinite: false,
  generativeText: 'Commodo adipisicing eiusmod esse incididunt deserunt.',
  splitChar: ' ',
  joinChar: ' ',
};
