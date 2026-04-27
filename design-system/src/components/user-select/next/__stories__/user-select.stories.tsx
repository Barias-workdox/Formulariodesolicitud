import { useState } from 'react';

import { faker } from '@faker-js/faker';

import { UserSelect } from '../user-select';

import type { UserOption, UserSelectProps } from '../user-select.interfaces';
import type { Meta, StoryFn } from '@storybook/react-vite';

const PER_PAGE = 10;

function getOptions(quantity: number): UserOption[] {
  return Array(quantity)
    .fill(0)
    .map(() => ({
      id: faker.string.uuid(),
      label: faker.person.fullName(),
      email: faker.internet.email(),
    }));
}

export default {
  title: 'Components/Pickers/UserSelect/Next',
  component: UserSelect,
  args: {
    isLoading: false,
    isLoadingMore: false,
    options: getOptions(PER_PAGE),
    size: 'md',
    placeholder: 'Seleccionar',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/JJt16RjrafgvbGpfulNZUw/Directorio-de-contactos%3A-creaci%C3%B3n%2C-listado-y-permisos?node-id=3694-202470&t=6dm9vGP23b2o6Jzx-0',
    },
  },
} satisfies Meta<typeof UserSelect>;

const Template: StoryFn<UserSelectProps & { hasNextPage?: boolean }> = ({
  hasNextPage = false,
  isLoadingMore,
  options,
  onLoadMore = () => {},
  ...props
}) => {
  const [selectedOption, setSelectedOption] = useState<UserOption[]>([]);
  const [_isLoadingMore, setIsLoadingMore] = useState(isLoadingMore);
  const [_options, setOptions] = useState(options);

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
    }
  }

  return (
    <UserSelect
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

export const Default = Template.bind({});
