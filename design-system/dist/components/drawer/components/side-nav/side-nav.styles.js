import { ANCHOR as d } from "baseui/drawer";
import { themedStyled as e } from "../../../../themes/utilities.js";
import { SIDENAV_SIZE as t, SIDENAV_BORDER_ANCHOR as a, SIDENAV_MARGIN_ANCHOR as S } from "./side-nav.constants.js";
const A = e("div", ({ $isOpen: l, $theme: o, $size: i, $anchor: r, $height: n }) => ({
  width: t[i] || i,
  display: "flex",
  height: n,
  flexShrink: 0,
  flexDirection: "column",
  order: r === d.left ? "0" : "999",
  backgroundColor: o.colors.bgBase,
  overflowX: "hidden",
  transition: `${o.animation.timing500} ${o.animation.easeInOutCurve}`,
  [S[r]]: l ? 0 : `-${t[i] || i}`,
  [a[r]]: `1px solid ${o.colors.neutralSubtle}`
}));
export {
  A as SideNavStyled
};
//# sourceMappingURL=side-nav.styles.js.map
