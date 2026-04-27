import { noop } from '@utils/noop';

import { ProgressStep, ProgressSteps } from '..';

import type { ProgressStepsProps } from '..';
import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Content/ProgressSteps',
  component: ProgressSteps,
  args: {
    size: 'sm',
    type: 'default',
    hideText: false,
    responsiveBreakpoint: 'medium',
    'data-testid': 'design-system__progress-steps',
    stepWidth: '180px',
    onStepClick: (index: number) => alert(`Clicked index: ${index}`),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Vg0tnNQrtCYjRtTInXTcTD/Nuclear-DS-1.1-(Oficial)?node-id=4721-1058&t=BkrVm517bos4he0X-0',
    },
  },
} as Meta<typeof ProgressSteps>;

/** Default component template */
const Template: StoryFn<typeof ProgressSteps> = (args) => {
  return (
    <ProgressSteps {...args}>
      <ProgressStep
        title="Paso 1"
        kind="checked"
      />
      <ProgressStep
        title="Nombre paso 2"
        kind="warning"
      />
      <ProgressStep
        title="Nombre del paso 3"
        kind="default"
      />
      <ProgressStep
        title="Nombre del paso 4 en multiples lineas"
        kind="pending"
      />
    </ProgressSteps>
  );
};

export const Default = Template.bind({});

export const Compressed = Template.bind({});

Compressed.args = {
  type: 'compressed',
};

export const WithoutStepClickEvent = Template.bind({});

WithoutStepClickEvent.args = {
  onStepClick: undefined,
};

export const WithBreakpointEnabled = Template.bind({});

WithBreakpointEnabled.args = {
  hideText: true,
  type: 'compressed',
  onStepClick: noop as ProgressStepsProps['onStepClick'],
} as ProgressStepsProps;
