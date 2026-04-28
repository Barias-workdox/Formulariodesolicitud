const o = {
  fontFamily: '"Albert Sans", sans-serif'
}, l = {
  regular: 400,
  medium: 500,
  bold: 700
}, e = {
  tight: 1,
  normal: 1.5
}, a = {
  fontFamily: "Helvetica"
}, i = "12px", n = (t) => `max(calc(var(--font-base-size) * var(--font-scale-${t})), ${i})`, r = {
  h1: {
    ...o,
    fontSize: n("h1"),
    lineHeight: e.normal
  },
  h2: {
    ...o,
    fontSize: n("h2"),
    lineHeight: e.normal
  },
  body: {
    ...o,
    fontSize: n("body"),
    lineHeight: e.normal
  },
  bodySmall: {
    ...o,
    fontSize: n("body-small-mono"),
    lineHeight: e.normal
  },
  microCopy: {
    ...o,
    fontSize: n("microcopy"),
    lineHeight: e.normal
  },
  upperDetails: {
    ...o,
    fontSize: n("upper-details"),
    lineHeight: e.normal
  }
};
export {
  o as DEFAULT_FONT,
  a as FILE_ICON_FONT,
  i as MINIMUM_FONT_SIZE,
  e as TYPOGRAPHY_LINE_HEIGHTS,
  l as TYPOGRAPHY_WEIGHTS,
  n as getFontSize,
  r as typographies
};
//# sourceMappingURL=typography.js.map
