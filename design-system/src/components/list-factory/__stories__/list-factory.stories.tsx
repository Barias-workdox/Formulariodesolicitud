import { useState } from 'react';

import { Building, Enterprise, Finance, Industry, UserAdmin } from '@carbon/icons-react';
import { faker } from '@faker-js/faker';

import { useListFactoryUtils } from '../hooks/use-list-factory-utils';
import { ListFactory } from '../list-factory';

import type { Item } from '../list-factory.interfaces';
import type { Meta } from '@storybook/react-vite';

export default {
  title: 'Components/Content/ListFactory',
} as Meta<typeof ListFactory>;

const LEVEL_1_ITEMS = faker.helpers.multiple(
  () => ({ uuid: faker.string.uuid(), name: faker.company.name() }),
  { count: 10 },
);

const LEVEL_2_ITEMS = faker.helpers.multiple(
  () => ({ uuid: faker.string.uuid(), name: faker.person.fullName() }),
  { count: 10 },
);

const LEVEL_3_ITEMS = faker.helpers.multiple(
  () => ({ uuid: faker.string.uuid(), name: faker.color.human() }),
  { count: 10 },
);

/**
 * A sample hierarchical data structure showing companies with nested sub-items.
 */
const allNestedValues = LEVEL_1_ITEMS.map(
  ({ uuid, name }): Item => ({
    id: uuid,
    label: name,
    disabled: Math.random() < 0.3,
    Icon: <Building />,
    items: LEVEL_2_ITEMS.map(({ uuid, name }): Item => {
      const kind = Math.random() > 0.5 ? 'basic' : 'avatar';

      return {
        id: uuid,
        label: name,
        kind,
        avatarProps:
          kind === 'avatar'
            ? {
                backgroundColor: ['neutral', 'powerSubdued'][Math.floor(Math.random() * 2)],
              }
            : undefined,
        Icon: kind === 'basic' ? <UserAdmin /> : undefined,
        items: LEVEL_3_ITEMS.map(
          ({ uuid, name }): Item => ({
            id: uuid,
            label: name,
            withCheckbox: true,
          }),
        ),
      } as Item;
    }),
  }),
);

const singleItems = LEVEL_1_ITEMS.map(
  ({ uuid, name }): Item => ({
    id: uuid,
    label: name,
    disabled: Math.random() < 0.3,
    // eslint-disable-next-line react/jsx-key
    Icon: [<Industry />, <Building />, <Enterprise />, <Finance />][Math.floor(Math.random() * 4)],
    withCheckbox: true,
  }),
);

const Template = ({ root }: { root: Item[] }) => {
  const [searchValue, setSearchValue] = useState('');
  const [pathIds, setPathIds] = useState<Item['id'][]>([]);
  const [checkedIds, setCheckedIds] = useState<Item['id'][]>([]);

  const { options, getItemsTraversed, onOptionClick } = useListFactoryUtils({
    root,
    pathIds,
    checkedIds,
    searchValue,
    onChange: (args) => {
      setPathIds(args.pathIds);
      setCheckedIds(args.checkedIds);
    },
  });

  const handleReset = () => {
    setSearchValue('');
    setPathIds([]);
    setCheckedIds([]);
  };

  const pathItems = getItemsTraversed();
  const pathLabels = pathItems.map(({ label }) => label).filter(Boolean);
  const checkedLabels = checkedIds.map(
    (checkedId) => (pathItems.at(-1)?.items || []).find(({ id }) => checkedId === id)?.label,
  );

  const breadcrumb = pathLabels.length ? (
    <small>
      {pathLabels.join(' / ')}
      {checkedLabels.length > 0 ? ` / ${checkedLabels.join(' - ')}` : ''}
    </small>
  ) : undefined;

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}
    >
      {breadcrumb}
      <ListFactory
        isFiltrable
        items={options}
        maxWidth="300px"
        maxHeight="400px"
        searchValue={searchValue}
        onItemClick={onOptionClick}
        onSearchValueChange={setSearchValue}
      />
      <button onClick={handleReset}>Limpiar selección</button>
    </div>
  );
};

export const Default = (): JSX.Element => <Template root={singleItems} />;

export const NestedList = (): JSX.Element => <Template root={allNestedValues} />;
