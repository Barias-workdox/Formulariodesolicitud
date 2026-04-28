import { themedStyled as n } from "../../../../themes/utilities.js";
const p = n("div", ({ $hasElevation: i, $padding: a, $theme: o }) => ({
  display: "flex",
  alignItems: "center",
  padding: a ?? `${o.spacing.spacingMd} ${o.spacing.spacingXl}`,
  backgroundColor: o.colors.bgBase,
  margin: 0,
  gap: o.spacing.spacingMd,
  borderBottom: `${i ? 3 : 1}px solid ${o.colors.neutralSubtle}`,
  /** 36px is the height of the `IconButton` in the start and end enhancer component */
  minHeight: "36px"
}));
export {
  p as StyledRoot
};
//# sourceMappingURL=styled-root.js.map
