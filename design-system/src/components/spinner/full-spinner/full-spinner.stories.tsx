import { useState } from 'react';

import { Button } from '../../button';

import { FullSpinner } from './full-spinner';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Progress & Validation/FullSpinner',
  component: FullSpinner,
  args: {
    isOpen: false,
  },
} as Meta<typeof FullSpinner>;

/** A FullSpinner */
const Template: StoryFn<typeof FullSpinner> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (): void => {
    setIsOpen(true);

    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  };

  return (
    <>
      <FullSpinner
        {...args}
        isOpen={isOpen}
      />
      <Button onClick={handleClick}>Open Full Spinner</Button>
    </>
  );
};

export const Default = Template.bind({});
