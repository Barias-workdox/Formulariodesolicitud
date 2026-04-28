import { jsx as i } from "react/jsx-runtime";
import { Link as a } from "../../../../../../../../../../../../link/link.js";
import { TruncatedText as e } from "../../../../../../../../../../../../truncated-text/truncated-text.js";
const f = ({ children: t, url: o = "", zIndex: r }) => /* @__PURE__ */ i(
  e,
  {
    textProps: {
      variant: "bodySmall",
      margin: 0,
      fontWeight: "500",
      color: "neutralStrong"
    },
    tooltipProps: {
      content: t,
      zIndex: r
    },
    children: o !== "" ? /* @__PURE__ */ i(
      a,
      {
        fontWeight: "500",
        size: "small",
        dataTestid: "panel-title__link",
        href: o,
        onClick: (n) => n.stopPropagation(),
        children: t
      }
    ) : t
  }
);
export {
  f as PanelTitle
};
//# sourceMappingURL=panel-title.js.map
