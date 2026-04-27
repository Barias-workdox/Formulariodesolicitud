import { useState } from 'react';

import { Checkbox, CheckboxCheckedFilled, Star } from '@carbon/icons-react';
import { faker } from '@faker-js/faker';

import { List } from '..';
import { AvatarListItem } from '../components/avatar-list-item';
import { FileListItem } from '../components/file-list-item';
import { ListItem } from '../components/list-item';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Content/List',
  component: List,
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
} as Meta<typeof List>;

const users = new Array(10).fill(0).map(() => ({
  name: faker.person.fullName(),
  email: faker.internet.email(),
}));

const files = new Array(10)
  .fill(0)
  .map(() =>
    faker.helpers.arrayElement([
      'doc',
      'docx',
      'pdf',
      'ppt',
      'pptx',
      'csv',
      'xls',
      'xlsx',
      'png',
      'jpg',
      'jpeg',
      'msg',
      'txt',
      'zip',
      'lawgeex',
      'der',
    ]),
  );

const AvatarListTemplate: StoryFn<typeof List> = () => {
  return (
    <div style={{ maxWidth: '400px' }}>
      <List $height="200px">
        {users.map(({ name, email }, index) => (
          <AvatarListItem
            key={name}
            label={name}
            details={email}
            avatarProps={{
              name,
            }}
            $withBorderBottom={index !== users.length - 1}
          />
        ))}
      </List>
    </div>
  );
};

const FileListTemplate: StoryFn<typeof List> = () => {
  const [checked, setChecked] = useState(users.map(() => false));

  const handleCheck = (index) => {
    setChecked(checked.map((check, i) => (i === index ? !check : check)));
  };

  return (
    <div style={{ maxWidth: '300px' }}>
      <List $height="200px">
        {files.map((fileExtension, index) => (
          <FileListItem
            key={index}
            label={fileExtension}
            fileExtension={fileExtension}
            isActive={checked[index]}
            startEnhancer={!checked[index] ? <Checkbox /> : <CheckboxCheckedFilled />}
            size="sm"
            onClick={() => handleCheck(index)}
          />
        ))}
      </List>
    </div>
  );
};

const SmallListTemplate: StoryFn<typeof List> = () => {
  return (
    <div style={{ maxWidth: '400px' }}>
      <List $height="200px">
        {users.map(({ email, name }) => (
          <ListItem
            key={name}
            label={name}
            details={email}
            startEnhancer={<Star />}
            size="sm"
          />
        ))}
      </List>
    </div>
  );
};

const MediumListTemplate: StoryFn<typeof List> = () => {
  return (
    <div style={{ maxWidth: '400px' }}>
      <List $height="200px">
        {users.map(({ email, name }) => (
          <ListItem
            key={name}
            label={name}
            details={email}
            startEnhancer={<Star />}
            size="md"
          />
        ))}
      </List>
    </div>
  );
};

const ListWithCheckboxTemplate: StoryFn<typeof List> = () => {
  const [checked, setChecked] = useState(users.map(() => false));

  const handleCheck = (index) => {
    setChecked(checked.map((check, i) => (i === index ? !check : check)));
  };

  return (
    <div style={{ maxWidth: '400px' }}>
      <List $height="300px">
        {users.map(({ email, name }, index) => {
          return (
            <AvatarListItem
              key={name}
              label={name}
              details={email}
              isActive={checked[index]}
              startEnhancer={!checked[index] ? <Checkbox /> : <CheckboxCheckedFilled />}
              disabled={index % 3 === 0}
              avatarProps={{
                name,
              }}
              size="sm"
              onClick={() => handleCheck(index)}
            />
          );
        })}
      </List>
    </div>
  );
};

export const SmallList = SmallListTemplate.bind({});

export const MediumList = MediumListTemplate.bind({});

export const AvatarList = AvatarListTemplate.bind({});

export const FileList = FileListTemplate.bind({});

export const ListWithCheckbox = ListWithCheckboxTemplate.bind({});
