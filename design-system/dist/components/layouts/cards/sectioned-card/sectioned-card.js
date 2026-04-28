import { jsxs as l, jsx as e } from "react/jsx-runtime";
import { Text as h } from "../../../text/text.js";
import { useCss as S } from "../../../utils/hooks/use-css.js";
import { styles as a } from "./sectioned-card.styles.js";
const u = ({
  title: s,
  headerEnhancer: r,
  footer: o,
  overrides: i = {},
  hasElevation: d = !1,
  children: t
}) => {
  const { rootStyles: m, headerStyles: c, headerTitleStyles: y, bodyStyles: n, footerStyles: f } = S(a, {
    hasElevation: d,
    hasBody: !!t,
    overrides: i
  });
  return /* @__PURE__ */ l("div", { className: m, children: [
    (s || r) && /* @__PURE__ */ l("div", { className: c, children: [
      /* @__PURE__ */ e("div", { className: y, children: ["number", "string"].includes(typeof s) ? /* @__PURE__ */ e(
        h,
        {
          variant: "h2",
          fontWeight: "500",
          $style: a.headerTitleTextStyles,
          children: s
        }
      ) : s }),
      r
    ] }),
    t && /* @__PURE__ */ e("div", { className: n, children: t }),
    o && /* @__PURE__ */ e("div", { className: f, children: o })
  ] });
};
export {
  u as SectionedCard
};
//# sourceMappingURL=sectioned-card.js.map
