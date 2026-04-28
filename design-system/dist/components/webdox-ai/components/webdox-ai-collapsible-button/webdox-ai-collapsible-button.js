import { jsxs as d, jsx as e } from "react/jsx-runtime";
import { forwardRef as H, useState as r, useRef as v, useLayoutEffect as W } from "react";
import { CloseOutline as x } from "@carbon/icons-react";
import { StaggeredAnimation as B } from "../../../staggered-animation/staggered-animation.js";
import { useCss as E } from "../../../utils/hooks/use-css.js";
import { ReactComponent as I } from "../../../../assets/icons/webdox-ai/brain-icon.svg.js";
import { StyledButton as R } from "./styled-components/styled-button.js";
import { StyledContainer as L } from "./styled-components/styled-container.js";
import { StyledCollapsibleContainer as N } from "./styled-components/styled-collapsible-container.js";
import { StyledButtonsGroupContainer as j } from "./styled-components/styled-buttons-group-container.js";
import { styles as a } from "./webdox-ai-button.styles.js";
const M = H(function({
  dataTestId: s,
  options: u = [],
  direction: o = "column",
  isToggled: t = !1,
  isLoading: p = !1,
  onToggle: h
}, C) {
  const [i, c] = r(!1), [l, m] = r(!1), [$, y] = r(0), [b, S] = r(0), n = v(null), { css: f, theme: A } = E(a, { $isHovered: l });
  return W(() => {
    t && n.current && !i && (y(n.current.scrollHeight), S(n.current.scrollWidth), c(!0)), !t && i && c(!1);
  }, [i, t, c]), /* @__PURE__ */ d(L, { $direction: o, children: [
    /* @__PURE__ */ e(
      N,
      {
        ref: n,
        $contentHeight: $,
        $contentWidth: b,
        $isToggled: t,
        $direction: o,
        children: t && /* @__PURE__ */ e(j, { $direction: o, children: /* @__PURE__ */ e(B, { order: o === "column" ? "desc" : "asc", children: u }) })
      }
    ),
    /* @__PURE__ */ d(
      R,
      {
        $isLoading: p,
        $isToggled: t,
        "data-testid": s,
        ref: C,
        type: "button",
        onClick: h,
        onMouseEnter: () => m(!0),
        onMouseLeave: () => m(!1),
        children: [
          /* @__PURE__ */ e(
            I,
            {
              "data-testid": `${s}--brain-icon`,
              className: f(a.iconStyles({ isHovered: l, isActive: !t }))
            }
          ),
          /* @__PURE__ */ e(
            x,
            {
              "data-testid": `${s}--close-icon`,
              className: f(a.iconStyles({ isHovered: l, isActive: t })),
              color: A.colors.neutral
            }
          )
        ]
      }
    )
  ] });
});
M.displayName = "WebdoxAICollapsibleButton";
export {
  M as WebdoxAICollapsibleButton
};
//# sourceMappingURL=webdox-ai-collapsible-button.js.map
