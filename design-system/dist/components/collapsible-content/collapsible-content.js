import { jsxs as p, jsx as o } from "react/jsx-runtime";
import { useRef as S, useState as m, useEffect as $ } from "react";
import { getOverrides as i } from "baseui";
import "../button/button.js";
import { IconButton as B } from "../button/variants/icon-button/icon-button.js";
import "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import "../../themes/v3/light/theme.js";
import "../../themes/v3/dark/theme.js";
import "../../themes/utilities.js";
import "baseui/modal";
import "../modal/components/modal-close-button/modal-close-button.js";
import "../modal/regular-modal.js";
import "../modal/sectioned-modal.js";
import "../spinner/full-spinner/full-spinner-context.js";
import "@carbon/icons-react";
import { ArrowIcon as z } from "../select/components/arrow-icon.js";
import { StyledRoot as C, StyledHeader as j, StyledBody as v, StyledActionIcons as w } from "./collapsible-content.styles.js";
const Y = ({
  dataTestId: l = "collapsible-content",
  title: d = /* @__PURE__ */ o("span", {}),
  initialState: a,
  children: h,
  overrides: e = {}
}) => {
  const t = S(null), [u, f] = m("auto"), [s, g] = m(a), c = () => g((n) => !n), r = {
    $isOpen: s,
    $height: u,
    $onToggle: c
  }, [y, I] = i(e.Root, C), [b, O] = i(e.Header, j), [x, R] = i(e.Body, v), [A, H] = i(
    e.ActionIcons,
    w
  );
  return $(() => {
    if (t.current) {
      const n = new ResizeObserver(() => {
        requestAnimationFrame(() => {
          if (t.current) {
            const P = `${t.current.scrollHeight}px`;
            f(P);
          }
        });
      });
      return n.observe(t.current), () => n.disconnect();
    }
  }, []), /* @__PURE__ */ p(
    y,
    {
      ...I,
      ...r,
      children: [
        /* @__PURE__ */ p(
          b,
          {
            ...O,
            ...r,
            children: [
              d,
              /* @__PURE__ */ o(
                A,
                {
                  ...H,
                  ...r,
                  children: /* @__PURE__ */ o(
                    B,
                    {
                      "data-testid": `${l}__toggle-button`,
                      "aria-expanded": s,
                      size: "24px",
                      onClick: c,
                      children: /* @__PURE__ */ o(z, { isOpen: s })
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ o(
          x,
          {
            ...R,
            ...r,
            children: /* @__PURE__ */ o("div", { ref: t, children: h })
          }
        )
      ]
    }
  );
};
export {
  Y as CollapsibleContent
};
//# sourceMappingURL=collapsible-content.js.map
