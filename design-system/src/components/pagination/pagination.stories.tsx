import { useState } from 'react';

import { Pagination } from './pagination';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Navigation/Pagination',
  component: Pagination,
  args: {
    numPages: 5,
    currentPage: 2,
    size: 'default',
    onPageChange: () => console.log('page changed!'),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/eMhywyfWwKMjIyemY3PDoK/Design-System-Webdox-1.0?type=design&node-id=4305-12834&mode=dev',
    },
  },
} as Meta<typeof Pagination>;

/** A Pagination */
const Template: StoryFn<typeof Pagination> = (args) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);

  const handlePageChange = (increment: number): void => {
    setCurrentPage((oldCurrentPage) => oldCurrentPage + increment);
  };

  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      onNextClick={(): void => handlePageChange(1)}
      onPrevClick={(): void => handlePageChange(-1)}
    />
  );
};

export const Default = Template.bind({});
