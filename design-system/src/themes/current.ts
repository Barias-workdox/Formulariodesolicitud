/* eslint-disable @stylistic/padding-line-between-statements */

/**
 * Theme Version Configuration
 *
 * This file centralizes all version-dependent exports for the design system theme.
 * To switch the active theme version, update the imports below to point to the
 * desired version directory (e.g., ./v3 → ./v4).
 *
 * Components should import from `@themes` — never from versioned
 * paths like `@themes/v3` directly.
 */

// ─── Active Version: v3 ───────────────────────────────────────────────────────

export { lightTheme } from './v3/light/theme';
export { darkTheme } from './v3/dark/theme';
export * from './v3/tokens';

export type * from './v3/interfaces/colors.interfaces';
export type * from './v3/interfaces/theme.interface';
export type * from './v3/tokens/borders';
export type * from './v3/tokens/breakpoints';
export type * from './v3/tokens/elevations';
export type * from './v3/tokens/spacing';
export type * from './v3/tokens/typography';
