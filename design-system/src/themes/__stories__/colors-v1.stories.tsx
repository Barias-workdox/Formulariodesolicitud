import { colorsV1 } from '../_deprecated/v1/theme-colors';

import { ColorGroup, ColorPageLayout, DeprecationBanner, extractGroup } from './stories.utils';

import type { StoryFn } from '@storybook/react-vite';

export default {
  title: 'Theme/Colors/V1 (Deprecated)',
  parameters: {
    docs: {
      description: {
        component:
          'Paleta de colores V1 (deprecated). Colores primitivos organizados por familia. No usar en código nuevo.',
      },
    },
  },
};

const FAMILIES = [
  { title: 'Background', prefix: 'bg' },
  { title: 'Monochrome', prefix: 'gray' },
  { title: 'Blue', prefix: 'blue' },
  { title: 'Success', prefix: 'success' },
  { title: 'Warning', prefix: 'warning' },
  { title: 'Error', prefix: 'error' },
  { title: 'Green', prefix: 'green' },
  { title: 'Cyan', prefix: 'cyan' },
  { title: 'Magenta', prefix: 'magenta' },
  { title: 'Yellow', prefix: 'yellow' },
  { title: 'Purple', prefix: 'purple' },
  { title: 'Steel', prefix: 'steel' },
] as const;

const Template: StoryFn = () => {
  const allColors = colorsV1 as unknown as Record<string, string>;
  const textColor = colorsV1.gray100;
  const borderColor = colorsV1.gray20;

  return (
    <ColorPageLayout>
      <DeprecationBanner version="V1" />
      <ColorGroup
        title="Special"
        colors={{ white: allColors.white, black: allColors.black, text02: allColors.text02 }}
        textColor={textColor}
        borderColor={borderColor}
      />
      {FAMILIES.map(({ title, prefix }) => {
        const group = extractGroup(allColors, prefix);

        return Object.keys(group).length > 0 ? (
          <ColorGroup
            key={prefix}
            title={title}
            colors={group}
            textColor={textColor}
            borderColor={borderColor}
          />
        ) : null;
      })}
    </ColorPageLayout>
  );
};

export const Default = Template.bind({});
