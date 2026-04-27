// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import example from './__mocks__/markdown.example.md?raw';
import { Markdown } from './markdown';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Content/Markdown',
  component: Markdown,
} as Meta<typeof Markdown>;

const Template: StoryFn<typeof Markdown> = () => {
  return <Markdown>{example.toString()}</Markdown>;
};

export const Default = Template.bind({});
