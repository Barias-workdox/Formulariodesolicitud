import {
  bgColors,
  borderColors,
  iconColors,
  textColors,
} from '../_deprecated/v2/light-theme/light-theme.colors';
import { colorsNext } from '../_deprecated/v2/tokens/colors';

import {
  ColorGroup,
  ColorPageLayout,
  DeprecationBanner,
  PRIMITIVE_FAMILIES,
  extractGroup,
} from './stories.utils';

import type { StoryFn } from '@storybook/react-vite';

export default {
  title: 'Theme/Colors/V2 (Deprecated)',
  parameters: {
    docs: {
      description: {
        component:
          'Tokens de color V2 (deprecated). Incluye primitivos y tokens semánticos (bg, text, icon, border). No usar en código nuevo.',
      },
    },
  },
};

const PrimitivesTemplate: StoryFn = () => {
  const allColors = colorsNext as unknown as Record<string, string>;

  return (
    <ColorPageLayout>
      <DeprecationBanner version="V2" />
      <ColorGroup
        title="Special"
        colors={{
          transparent: allColors.transparent,
          base: allColors.base,
          webdoxBlue: allColors.webdoxBlue,
          webdoxDarkBlue: allColors.webdoxDarkBlue,
          black: allColors.black,
          brandAI: allColors.brandAI,
        }}
        textColor={textColors.textNeutralStrong}
        borderColor={borderColors.borderNeutralSubtle}
      />
      {PRIMITIVE_FAMILIES.map(({ title, prefix }) => {
        const group = extractGroup(allColors, prefix);

        return Object.keys(group).length > 0 ? (
          <ColorGroup
            key={prefix}
            title={title}
            colors={group}
            textColor={textColors.textNeutralStrong}
            borderColor={borderColors.borderNeutralSubtle}
          />
        ) : null;
      })}
    </ColorPageLayout>
  );
};

export const Primitives = PrimitivesTemplate.bind({});

const SemanticTemplate: StoryFn = () => (
  <ColorPageLayout>
    <DeprecationBanner version="V2" />
    <ColorGroup
      title="Background"
      colors={bgColors as unknown as Record<string, string>}
      textColor={textColors.textNeutralStrong}
      borderColor={borderColors.borderNeutralSubtle}
    />
    <ColorGroup
      title="Text"
      colors={textColors as unknown as Record<string, string>}
      textColor={textColors.textNeutralStrong}
      borderColor={borderColors.borderNeutralSubtle}
    />
    <ColorGroup
      title="Icon"
      colors={iconColors as unknown as Record<string, string>}
      textColor={textColors.textNeutralStrong}
      borderColor={borderColors.borderNeutralSubtle}
    />
    <ColorGroup
      title="Border"
      colors={borderColors as unknown as Record<string, string>}
      textColor={textColors.textNeutralStrong}
      borderColor={borderColors.borderNeutralSubtle}
    />
  </ColorPageLayout>
);

export const Semantic = SemanticTemplate.bind({});
