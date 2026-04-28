import { jsxs as f, jsx as u } from "react/jsx-runtime";
import { themedStyled as l } from "../../../themes/utilities.js";
import { getOverride as d, getOverrideProps as s } from "../../../utils/overrides.utils.js";
import { StyledInnerContainer as v } from "./components/styled-inner-container.js";
import { StyledRoot as x } from "./components/styled-root.js";
const F = ({
  startEnhancer: o,
  endEnhancer: r,
  children: e,
  hasElevation: n = !1,
  $padding: a,
  overrides: c
}) => {
  const { InnerContainer: i, Root: t } = c || {}, p = d(i) || v, g = d(t) || x;
  return /* @__PURE__ */ f(
    g,
    {
      $hasElevation: n,
      $padding: a,
      ...s(t),
      children: [
        o,
        /* @__PURE__ */ u(p, { ...s(i), children: e }),
        r
      ]
    }
  );
}, B = l("div", ({ $theme: o, $padding: r, $backgroundColor: e, $hasAside: n = !1 }) => ({
  flex: 1,
  margin: 0,
  overflow: n ? "hidden" : "auto",
  display: n ? "flex" : "block",
  padding: r ?? o.spacing.spacing3xl,
  backgroundColor: e ? o.colors[e] ?? e : o.colors.neutralBase
})), I = l("div", ({ $theme: o, orientation: r, $width: e }) => ({
  overflowY: "auto",
  backgroundColor: o.colors.bgBase,
  border: `1px solid ${o.colors.neutralSubtle}`,
  borderTop: 0,
  borderBottom: 0,
  borderRight: r !== "left" ? 0 : void 0,
  borderLeft: r !== "right" ? 0 : void 0,
  width: e
})), R = l("div", ({ $theme: o, $padding: r }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  backgroundColor: o.colors.bgBase,
  gap: o.spacing.spacingMd,
  borderTop: `1px solid ${o.colors.neutralSubtle}`,
  padding: r ?? `${o.spacing.spacingMd} ${o.spacing.spacingXl}`
})), O = l("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  minHeight: "100%"
});
export {
  I as FullScreenAside,
  B as FullScreenBody,
  R as FullScreenFooter,
  F as FullScreenHeader,
  O as FullScreenLayout
};
//# sourceMappingURL=full-screen-layout.js.map
