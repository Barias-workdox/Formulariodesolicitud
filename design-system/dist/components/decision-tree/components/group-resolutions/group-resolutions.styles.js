import { themedStyled as s } from "../../../../themes/utilities.js";
const t = (o, n) => ({
  content: '""',
  position: "absolute",
  left: "50%",
  transform: "translateX(-1px)",
  height: "16px",
  width: "1px",
  backgroundColor: n ? o.colors.brandDepressed : o.colors.neutralSubtle
}), i = (o, n) => ({
  "::before": {
    bottom: "100%",
    left: "50%",
    ...t(o, n)
  },
  "::after": {
    top: "100%",
    left: "50%",
    ...t(o, n)
  }
}), e = s(
  "div",
  ({ $theme: o }) => ({
    position: "relative",
    margin: `${o.spacing.spacingMd} 0`,
    width: "fit-content",
    ...i(o)
  })
), a = s("div", ({ $theme: o }) => ({
  border: `1px solid ${o.colors.neutralSubtle}`,
  padding: `${o.spacing.spacingXs} ${o.spacing.spacingMd}`,
  borderRadius: o.spacing.spacing2xs,
  backgroundColor: o.colors.bgBase,
  overflow: "hidden"
}));
export {
  e as StyledContainer,
  a as StyledInner,
  i as getGuideLinesStyles
};
//# sourceMappingURL=group-resolutions.styles.js.map
