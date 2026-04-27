import * as yup from 'yup';

import { Button } from '../../../button';
import { useForm } from '../../hooks';
import { FormProvider } from '../../utils';

import { TextareaControl } from './textarea-control';
import { TextareaControlContainer } from './textarea-control-container';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Modules/Forms/TextareaControl',
  component: TextareaControl,
  args: {
    kind: 'gray',
    disabled: false,
    caption: 'caption',
    error: undefined,
    maxLength: 0,
    label: 'Label',
    showCharacterCounter: false,
    'data-testid': 'data-testid',
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} as Meta<typeof TextareaControl>;

const MAX_LENGTH = 50;

const schema = yup
  .object({
    textareaControl: yup.string().required('The field should not be empty'),
  })
  .required();

const schemaWithCounter = yup
  .object({
    textareaControl: yup.string().max(MAX_LENGTH),
  })
  .required();
/** A TextareaControl */
const Template: StoryFn<typeof TextareaControl> = (args) => {
  const methods = useForm({ schema });
  const onSubmit = (data) => console.log(data);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextareaControl
          {...methods}
          {...args}
          name="textareaControl"
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

/** A TextareaControl Container */
const TemplateContainer: StoryFn<typeof TextareaControlContainer> = (args) => {
  const methods = useForm({ schema });
  const onSubmit = (data) => console.log(data);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextareaControlContainer
          {...args}
          name="textareaControl"
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

/** A TextareaControl Container with characters Counter */
const TemplateContainerWithCounter: StoryFn<typeof TextareaControlContainer> = (args) => {
  const methods = useForm({
    mode: 'onChange',
    values: { textareaControl: '' },
    schema: schemaWithCounter,
  });
  const onSubmit = (data) => console.log(data);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextareaControlContainer
          {...args}
          name="textareaControl"
          label="Textarea with counter"
        />
        <Button
          type="submit"
          disabled={!methods.formState.isValid}
        >
          Submit
        </Button>
      </form>
    </FormProvider>
  );
};

export const Control = Template.bind({});

export const ControlContainer = TemplateContainer.bind({});

export const ControlContainerWithCounter = TemplateContainerWithCounter.bind({});

ControlContainerWithCounter.args = {
  maxLength: MAX_LENGTH,
  showCharacterCounter: true,
};
