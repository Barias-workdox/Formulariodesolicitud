import { SEMANTIC_COLORS as DARK_SEMANTICS, UI_COLORS as DARK_UI } from '../v3/dark/colors';
import {
  PRIMITIVE_COLORS,
  SEMANTIC_COLORS as LIGHT_SEMANTICS,
  UI_COLORS as LIGHT_UI,
} from '../v3/light/colors';

import {
  ColorGroup,
  ColorPageLayout,
  DEPRECATED_ELEMENTS,
  DeprecationBanner,
  PRIMITIVE_FAMILIES,
  SEMANTIC_ROLES,
  UI_GROUPS,
  extractCurrentTokens,
  extractGroup,
} from './stories.utils';

import type { StoryFn } from '@storybook/react-vite';

export default {
  title: 'Theme/Colors/V3',
  parameters: {
    docs: {
      description: {
        component:
          'Tokens de color del tema V3. Incluye primitivos (compartidos entre temas), tokens semánticos actuales y tokens deprecados con prefijo de elemento.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Vg0tnNQrtCYjRtTInXTcTD/Nuclear-Design-System?node-id=4318-12953&embed-host=share',
    },
  },
};

const ALL_PRIMITIVES = PRIMITIVE_COLORS as unknown as Record<string, string>;
const ALL_LIGHT_UI = LIGHT_UI as unknown as Record<string, string>;
const ALL_DARK_UI = DARK_UI as unknown as Record<string, string>;
const LIGHT_SEMANTIC = LIGHT_SEMANTICS as unknown as Record<string, string>;
const DARK_SEMANTIC = DARK_SEMANTICS as unknown as Record<string, string>;

const LAYOUT_COLORS = {
  light: { textColor: PRIMITIVE_COLORS.gray140, borderColor: PRIMITIVE_COLORS.gray20 },
  dark: { textColor: PRIMITIVE_COLORS.gray10, borderColor: PRIMITIVE_COLORS.gray100 },
} as const;

const getLayoutColors = (
  globals: Record<string, string>,
): {
  textColor: string;
  borderColor: string;
} => LAYOUT_COLORS[globals.theme === 'dark' ? 'dark' : 'light'];

// --- Helpers ---

interface SemanticColorsProps {
  colors: Record<string, string>;
  textColor: string;
  borderColor: string;
}

const SemanticColors: React.FC<SemanticColorsProps> = ({ colors, textColor, borderColor }) => {
  const currentTokens = extractCurrentTokens(colors);

  return (
    <ColorPageLayout>
      <ColorGroup
        title="Base"
        colors={{ base: currentTokens.base, transparent: currentTokens.transparent }}
        textColor={textColor}
        borderColor={borderColor}
        showCount
      />
      {SEMANTIC_ROLES.map(({ title, prefix }) => {
        const group = extractGroup(currentTokens, prefix);

        return Object.keys(group).length > 0 ? (
          <ColorGroup
            key={prefix}
            title={title}
            colors={group}
            textColor={textColor}
            borderColor={borderColor}
            showCount
          />
        ) : null;
      })}
    </ColorPageLayout>
  );
};

const DeprecatedSemanticColors: React.FC<SemanticColorsProps> = ({
  colors,
  textColor,
  borderColor,
}) => (
  <ColorPageLayout>
    <DeprecationBanner message="Los tokens con prefijo de elemento (bg*, text*, icon*, border*) están deprecados. Usa tokens semánticos sin prefijo." />
    {DEPRECATED_ELEMENTS.map(({ title, prefix }) => (
      <ColorGroup
        key={prefix}
        title={title}
        colors={extractGroup(colors, prefix)}
        textColor={textColor}
        borderColor={borderColor}
        showCount
      />
    ))}
  </ColorPageLayout>
);

// --- Primitives (shared between light and dark themes) ---

const PrimitivesTemplate: StoryFn = (_args, { globals }) => {
  const { textColor, borderColor } = getLayoutColors(globals);

  return (
    <ColorPageLayout>
      <ColorGroup
        title="Special"
        colors={{
          transparent: ALL_PRIMITIVES.transparent,
          base: ALL_PRIMITIVES.base,
          webdoxBlue: ALL_PRIMITIVES.webdoxBlue,
          webdoxDarkBlue: ALL_PRIMITIVES.webdoxDarkBlue,
          black: ALL_PRIMITIVES.black,
          brandAI: ALL_PRIMITIVES.brandAI,
          brandAIHover: ALL_PRIMITIVES.brandAIHover,
        }}
        textColor={textColor}
        borderColor={borderColor}
        showCount
      />
      {PRIMITIVE_FAMILIES.map(({ title, prefix }) => {
        const group = extractGroup(ALL_PRIMITIVES, prefix);

        return Object.keys(group).length > 0 ? (
          <ColorGroup
            key={prefix}
            title={title}
            colors={group}
            textColor={textColor}
            borderColor={borderColor}
            showCount
          />
        ) : null;
      })}
    </ColorPageLayout>
  );
};

export const Primitives = PrimitivesTemplate.bind({});

// --- Light Semantic ---

const LightSemanticTemplate: StoryFn = (_args, { globals }) => {
  const { textColor, borderColor } = getLayoutColors(globals);

  return (
    <SemanticColors
      colors={LIGHT_SEMANTIC}
      textColor={textColor}
      borderColor={borderColor}
    />
  );
};

export const LightSemantic = LightSemanticTemplate.bind({});

// --- Light Deprecated Semantic ---

const LightDeprecatedSemanticTemplate: StoryFn = (_args, { globals }) => {
  const { textColor, borderColor } = getLayoutColors(globals);

  return (
    <DeprecatedSemanticColors
      colors={LIGHT_SEMANTIC}
      textColor={textColor}
      borderColor={borderColor}
    />
  );
};

export const LightDeprecatedSemantic = LightDeprecatedSemanticTemplate.bind({});

// --- Dark Semantic ---

const DarkSemanticTemplate: StoryFn = (_args, { globals }) => {
  const { textColor, borderColor } = getLayoutColors(globals);

  return (
    <SemanticColors
      colors={DARK_SEMANTIC}
      textColor={textColor}
      borderColor={borderColor}
    />
  );
};

export const DarkSemantic = DarkSemanticTemplate.bind({});

// --- Dark Deprecated Semantic ---

const DarkDeprecatedSemanticTemplate: StoryFn = (_args, { globals }) => {
  const { textColor, borderColor } = getLayoutColors(globals);

  return (
    <DeprecatedSemanticColors
      colors={DARK_SEMANTIC}
      textColor={textColor}
      borderColor={borderColor}
    />
  );
};

export const DarkDeprecatedSemantic = DarkDeprecatedSemanticTemplate.bind({});

// --- UI Tokens ---

const UITokenColors: React.FC<SemanticColorsProps> = ({ colors, textColor, borderColor }) => (
  <ColorPageLayout>
    <ColorGroup
      title="Surfaces — Base"
      colors={{
        surfaceMain: colors.surfaceMain,
        surfaceAlternative: colors.surfaceAlternative,
        surfaceOverlayBackdrop: colors.surfaceOverlayBackdrop,
      }}
      textColor={textColor}
      borderColor={borderColor}
      showCount
    />
    {UI_GROUPS.map(({ title, prefix }) => {
      const group = extractGroup(colors, prefix);

      return Object.keys(group).length > 0 ? (
        <ColorGroup
          key={prefix}
          title={title}
          colors={group}
          textColor={textColor}
          borderColor={borderColor}
          showCount
        />
      ) : null;
    })}
  </ColorPageLayout>
);

const LightUITokensTemplate: StoryFn = (_args, { globals }) => {
  const { textColor, borderColor } = getLayoutColors(globals);

  return (
    <UITokenColors
      colors={ALL_LIGHT_UI}
      textColor={textColor}
      borderColor={borderColor}
    />
  );
};

export const LightUITokens = LightUITokensTemplate.bind({});

const DarkUITokensTemplate: StoryFn = (_args, { globals }) => {
  const { textColor, borderColor } = getLayoutColors(globals);

  return (
    <UITokenColors
      colors={ALL_DARK_UI}
      textColor={textColor}
      borderColor={borderColor}
    />
  );
};

export const DarkUITokens = DarkUITokensTemplate.bind({});
