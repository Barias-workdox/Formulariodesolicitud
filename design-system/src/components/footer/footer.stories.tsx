import { Save } from '@carbon/icons-react';

import { Footer } from './footer.container';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Surfaces/Footer',
  component: Footer,
  args: {
    text: 'Como asistente IA, puedo equivocarme. Verifica siempre la información importante.',
    size: 'small',
    borderRadius: 'borderSm',
    isDisabled: false,
    fullWidthActions: false,
    actions: (
      <>
        <Footer.Button
          kind="neutral"
          appearance="outlined"
        >
          Label
        </Footer.Button>
        <Footer.Button startEnhancer={Save}>Label</Footer.Button>
      </>
    ),
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    borderRadius: {
      control: { type: 'select' },
      options: ['borderSm', 'borderMd', 'borderNone'],
    },
    slot: {
      control: { type: 'select' },
      options: ['<div>Custom Slot</div>'],
      mapping: {
        '<div>Custom Slot</div>': <div>Custom Slot</div>,
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
import { Footer } from '@webdoxclm/design-system/footer';
import { Save } from '@carbon/icons-react';
        
<Footer
  actions={(
      <>
        <Footer.Button
          kind="neutral"
          appearance="outlined"
        >
          Label
        </Footer.Button>
        <Footer.Button startEnhancer={Save}>Label</Footer.Button>
      </>
    )}
  borderRadius="borderSm"
  dataTestId="custom-footer"
  size="small"
  text="Como asistente IA, puedo equivocarme. Verifica siempre la información importante."
/>`,
      },
      description: {
        component: `
Actúa como cierre en contenedores superpuestos como modales, drawers, popovers, bottom sheets o Dynamic modals.
Su función es agrupar contenido opcional, mensajes informativos y acciones finales como botones.
        `,
      },
    },
  },
} as Meta<typeof Footer>;

/** A Footer */
const Template: StoryFn<typeof Footer> = (args) => {
  return (
    <Footer
      dataTestId="custom-footer"
      {...args}
    />
  );
};

export const Default = Template.bind({});
