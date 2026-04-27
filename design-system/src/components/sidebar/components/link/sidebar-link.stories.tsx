import type { ReactElement } from 'react';

import {
  CheckboxChecked,
  CloseOutline,
  Document,
  Help,
  Home,
  Hourglass,
  Pen,
  Settings,
  Task,
} from '@carbon/icons-react';

import { SidebarProvider } from '@components/sidebar/sidebar.provider';

import { SidebarLink } from './sidebar-link';

import type { SidebarLinkProps } from './sidebar-link.interfaces';
import type { Meta, StoryObj } from '@storybook/react-vite';

/** Story-only args for WithTextAlwaysVisible (isCollapsed and sublinksOption) */
type WithTextAlwaysVisibleArgs = SidebarLinkProps & {
  isCollapsed?: boolean;
  sublinksOption?: 'none' | 'withSublinks';
};

/** Story type for WithTextAlwaysVisible: same as Story but allows extended args (isCollapsed, sublinksOption) for render. */
type WithTextAlwaysVisibleStory = Omit<StoryObj<typeof SidebarLink>, 'args'> & {
  args?: Partial<WithTextAlwaysVisibleArgs>;
  argTypes?: Record<string, unknown>;
};

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

const meta: Meta<typeof SidebarLink> = {
  title: 'Components/Navigation/SidebarLink',
  component: SidebarLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story: () => ReactElement): ReactElement => (
      <SidebarProvider>
        <Story />
      </SidebarProvider>
    ),
  ],
  argTypes: {
    href: {
      control: 'text',
      description: 'The URL to navigate to',
    },
    text: {
      control: 'text',
      description: 'The text to display next to the icon/avatar',
    },
    isActive: {
      control: 'boolean',
      description: 'Controls whether the link is in active state',
    },
    isAvatar: {
      control: 'boolean',
      description: 'Controls whether to show an avatar instead of an icon',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Controls whether the link is disabled',
    },
    isExternal: {
      control: 'boolean',
      description: 'Whether the link opens in a new tab',
    },
    variant: {
      control: 'select',
      options: ['small', 'large'],
      description: 'Controls the size variant of the sidebar link',
    },
    hideTextWhenCollapsed: {
      control: 'boolean',
      description:
        'When true (default), the text is hidden when the sidebar is collapsed. When false, the text is always shown next to the icon regardless of collapse state.',
    },
    Icon: { control: false },
    counter: { control: false },
    subLinks: { control: false },
    onClick: { control: false },
    onKeyDown: { control: false },
    ariaLabel: { control: false },
    tabIndex: { control: false },
    role: { control: false },
    dataRole: { control: false },
    ariaHasPopup: { control: false },
    ariaExpanded: { control: false },
    ariaControls: { control: false },
    ariaSelected: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof SidebarLink>;

export const Default: Story = {
  args: {
    href: '/dashboard',
    Icon: Home,
    text: 'Dashboard',
    isActive: false,
    isAvatar: false,
    variant: 'large',
  },
};

export const NavigationExample: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <SidebarProvider>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <SidebarLink
          href="/dashboard"
          Icon={Home}
          text="Dashboard"
          isActive={true}
          isAvatar={false}
          variant="large"
        />
        <SidebarLink
          href="/documents"
          Icon={Document}
          text="Documents"
          isActive={false}
          isAvatar={false}
          variant="small"
        />
        <SidebarLink
          href="/profile"
          text="John Doe"
          isActive={false}
          isAvatar={true}
          variant="large"
        />
        <SidebarLink
          href="/settings"
          Icon={Settings}
          text="Settings"
          isActive={false}
          isAvatar={false}
          variant="small"
        />
      </div>
    </SidebarProvider>
  ),
};

export const WithSubLinks: Story = {
  parameters: {
    controls: { include: ['isActive', 'variant', 'hideTextWhenCollapsed'] },
  },
  args: {
    href: '/status',
    Icon: Task,
    text: 'Workflows',
    isActive: false,
    isAvatar: false,
    variant: 'large',
    subLinks: statusItems,
  },
};

/**
 * Sidebar collapsed but text always visible. When hideTextWhenCollapsed is false,
 * the link text remains visible next to the icon even when the sidebar is collapsed.
 * Use controls to toggle isCollapsed and subLinks and compare tooltip/chevron behavior.
 */
export const WithTextAlwaysVisible: WithTextAlwaysVisibleStory = {
  parameters: {
    controls: {
      include: ['text', 'variant', 'hideTextWhenCollapsed', 'isCollapsed', 'sublinksOption'],
    },
  },
  argTypes: {
    isCollapsed: {
      control: 'boolean',
      description: 'Simulates sidebar collapsed state (SidebarProvider defaultCollapsed).',
    },
    sublinksOption: {
      control: 'select',
      options: ['none', 'withSublinks'],
      description: 'Whether the link has sublinks (affects chevron and tooltip behavior).',
    },
  },
  args: {
    href: '/dashboard',
    Icon: Home,
    text: 'Dashboard',
    isActive: false,
    isAvatar: false,
    variant: 'large',
    hideTextWhenCollapsed: false,
    isCollapsed: true,
    sublinksOption: 'none',
  },
  render: (args: Partial<WithTextAlwaysVisibleArgs>) => {
    const { isCollapsed, sublinksOption, ...linkArgs } = args;

    return (
      <SidebarProvider
        key={String(isCollapsed)}
        defaultCollapsed={isCollapsed}
      >
        <SidebarLink
          {...(linkArgs as SidebarLinkProps)}
          subLinks={sublinksOption === 'withSublinks' ? statusItems : undefined}
        />
      </SidebarProvider>
    );
  },
};
