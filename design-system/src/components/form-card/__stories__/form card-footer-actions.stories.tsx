import { action } from 'storybook/actions';

import { FormCardFooterActions } from '../form-card-footer-actions';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Content/FormCard/FooterActions',
  component: FormCardFooterActions,
  args: {
    cancelButton: { text: 'Cancel', onClick: action('cancel-clicked') },
    submitButton: { text: 'Submit', onClick: action('submit-clicked') },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/PbZuyyTRGoXBcqFm848rvy/%F0%9F%92%A0-Nuclear-Components?node-id=23732-4170&t=h5A6fpekDOhyNoYP-0',
    },
  },
} as Meta<typeof FormCardFooterActions>;

const Template: StoryFn<typeof FormCardFooterActions> = (args) => (
  <FormCardFooterActions {...args} />
);

export const Default = Template.bind({});
