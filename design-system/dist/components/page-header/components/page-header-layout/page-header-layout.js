import { jsxs as r, jsx as d } from "react/jsx-runtime";
import { TruncatedText as l } from "../../../truncated-text/truncated-text.js";
import { StyledRoot as p, StyledTitleWrapper as a, StyledLeftColumn as m } from "./page-header-layout.styles.js";
const f = ({
  title: t,
  endEnhancer: e,
  startEnhancer: o,
  toolbar: n,
  showBorder: i = !0
}) => /* @__PURE__ */ r(p, { $showBorder: i, children: [
  /* @__PURE__ */ r(a, { children: [
    /* @__PURE__ */ r(m, { children: [
      o,
      /* @__PURE__ */ d(
        l,
        {
          tooltipProps: {
            content: t
          },
          textProps: {
            variant: "h2",
            fontWeight: "500",
            margin: 0
          },
          children: t
        }
      )
    ] }),
    e
  ] }),
  n
] });
export {
  f as PageHeaderLayout
};
//# sourceMappingURL=page-header-layout.js.map
