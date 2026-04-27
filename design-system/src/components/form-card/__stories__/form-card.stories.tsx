import { action } from 'storybook/actions';

import { Text } from '@components/text';

import { FormCard } from '../form-card';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Content/FormCard',
  component: FormCard,
  args: {
    $hasElevation: true,
    $height: '100%',
    $width: '100%',
    title: 'Title',
    navActions: (
      <FormCard.StepActions
        currentStep={1}
        totalSteps={10}
        tagLabel="Tag Label"
        actionButton={{ text: 'Button Label', onClick: action('step-action-clicked') }}
      />
    ),
    headerInfo: (
      <Text
        variant="body"
        margin={0}
      >
        Header Info
      </Text>
    ),
    headerTitle: 'Title',
    headerSubtitle: 'Subtitle',
    children: (
      <Text
        variant="body"
        margin={0}
      >
        This is the main content area of the FormCard. You can place form fields, text, or other
        components here.
      </Text>
    ),
    footerLabel: 'Label',
    footerText: 'Footer text',
    footerInfo: (
      <Text
        variant="body"
        margin={0}
      >
        Footer Info
      </Text>
    ),
    footerActions: (
      <FormCard.FooterActions
        cancelButton={{ text: 'Cancel', onClick: action('cancel-clicked') }}
        submitButton={{ text: 'Submit', onClick: action('submit-clicked') }}
      />
    ),
    onBack: action('back-clicked'),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/PbZuyyTRGoXBcqFm848rvy/%F0%9F%92%A0-Nuclear-Components?node-id=23732-4170&t=h5A6fpekDOhyNoYP-0',
    },
  },
} as Meta<typeof FormCard>;

const Template: StoryFn<typeof FormCard> = (args) => (
  <div
    style={{
      padding: '16px',
      height: '80vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <FormCard {...args} />
  </div>
);

export const Default = Template.bind({});

export const FooterHidden = Template.bind({});

FooterHidden.args = {
  footerInfo: undefined,
  footerLabel: undefined,
  footerText: undefined,
  footerActions: undefined,
};
