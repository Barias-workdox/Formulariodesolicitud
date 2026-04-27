import { useMemo, useState } from 'react';

import { Activity, Calendar, Chat, Flow, Save, Star, User } from '@carbon/icons-react';

import { StatefulFiltersGroup } from '..';
import { Checkbox } from '../../checkbox';
import { Menu } from '../../menu';

import type { FilterValue } from '@components/filter/filter.interfaces';
import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Pickers/FiltersGroup/StatefulFiltersGroup',
  component: StatefulFiltersGroup,
} as Meta<typeof StatefulFiltersGroup>;

/** A StatefulFiltersGroup */
const Template: StoryFn<typeof StatefulFiltersGroup> = () => {
  const defaultFiltersValue = {
    status: [],
    status1: [],
    status2: [],
    status3: [],
    status4: [],
    status5: [],
    status6: [],
  };

  const [values, setValues] = useState<Record<string, FilterValue[]>>(defaultFiltersValue);

  const isDirty = useMemo(
    () =>
      Object.entries(values).some((entry) => {
        const [, value] = entry;

        return value.length !== 0;
      }),
    [values],
  );

  const updateValue = (filterId: string, option: FilterValue) => {
    const filterValue = values[filterId];

    if (filterValue.some(({ id }) => option.id === id)) {
      const updatedValue = filterValue.filter((item) => item.id !== option.id);

      setValues({ ...values, [filterId]: updatedValue });
    } else {
      setValues({ ...values, [filterId]: [...filterValue, option] });
    }
  };

  const clearAllFilters = () => {
    setValues(defaultFiltersValue);
  };

  const getFilterContent = (filterId: string) => (
    <Menu
      items={[
        { id: 1, label: 'Hello World' },
        { id: 2, label: 'Lorem ipsum' },
        { id: 3, label: 'Qwerty asdf' },
      ]}
      itemLabelTemplate={({ id, label }) => {
        return (
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
            }}
          >
            {label}
            <Checkbox checked={values[filterId].some((option) => id === option.id)} />
          </span>
        );
      }}
      onItemSelect={({ item }) => updateValue(filterId, item)}
    />
  );

  return (
    <StatefulFiltersGroup
      onClearAllFilters={clearAllFilters}
      isDirty={isDirty}
    >
      <StatefulFiltersGroup.Filter
        content={getFilterContent('status')}
        value={values['status']}
        id="status"
        label="status"
        startEnhancer={Chat}
        multi
      />
      <StatefulFiltersGroup.Filter
        content={getFilterContent('status1')}
        value={values['status1']}
        id="status1"
        label="status1"
        startEnhancer={Star}
        multi
      />
      <StatefulFiltersGroup.Filter
        content={getFilterContent('status2')}
        value={values['status2']}
        id="status2"
        label="status2"
        startEnhancer={Save}
        multi
      />
      <StatefulFiltersGroup.Filter
        content={getFilterContent('status3')}
        value={values['status3']}
        id="status3"
        label="status3"
        startEnhancer={User}
        multi
      />
      <StatefulFiltersGroup.Filter
        content={getFilterContent('status4')}
        value={values['status4']}
        id="status4"
        label="status4"
        startEnhancer={Flow}
        multi
      />
      <StatefulFiltersGroup.Filter
        content={getFilterContent('status5')}
        value={values['status5']}
        id="status5"
        label="status5"
        startEnhancer={Activity}
        multi
      />
      <StatefulFiltersGroup.Filter
        content={getFilterContent('status6')}
        value={values['status6']}
        id="status6"
        label="status6"
        startEnhancer={Calendar}
        multi
      />
    </StatefulFiltersGroup>
  );
};

export const Default = Template.bind({});
