import { useState } from 'react';

import { faker } from '@faker-js/faker';

import { EmptyState } from '@components/empty-state';
import { includesStringNormalized } from '@components/utils/strings/text.utils';

import { SearchContainer } from '..';

import type { Meta } from '@storybook/react-vite';

export default {
  title: 'Components/Content/SearchContainer',
} as Meta<typeof SearchContainer>;

const items = faker.helpers.multiple(() => faker.animal.cat(), { count: 20 });

const Template = () => {
  const [search, setSearch] = useState('');

  const filteredItems = items.filter((item) => includesStringNormalized(item, search));

  return (
    <SearchContainer
      maxWidth="300px"
      maxHeight="300px"
      searchValue={search}
      onSearchChange={setSearch}
    >
      {filteredItems.length ? (
        <ul style={{ padding: '1rem 2rem', margin: 0, overflow: 'auto' }}>
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <EmptyState title="Sin resultados" />
      )}
    </SearchContainer>
  );
};

export const DefaultTemplate = Template.bind({});
