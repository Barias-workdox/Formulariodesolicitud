import type { ReactElement } from 'react';

import { Avatar } from '../avatar';
import { avatarFontSizeMap } from '../avatar.overrides';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Content/Avatar',
  component: Avatar,
  args: {
    name: 'Lorem Ipsum',
    disabled: false,
    showTooltip: true,
  },
  argTypes: {
    backgroundColor: {
      control: { type: 'select' },
      options: [
        'brandSubdued',
        'brandSubtle',
        'powerSubdued',
        'powerSubtle',
        'peaceSubtle',
        'neutral',
        'neutralSubtle',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['24px', '32px', '40px'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    showTooltip: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Vg0tnNQrtCYjRtTInXTcTD/Nuclear-Design-System?node-id=4721-1059&t=NsGb5J3eEOXxArxU-1',
    },
  },
} as Meta<typeof Avatar>;

/** An Avatar */
const Template: StoryFn<typeof Avatar> = (args) => {
  return <Avatar {...args} />;
};

export const Default = Template.bind({});

export const WithInitials = Template.bind({});

WithInitials.args = {
  name: 'John Doe',
  initials: 'JD',
};

export const WithImage = Template.bind({});

WithImage.args = {
  name: 'Jane Smith',
  src: 'https://avatars.githubusercontent.com/u/1?v=4',
};

export const Disabled = Template.bind({});

Disabled.args = {
  name: 'Disabled User',
  initials: 'DU',
  disabled: true,
};

export const WithoutTooltip = Template.bind({});

WithoutTooltip.args = {
  name: 'No Tooltip',
  initials: 'NT',
  showTooltip: false,
};

export const Sizes = (): ReactElement => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
    {(['24px', '32px', '40px'] as const).map((size) => {
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

export const BackgroundColors = (): ReactElement => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
    <Avatar
      name="Brand Subdued"
      initials="BS"
      backgroundColor="brandSubdued"
    />
    <Avatar
      name="Brand Subtle"
      initials="BS"
      backgroundColor="brandSubtle"
    />
    <Avatar
      name="Power Subdued"
      initials="PS"
      backgroundColor="powerSubdued"
    />
    <Avatar
      name="Power Subtle"
      initials="PS"
      backgroundColor="powerSubtle"
    />
    <Avatar
      name="Peace Subtle"
      initials="PS"
      backgroundColor="peaceSubtle"
    />
    <Avatar
      name="Neutral"
      initials="N"
      backgroundColor="neutral"
    />
    <Avatar
      name="Neutral Subtle"
      initials="NS"
      backgroundColor="neutralSubtle"
    />
  </div>
);

export const States = (): ReactElement => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
    <div style={{ textAlign: 'center' }}>
      <Avatar
        name="Normal State"
        initials="NS"
      />
      <div style={{ marginTop: '8px', fontSize: '12px' }}>Normal</div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <Avatar
        name="Disabled State"
        initials="DS"
        disabled
      />
      <div style={{ marginTop: '8px', fontSize: '12px' }}>Disabled</div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <Avatar
        name="No Tooltip"
        initials="NT"
        showTooltip={false}
      />
      <div style={{ marginTop: '8px', fontSize: '12px' }}>No Tooltip</div>
    </div>
  </div>
);

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
