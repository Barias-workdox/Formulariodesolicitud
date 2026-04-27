import { action } from 'storybook/actions';

import { LanguageSelector } from './language-selector';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LanguageSelector> = {
  title: 'Components/Navigation/AccountMenu/LanguageSelector',
  component: LanguageSelector,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onLanguageChange: {
      description: 'Callback function called when a language is selected',
    },
  },
};

export default meta;
type Story = StoryObj<typeof LanguageSelector>;

export const Default: Story = {
  render: (args) => (
    <div style={{ padding: '20px', width: '300px', backgroundColor: '#f5f5f5' }}>
      <LanguageSelector {...args} />
    </div>
  ),
  args: {
    'data-testid': 'language-selector',
    onLanguageChange: action('language-changed'),
  },
};

export const WithCustomCallback: Story = {
  render: (args) => (
    <div style={{ padding: '20px', width: '300px', backgroundColor: '#f5f5f5' }}>
      <LanguageSelector {...args} />
    </div>
  ),
  args: {
    'data-testid': 'language-selector-custom',
    onLanguageChange: (selectedLocale) => {
      action('language-changed')(selectedLocale);
      console.log(`Language changed to: ${selectedLocale}`);
    },
  },
};
