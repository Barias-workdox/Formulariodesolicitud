import { MemoryRouter } from 'react-router-dom';

import { Forbidden403 } from './403';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Pages/403',
  component: Forbidden403,
} as Meta<typeof Forbidden403>;

/**
 * 403 view.
 * The component must be wrapped with a Router (MemoryRouter) as it contains a Link component inside,
 * and Link components must be created inside a Router context.
 */
const Template: StoryFn<typeof Forbidden403> = () => {
  return (
    <MemoryRouter>
      <Forbidden403 bgImagePath="/images/bg-grid.svg" />
    </MemoryRouter>
  );
};

export const Default = Template.bind({});
