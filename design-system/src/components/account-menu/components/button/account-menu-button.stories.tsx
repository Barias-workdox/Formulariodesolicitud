import { User, Logout, ChevronRight, Settings } from '@carbon/icons-react';
import { action } from 'storybook/actions';

import { AccountMenuButton } from './account-menu-button';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AccountMenuButton> = {
  title: 'Components/Navigation/AccountMenu/AccountMenuButton',
  component: AccountMenuButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['small', 'large'],
      description: 'The variant size of the button',
    },
    isActive: {
      control: 'boolean',
      description: 'Whether the button is currently active',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AccountMenuButton>;

export const Default: Story = {
  render: (args) => (
    <div style={{ padding: '20px', width: '300px' }}>
      <AccountMenuButton {...args} />
    </div>
  ),
  args: {
    startEnhancer: User,
    text: 'Mi perfil',
    onClick: action('button-clicked'),
  },
};

export const WithEndEnhancer: Story = {
  render: (args) => (
    <div style={{ padding: '20px', width: '300px' }}>
      <AccountMenuButton {...args} />
    </div>
  ),
  args: {
    startEnhancer: Settings,
    text: 'Configuración',
    endEnhancer: ChevronRight,
    onClick: action('button-clicked'),
  },
};

export const WithReactElementIcon: Story = {
  render: (args) => (
    <div style={{ padding: '20px', width: '300px' }}>
      <AccountMenuButton {...args} />
    </div>
  ),
  args: {
    startEnhancer: (
      <div
        style={{ width: '24px', height: '24px', backgroundColor: '#0070f3', borderRadius: '4px' }}
      />
    ),
    text: 'Custom Icon',
    onClick: action('button-clicked'),
  },
};

export const WithReactElementEndEnhancer: Story = {
  render: (args) => (
    <div style={{ padding: '20px', width: '300px' }}>
      <AccountMenuButton {...args} />
    </div>
  ),
  args: {
    startEnhancer: Logout,
    text: 'Cerrar sesión',
    endEnhancer: (
      <div
        style={{ width: '16px', height: '16px', backgroundColor: '#ff4444', borderRadius: '50%' }}
      />
    ),
    onClick: action('button-clicked'),
  },
};

export const Active: Story = {
  render: (args) => (
    <div style={{ padding: '20px', width: '300px' }}>
      <AccountMenuButton {...args} />
    </div>
  ),
  args: {
    startEnhancer: User,
    text: 'Mi perfil',
    isActive: true,
    onClick: action('button-clicked'),
  },
};

export const Disabled: Story = {
  render: (args) => (
    <div style={{ padding: '20px', width: '300px' }}>
      <AccountMenuButton {...args} />
    </div>
  ),
  args: {
    startEnhancer: Settings,
    text: 'Configuración',
    isDisabled: true,
    onClick: action('button-clicked'),
  },
};

export const SmallVariant: Story = {
  render: (args) => (
    <div style={{ padding: '20px', width: '300px' }}>
      <AccountMenuButton {...args} />
    </div>
  ),
  args: {
    startEnhancer: User,
    text: 'Mi perfil',
    variant: 'small',
    onClick: action('button-clicked'),
  },
};
