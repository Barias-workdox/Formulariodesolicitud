/**
 * Border tokens for consistent border radius across the application.
 * These values are used to maintain a consistent visual style and hierarchy.
 */
export const borders = {
  /** No border radius - sharp corners */
  borderNone: '0rem',
  /** Small border radius for subtle rounded corners */
  borderSm: '0.25rem',
  /** Medium border radius for standard rounded corners */
  borderMd: '0.5rem',
  /** Full circle border radius for circular elements */
  borderCircle: '50%',
} as const;

export type Borders = typeof borders;

export type BorderKey = keyof Borders;
