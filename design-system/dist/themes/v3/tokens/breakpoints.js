const a = {
  extrasmall: 360,
  small: 640,
  medium: 768,
  large: 1024,
  extralarge: 1280
}, e = {
  extralarge: `(min-width: ${a.extralarge}px)`,
  large: `(min-width: ${a.large}px)`,
  medium: `(min-width: ${a.medium}px)`,
  small: `(min-width: ${a.small}px)`,
  extrasmall: `(min-width: ${a.extrasmall}px)`
};
export {
  a as breakpoints,
  e as mediaQueries
};
//# sourceMappingURL=breakpoints.js.map
