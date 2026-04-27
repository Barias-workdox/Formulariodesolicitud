import { Text } from '@components/text';
import { typographies } from '@themes';

import type { StoryFn } from '@storybook/react-vite';

export default {
  title: 'Utils/Typographies',
  parameters: {
    docs: {
      description: {
        component:
          'Visualiza y compara los estilos tipográficos definidos en el sistema de diseño. Cada variante muestra su nombre, uso recomendado y ejemplo visual.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Vg0tnNQrtCYjRtTInXTcTD/Nuclear-Design-System?node-id=15375-483&embed-host=share',
    },
  },
};

type TypographyVariant = keyof typeof typographies;

const TYPOGRAPHY_DESCRIPTIONS: Record<TypographyVariant, string> = {
  h1: 'Encabezados de secciones y grupos.',
  h2: 'Encabezados de secciones y grupos.',
  body: 'Tamaño base tipográfico para nuestros cuerpos de párrafos.',
  bodySmall: 'Tamaño mínimo para lectura.',
  microCopy: 'Tamaño para textos de en tags, text helpers, tooltips.',
  upperDetails: 'Tamaño para textos para antetítulos en secciones y menús desplegables',
};

interface TypographyGroupProps {
  variant: TypographyVariant;
  description: string;
}

const TypographyGroup: React.FC<TypographyGroupProps> = ({ variant, description }) => (
  <div style={{ marginBottom: '2rem' }}>
    <Text
      variant={variant}
      fontWeight="bold"
      marginBottom="0.5rem"
      $style={{ borderBottom: '1px solid' }}
    >
      {variant.toUpperCase()} - [{variant}]
    </Text>
    <Text variant={variant}>{description}</Text>
  </div>
);

const Template: StoryFn = () => (
  <div style={{ maxWidth: '800px', margin: '0 auto' }}>
    {Object.keys(typographies).map((variant) => (
      <TypographyGroup
        key={variant}
        variant={variant as TypographyVariant}
        description={TYPOGRAPHY_DESCRIPTIONS[variant as TypographyVariant]}
      />
    ))}
  </div>
);

export const Default = Template.bind({});
