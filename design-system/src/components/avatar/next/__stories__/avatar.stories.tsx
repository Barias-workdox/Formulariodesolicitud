import type { ReactElement } from 'react';

import { Avatar } from '../avatar';
import { avatarFontSizeMap } from '../avatar.overrides';

import type { AvatarKind, AvatarAppearance } from '../avatar.interface';
import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Content/Avatar/Next',
  component: Avatar,
  args: {
    name: 'Lorem Ipsum',
    initials: 'LI',
    kind: 'users',
    appearance: 'filled',
    clickable: false,
    dataTestId: 'avatar',
  },
  argTypes: {
    kind: {
      control: {
        type: 'select',
        options: [
          'users',
          'group',
          'people',
          'companies',
          'mint',
          'cherry',
          'sunrise',
          'sweet',
          'heat',
        ],
      },
      description: 'Avatar kind that determines the color scheme',
    },
    appearance: {
      control: {
        type: 'select',
        options: ['filled', 'tonal', 'image'] as AvatarAppearance[],
      },
      description: 'Appearance style of the avatar',
    },
    size: {
      control: {
        type: 'select',
        options: ['24px', '32px', '44px'],
      },
    },
    clickable: {
      control: { type: 'boolean' },
      description: 'Makes the avatar clickable with visual feedback',
    },
    href: {
      control: { type: 'text' },
      description: 'URL to navigate to (converts avatar to link)',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler function',
    },
    dataTestId: {
      control: { type: 'text' },
      description: 'Test identifier for automated testing',
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/PbZuyyTRGoXBcqFm848rvy/%F0%9F%92%A0-Nuclear-Components?node-id=18659-20726&t=NO0Kv1IwuFYRogC3-1',
    },
  },
} as Meta<typeof Avatar>;

const Template: StoryFn<typeof Avatar> = (args) => {
  return <Avatar {...args} />;
};

// Main interactive story with controls
export const Default = Template.bind({});

export const Sizes = (): ReactElement => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
    {(['24px', '32px', '44px'] as const).map((size) => {
      return (
        <Avatar
          key={size}
          name={`Size ${size} (fontSize: ${avatarFontSizeMap[size]})`}
          initials="NM"
          size={size}
        />
      );
    })}
  </div>
);

Sizes.parameters = {
  controls: { hideNoControlsWarning: true },
  actions: { disable: false },
};

export const Appearance = (): ReactElement => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
    {(['filled', 'tonal', 'image'] as const).map((appearance) => {
      return (
        <div
          key={appearance}
          style={{ textAlign: 'center' }}
        >
          <Avatar
            name={`${appearance.charAt(0).toUpperCase() + appearance.slice(1)} Avatar`}
            initials={appearance === 'image' ? undefined : 'AA'}
            src={
              appearance === 'image' ? 'https://avatars.githubusercontent.com/u/1?v=4' : undefined
            }
            kind="users"
            appearance={appearance}
            size="44px"
          />
          <div style={{ marginTop: '8px', fontSize: '12px' }}>{appearance}</div>
        </div>
      );
    })}
  </div>
);

Appearance.parameters = {
  controls: { hideNoControlsWarning: true },
  actions: { disable: false },
};

export const Kind = (): ReactElement => {
  const kinds: { kind: AvatarKind; label: string }[] = [
    { kind: 'users', label: 'Users' },
    { kind: 'group', label: 'Group' },
    { kind: 'people', label: 'People' },
    { kind: 'companies', label: 'Companies' },
    { kind: 'mint', label: 'Mint' },
    { kind: 'cherry', label: 'Cherry' },
    { kind: 'sunrise', label: 'Sunrise' },
    { kind: 'sweet', label: 'Sweet' },
    { kind: 'heat', label: 'Heat' },
  ];

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
      {kinds.map(({ kind, label }) => (
        <div
          key={kind}
          style={{ textAlign: 'center' }}
        >
          <Avatar
            name={`${label} Avatar`}
            initials={label.charAt(0)}
            kind={kind}
            appearance="filled"
            size="44px"
          />
          <div style={{ marginTop: '8px', fontSize: '12px' }}>{label}</div>
        </div>
      ))}
    </div>
  );
};

Kind.parameters = {
  controls: { hideNoControlsWarning: true },
  actions: { disable: false },
};

export const States = (): ReactElement => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
    <div style={{ textAlign: 'center' }}>
      <Avatar
        name="Default Avatar"
        initials="DA"
        kind="users"
        appearance="filled"
        size="44px"
      />
      <div style={{ marginTop: '8px', fontSize: '12px' }}>Default</div>
    </div>

    <div style={{ textAlign: 'center' }}>
      <Avatar
        name="Focus Avatar"
        initials="FA"
        kind="group"
        appearance="filled"
        size="44px"
        clickable
        onClick={() => alert('Focused!')}
      />
      <div style={{ marginTop: '8px', fontSize: '12px' }}>Focus (Clickable)</div>
    </div>

    <div style={{ textAlign: 'center' }}>
      <Avatar
        name="Disabled Avatar"
        initials="DA"
        kind="people"
        appearance="filled"
        size="44px"
        disabled
      />
      <div style={{ marginTop: '8px', fontSize: '12px' }}>Disabled</div>
    </div>
  </div>
);

States.parameters = {
  controls: { hideNoControlsWarning: true },
  actions: { disable: false },
};

export const ClickableAvatars = (): ReactElement => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
      <div style={{ textAlign: 'center' }}>
        <Avatar
          name="Normal Avatar"
          initials="NA"
          kind="users"
          appearance="filled"
        />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Normal</div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <Avatar
          name="Clickable Avatar"
          initials="CA"
          kind="group"
          appearance="filled"
          clickable
          onClick={() => alert('Avatar clicked!')}
        />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Clickable Button</div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <Avatar
          name="Link Avatar"
          initials="LA"
          kind="people"
          appearance="filled"
          href="https://example.com"
        />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Link</div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <Avatar
          name="Link with Click"
          initials="LC"
          kind="companies"
          appearance="filled"
          href="https://example.com"
          clickable
          onClick={() => alert('Link clicked with custom action!')}
        />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Link + Click</div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <Avatar
          name="Disabled Clickable"
          initials="DC"
          kind="users"
          appearance="filled"
          clickable
          disabled
          onClick={() => alert('Should not fire!')}
        />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Disabled + Clickable</div>
      </div>
    </div>
  </div>
);

ClickableAvatars.parameters = {
  controls: { hideNoControlsWarning: true },
  actions: { disable: false },
};

export const WithOverrides = Template.bind({});

WithOverrides.args = {
  name: 'Custom Styled',
  initials: 'CS',
  overrides: {
    Initials: {
      style: {
        color: '#000000',
      },
    },
    Root: {
      style: {
        border: '2px solid #000000',
      },
    },
  },
};
