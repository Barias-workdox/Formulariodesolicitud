import { themedStyled as d } from "../../../../../themes/utilities.js";
const n = d(
  "div",
  ({ $theme: r, $hasElevation: e, $borderRadius: l = "borderNone" }) => ({
    boxShadow: e ? "0 4px 8px -2px rgba(26, 26, 26, 0.1), 0 8px 16px -4px rgba(26, 26, 26, 0.08)" : "none",
    display: "flex",
    borderRadius: r.borders[l],
    flexDirection: "column"
  })
), o = (r) => `1px solid ${r}`, a = d(
  "div",
  ({ $theme: r, $paddingSpacing: e, $hasBorderTop: l, $borderRadius: t = "borderNone" }) => ({
    padding: r.spacing[e],
    borderTop: l ? o(r.colors.neutralSubtle) : "none",
    borderLeft: o(r.colors.neutralSubtle),
    borderRight: o(r.colors.neutralSubtle),
    borderBottom: o(r.colors.neutralSubtle),
    borderRadius: `0 0 ${r.borders[t]} ${r.borders[t]}`,
    flexGrow: 1
  })
), p = d("div", ({ $theme: r }) => ({
  marginTop: "auto",
  borderLeft: o(r.colors.neutralSubtle),
  borderRight: o(r.colors.neutralSubtle),
  borderBottom: o(r.colors.neutralSubtle)
}));
export {
  a as BodyWrapper,
  p as FooterWrapper,
  n as SectionedCardWrapper
};
//# sourceMappingURL=sectioned-card.styled.js.map
