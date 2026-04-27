import { useState } from 'react';

import { action } from 'storybook/internal/actions';
import * as yup from 'yup';

import { ReactComponent as BrainIcon } from '@assets/icons/webdox-ai/brain-icon.svg';
import { useEntitiesDirectoryMockList } from '@components/entities-multiselect/hooks/use-entities-mock-data';
import { Tag } from '@components/tag/next/tag';

import { Button } from '../../../button';
import { useForm } from '../../hooks';
import { FormProvider } from '../../utils';

import { EntitiesMultiSelectControl } from './entities-multiselect-control';

import type { EntitiesMultiselectControlContainer } from './entities-multiselect-control-container';
import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Modules/Forms/EntitiesMultiSelectControl',
  component: EntitiesMultiSelectControl,
  args: {
    values: [{ id: '16', label: 'ABC - LumenPath Energy' }],
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} as Meta<typeof EntitiesMultiSelectControl>;

const schema = yup
  .object({
    entitiesMultiSelectControl: yup
      .array()
      .min(1, 'The field should not be empty')
      .required('The field should not be empty'),
  })
  .required();

/**  UserMultiselectControl */
const Template: StoryFn<typeof EntitiesMultiSelectControl> = (args) => {
  const [entityValues, setEntityValues] = useState(args.values);

  const methods = useForm({ schema });

  const onSubmit = () => action('button-clicked');

  const { handleSubmit } = methods;

  const { options, isFetching, fetchData, refetchData, peopleTotalElements, companyTotalElements } =
    useEntitiesDirectoryMockList();

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <EntitiesMultiSelectControl
          name="entitiesMultiSelectControl"
          label="Entities"
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
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

/** UserMultiselectControl Container */
const TemplateContainer: StoryFn<typeof EntitiesMultiselectControlContainer> = (args) => {
  const methods = useForm({ schema });
  const onSubmit = () => action('button-clicked');

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <EntitiesMultiSelectControl
          {...args}
          name="entitiesMultiSelectControl"
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

export const Control = Template.bind({});

export const ControlContainer = TemplateContainer.bind({});
