import { Building, Enterprise, Finance, Industry } from '@carbon/icons-react';
import { faker } from '@faker-js/faker';
import _ from 'lodash';

import type { Item } from '@components/list-factory/list-factory.interfaces';

type ItemProperties = Partial<Item> & {
  name?: string;
  count?: number;
  disabledProbability?: number;
};

/**
 * Generate items for the dropdown component storybook.
 */
export const generateItems = ({
  items,
  name,
  label,
  Icon = null,
  kind = 'avatar',
  withCheckbox = false,
  count = _.random(1, 10),
  disabledProbability = 0.3,
}: ItemProperties): Item[] => {
  // Generate base items
  const baseItems = faker.helpers.multiple(
    () => ({
      uuid: faker.string.uuid(),
      name: name ? name : kind === 'basic' ? faker.company.name() : faker.person.fullName(),
    }),
    { count },
  );

  // Map to final item format
  const generatedItems = baseItems.map(
    ({ uuid, name }, index): Item => ({
      id: uuid,
      label: kind === 'group' && label ? `${label} ${index + 1}` : name,
      disabled: Math.random() < disabledProbability,
      withCheckbox,
      ...(Icon && { Icon }),
      kind,
      items:
        kind === 'group'
          ? generateItems({
              kind: ['avatar', 'basic'][_.random(0, 1)] as 'avatar' | 'basic',
              // eslint-disable-next-line react/jsx-key
              Icon: _.sample([<Industry />, <Building />, <Enterprise />, <Finance />]),
              withCheckbox,
              disabledProbability: 0.1,
            })
          : items,
    }),
  );

  return generatedItems;
};

/**
 * Get randomly selected item ids from the provided items array.
 */
export const getRandomlySelectedItemIds = (
  items: Item[] = [],
  quantity: number,
): (string | number)[] =>
  Array.from({ length: quantity }, () => (_.sample(items)?.id as string | number) || 1);
