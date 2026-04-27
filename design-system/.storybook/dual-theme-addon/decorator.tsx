import { Suspense } from 'react';
import type { Context } from 'react';

import { MemoryRouter } from 'react-router-dom';

import { ToasterContainerProvider } from '../../src/components/notification';
import { DesignSystemProvider } from '../../src/contexts/design-system-provider';
import { darkTheme, lightTheme } from '../../src/themes';
import { SEMANTIC_COLORS as DARK_COLORS } from '../../src/themes/v3/dark/colors/semantics';
import { SEMANTIC_COLORS as LIGHT_COLORS } from '../../src/themes/v3/light/colors/semantics';

import { ToasterContainerContext } from './context';

import type { ToasterContainerContextType } from '../../src/components/notification/toast/toaster-container-context/toaster-container-context.interface';
import type { Locale } from '../../src/components/utils/i18n/i18n.interface';
import type { DesignSystemTheme } from '../../src/themes/theme.interfaces';
import type { Decorator } from '@storybook/react-vite';

// getToasterContainerContext returns Context<Type | null> but
// ToasterContainerProvider expects Context<Type>. Cast once here so every usage below is clean.
const TOASTER_CTX = ToasterContainerContext as unknown as Context<ToasterContainerContextType>;

const PANE_STYLE = {
  light: {
    background: LIGHT_COLORS.base,
    label: 'Light',
    labelColor: 'rgba(0, 0, 0, 0.35)',
    dividerColor: 'rgba(0, 0, 0, 0.1)',
  },
  dark: {
    background: DARK_COLORS.base,
    label: 'Dark',
    labelColor: 'rgba(255, 255, 255, 0.35)',
    dividerColor: 'rgba(255, 255, 255, 0.1)',
  },
} as const;

interface ThemePaneProps {
  themeKey: 'light' | 'dark';
  theme: DesignSystemTheme;
  locale: Locale | undefined;
  children: React.ReactNode;
}

/** Renders a single themed pane for the split "both" view. */
const ThemePane: React.FC<ThemePaneProps> = ({ themeKey, theme, locale, children }) => {
  const { background, label, labelColor, dividerColor } = PANE_STYLE[themeKey];

  return (
    <div style={{ flex: 1, background, minHeight: '100vh', padding: '16px' }}>
      <div
        style={{
          fontSize: '10px',
          fontFamily: 'monospace',
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: labelColor,
          marginBottom: '12px',
          paddingBottom: '8px',
          borderBottom: `1px solid ${dividerColor}`,
        }}
      >
        {label}
      </div>
      <DesignSystemProvider
        theme={theme}
        locale={locale}
      >
        <ToasterContainerProvider toasterContext={TOASTER_CTX}>{children}</ToasterContainerProvider>
      </DesignSystemProvider>
    </div>
  );
};

/**
 * Decorator that handles theme switching across three modes driven by the
 * "Theme" toolbar global (`context.globals.theme`):
 *
 * - `light`: wraps the story in the light `DesignSystemProvider`
 * - `dark`: wraps the story in the dark `DesignSystemProvider`
 * - `both`: renders the story side-by-side in light | dark panes
 */
export const withDualTheme: Decorator = (Story, context) => {
  const themeValue = (context.globals['theme'] as string) ?? 'light';
  const locale = context.globals.locale as Locale | undefined;

  if (themeValue === 'both') {
    return (
      <MemoryRouter>
        <Suspense fallback="loading...">
          <div style={{ display: 'flex', alignItems: 'stretch' }}>
            <ThemePane
              themeKey="light"
              theme={lightTheme as unknown as DesignSystemTheme}
              locale={locale}
            >
              <Story />
            </ThemePane>
            <div style={{ width: '1px', background: 'rgba(128, 128, 128, 0.25)', flexShrink: 0 }} />
            <ThemePane
              themeKey="dark"
              theme={darkTheme as unknown as DesignSystemTheme}
              locale={locale}
            >
              <Story />
            </ThemePane>
          </div>
        </Suspense>
      </MemoryRouter>
    );
  }

  const isDark = themeValue === 'dark';
  const activeTheme = (isDark ? darkTheme : lightTheme) as unknown as DesignSystemTheme;
  const background = isDark ? PANE_STYLE.dark.background : PANE_STYLE.light.background;

  return (
    <MemoryRouter>
      <Suspense fallback="loading...">
        <div style={{ minHeight: '100vh', background }}>
          <DesignSystemProvider
            theme={activeTheme}
            locale={locale}
          >
            <ToasterContainerProvider toasterContext={TOASTER_CTX}>
              <Story />
            </ToasterContainerProvider>
          </DesignSystemProvider>
        </div>
      </Suspense>
    </MemoryRouter>
  );
};
