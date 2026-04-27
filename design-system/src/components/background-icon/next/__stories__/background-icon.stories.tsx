import { Chat, Notification, WarningAlt } from '@carbon/icons-react';

import { COMMON_HEIGHT_24, COMMON_HEIGHT_32, COMMON_HEIGHT_44 } from '@constants/common.constants';

import { BackgroundIcon } from '../background-icon';

import type { BackgroundIconProps } from '../background-icon.interfaces';
import type { Meta, StoryObj } from '@storybook/react-vite';

/** Renders the BackgroundIcon component with a label */
const Example = (props: BackgroundIconProps & { label: string }) => {
  const { label, ...backgroundIconProps } = props;

  return (
    <div style={{ textAlign: 'center' }}>
      <BackgroundIcon {...backgroundIconProps} />
      <div style={{ fontSize: '12px', marginTop: '8px' }}>{label}</div>
    </div>
  );
};

/** Available sizes for the BackgroundIcon */
const SIZES = [COMMON_HEIGHT_24, COMMON_HEIGHT_32, COMMON_HEIGHT_44] as const;

/** All semantic kinds with their corresponding icons and labels */
const KINDS = [
  { label: 'Brand', kind: 'brand' as const, icon: Chat },
  { label: 'Neutral', kind: 'neutral' as const, icon: Chat },
  { label: 'Positive', kind: 'positive' as const, icon: Chat },
  { label: 'Negative', kind: 'negative' as const, icon: WarningAlt },
  { label: 'Warning', kind: 'warning' as const, icon: WarningAlt },
  { label: 'Peace', kind: 'peace' as const, icon: Chat },
  { label: 'Power', kind: 'power' as const, icon: Chat },
  { label: 'Sweet', kind: 'sweet' as const, icon: Chat },
  { label: 'Heat', kind: 'heat' as const, icon: Chat },
];

const meta: Meta<typeof BackgroundIcon> = {
  title: 'Components/Content/BackgroundIcon/next',
  component: BackgroundIcon,
  tags: ['autodocs'],
  args: {
    icon: Chat,
    size: COMMON_HEIGHT_32,
    kind: 'brand',
    appearance: 'filled',
    shape: 'round',
    disabled: false,
  },
  argTypes: {
    icon: {
      description: 'The Carbon icon component to render (from Carbon icons library)',
      control: false,
    },
    size: {
      description: 'Size of the container',
      control: 'radio',
      options: [COMMON_HEIGHT_24, COMMON_HEIGHT_32, COMMON_HEIGHT_44],
      table: {
        type: { summary: 'BackgroundIconSize' },
        defaultValue: { summary: COMMON_HEIGHT_32 },
      },
    },
    kind: {
      description: 'Semantic color kind',
      control: 'select',
      options: [
        'brand',
        'neutral',
        'positive',
        'negative',
        'warning',
        'peace',
        'power',
        'sweet',
        'heat',
      ],
      table: {
        type: { summary: 'BackgroundIconKind' },
        defaultValue: { summary: 'brand' },
      },
    },
    appearance: {
      description: 'Visual appearance variant',
      control: 'radio',
      options: ['filled', 'tonal'],
      table: {
        type: { summary: 'BackgroundIconAppearance' },
        defaultValue: { summary: 'filled' },
      },
    },
    shape: {
      description: 'Shape of the container',
      control: 'radio',
      options: ['round', 'square'],
      table: {
        type: { summary: 'BackgroundIconShape' },
        defaultValue: { summary: 'round' },
      },
    },
    disabled: {
      description: 'Whether the component is disabled',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    badge: {
      description: 'Badge configuration (only for brand and neutral kinds)',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A decorative component that displays a Carbon icon within a colored background container. Supports multiple sizes, semantic colors, and optional badge indicators.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BackgroundIcon>;

/**
 * Default background icon with brand colors
 */
export const Default: Story = {};

/**
 * All available sizes: 24px, 32px, and 44px
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      {SIZES.map((size) => (
        <BackgroundIcon
          key={size}
          icon={Chat}
          size={size}
          kind="brand"
        />
      ))}
    </div>
  ),
};

/**
 * All semantic color kinds with filled appearance
 */
export const AllKindsFilled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      {KINDS.map(({ kind, icon, label }) => (
        <Example
          key={kind}
          icon={icon}
          kind={kind}
          appearance="filled"
          label={label}
        />
      ))}
    </div>
  ),
};

/**
 * All semantic color kinds with tonal appearance
 */
export const AllKindsTonal: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      {KINDS.map(({ kind, icon, label }) => (
        <Example
          key={kind}
          icon={icon}
          kind={kind}
          appearance="tonal"
          label={label}
        />
      ))}
    </div>
  ),
};

/**
 * Comparison between filled and tonal appearances
 */
export const FilledVsTonal: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
      <Example
        icon={Chat}
        kind="brand"
        appearance="filled"
        size="44px"
        label="Filled"
      />
      <Example
        icon={Chat}
        kind="brand"
        appearance="tonal"
        size="44px"
        label="Tonal"
      />
    </div>
  ),
};

/**
 * Round vs square shapes
 */
export const Shapes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
      <Example
        icon={Chat}
        kind="brand"
        shape="round"
        size="44px"
        label="Round"
      />
      <Example
        icon={Chat}
        kind="brand"
        shape="square"
        size="44px"
        label="Square"
      />
    </div>
  ),
};

/**
 * Badge with dot indicator (brand and neutral only)
 */
export const WithBadgeDot: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
      <Example
        icon={Notification}
        kind="brand"
        badge={true}
        size="44px"
        label="Brand with Badge"
      />
      <Example
        icon={Notification}
        kind="neutral"
        badge={true}
        size="44px"
        label="Neutral with Badge"
      />
      <Example
        icon={Notification}
        kind="positive"
        badge={true}
        size="44px"
        label={`Positive\n(no badge support)`}
      />
    </div>
  ),
};
