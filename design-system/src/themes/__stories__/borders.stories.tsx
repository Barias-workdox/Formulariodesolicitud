import { useCss } from '@components/utils/hooks/use-css';
import { borders } from '@tokens';

import type { StoryFn } from '@storybook/react-vite';

export default {
  title: 'Utils/Borders',
  parameters: {
    docs: {
      description: {
        component:
          'Visualiza y compara los radios de borde definidos en el sistema de diseño. Cada variante muestra su nombre, valor en CSS y un ejemplo visual.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/Vg0tnNQrtCYjRtTInXTcTD/Nuclear-Design-System?node-id=15375-483&embed-host=share',
    },
  },
};

type BorderVariant = keyof typeof borders;

interface BorderItemProps {
  name: BorderVariant;
  value: string;
}

const BorderItem: React.FC<BorderItemProps> = ({ name, value }) => {
  const { theme } = useCss();

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem',
        marginBottom: '1rem',
        border: '1px solid #e0e0e0',
        borderRadius: '0.5rem',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        backgroundColor: '#ffffff',
      }}
    >
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{name}</div>
        <div style={{ fontSize: '0.875rem', color: '#555' }}>border-radius: {value}</div>
      </div>
      <div
        style={{
          width: '40px',
          height: '40px',
          marginLeft: '1rem',
          background: `repeating-linear-gradient(
            135deg,
            ${theme.colors.bgBase},
            ${theme.colors.bgBase} 4px,
            ${theme.colors.bgNeutralWashed} 4px,
            ${theme.colors.bgNeutralWashed} 8px
          )`,
          borderRadius: value,
          border: `1px solid ${theme.colors.borderBrand}`,
        }}
      />
    </div>
  );
};

const Template: StoryFn = () => (
  <div style={{ maxWidth: '640px', margin: '0 auto', padding: '1.5rem' }}>
    {Object.entries(borders).map(([name, value]) => (
      <BorderItem
        key={name}
        name={name as BorderVariant}
        value={value}
      />
    ))}
  </div>
);

export const Default = Template.bind({});
