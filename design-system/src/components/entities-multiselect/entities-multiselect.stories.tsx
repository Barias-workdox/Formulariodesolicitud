import { useState } from 'react';

import { ReactComponent as BrainIcon } from '@assets/icons/webdox-ai/brain-icon.svg';
import { Tag } from '@components/tag/next';

import { useEntitiesDirectoryMockList } from './hooks/use-entities-mock-data';

import { EntitiesMultiSelect } from '.';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Pickers/EntitiesMultiselect',
  component: EntitiesMultiSelect,
  args: {
    values: [{ id: '16', label: 'ABC - LumenPath Energy' }],
  },
  parameters: {
    design: {
      type: 'figma',
    },
  },
} as Meta<typeof EntitiesMultiSelect>;

/** A EntitiesMultiSelect component */
const Template: StoryFn<typeof EntitiesMultiSelect> = (args) => {
  const [entityValues, setEntityValues] = useState(args.values);

  const { options, isFetching, fetchData, refetchData, peopleTotalElements, companyTotalElements } =
    useEntitiesDirectoryMockList();

  return (
    <EntitiesMultiSelect
      options={args?.options || options}
      values={entityValues}
      onChange={setEntityValues}
      isLoading={args?.isLoading || isFetching}
      placeholder={args?.placeholder}
      companyTotalElements={companyTotalElements}
      peopleTotalElements={peopleTotalElements}
      leading={
        <div>
          <Tag
            kind="ai"
            variant="light"
            shape="rounded"
            size="md"
            icon={BrainIcon}
          />
        </div>
      }
      onSearch={async (search: string) => {
        refetchData({ search });
      }}
      onLoadMore={fetchData}
    />
  );
};

export const Default = Template.bind({});

export const CustomPlaceholder = Template.bind({});

CustomPlaceholder.args = {
  placeholder: 'Custom placeholder...',
  values: [],
};

export const Loading = Template.bind({});

Loading.args = {
  isLoading: 'all',
};

export const NoOptions = Template.bind({});

NoOptions.args = {
  options: [],
  values: [],
};
