import { useState } from 'react';

import { User, UserAccess, Settings } from '@carbon/icons-react';
import { faker } from '@faker-js/faker';
import { action } from 'storybook/actions';

import { Button } from '@components/button';
import { IconButton } from '@components/button/variants/icon-button';
import { COMMON_ICON_SIZE_32 } from '@constants/common.constants';

import {
  DynamicDialog,
  DynamicDialogBody,
  DynamicDialogFooter,
  DynamicDialogHeader,
} from '../index';

import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Surfaces/DynamicDialog/next',
  component: DynamicDialog,
  args: {
    placement: 'bottomRight',
    closable: true,
    draggable: true,
    resizable: true,
  },
  argTypes: {
    placement: {
      options: ['topRight', 'topLeft', 'bottomRight', 'bottomLeft'],
      control: {
        type: 'radio',
      },
      description: 'Posición inicial del diálogo en la pantalla',
    },
    isOpen: {
      table: {
        disable: true,
      },
    },
    fullViewport: {
      control: 'boolean',
      description: 'Activa el modo viewport completo real',
    },
    closable: {
      control: 'boolean',
      description: 'Permite cerrar el diálogo',
    },
    draggable: {
      control: 'boolean',
      description: 'Permite arrastrar el diálogo',
    },
    resizable: {
      control: 'boolean',
      description: 'Permite redimensionar el diálogo',
    },
    initialWidth: {
      control: 'number',
      description: 'Ancho inicial del diálogo en píxeles',
    },
    initialHeight: {
      control: 'number',
      description: 'Alto inicial del diálogo en píxeles',
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/PbZuyyTRGoXBcqFm848rvy/%F0%9F%92%A0-Nuclear-Components?node-id=18867-269373&t=GSFTEoStHYqWPTEH-0',
    },
  },
} as Meta<typeof DynamicDialog>;

/** Diálogo básico con todas las funcionalidades */
const Template: StoryFn<typeof DynamicDialog> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Cerrar Diálogo' : 'Abrir Diálogo'}
      </Button>

      <DynamicDialog
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <DynamicDialogHeader
          title="Diálogo Dinámico Mejorado"
          description="Esta es la nueva versión mejorada del componente de diálogo dinámico"
          onBackButtonClick={() => {
            action('on-click-back-button')();
          }}
          icon={
            <IconButton
              size="32px"
              kind="control"
            >
              <UserAccess />
            </IconButton>
          }
          actions={
            <IconButton
              size="32px"
              kind="control"
            >
              <User size="16" />
            </IconButton>
          }
        />
        <DynamicDialogBody>
          <div style={{ padding: '16px 0' }}>
            <h3>Área de Contenido</h3>
            <p>{faker.lorem.paragraphs(3)}</p>
            <div style={{ marginTop: '16px' }}>
              <Button fullWidth>Botón de Acción de Ejemplo</Button>
            </div>
          </div>
        </DynamicDialogBody>
      </DynamicDialog>
    </article>
  );
};

/** Diálogo con botón de retroceso y navegación */
const WithBackButtonTemplate: StoryFn<typeof DynamicDialog> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBack, setShowBack] = useState(false);

  const handleBack = () => {
    setShowBack(false);
  };

  const handleNext = () => {
    setShowBack(true);
  };

  return (
    <article>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Cerrar Diálogo' : 'Abrir Diálogo con Navegación'}
      </Button>

      <DynamicDialog
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <DynamicDialogHeader
          title={showBack ? 'Paso 2: Detalles' : 'Paso 1: Resumen'}
          description={showBack ? 'Complete los detalles' : 'Comience con el resumen'}
          icon={<User size={COMMON_ICON_SIZE_32} />}
          onBackButtonClick={handleBack}
        />
        <DynamicDialogBody>
          <div style={{ padding: '16px 0' }}>
            {showBack ? (
              <>
                <h3>Formulario de Detalles</h3>
                <p>
                  Este es el paso 2 del proceso. Use el botón de retroceso para volver al paso 1.
                </p>
              </>
            ) : (
              <>
                <h3>Resumen</h3>
                <p>
                  Este es el paso 1 del proceso. Haga clic en Siguiente para continuar al paso 2.
                </p>
              </>
            )}
          </div>
        </DynamicDialogBody>
        <DynamicDialogFooter>
          <Button onClick={() => setIsOpen(false)}>Cancelar</Button>
          {!showBack && (
            <Button
              kind="primary"
              onClick={handleNext}
            >
              Siguiente
            </Button>
          )}
          {showBack && <Button kind="primary">Completar</Button>}
        </DynamicDialogFooter>
      </DynamicDialog>
    </article>
  );
};

/** Diálogo mínimo sin header ni footer */
const MinimalTemplate: StoryFn<typeof DynamicDialog> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Cerrar Diálogo Mínimo' : 'Abrir Diálogo Mínimo'}
      </Button>

      <DynamicDialog
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <DynamicDialogBody padding="24px">
          <div style={{ textAlign: 'center' }}>
            <User
              size="48"
              style={{ marginBottom: '16px' }}
            />
            <h2 style={{ margin: '0 0 8px 0' }}>Diálogo Mínimo</h2>
            <p style={{ margin: '0 0 24px 0', color: '#666' }}>
              Este diálogo solo usa el componente body para una apariencia limpia y mínima.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <Button onClick={() => setIsOpen(false)}>Cancelar</Button>
              <Button kind="primary">Confirmar</Button>
            </div>
          </div>
        </DynamicDialogBody>
      </DynamicDialog>
    </article>
  );
};

/** Diálogo con contenido extenso para probar el scroll */
const ScrollableContentTemplate: StoryFn<typeof DynamicDialog> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Cerrar Diálogo con Scroll' : 'Abrir Diálogo con Scroll'}
      </Button>

      <DynamicDialog
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        initialHeight={400}
      >
        <DynamicDialogHeader
          title="Contenido con Scroll"
          description="Este diálogo tiene mucho contenido para demostrar el scroll"
          icon={<User size={COMMON_ICON_SIZE_32} />}
        />
        <DynamicDialogBody>
          <div>
            {Array.from({ length: 20 }, (_, i) => (
              <div
                key={i}
                style={{ marginBottom: '16px' }}
              >
                <h4>Sección {i + 1}</h4>
                <p>{faker.lorem.paragraphs(2)}</p>
              </div>
            ))}
          </div>
        </DynamicDialogBody>
        <DynamicDialogFooter>
          <Button onClick={() => setIsOpen(false)}>Cerrar</Button>
          <Button kind="primary">Guardar</Button>
        </DynamicDialogFooter>
      </DynamicDialog>
    </article>
  );
};

// Stories para la documentación MDX

/** Story para diálogo en viewport completo */
const FullViewportStory: StoryFn<typeof DynamicDialog> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Cerrar Pantalla Completa' : 'Abrir Pantalla Completa'}
      </Button>

      <DynamicDialog
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <DynamicDialogHeader
          title="Modo Pantalla Completa"
          description="Diálogo expandido para contenido extenso"
          icon={<User size={COMMON_ICON_SIZE_32} />}
        />
        <DynamicDialogBody>
          <div style={{ padding: '16px 0' }}>
            <h3>Contenido en Pantalla Completa</h3>
            <p>Este diálogo está configurado para usar toda la pantalla disponible.</p>
            <p>Ideal para formularios largos, documentos o contenido que requiere mucho espacio.</p>
            <div style={{ marginTop: '24px' }}>
              <Button fullWidth>Acción Principal</Button>
            </div>
          </div>
        </DynamicDialogBody>
        <DynamicDialogFooter>
          <Button onClick={() => setIsOpen(false)}>Cerrar</Button>
          <Button kind="primary">Aplicar</Button>
        </DynamicDialogFooter>
      </DynamicDialog>
    </article>
  );
};

/** Story para diálogo optimizado para móvil */
const MobileStory: StoryFn<typeof DynamicDialog> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Cerrar Diálogo Móvil' : 'Abrir Diálogo Móvil'}
      </Button>

      <DynamicDialog
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <DynamicDialogHeader
          title="Diálogo Móvil"
          description="Optimizado para dispositivos móviles"
          icon={<User size={COMMON_ICON_SIZE_32} />}
        />
        <DynamicDialogBody>
          <div style={{ padding: '16px 0' }}>
            <h3>Contenido Móvil</h3>
            <p>Este diálogo está configurado con dimensiones optimizadas para móviles.</p>
            <p>Se adapta automáticamente a pantallas pequeñas.</p>
          </div>
        </DynamicDialogBody>
        <DynamicDialogFooter>
          <Button onClick={() => setIsOpen(false)}>Cancelar</Button>
          <Button kind="primary">Confirmar</Button>
        </DynamicDialogFooter>
      </DynamicDialog>
    </article>
  );
};

/** Story para header básico */
const HeaderBasicStory: StoryFn<typeof DynamicDialog> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Cerrar Header Básico' : 'Abrir Header Básico'}
      </Button>

      <DynamicDialog
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <DynamicDialogHeader
          title="User Settings"
          description="Configure your account preferences and settings"
          icon={<Settings size={COMMON_ICON_SIZE_32} />}
        />
        <DynamicDialogBody>
          <div style={{ padding: '16px 0' }}>
            <h3>Configuración de Usuario</h3>
            <p>Este es un ejemplo de header básico con título, descripción e icono.</p>
          </div>
        </DynamicDialogBody>
        <DynamicDialogFooter>
          <Button onClick={() => setIsOpen(false)}>Cancelar</Button>
          <Button kind="primary">Guardar</Button>
        </DynamicDialogFooter>
      </DynamicDialog>
    </article>
  );
};

/** Story para header con acciones y botón de retroceso */
const HeaderWithActionsStory: StoryFn<typeof DynamicDialog> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Cerrar Header con Acciones' : 'Abrir Header con Acciones'}
      </Button>

      <DynamicDialog
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <DynamicDialogHeader
          title="Edit Profile"
          description="Update your personal information"
          icon={<User size={COMMON_ICON_SIZE_32} />}
          onBackButtonClick={() => action('back-button-clicked')()}
          actions={
            <div style={{ display: 'flex', gap: '8px' }}>
              <Button size="32px">Reset</Button>
              <Button
                size="32px"
                kind="primary"
              >
                Preview
              </Button>
            </div>
          }
        />
        <DynamicDialogBody>
          <div style={{ padding: '16px 0' }}>
            <h3>Editar Perfil</h3>
            <p>Este header incluye botón de retroceso y acciones adicionales.</p>
          </div>
        </DynamicDialogBody>
        <DynamicDialogFooter>
          <Button onClick={() => setIsOpen(false)}>Cancelar</Button>
          <Button kind="primary">Guardar</Button>
        </DynamicDialogFooter>
      </DynamicDialog>
    </article>
  );
};

/** Story para header mínimo */
const HeaderMinimalStory: StoryFn<typeof DynamicDialog> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Cerrar Header Mínimo' : 'Abrir Header Mínimo'}
      </Button>

      <DynamicDialog
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <DynamicDialogHeader
          title="Simple Dialog"
          showDescription={false}
          showActions={false}
        />
        <DynamicDialogBody>
          <div style={{ padding: '16px 0' }}>
            <h3>Diálogo Simple</h3>
            <p>Este header solo muestra el título, sin descripción ni acciones.</p>
          </div>
        </DynamicDialogBody>
        <DynamicDialogFooter>
          <Button onClick={() => setIsOpen(false)}>Cerrar</Button>
          <Button kind="primary">Confirmar</Button>
        </DynamicDialogFooter>
      </DynamicDialog>
    </article>
  );
};

/** Story para body básico */
const BodyBasicStory: StoryFn<typeof DynamicDialog> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Cerrar Body Básico' : 'Abrir Body Básico'}
      </Button>

      <DynamicDialog
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <DynamicDialogHeader title="Body Básico" />
        <DynamicDialogBody>
          <div>
            <h3>Welcome to our platform</h3>
            <p>This is the main content area of the dialog.</p>
            <p>Content will automatically scroll if it exceeds the available space.</p>
            <p>
              This paragraph demonstrates how the content flows naturally within the dialog body.
            </p>
          </div>
        </DynamicDialogBody>
        <DynamicDialogFooter>
          <Button onClick={() => setIsOpen(false)}>Cerrar</Button>
        </DynamicDialogFooter>
      </DynamicDialog>
    </article>
  );
};

/** Story para body con padding personalizado */
const BodyCustomPaddingStory: StoryFn<typeof DynamicDialog> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Cerrar Body con Padding Personalizado' : 'Abrir Body con Padding Personalizado'}
      </Button>

      <DynamicDialog
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <DynamicDialogHeader title="Padding Personalizado" />
        <DynamicDialogBody padding="32px">
          <div style={{ textAlign: 'center' }}>
            <h2>Centered Content</h2>
            <p>This content uses custom padding for better spacing.</p>
            <p>The 32px padding creates a more spacious and comfortable layout.</p>
          </div>
        </DynamicDialogBody>
        <DynamicDialogFooter>
          <Button onClick={() => setIsOpen(false)}>Cerrar</Button>
        </DynamicDialogFooter>
      </DynamicDialog>
    </article>
  );
};

/** Story para body con formulario */
const BodyFormStory: StoryFn<typeof DynamicDialog> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Cerrar Body con Formulario' : 'Abrir Body con Formulario'}
      </Button>

      <DynamicDialog
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <DynamicDialogHeader title="Formulario" />
        <DynamicDialogBody padding="24px">
          <form>
            <div style={{ marginBottom: '16px' }}>
              <label
                htmlFor="name"
                style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}
              >
                Name:
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                }}
              />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label
                htmlFor="email"
                style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}
              >
                Email:
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                }}
              />
            </div>
          </form>
        </DynamicDialogBody>
        <DynamicDialogFooter>
          <Button onClick={() => setIsOpen(false)}>Cancelar</Button>
          <Button kind="primary">Guardar</Button>
        </DynamicDialogFooter>
      </DynamicDialog>
    </article>
  );
};

/** Story para footer estándar */
const FooterStandardStory: StoryFn<typeof DynamicDialog> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Cerrar Footer Estándar' : 'Abrir Footer Estándar'}
      </Button>

      <DynamicDialog
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <DynamicDialogHeader title="Footer Estándar" />
        <DynamicDialogBody>
          <div style={{ padding: '16px 0' }}>
            <h3>Contenido del Diálogo</h3>
            <p>Este diálogo muestra un footer estándar con botones de acción.</p>
          </div>
        </DynamicDialogBody>
        <DynamicDialogFooter>
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
            <Button>Cancel</Button>
            <Button kind="primary">Save Changes</Button>
          </div>
        </DynamicDialogFooter>
      </DynamicDialog>
    </article>
  );
};

/** Story para footer con múltiples grupos de acciones */
const FooterMultipleActionsStory: StoryFn<typeof DynamicDialog> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Cerrar Footer Múltiples Acciones' : 'Abrir Footer Múltiples Acciones'}
      </Button>

      <DynamicDialog
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <DynamicDialogHeader title="Footer Múltiples Acciones" />
        <DynamicDialogBody>
          <div style={{ padding: '16px 0' }}>
            <h3>Contenido del Diálogo</h3>
            <p>Este footer muestra múltiples grupos de acciones organizados.</p>
          </div>
        </DynamicDialogBody>
        <DynamicDialogFooter>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', gap: '8px' }}>
              <Button
                kind="tertiary"
                size="32px"
              >
                Help
              </Button>
              <Button
                kind="tertiary"
                size="32px"
              >
                Documentation
              </Button>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Button>Reset</Button>
              <Button kind="primary">Apply</Button>
            </div>
          </div>
        </DynamicDialogFooter>
      </DynamicDialog>
    </article>
  );
};

/** Story para footer oculto */
const FooterHiddenStory: StoryFn<typeof DynamicDialog> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Cerrar Footer Oculto' : 'Abrir Footer Oculto'}
      </Button>

      <DynamicDialog
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <DynamicDialogHeader title="Footer Oculto" />
        <DynamicDialogBody>
          <div style={{ padding: '16px 0' }}>
            <h3>Contenido del Diálogo</h3>
            <p>Este diálogo tiene un footer oculto usando la propiedad visible={false}.</p>
            <p>El footer no se mostrará aunque tenga contenido.</p>
          </div>
        </DynamicDialogBody>
        <DynamicDialogFooter visible={false}>
          <Button>This wont be visible</Button>
        </DynamicDialogFooter>
      </DynamicDialog>
    </article>
  );
};

export const Default = Template.bind({});

export const WithBackButton = WithBackButtonTemplate.bind({});

WithBackButton.args = {
  placement: 'topRight',
};

export const Minimal = MinimalTemplate.bind({});

Minimal.args = {
  initialWidth: 400,
  initialHeight: 300,
  draggable: false,
  resizable: false,
};

export const ScrollableContent = ScrollableContentTemplate.bind({});

export const NonClosable = Template.bind({});

NonClosable.args = {
  closable: false,
};

export const NonDraggable = Template.bind({});

NonDraggable.args = {
  draggable: false,
};

export const NonResizable = Template.bind({});

NonResizable.args = {
  resizable: false,
};

export const TopLeftPlacement = Template.bind({});

TopLeftPlacement.args = {
  placement: 'topLeft',
};

export const LargeDialog = Template.bind({});

LargeDialog.args = {
  initialWidth: 800,
  initialHeight: 600,
};

// Stories para la documentación MDX
export const FullViewport = FullViewportStory.bind({});

FullViewport.args = {
  fullViewport: true,
  initialWidth: 1200,
  initialHeight: 800,
};

export const Mobile = MobileStory.bind({});

Mobile.args = {
  placement: 'bottomRight',
  initialWidth: 400,
  initialHeight: 600,
};

export const HeaderBasic = HeaderBasicStory.bind({});

export const HeaderWithActions = HeaderWithActionsStory.bind({});

export const HeaderMinimal = HeaderMinimalStory.bind({});

export const BodyBasic = BodyBasicStory.bind({});

export const BodyCustomPadding = BodyCustomPaddingStory.bind({});

export const BodyForm = BodyFormStory.bind({});

export const FooterStandard = FooterStandardStory.bind({});

export const FooterMultipleActions = FooterMultipleActionsStory.bind({});

export const FooterHidden = FooterHiddenStory.bind({});
