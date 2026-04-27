import { useMemo } from 'react';

import * as yup from 'yup';

import { Button } from '../../../button';
import { useForm } from '../../hooks';
import { FormProvider } from '../../utils';

import { DynamicFormControl } from './dynamic-form-control';
import { DynamicFormControlContainer } from './dynamic-form-control.container';

import type { FieldValues } from '../../hooks';
import type { ControlKindType } from '../../interfaces/form.interface';
import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Modules/Forms/DynamicFormControl',
  component: DynamicFormControl,
  args: {
    disabled: false,
    placeholder: 'Placeholder',
    isBorderless: true,
    'data-testid': 'data-testid',
    name: 'dynamicFormControl',
    controlKind: 'input',
    countryCode: 'CHL',
    defaultValue: '',
    options: [
      { id: '1', label: 'option 1' },
      { id: '2', label: 'option 2' },
    ],
  },
  argTypes: {
    controlKind: {
      options: [
        'input',
        'datepicker',
        'colorPicker',
        'country',
        'nicInput',
        'radioGroup',
        'select',
        'switch',
        'textareaControl',
        'phone',
        'checkbox',
      ],
      control: {
        type: 'select',
      },
    },
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} as Meta<typeof DynamicFormControl>;

const REQUIRED_MESSAGE = 'The field should not be empty';

const toUndefinedIfEmptyString = <T,>(value: T, originalValue: unknown): T | undefined =>
  originalValue === '' ? undefined : value;

const getRequiredFieldSchema = (
  controlKind: ControlKindType,
  { multi = false, range = false }: { multi?: boolean; range?: boolean } = {},
): yup.AnySchema => {
  switch (controlKind) {
    case 'input':
    case 'textareaControl':
    case 'nicInput':
    case 'phone':
    case 'colorPicker':
      return yup.string().trim().required(REQUIRED_MESSAGE);

    case 'radioGroup':
      return yup.string().required(REQUIRED_MESSAGE);

    case 'datepicker':
      return range
        ? yup
            .array()
            .transform((value, originalValue) => (originalValue === '' ? [] : value))
            .of(yup.date().typeError(REQUIRED_MESSAGE).required(REQUIRED_MESSAGE))
            .length(2, REQUIRED_MESSAGE)
            .required(REQUIRED_MESSAGE)
        : yup
            .date()
            .transform(toUndefinedIfEmptyString)
            .typeError(REQUIRED_MESSAGE)
            .required(REQUIRED_MESSAGE);

    case 'fileUploader':
      return yup
        .array()
        .transform((value, originalValue) => (originalValue === '' ? [] : value))
        .min(1, REQUIRED_MESSAGE)
        .required(REQUIRED_MESSAGE);

    case 'checkbox':
      return yup.boolean().transform(toUndefinedIfEmptyString).oneOf([true], REQUIRED_MESSAGE);

    case 'switch':
      return yup.boolean().transform(toUndefinedIfEmptyString).required(REQUIRED_MESSAGE);

    case 'select':
    case 'country':
    case 'selectWithPagination':
      return multi
        ? yup
            .array()
            .transform((value, originalValue) => (originalValue === '' ? [] : value))
            .min(1, REQUIRED_MESSAGE)
            .required(REQUIRED_MESSAGE)
        : yup.mixed().transform(toUndefinedIfEmptyString).required(REQUIRED_MESSAGE);
  }
};

const buildSchema = (
  controlKind: ControlKindType,
  { multi = false, range = false }: { multi?: boolean; range?: boolean } = {},
): yup.AnyObjectSchema =>
  yup.object({
    dynamicFormControl: getRequiredFieldSchema(controlKind, { multi, range }),
  });

/** An DynamicFormControl */
const Template: StoryFn<typeof DynamicFormControl> = (args) => {
  const multi = (args as { multi?: boolean }).multi ?? false;
  const range = (args as { range?: boolean }).range ?? false;
  const schema = useMemo(
    () => buildSchema(args.controlKind, { multi, range }),
    [args.controlKind, multi, range],
  );

  const methods = useForm<FieldValues, unknown, FieldValues>({ schema });
  const onSubmit = (data: FieldValues) => console.log(data);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DynamicFormControl
          {...args}
          control={methods.control}
          name="dynamicFormControl"
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

/** An DynamicFormControl Container */
const TemplateContainer: StoryFn<typeof DynamicFormControlContainer> = (args) => {
  const multi = (args as { multi?: boolean }).multi ?? false;
  const range = (args as { range?: boolean }).range ?? false;
  const schema = useMemo(
    () => buildSchema(args.controlKind, { multi, range }),
    [args.controlKind, multi, range],
  );

  const methods = useForm<FieldValues, unknown, FieldValues>({ schema });
  const onSubmit = (data: FieldValues) => console.log(data);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DynamicFormControlContainer
          {...args}
          name="dynamicFormControl"
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

export const Control = Template.bind({});

export const ControlContainer = TemplateContainer.bind({});
