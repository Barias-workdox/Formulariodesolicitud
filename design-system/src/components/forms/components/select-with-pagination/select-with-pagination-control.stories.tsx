import { useState } from 'react';

import * as yup from 'yup';

import { Button } from '../../../button';
import { getOptions } from '../../../select/select.stories';
import { useForm } from '../../hooks';
import { FormProvider } from '../../utils';

import { SelectWithPaginationControl } from './select-with-pagination-control';
import { SelectWithPaginationControlContainer } from './select-with-pagination-control-container';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Modules/Forms/SelectWithPaginationControl',
  component: SelectWithPaginationControl,
  args: {
    disabled: false,
    placeholder: 'Placeholder',
    options: getOptions(10),
    label: 'Label',
    'data-testid': 'data-testid',
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} as Meta<typeof SelectWithPaginationControl>;

const schema = yup
  .object({
    selectWithPaginationControl: yup.array().required('The field should not be empty'),
  })
  .required();

/** An InputControl Container */
const Template: StoryFn<typeof SelectWithPaginationControlContainer> = (args) => {
  const [_options, setOptions] = useState(getOptions(10));
  const [_isLoadingMore, setIsLoadingMore] = useState(false);

  /**
   * When the user scrolls to the bottom of the page, it adds more options to the current list of options.
   */
  function fetchNextPage(): void {
    setIsLoadingMore(true);
    const newOptions = getOptions(10);

    setTimeout(() => {
      setOptions((prev) => [...prev, ...newOptions]);
      setIsLoadingMore(false);
    }, 1000);
  }

  /**
   * Fetch next page data
   */
  function handleLoadMore(): void {
    fetchNextPage();
  }

  const methods = useForm({ schema });
  const onSubmit = (data) => console.log(data);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SelectWithPaginationControlContainer
          {...args}
          name="selectWithPaginationControl"
          options={_options}
          onLoadMore={handleLoadMore}
          isLoading={_isLoadingMore}
          isLoadingMore={_isLoadingMore}
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

export const Control = Template.bind({});

export const ControlContainer = Template.bind({});
