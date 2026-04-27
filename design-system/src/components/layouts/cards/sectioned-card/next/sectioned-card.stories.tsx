import { action } from 'storybook/internal/actions';

import { SectionedCard } from './sectioned-card.container';

import type { Meta, StoryFn } from '@storybook/react-vite';

const headerElement = (
  <SectionedCard.Header
    title="Sectioned Card Header"
    enhancer={<SectionedCard.Avatar name="Jane Doe" />}
    actions={<SectionedCard.FileIconType fileExtension="pdf" />}
    onCollapsibleButtonClick={action('collapsible-button-click')}
    onClose={action('close-button-click')}
    iconButton
    onBackButtonClick={action('back-button-click')}
  />
);
const footerElement = (
  <SectionedCard.Footer
    actions={
      <>
        <SectionedCard.Button
          kind="neutral"
          appearance="outlined"
          onClick={action('action-1-click')}
        >
          Action 1
        </SectionedCard.Button>
        <SectionedCard.Button
          kind="brand"
          appearance="filled"
          onClick={action('action-2-click')}
        >
          Action 2
        </SectionedCard.Button>
      </>
    }
  />
);

const bodyElement = <SectionedCard.Body>test</SectionedCard.Body>;
const bodyElements = (
  <>
    <SectionedCard.Body id="tab1">tab1</SectionedCard.Body>
    <SectionedCard.Body id="tab2">tab2</SectionedCard.Body>
  </>
);

export default {
  title: 'Components/Content/SectionedCard/Next',
  component: SectionedCard,
  args: {
    title: 'Title text',
    size: 'small',
    cornerSize: 'small',
    isDraggable: true,
    isDisabled: false,
    hasBorderHeader: true,
    header: headerElement,
    body: bodyElement,
    footer: footerElement,
  },
  argTypes: {
    cornerSize: {
      control: { type: 'radio' },
      options: ['small', 'medium'],
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium'],
    },
    onBackButtonClick: {
      control: { type: 'radio' },
      options: ['undefined', 'function'],
      mapping: {
        undefined,
        function: action('back-button-click'),
      },
    },
    header: {
      control: { type: 'radio' },
      options: ['Header', 'Tabs With Body', 'Tabs With Body Key', 'Not Allowed Element'],
      mapping: {
        Header: headerElement,
        'Tabs With Body': (
          <SectionedCard.HeaderTabs
            activeKey="tab1"
            tabs={
              <>
                <SectionedCard.HeaderTab title="Tab title">BODY</SectionedCard.HeaderTab>
                <SectionedCard.HeaderTab title="Tab title">BODY 2</SectionedCard.HeaderTab>
              </>
            }
          />
        ),
        'Tabs With Body Key': (
          <SectionedCard.HeaderTabs
            defaultValue="tab1"
            tabs={
              <>
                <SectionedCard.HeaderTab
                  title="Tab title"
                  key="tab1"
                />
                <SectionedCard.HeaderTab
                  title="Tab title"
                  key="tab2"
                />
              </>
            }
          />
        ),
        'Not Allowed Element': <div>WrongElement</div>,
      },
    },
    body: {
      control: { type: 'radio' },
      options: ['Body', 'Multiple Bodies', 'Not Allowed Element'],
      mapping: {
        Body: bodyElement,
        'Multiple Bodies': bodyElements,
        'Not Allowed Element': <div>WrongElement</div>,
      },
    },
    footer: {
      control: { type: 'radio' },
      options: ['Footer', 'Not Allowed Element'],
      mapping: {
        Footer: footerElement,
        'Not Allowed Element': <div>WrongElement</div>,
      },
    },
  },
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/PbZuyyTRGoXBcqFm848rvy/%F0%9F%92%A0-Nuclear-Components?node-id=23714-452&t=AyrKSbjsa7t0i7MI-4&embed-host=design-system&page-selector=false',
    },
    docs: {
      description: {
        component: `
Sectioned Card es un componente de diseño de interfaz de usuario que organiza el contenido en secciones distintas: 
encabezado, cuerpo y pie de página. Proporciona una forma estructurada de presentar información,
facilitando a los usuarios la navegación y comprensión del contenido.
El encabezado puede incluir títulos o pestañas, el cuerpo contiene el contenido principal y
el pie de página puede contener acciones o información adicional.
        `,
      },
    },
  },
} as Meta<typeof SectionedCard>;

/** A Sectioned Card */
const Template: StoryFn<typeof SectionedCard> = (args) => {
  return (
    <SectionedCard
      dataTestId="custom-header"
      {...args}
    />
  );
};

export const Default = Template.bind({});
