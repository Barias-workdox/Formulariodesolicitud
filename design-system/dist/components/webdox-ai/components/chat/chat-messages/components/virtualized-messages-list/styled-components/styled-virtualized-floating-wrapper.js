import { themedStyled as a } from "../../../../../../../../themes/utilities.js";
const p = a("div", ({ $firstElementPosition: i = 0, $theme: t }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  transform: `translateY(${i}px)`,
  display: "flex",
  flexDirection: "column",
  gap: t.spacing.spacingMd,
  paddingBottom: t.spacing.spacingMd
}));
export {
  p as StyledVirtualizedFloatingWrapper
};
//# sourceMappingURL=styled-virtualized-floating-wrapper.js.map
