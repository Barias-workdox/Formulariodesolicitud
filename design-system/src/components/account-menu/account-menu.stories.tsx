import type { ReactElement } from 'react';
import { useState } from 'react';

import { User, Logout, CloudAuditing, Switcher } from '@carbon/icons-react';
import { action } from 'storybook/actions';

import { AccountMenu } from './account-menu';

import type { AccountMenuProps } from './account-menu.interfaces';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof AccountMenu> = {
  title: 'Components/Navigation/AccountMenu',
  component: AccountMenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Accessibility Features

This component implements WCAG 2.1 AA accessibility guidelines:

### Keyboard Navigation
- **Tab**: Navigate between menu items
- **Enter/Space**: Activate menu items or open submenus
- **Escape**: Close menus
- **Arrow Keys**: Navigate within language selector options

### Screen Reader Support
- Proper ARIA attributes (aria-haspopup, aria-expanded, aria-controls)
- Semantic HTML structure with appropriate roles
- Descriptive labels for all interactive elements
- Announcements for menu state changes

### Focus Management
- Automatic focus management when menus open/close
- Focus trapping within menu boundaries
- Logical tab order

### Usage Examples
\`\`\`tsx
// Basic usage with accessibility labels
<AccountMenu
  data-testid="account-menu"
  user={user}
  actions={actions}
  triggerAriaLabel="Open account menu for John Doe"
  menuAriaLabel="Account menu with profile and settings options"
/>

// Controlled component with custom callbacks
<AccountMenu
  data-testid="account-menu-controlled"
  user={user}
  actions={actions}
  isOpen={isMenuOpen}
  onOpen={() => setIsMenuOpen(true)}
  onClose={() => setIsMenuOpen(false)}
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    triggerAriaLabel: {
      control: 'text',
      description: 'Accessibility label for the trigger button',
    },
    menuAriaLabel: {
      control: 'text',
      description: 'Accessibility label for the menu container',
    },
    isOpen: {
      control: 'boolean',
      description: 'Whether the menu is open (controlled mode)',
    },
    showLanguageSelector: {
      control: 'boolean',
      description: 'Whether to show the language selector',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AccountMenu>;

export const Default: Story = {
  render: (args) => (
    <div style={{ padding: '100px', display: 'flex', justifyContent: 'center' }}>
      <AccountMenu {...args} />
    </div>
  ),
  args: {
    'data-testid': 'account-menu',
    user: {
      name: 'Maximiliano Valenzuela',
      role: 'Admin',
      company: 'Siegfried Rhein Capacitaciones',
    },
    actions: [
      {
        id: 'profile',
        label: 'Mi perfil',
        icon: User,
        onClick: action('profile-clicked'),
        ariaLabel: 'Open my profile settings',
      },
      {
        id: 'audit',
        label: 'Auditorías',
        icon: CloudAuditing,
        onClick: action('audit-clicked'),
        ariaLabel: 'View audit logs and reports',
      },
      {
        id: 'switch',
        label: 'Cambiar de cuenta',
        icon: Switcher,
        onClick: action('switch-account-clicked'),
        ariaLabel: 'Switch to a different account',
      },
      {
        id: 'logout',
        label: 'Cerrar sesión',
        icon: Logout,
        onClick: action('logout-clicked'),
        ariaLabel: 'Sign out of the application',
      },
    ],
    showLanguageSelector: true,
    onLanguageChange: action('language-changed'),
    triggerAriaLabel: 'Open account menu for Maximiliano Valenzuela',
    menuAriaLabel: 'Account menu with profile, audit, account switching, and logout options',
  },
};

export const WithoutLanguageSelector: Story = {
  render: (args) => (
    <div style={{ padding: '100px', display: 'flex', justifyContent: 'center' }}>
      <AccountMenu {...args} />
    </div>
  ),
  args: {
    'data-testid': 'account-menu-no-language',
    user: {
      name: 'Maximiliano Valenzuela',
      role: 'Admin',
      company: 'Siegfried Rhein Capacitaciones',
    },
    actions: [
      {
        id: 'profile',
        label: 'Mi perfil',
        icon: User,
        onClick: action('profile-clicked'),
        ariaLabel: 'Open my profile settings',
      },
      {
        id: 'logout',
        label: 'Cerrar sesión',
        icon: Logout,
        onClick: action('logout-clicked'),
        ariaLabel: 'Sign out of the application',
      },
    ],
    showLanguageSelector: false,
    triggerAriaLabel: 'Open account menu for Maximiliano Valenzuela',
    menuAriaLabel: 'Account menu with profile and logout options',
  },
};

const ControlledComponentRender = (args: AccountMenuProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: '100px', display: 'flex', justifyContent: 'center' }}>
      <AccountMenu
        {...args}
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export const ControlledComponent: Story = {
  render: ControlledComponentRender,
  args: {
    'data-testid': 'account-menu-controlled',
    user: {
      name: 'Maximiliano Valenzuela',
      role: 'Admin',
      company: 'Siegfried Rhein Capacitaciones',
    },
    actions: [
      {
        id: 'profile',
        label: 'Mi perfil',
        icon: User,
        onClick: action('profile-clicked'),
        ariaLabel: 'Open my profile settings',
      },
      {
        id: 'logout',
        label: 'Cerrar sesión',
        icon: Logout,
        onClick: action('logout-clicked'),
        ariaLabel: 'Sign out of the application',
      },
    ],
    showLanguageSelector: true,
    onLanguageChange: action('language-changed'),
    triggerAriaLabel: 'Open account menu for Maximiliano Valenzuela',
    menuAriaLabel: 'Account menu with profile, language selection, and logout options',
  },
};

export const WithDisabledActions: Story = {
  render: (args) => (
    <div style={{ padding: '100px', display: 'flex', justifyContent: 'center' }}>
      <AccountMenu {...args} />
    </div>
  ),
  args: {
    'data-testid': 'account-menu-disabled',
    user: {
      name: 'Maximiliano Valenzuela',
      role: 'Admin',
      company: 'Siegfried Rhein Capacitaciones',
    },
    actions: [
      {
        id: 'profile',
        label: 'Mi perfil',
        icon: User,
        onClick: action('profile-clicked'),
        ariaLabel: 'Open my profile settings',
      },
      {
        id: 'audit',
        label: 'Auditorías',
        icon: CloudAuditing,
        onClick: action('audit-clicked'),
        disabled: true,
        ariaLabel: 'View audit logs and reports (currently unavailable)',
      },
      {
        id: 'logout',
        label: 'Cerrar sesión',
        icon: Logout,
        onClick: action('logout-clicked'),
        ariaLabel: 'Sign out of the application',
      },
    ],
    showLanguageSelector: true,
    onLanguageChange: action('language-changed'),
    triggerAriaLabel: 'Open account menu for Maximiliano Valenzuela',
    menuAriaLabel: 'Account menu with profile, audit (disabled), and logout options',
  },
};
