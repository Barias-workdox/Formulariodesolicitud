import * as yup from 'yup';

import { Button } from '../../../button';
import { useForm } from '../../hooks';
import { FormProvider } from '../../utils';

import { ColorPickerControl } from './color-picker-control';
import { ColorPickerControlContainer } from './color-picker-control-container';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Modules/Forms/ColorPickerControl',
  component: ColorPickerControl,
  args: {
    label: 'Color picker',
    defaultValue: '#FFFFFF',
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} as Meta<typeof ColorPickerControl>;

const schema = yup
  .object({
    colorPickerControl: yup.string().required(),
  })
  .required();

/** A ColorPickerControl */
const Template: StoryFn<typeof ColorPickerControl> = (args) => {
  const methods = useForm({
    schema,
  });

  const onSubmit = (data) => console.log(data);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ColorPickerControl
          {...methods}
          {...args}
          name="colorPickerControl"
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

/** A ColorPickerControl Container */
const TemplateContainer: StoryFn<typeof ColorPickerControlContainer> = (args) => {
  const methods = useForm({
    schema,
  });

  const onSubmit = (data) => console.log(data);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ColorPickerControlContainer
          {...args}
          name="colorPickerControl"
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

export const Control = Template.bind({});

export const ControlContainer = TemplateContainer.bind({});
