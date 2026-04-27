export const breakpoints = {
  extrasmall: 360,
  small: 640,
  medium: 768,
  large: 1024,
  extralarge: 1280,
} as const;

export const mediaQueries = {
  extralarge: `(min-width: ${breakpoints.extralarge}px)`,
  large: `(min-width: ${breakpoints.large}px)`,
  medium: `(min-width: ${breakpoints.medium}px)`,
  small: `(min-width: ${breakpoints.small}px)`,
  extrasmall: `(min-width: ${breakpoints.extrasmall}px)`,
} as const;

export type Breakpoints = typeof breakpoints;
