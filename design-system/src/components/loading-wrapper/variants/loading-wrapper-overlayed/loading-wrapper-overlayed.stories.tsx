import { LoadingWrapperOverlayed } from './loading-wrapper-overlayed';

import type { LoadingWrapperOverlayedProps } from './loading-wrapper-overlayed';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

export default {
  title: 'Components/Progress & Validation/LoadingWrapperOverlayed',
  component: LoadingWrapperOverlayed,
  args: {
    isLoading: true,
    isRelative: false,
    $backgroundColor: '#fff',
    $opacity: 0.8,
    spinnerSize: 'md',
  },
  argTypes: {
    $opacity: { control: { type: 'range', min: 0, max: 1, step: 0.01 } },
    spinnerColor: { control: 'color' },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/j9RNnPTkyfdcd0KGZPIPiX/Mejoras-UI-UX-Brain?type=design&node-id=8133-75618&mode=design&t=oA4WzmxgUEbV04mb-4',
    },
  },
} satisfies Meta<LoadingWrapperOverlayedProps>;

const Template: StoryFn<LoadingWrapperOverlayedProps> = (args) => {
  return (
    <div
      style={{
        width: '400px',
        height: '400px',
        backgroundColor: 'deepskyblue',
        padding: '1rem',
        position: 'relative',
      }}
    >
      <LoadingWrapperOverlayed {...args}>
        <div style={{ backgroundColor: '#ccc' }}>
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </LoadingWrapperOverlayed>
    </div>
  );
};

export const Default = Template.bind({});

export const WithRelativePosition: StoryObj<LoadingWrapperOverlayedProps> = Template.bind({});

WithRelativePosition.args = { isRelative: true };

export const WithStringTitle = Template.bind({});

WithStringTitle.args = {
  title: 'Loading...',
};

export const WithCustomTitle = Template.bind({});

WithCustomTitle.args = {
  title: <button>Loading...</button>,
};
