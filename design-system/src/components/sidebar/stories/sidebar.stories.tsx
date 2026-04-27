import * as React from 'react';

import {
  AddComment,
  ChartLineData,
  ChartNetwork,
  CheckboxChecked,
  CloudAuditing,
  CloseOutline,
  Folder,
  Help,
  Home,
  Hourglass,
  Launch,
  Layers,
  LogoGithub,
  Logout,
  NetworkEnterprise,
  Pen,
  Settings,
  Task,
  UserAvatar,
} from '@carbon/icons-react';
import { action } from 'storybook/actions';

import { AccountMenu } from '@components/account-menu';
import { Text } from '@components/text';

import { Sidebar, SidebarProvider, SidebarHeader, SidebarLink, useSidebar } from '../';
import { ReactComponent as IsotypeLogo } from '../../../../public/v3/ui/isotype.svg';

import type { Meta, StoryObj } from '@storybook/react-vite';

const statusItems = [
  { Icon: Hourglass, text: 'Pendientes', counter: 33 },
  { Icon: Help, text: 'En consulta', counter: 21 },
  { Icon: Task, text: 'Pendiente de aprobación', counter: 6 },
  { Icon: Pen, text: 'Pendiente de firma', counter: 14 },
  { Icon: CheckboxChecked, text: 'Completado', counter: 3 },
  { Icon: CloseOutline, text: 'Cancelado', counter: 1221 },
].map((item) => ({
  href: `/#${encodeURIComponent(item.text)}`,
  ...item,
}));

const HeaderContentWithTrigger = () => {
  const { isCollapsed } = useSidebar();

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
      <IsotypeLogo
        width="32px"
        height="32px"
      />
      {!isCollapsed && (
        <Text
          variant="bodySmall"
          margin={0}
        >
          Webdox
        </Text>
      )}
    </div>
  );
};

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Navigation/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story: React.ComponentType): React.ReactElement => (
      <div style={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden' }}>
        <Story />
        <div style={{ flex: 1, overflowY: 'scroll', padding: '1rem' }}>
          <h1 style={{ marginBottom: '20px' }}>Contenido Principal de la Aplicación</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  render: (args) => (
    <SidebarProvider defaultCollapsed={false}>
      <Sidebar {...args}>
        <SidebarHeader>
          <HeaderContentWithTrigger />
        </SidebarHeader>
        <Sidebar.Content>
          <SidebarLink
            href="/dashboard"
            Icon={Home}
            text="Inicio"
            isActive
          />
          <SidebarLink
            href="/repository"
            Icon={Folder}
            text="Repositorio"
          />

          <SidebarLink
            href="/requests"
            Icon={AddComment}
            text="Solicitudes"
          />
          <SidebarLink
            href="/workflows"
            Icon={ChartNetwork}
            text="Workflows"
            subLinks={statusItems}
          />
          <SidebarLink
            href="/signatures"
            Icon={Pen}
            text="Por firmar"
          />
          <SidebarLink
            href="/mass-signatures"
            Icon={Layers}
            text="Firma masiva"
          />
          <SidebarLink
            href="/reports"
            Icon={ChartLineData}
            text="Reportes"
          />
          {/* Ejemplo de enlace externo */}
          <SidebarLink
            href="https://github.com/webdox"
            Icon={LogoGithub}
            text="GitHub"
            isExternal
          />
        </Sidebar.Content>
        <Sidebar.Footer>
          <SidebarLink
            href="/help"
            Icon={Help}
            text="Ayuda"
          />
          <SidebarLink
            href="/settings"
            Icon={Settings}
            text="Configuraciones"
          />
          {/* Ejemplo de enlace externo en el footer */}
          <SidebarLink
            href="https://www.webdoxclm.com/"
            Icon={Launch}
            text="Documentación"
            isExternal
          />
          <AccountMenu
            onLanguageChange={(languageSelected) => action(`language-changed: ${languageSelected}`)}
            showTriggerTooltip={false}
            user={{
              name: 'Maximiliano Valenzuela',
              role: 'Admin',
              company: 'Siegfried Rhein Capacitaciones',
            }}
            actions={[
              {
                id: 'profile',
                label: 'Mi perfil',
                icon: UserAvatar,
                onClick: action('profile-clicked'),
              },
              {
                id: 'audit',
                label: 'Auditorías',
                icon: CloudAuditing,
                onClick: action('audit-clicked'),
              },
              {
                id: 'switch',
                label: 'Cambiar de cuenta',
                icon: NetworkEnterprise,
                onClick: action('switch-account-clicked'),
              },
              {
                id: 'logout',
                label: 'Cerrar sesión',
                icon: Logout,
                onClick: action('logout-clicked'),
              },
            ]}
          />
        </Sidebar.Footer>
      </Sidebar>
    </SidebarProvider>
  ),
};

export const WithExternalLinks: Story = {
  render: (args) => (
    <SidebarProvider defaultCollapsed={false}>
      <Sidebar {...args}>
        <SidebarHeader>
          <HeaderContentWithTrigger />
        </SidebarHeader>
        <Sidebar.Content>
          <SidebarLink
            href="/dashboard"
            Icon={Home}
            text="Inicio"
            isActive
          />
          <SidebarLink
            href="/profile"
            Icon={Folder}
            text="Repositorio"
          />
          {/* Enlaces externos en el contenido */}
          <SidebarLink
            href="https://www.webdoxclm.com/"
            Icon={Launch}
            text="Documentación"
            isExternal
          />
          <SidebarLink
            href="https://www.webdoxclm.com/"
            Icon={Help}
            text="Soporte"
            isExternal
          />
        </Sidebar.Content>
        <Sidebar.Footer>
          <SidebarLink
            href="/settings"
            Icon={Settings}
            text="Configuraciones"
          />
          {/* Enlace externo en el footer */}
          <SidebarLink
            href="https://www.webdoxclm.com/"
            Icon={Launch}
            text="Sitio Web"
            isExternal
          />
          <AccountMenu
            user={{
              name: 'Maximiliano Valenzuela',
              role: 'Admin',
              company: 'Siegfried Rhein Capacitaciones',
            }}
            actions={[
              {
                id: 'profile',
                label: 'Mi perfil',
                icon: UserAvatar,
                onClick: action('profile-clicked'),
              },
              {
                id: 'audit',
                label: 'Auditorías',
                icon: CloudAuditing,
                onClick: action('audit-clicked'),
              },
              {
                id: 'switch',
                label: 'Cambiar de cuenta',
                icon: NetworkEnterprise,
                onClick: action('switch-account-clicked'),
              },
              {
                id: 'logout',
                label: 'Cerrar sesión',
                icon: Logout,
                onClick: action('logout-clicked'),
              },
            ]}
          />
        </Sidebar.Footer>
      </Sidebar>
    </SidebarProvider>
  ),
};
