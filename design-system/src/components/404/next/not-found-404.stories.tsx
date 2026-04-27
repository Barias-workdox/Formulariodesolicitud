import { MemoryRouter } from 'react-router-dom';

import { NotFound404 } from './not-found-404';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Pages/404/Next',
  component: NotFound404,
} as Meta<typeof NotFound404>;

/**
 * 404 view.
 * The component must be wrapped with a Router (MemoryRouter) as it contains a Link component inside,
 * and Link components must be created inside a Router context.
 */
const Template: StoryFn<typeof NotFound404> = () => {
  return (
    <MemoryRouter>
      <NotFound404 />
    </MemoryRouter>
  );
};

export const Default = Template.bind({});
