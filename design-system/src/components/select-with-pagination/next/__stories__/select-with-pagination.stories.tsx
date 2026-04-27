import { useState } from 'react';

import { faker } from '@faker-js/faker';

import { useToaster } from '../../../../../.storybook/preview';
import { SelectWithPagination } from '../select-with-pagination';

import type { SelectWithPaginationProps } from '../select-with-pagination.interfaces';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import type { Option } from 'baseui/select';

const PER_PAGE = 50;

function getOptions(quantity: number): Option[] {
  return Array(quantity)
    .fill(0)
    .map(() => ({
      id: faker.string.uuid(),
      label: faker.company.name(),
    }));
}

export default {
  title: 'Components/Pickers/SelectWithPagination/Next',
  component: SelectWithPagination,
  args: {
    positive: false,
    error: false,
    disabled: false,
    kind: 'gray',
    size: '44px',
    isLoading: false,
    isLoadingMore: false,
    options: getOptions(PER_PAGE),
  },
} satisfies Meta<typeof SelectWithPagination>;

const Template: StoryFn<SelectWithPaginationProps & { hasNextPage?: boolean }> = ({
  hasNextPage = true,
  isLoadingMore,
  options,
  onLoadMore = () => {},
  ...props
}) => {
  const [selectedOption, setSelectedOption] = useState<Option[]>([]);
  const [_isLoadingMore, setIsLoadingMore] = useState(isLoadingMore);
  const [_options, setOptions] = useState(options);
  const toaster = useToaster();

  /**
   * When the user scrolls to the bottom of the page, it adds more options to the current list of options.
   */
  function fetchNextPage(): void {
    setIsLoadingMore(true);
    const newOptions = getOptions(PER_PAGE);

    setTimeout(() => {
      setOptions((prev) => [...prev, ...newOptions]);
      setIsLoadingMore(false);
    }, 1000);
  }

  /**
   * Fetch next page data
   */
  function handleLoadMore(): void {
    if (hasNextPage) {
      fetchNextPage();

      onLoadMore();
    } else {
      toaster.warning({ title: `No hay más páginas` });
    }
  }

  return (
    <SelectWithPagination
      {...props}
      isLoading={_isLoadingMore}
      isLoadingMore={_isLoadingMore}
      options={_options}
      value={selectedOption}
      onChange={setSelectedOption}
      onLoadMore={handleLoadMore}
    />
  );
};

/** A select with pagination with 5 pages*/
const TemplateWithFivesPages: StoryFn<typeof SelectWithPagination> = (props) => {
  const [remainingPages, setRemainingPages] = useState(5);
  const toaster = useToaster();

  const updateRemainingPages = (): void => {
    if (remainingPages > 0) {
      const remainingPagesUpdated = remainingPages - 1;

      setRemainingPages(remainingPagesUpdated);
      toaster.info({ title: `${remainingPagesUpdated} páginas restantes` });
    }
  };

  return (
    <Template
      hasNextPage={remainingPages > 0}
      onLoadMore={updateRemainingPages}
      {...props}
    />
  );
};

export const Default: StoryObj<SelectWithPaginationProps> = Template.bind({});

export const WithNoOptions: StoryObj<SelectWithPaginationProps> = Template.bind({});

WithNoOptions.args = {
  options: [],
};

export const WithGroupedOptions: StoryObj<SelectWithPaginationProps> = Template.bind({});

WithGroupedOptions.args = {
  options: {
    __ungrouped: getOptions(5),
    'Group 1': getOptions(20),
    'Group 2': getOptions(30),
    'Group 3': getOptions(40),
  },
};

export const WithThousandsOfOptions: StoryObj<SelectWithPaginationProps> = Template.bind({});

WithThousandsOfOptions.args = {
  options: getOptions(5000),
};

export const WithFivesPages: StoryObj<SelectWithPaginationProps> = TemplateWithFivesPages.bind({});
