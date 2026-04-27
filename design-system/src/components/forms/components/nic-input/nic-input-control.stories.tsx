import * as yup from 'yup';

import { Button } from '../../../button';
import { useForm } from '../../hooks';
import { FormProvider } from '../../utils';
import { useNicValidation } from '../../validations';

import { NicInputControl } from './nic-input-control';
import { NicInputControlContainer } from './nic-input-control-container';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Modules/Forms/NicInputControl',
  component: NicInputControl,
  args: {
    disabled: false,
    'data-testid': 'data-testid',
    countryCode: 'CHL',
    required: false,
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} as Meta<typeof NicInputControl>;

/** Reusable phone validation schema for story */
const useNicValidationSchema = ({ countryCode, required, nationalIdentificationKindCode }) => {
  const { nicValidationSchema } = useNicValidation();

  return yup
    .object({
      nicInputControl: nicValidationSchema({
        schema: yup,
        countryCode: countryCode ?? 'CHL',
        required,
        nationalIdentificationKindCode,
      }),
    })
    .required();
};

/** An InputControl */
const Template: StoryFn<typeof NicInputControl> = ({ required, countryCode, ...restArgs }) => {
  const schema = useNicValidationSchema({
    countryCode,
    required,
    nationalIdentificationKindCode: undefined,
  });

  const methods = useForm({ schema });

  const onSubmit = (data) => console.log(data);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <NicInputControl
          {...methods}
          {...restArgs}
          countryCode={countryCode}
          name="nicInputControl"
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

/** An InputControl Container */
const TemplateContainer: StoryFn<typeof NicInputControlContainer> = ({
  required,
  countryCode,
  ...restArgs
}) => {
  const schema = useNicValidationSchema({
    countryCode,
    required,
    nationalIdentificationKindCode: undefined,
  });

  const methods = useForm({ schema });
  const onSubmit = (data) => console.log(data);

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <NicInputControlContainer
          {...restArgs}
          countryCode={countryCode}
          name="nicInputControl"
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

export const Control = Template.bind({});

export const ControlContainer = TemplateContainer.bind({});
