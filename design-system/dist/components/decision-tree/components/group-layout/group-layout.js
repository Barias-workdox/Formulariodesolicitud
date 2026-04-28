import { jsxs as a, jsx as e, Fragment as y } from "react/jsx-runtime";
import { Text as t } from "../../../text/text.js";
import { useCss as h } from "../../../utils/hooks/use-css.js";
import { styles as u } from "./group-layout.styles.js";
const g = ({
  header: { title: o, subtitle: r, action: i = /* @__PURE__ */ e(y, {}) },
  children: n
}) => {
  const {
    containerStyles: s,
    layoutHeaderContainerStyles: l,
    layoutHeaderTitleContainerStyles: d,
    layoutHeaderActionContainerStyles: m,
    layoutBodyStyles: c
  } = h(u);
  return /* @__PURE__ */ a("div", { className: s, children: [
    /* @__PURE__ */ a("div", { className: l, children: [
      /* @__PURE__ */ a("div", { className: d, children: [
        /* @__PURE__ */ e(
          t,
          {
            variant: "body",
            margin: 0,
            fontWeight: "500",
            children: o
          }
        ),
        r && /* @__PURE__ */ e(
          t,
          {
            variant: "bodySmall",
            margin: 0,
            fontWeight: "400",
            children: r
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { className: m, children: i })
    ] }),
    /* @__PURE__ */ e("div", { className: c, children: n })
  ] });
};
export {
  g as GroupLayout
};
//# sourceMappingURL=group-layout.js.map
