import { TextFill } from '@carbon/icons-react';
import { fn } from 'storybook/internal/test';

import { Header } from './header.container';

import type { Meta, StoryFn } from '@storybook/react-vite';

const actionsGeneral = {
  control: { type: 'radio' },
  options: ['None', 'function'],
  mapping: {
    None: undefined,
    function: fn(),
  },
};

export default {
  title: 'Components/Surfaces/Header',
  component: Header,
  args: {
    title: 'Title text',
    size: 'small',
    borderRadius: 'borderSm',
    isDraggable: true,
    isDisabled: false,
    isExpanded: false,
    iconButton: true,
    onCollapsibleButtonClick: fn(),
    onClose: fn(),
    enhancer: (
      <Header.Avatar
        name="John Doe"
        aria-label="User Avatar"
      />
    ),
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xsmall', 'small', 'medium'],
    },
    onBackButtonClick: actionsGeneral,
    onClose: actionsGeneral,
    enhancer: {
      control: { type: 'radio' },
      options: [
        '<Header.BackgroundIcon />',
        '<Header.Emoji />',
        '<Header.Flag />',
        '<Header.FileIconType />',
        '<Header.Avatar />',
        '<div>WrongElement</div>',
      ],
      mapping: {
        '<Header.BackgroundIcon />': <Header.BackgroundIcon icon={TextFill} />,
        '<Header.Emoji />': (
          <Header.Emoji
            symbol="🔥"
            label="fire"
          />
        ),
        '<Header.Flag />': (
          <Header.Flag
            countryCode="CHL"
            label="Chile"
          />
        ),
        '<Header.FileIconType />': (
          <Header.FileIconType
            data-testid="header-file-icon-type"
            fileExtension="pdf"
          />
        ),
        '<Header.Avatar />': (
          <Header.Avatar
            name="John Doe"
            aria-label="User Avatar"
          />
        ),
        '<div>WrongElement</div>': <div>WrongElement</div>,
      },
    },
    actions: {
      control: { type: 'select' },
      options: ['<Header.Emoji />', '<div>WrongElement</div>'],
      mapping: {
        '<Header.Emoji />': <Header.Emoji symbol="🔥" />,
        '<div>WrongElement</div>': <div>WrongElement</div>,
      },
    },
  },
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/PbZuyyTRGoXBcqFm848rvy/%F0%9F%92%A0-Nuclear-Components?node-id=22214-16691&t=AyrKSbjsa7t0i7MI-4&embed-host=design-system&page-selector=false',
    },
    docs: {
      description: {
        component: `
Cabecera adaptable y reutilizable que entrega contexto y accesos directos en superficies 
superpuestas como modales, drawers, popovers, bottom sheets y dynamic dialogs.
Proporciona jerarquía visual con elementos clave como título, subtítulo, ícono y acciones.

### 📋 Pendientes del Componente
- [ ] Agregar soporte para logo IA
- [ ] Agregar soporte para Dropwdown
- [ ] Implementar funcionalidad de arrastrar y soltar
        `,
      },
    },
  },
} as Meta<typeof Header>;

/** A Header */
const Template: StoryFn<typeof Header> = (args) => {
  return (
    <Header
      dataTestId="custom-header"
      {...args}
    />
  );
};

export const Default = Template.bind({});
