import React from '@storybook/react-vite';

import { capitalize } from './text.utils';

import type { Meta, StoryFn } from '@storybook/react-vite';

const meta: Meta = {
  title: 'Utils/Text',
  args: {
    text: 'lorem ipsum dolor sit amet',
  },
};

const CapitalizeTemplate: StoryFn = ({ text }) => {
  return <div>{capitalize(text)}</div>;
};

/**
 * Capitalizes the first letter of a string.
 */
export const Capitalize = CapitalizeTemplate.bind({});

export default meta;
