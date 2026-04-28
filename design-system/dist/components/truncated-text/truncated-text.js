import { jsx as t } from "react/jsx-runtime";
import { useRef as d } from "react";
import { Text as m } from "../text/text.js";
import { StatefulTooltipNext as c } from "../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import { useElementOverflow as x } from "../utils/hooks/use-element-overflow.js";
import { themedStyled as w } from "../../themes/utilities.js";
const u = w("span", { overflow: "hidden" }), y = {
  textContainerStyles: (e) => ({
    display: "-webkit-box",
    WebkitLineClamp: e,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    wordBreak: "break-all",
    whiteSpace: "pre-wrap"
  })
}, O = ({
  tooltipProps: { content: e, ...i },
  textProps: { $style: l, ...n },
  maxLines: r = 1,
  zIndex: p,
  children: s,
  className: f
}) => {
  const o = d(), { isOverflowing: a } = x({ ref: o, maxLines: r });
  return /* @__PURE__ */ t(
    c,
    {
      ...i,
      content: a ? e : void 0,
      ignoreBoundary: !0,
      zIndex: p,
      children: /* @__PURE__ */ t(u, { className: f, children: /* @__PURE__ */ t(
        m,
        {
          ...n,
          ref: o,
          $style: { ...y.textContainerStyles(r), ...l },
          children: s
        }
      ) })
    }
  );
};
export {
  O as TruncatedText
};
//# sourceMappingURL=truncated-text.js.map
