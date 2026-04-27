import { HeaderTabs } from './header-tabs.container';

import type { Meta, StoryFn } from '@storybook/react-vite';

const tabElements = (
  <>
    <HeaderTabs.Tab title="Tab title">With Content</HeaderTabs.Tab>
    <HeaderTabs.Tab title="Tab title" />
    <HeaderTabs.Tab title="Tab title" />
    <HeaderTabs.Tab title="Tab title" />
  </>
);

export default {
  title: 'Components/Surfaces/Header Tabs',
  component: HeaderTabs,
  args: {
    size: 'small',
    borderRadius: 'borderSm',
    isDisabled: false,
    tabs: tabElements,
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xsmall', 'small'],
    },
    borderRadius: {
      control: { type: 'select' },
      options: ['borderSm', 'borderMd', 'borderNone'],
    },
    tabs: {
      control: { type: 'select' },
      options: ['Not Allowed Element', 'Allowed Element'],
      mapping: {
        'Not Allowed Element': <div>Not Allowed Element</div>,
        'Allowed Element': tabElements,
      },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/PbZuyyTRGoXBcqFm848rvy/%F0%9F%92%A0-Nuclear-Components?node-id=22214-20003&t=AyrKSbjsa7t0i7MI-4&embed-host=design-system&page-selector=false',
    },
    docs: {
      source: {
        code: `
import { HeaderTabs } from '@webdoxclm/design-system/header-tabs';
        
<HeaderTabs
  tabs={(
      <>
        <HeaderTabs.Tab title="Tab title">Tab content</HeaderTabs.Tab>
        <HeaderTabs.Tab title="Tab title" />
        <HeaderTabs.Tab title="Tab title" />
        <HeaderTabs.Tab title="Tab title" />
      </>
    )}
  borderRadius="borderSm"
  dataTestId="custom-header-tabs"
  size="small"
/>`,
      },
      description: {
        component: `
Pendiente

### 📋 Pendientes del Componente
- [ ] Implementar Tab next cuando esté disponible.
- [ ] Agregar descripción cuando esté disponible.
        `,
      },
    },
  },
} as Meta<typeof HeaderTabs>;

/** A HeaderTabs */
const Template: StoryFn<typeof HeaderTabs> = (args) => {
  return (
    <HeaderTabs
      dataTestId="custom-header-tabs"
      {...args}
    />
  );
};

export const Default = Template.bind({});
