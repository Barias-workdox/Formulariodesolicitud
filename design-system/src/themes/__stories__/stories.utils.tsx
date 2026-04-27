import type { ReactNode } from 'react';

import { DeprecatedComponentAlert } from '@components/storybook';

export { extractGroup } from '../v3/utils/colors.utils';

export const PRIMITIVE_FAMILIES = [
  { title: 'Gray', prefix: 'gray' },
  { title: 'Blue', prefix: 'blue' },
  { title: 'Green', prefix: 'green' },
  { title: 'Red', prefix: 'red' },
  { title: 'Yellow', prefix: 'yellow' },
  { title: 'Cyan', prefix: 'cyan' },
  { title: 'Purple', prefix: 'purple' },
  { title: 'Light Green', prefix: 'lightgreen' },
  { title: 'Magenta', prefix: 'magenta' },
  { title: 'Orange', prefix: 'orange' },
] as const;

export const SEMANTIC_ROLES = [
  { title: 'Neutral', prefix: 'neutral' },
  { title: 'Brand', prefix: 'brand' },
  { title: 'Positive', prefix: 'positive' },
  { title: 'Negative', prefix: 'negative' },
  { title: 'Warning', prefix: 'warning' },
  { title: 'Peace', prefix: 'peace' },
  { title: 'Power', prefix: 'power' },
  { title: 'Nature', prefix: 'nature' },
  { title: 'Sweet', prefix: 'sweet' },
  { title: 'Heat', prefix: 'heat' },
] as const;

export const UI_GROUPS = [
  { title: 'Surfaces — Decorative', prefix: 'surfaceDecorative' },
  { title: 'Surfaces — Interactive', prefix: 'surfaceInteractive' },
  { title: 'Icons — Tonal', prefix: 'iconTonal' },
  { title: 'Icons — Filled', prefix: 'iconFilled' },
  { title: 'Text — Tonal', prefix: 'textTonal' },
  { title: 'Text — Filled', prefix: 'textFilled' },
  { title: 'Strokes', prefix: 'stroke' },
] as const;

export const DEPRECATED_ELEMENTS = [
  { title: 'Background (bg)', prefix: 'bg' },
  { title: 'Text (text)', prefix: 'text' },
  { title: 'Icon (icon)', prefix: 'icon' },
  { title: 'Border (border)', prefix: 'border' },
] as const;

const DEPRECATED_PREFIXES = ['bg', 'text', 'icon', 'border'];

/** Extracts current (non-deprecated) semantic tokens, excluding element-prefixed tokens. */
export const extractCurrentTokens = (colors: Record<string, string>): Record<string, string> => {
  const result: Record<string, string> = {};

  for (const [key, value] of Object.entries(colors)) {
    if (!DEPRECATED_PREFIXES.some((prefix) => key.startsWith(prefix))) {
      result[key] = value;
    }
  }

  return result;
};

interface ColorSwatchProps {
  name: string;
  value: string;
  textColor: string;
  borderColor: string;
}

/** Renders a single color token with its preview swatch, name, and hex value. */
export const ColorSwatch: React.FC<ColorSwatchProps> = ({
  name,
  value,
  textColor,
  borderColor,
}) => {
  const isEmpty = value === '';

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '0.5rem',
        borderRadius: '0.5rem',
        border: `1px solid ${borderColor}`,
        opacity: isEmpty ? 0.5 : 1,
      }}
    >
      <div
        style={{
          width: '48px',
          height: '48px',
          flexShrink: 0,
          borderRadius: '0.375rem',
          background: isEmpty
            ? 'repeating-conic-gradient(#E0E3EB 0% 25%, transparent 0% 50%) 50% / 12px 12px'
            : value,
          border: `1px solid ${borderColor}`,
        }}
      />
      <div style={{ minWidth: 0 }}>
        <div style={{ fontWeight: 600, fontSize: '0.8125rem', color: textColor }}>{name}</div>
        <div style={{ fontSize: '0.75rem', color: textColor, opacity: 0.7 }}>
          {isEmpty ? 'Not defined' : value}
        </div>
      </div>
    </div>
  );
};

interface ColorGroupProps {
  title: string;
  colors: Record<string, string>;
  textColor: string;
  borderColor: string;
  showCount?: boolean;
}

/** Renders a titled group of color swatches in a responsive grid. */
export const ColorGroup: React.FC<ColorGroupProps> = ({
  title,
  colors,
  textColor,
  borderColor,
  showCount = false,
}) => {
  const entries = Object.entries(colors);
  const defined = entries.filter(([, v]) => v !== '').length;

  return (
    <div style={{ marginBottom: '2rem' }}>
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          padding: '0.5rem 0',
        }}
      >
        <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 700, color: textColor }}>
          {title}
          {showCount && (
            <>
              {' '}
              <span style={{ fontWeight: 400, fontSize: '0.875rem', opacity: 0.6 }}>
                ({defined}/{entries.length} defined)
              </span>
            </>
          )}
        </h2>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '0.5rem',
          marginTop: '0.75rem',
        }}
      >
        {entries.map(([key, value]) => (
          <ColorSwatch
            key={key}
            name={key}
            value={value}
            textColor={textColor}
            borderColor={borderColor}
          />
        ))}
      </div>
    </div>
  );
};

interface ColorPageLayoutProps {
  children: ReactNode;
}

/** Wraps color story content in a centered, padded container. */
export const ColorPageLayout: React.FC<ColorPageLayoutProps> = ({ children }) => (
  <div
    style={{
      maxWidth: '1200px',
      margin: '0 auto',
    }}
  >
    {children}
  </div>
);

interface DeprecationBannerProps {
  version?: string;
  message?: string;
}

/** Renders a warning banner indicating the theme version or tokens are deprecated. */
export const DeprecationBanner: React.FC<DeprecationBannerProps> = ({ version, message }) => (
  <DeprecatedComponentAlert
    name={message ?? `${version} está deprecated. Usa los tokens semánticos de V3 en código nuevo.`}
  />
);
