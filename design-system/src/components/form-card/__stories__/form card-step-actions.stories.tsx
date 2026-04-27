import { action } from 'storybook/actions';

import { FormCardStepActions } from '../form card-step-actions';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Content/FormCard/StepActions',
  component: FormCardStepActions,
  args: {
    currentStep: 1,
    totalSteps: 10,
    tagLabel: 'Tag Label',
    actionButton: { text: 'Button Label', onClick: action('step-action-clicked') },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/PbZuyyTRGoXBcqFm848rvy/%F0%9F%92%A0-Nuclear-Components?node-id=23732-4170&t=h5A6fpekDOhyNoYP-0',
    },
  },
} as Meta<typeof FormCardStepActions>;

const Template: StoryFn<typeof FormCardStepActions> = (args) => <FormCardStepActions {...args} />;

export const Default = Template.bind({});
