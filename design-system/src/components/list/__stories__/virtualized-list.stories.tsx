import { useState } from 'react';

import { Star, TrashCan } from '@carbon/icons-react';
import { faker } from '@faker-js/faker';

import { IconButton } from '@components/button';

import { VirtualizedList } from '..';
import { Spinner } from '../../spinner';
import { AvatarListItem } from '../components/avatar-list-item';
import { FileListItem } from '../components/file-list-item';
import { ListItem } from '../components/list-item';

import type { FileType } from '@components/file-type-icon';
import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Content/List/VirtualizedList',
  component: VirtualizedList,
  args: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Vg0tnNQrtCYjRtTInXTcTD/Nuclear-DS-1.1-(Oficial)?node-id=7666-13105&t=wJzOgGHeFMefqA2q-4',
    },
  },
  argTypes: {
    $as: {
      table: {
        disable: true,
      },
    },
    $style: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof VirtualizedList>;

const users = new Array(100).fill(0).map(() => ({
  name: faker.person.fullName(),
  email: faker.internet.email(),
}));

const files = new Array(1000).fill(0).map(() => faker.system.commonFileExt());

const AvatarListTemplate: StoryFn<typeof VirtualizedList> = () => {
  return (
    <div style={{ width: '500px' }}>
      <VirtualizedList
        $maxHeight="300px"
        itemHeight={61}
      >
        {users.map(({ email, name }, index) => (
          <AvatarListItem
            key={`${name}-${index}`}
            label={name}
            details={email}
            avatarProps={{
              name,
            }}
            $withBorderBottom={index !== users.length - 1}
          />
        ))}
      </VirtualizedList>
    </div>
  );
};

const FileListTemplate: StoryFn<typeof VirtualizedList> = () => {
  return (
    <div style={{ width: '500px' }}>
      <VirtualizedList
        $maxHeight="300px"
        itemHeight={61}
      >
        {files.map((fileExtension, index) => (
          <FileListItem
            key={`${fileExtension}-${index}`}
            label={fileExtension}
            fileExtension={fileExtension as FileType}
            details="Details"
            $withBorderBottom={index !== users.length - 1}
          />
        ))}
      </VirtualizedList>
    </div>
  );
};

const ListTemplate: StoryFn<typeof VirtualizedList> = () => {
  return (
    <div style={{ width: '500px' }}>
      <VirtualizedList
        $maxHeight="300px"
        itemHeight={61}
      >
        {users.map(({ email, name }, index) => (
          <ListItem
            key={`${name}-${index}`}
            label={name}
            details={email}
            $withBorderBottom={index !== users.length - 1}
            startEnhancer={<Star />}
          />
        ))}
      </VirtualizedList>
    </div>
  );
};

const InfiniteListTemplate: StoryFn<typeof VirtualizedList> = () => {
  const [page, setPage] = useState(0);
  const [pageData, setPageData] = useState(
    faker.helpers.multiple(faker.address.country, { count: 10 }),
  );
  const [isFetchingNextPage, setIsFetchingNextPage] = useState(false);

  const handleFetchNextPage = () => {
    setIsFetchingNextPage(true);
    setTimeout(() => {
      setPage(page + 1);
      setIsFetchingNextPage(false);
      setPageData((prevPageData) => [
        ...prevPageData,
        ...faker.helpers.multiple(faker.address.country, { count: 10 }),
      ]);
    }, 3500);
  };

  const handleRemove = (index) => {
    pageData.splice(index, 1);
    setPageData([...pageData]);
  };

  return (
    <div style={{ width: '500px' }}>
      <VirtualizedList
        $maxHeight="300px"
        itemHeight={40}
        isInfinite
        onLastItemRendered={handleFetchNextPage}
        isFetchingNextPage={isFetchingNextPage}
      >
        {pageData.map((row, index) => (
          <ListItem
            key={`${row}-${index}`}
            label={row}
            $withBorderBottom
            startEnhancer={<Star />}
            endEnhancer={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <IconButton
                  kind="control"
                  size="24px"
                  onClick={() => handleRemove(index)}
                >
                  <TrashCan
                    aria-label="Back"
                    size={12}
                  />
                </IconButton>
              </div>
            }
          />
        ))}
        {isFetchingNextPage && (
          <ListItem
            label="Loading data ..."
            startEnhancer={<Spinner size="sm" />}
          />
        )}
      </VirtualizedList>
    </div>
  );
};

export const Default = ListTemplate.bind({});

export const AvatarList = AvatarListTemplate.bind({});

export const FileList = FileListTemplate.bind({});

export const InfiniteList = InfiniteListTemplate.bind({
  isInfinite: true,
  isFetchingNextPage: false,
});
