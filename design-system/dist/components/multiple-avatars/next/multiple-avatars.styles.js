import { themedStyled as e } from "../../../themes/utilities.js";
const n = e("div", ({ $theme: t }) => ({
  display: "inline-flex",
  alignItems: "flex-start",
  padding: 0,
  margin: 0,
  position: "relative",
  verticalAlign: "middle",
  color: t.colors.neutral
})), r = e(
  "button",
  ({ $isClickable: t }) => ({
    display: "inline-flex",
    margin: 0,
    padding: 0,
    border: "none",
    background: "transparent",
    cursor: t ? "pointer" : "default"
  })
), o = e("div", ({ $overlapPx: t, $zIndex: i, $isFirst: l }) => ({
  display: "inline-flex",
  alignItems: "flex-start",
  position: "relative",
  zIndex: i,
  marginLeft: l ? 0 : `-${Math.max(0, t)}px`
}));
export {
  o as MultipleAvatarItemWrapper,
  n as MultipleAvatarsRoot,
  r as MultipleAvatarsTooltipAnchor
};
//# sourceMappingURL=multiple-avatars.styles.js.map
