import * as yup from 'yup';

import { Button } from '../../../button';
import { useForm } from '../../hooks';
import { FormProvider } from '../../utils';
import { useFileUploaderValidationSchema } from '../../validations/hooks/use-file-uploader-validation-schema';

import { FileUploaderControl } from './file-uploader-control';
import { FileUploaderControlContainer } from './file-uploader-control.container';

import type { Meta, StoryFn } from '@storybook/react-vite';
import type { FieldValues } from 'react-hook-form';

export default {
  title: 'Modules/Forms/FileUploaderControl',
  component: FileUploaderControl,
  args: {
    label: 'File Uploader',
    disabled: false,
    placeholder: 'Placeholder',
    isBorderless: true,
    'data-testid': 'data-testid',
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} as Meta<typeof FileUploaderControl>;

/** An FileUploaderControl */
const Template: StoryFn<typeof FileUploaderControl> = (args) => {
  const filesValidation = useFileUploaderValidationSchema({ schema: yup });

  const methods = useForm<FieldValues, { files: File[] }>({
    schema: yup
      .object({
        files: filesValidation,
      })
      .required(),
    values: {
      files: [],
    },
  });
  const onSubmit = (data) => console.log(data);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FileUploaderControl
          {...methods}
          {...args}
          name="files"
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

/** An InputControl Container */
const TemplateContainer: StoryFn<typeof FileUploaderControlContainer> = (args) => {
  const filesValidation = useFileUploaderValidationSchema({ schema: yup });

  const methods = useForm({
    schema: yup
      .object({
        files: filesValidation,
      })
      .required(),
    values: {
      files: [],
    },
  });
  const onSubmit = (data) => console.log(data);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FileUploaderControlContainer
          {...args}
          name="files"
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

export const Control = Template.bind({});

export const ControlContainer = TemplateContainer.bind({});

export const ControlContainerWithFormControlOverrides = TemplateContainer.bind({});

ControlContainerWithFormControlOverrides.args = {
  formControlOverrides: {
    ControlContainer: {
      style: { margin: `1rem 0 3rem` },
    },
    Caption: { style: { marginBottom: 0, fontSize: '20px', fontWeight: 900 } },
  },
};
