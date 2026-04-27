/**
 * Spacing tokens for consistent layout and spacing across the application.
 * These values are used to maintain a consistent visual rhythm and hierarchy.
 */
export const spacing = {
  /** Micro-spacing for icons, badges, and tiny UI elements  - It is used in place of $spacing4 */
  spacing2xs: '0.25rem',
  /** Minimal padding for chips, inputs, and small interactive elements - It is used in place of $spacing8 */
  spacingXs: '0.5rem',
  /** Spacing between small UI elements and components - It is used in place of $spacing12 */
  spacingSm: '0.75rem',
  /** Base layout spacing for lists, groups, and standard content - It is used in place of $spacing16 */
  spacingMd: '1rem',
  /** Spacing for content sections and medium-sized components - It is used in place of $spacing20 */
  spacingLg: '1.25rem',
  /** Spacing for large containers, cards, and prominent elements - It is used in place of $spacing24 */
  spacingXl: '1.5rem',
  /** Spacing for blocks, headers, and major content divisions - It is used in place of $spacing28 */
  spacing2xl: '1.75rem',
  /** Maximum spacing for grids, sections, and large-scale layouts - It is used in place of $spacing32 */
  spacing3xl: '2rem',
} as const;

export type Spacing = typeof spacing;

export type SpacingKey = keyof Spacing;
