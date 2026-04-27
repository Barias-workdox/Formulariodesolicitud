import { Button } from '../button';

import { CopyToClipboardButton } from './copy-to-clipboard-button';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Inputs/CopyToClipboardButton',
  component: CopyToClipboardButton,
  args: {
    text: 'Nulla laborum Lorem aute duis dolore cupidatat sint quis.',
    tooltipText: 'Copy the text',
    copiedTooltipText: 'Copied the text',
    'data-testid': 'data-testid',
    onCopy: () => console.log('copied text!'),
  },
} as Meta<typeof CopyToClipboardButton>;

/** A CopyToClipboardButton */
const Template: StoryFn<typeof CopyToClipboardButton> = (args) => {
  return <CopyToClipboardButton {...args} />;
};

export const Default = Template.bind({});

export const CustomChildren = Template.bind({});

CustomChildren.args = {
  children: <Button>Custom Element</Button>,
};

export const DefaultTooltips = Template.bind({});

DefaultTooltips.args = {
  tooltipText: undefined,
  copiedTooltipText: undefined,
};
