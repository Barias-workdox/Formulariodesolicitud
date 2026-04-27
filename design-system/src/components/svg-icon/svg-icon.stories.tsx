import { fileIconSvgMap } from '../file-icon';

import { SvgIcon } from './svg-icon';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Content/SvgIcon',
  component: SvgIcon,
  args: {
    svg: fileIconSvgMap.pdf,
    height: '50px',
    width: '50px',
  },
} as Meta<typeof SvgIcon>;

/** A SvgIcon */
const Template: StoryFn<typeof SvgIcon> = (args) => {
  return <SvgIcon {...args} />;
};

export const Default = Template.bind({});
