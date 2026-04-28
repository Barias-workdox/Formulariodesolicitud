import { themedStyled as d } from "../../../../themes/utilities.js";
const s = "240px", t = d(
  "div",
  ({ $theme: o, $top: i, $left: n }) => ({
    position: "fixed",
    top: `${i}px`,
    left: `${n}px`,
    border: `1px solid ${o.colors.neutralSubtle}`,
    borderRadius: o.spacing.spacing2xs,
    boxShadow: o.elevations.md.down,
    display: "flex",
    flexDirection: "column",
    backgroundColor: o.colors.bgBase,
    zIndex: 1e3,
    minWidth: s
  })
), e = d("div", ({ $theme: o }) => ({
  padding: o.spacing.spacingXs,
  borderBottom: `1px solid ${o.colors.neutralSubtle}`
})), l = d("div", () => ({
  display: "contents"
}));
export {
  e as Header,
  l as MenuItemWrapper,
  t as Root
};
//# sourceMappingURL=sublink.styles.js.map
