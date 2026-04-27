import { Skeleton } from '../skeleton';

import type { SkeletonProps } from '../skeleton';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

export default {
  title: 'Components/Progress & Validation/Skeleton',
  component: Skeleton,
  args: {
    rows: 1,
    height: '100px',
    width: '200px',
    animation: true,
    autoSizeRows: true,
  },
} as Meta<SkeletonProps>;

const Template: StoryFn<SkeletonProps> = (props: SkeletonProps) => {
  return <Skeleton {...props} />;
};

export const Default: StoryObj<SkeletonProps> = Template.bind({});
