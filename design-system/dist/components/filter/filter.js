import { jsx as o, jsxs as M } from "react/jsx-runtime";
import { useState as b, useMemo as C, useCallback as S, useEffect as j } from "react";
import { Button as y } from "../button/button.js";
import "../button/variants/icon-button/icon-button.js";
import "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import "../../themes/v3/light/theme.js";
import "../../themes/v3/dark/theme.js";
import "../../themes/utilities.js";
import "baseui/modal";
import { mergeOverridesDeep as N } from "../utils/baseui/helpers.js";
import "../modal/components/modal-close-button/modal-close-button.js";
import "../modal/regular-modal.js";
import "../modal/sectioned-modal.js";
import "../spinner/full-spinner/full-spinner-context.js";
import "@carbon/icons-react";
import { StatelessPopover as X } from "../popover/stateless-popover.js";
import { StatefulTooltipNext as U } from "../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import { useRefCallback as q } from "../utils/hooks/use-ref-callback.js";
import { getOverride as c, getOverrideProps as l } from "../../utils/overrides.utils.js";
import { FilterEndEnhancer as z } from "./components/filter-end-enhancer.js";
import { FilterTag as G } from "./components/filter-tag.js";
import { FilterValueText as J } from "./components/filter-value-text.js";
import { FILTER_MIN_WIDTH as K, FILTER_MAX_WIDTH as Q, FILTER_TOTAL_WIDTH_WITHOUT_TEXT as E } from "./filter.constants.js";
import { getOverrides as Y } from "./filter.styles.js";
const Ot = ({
  "data-testid": a = "filter",
  size: O = "32px",
  kind: F = "filled",
  tooltipText: h,
  label: B,
  content: e,
  value: r = [],
  disabled: f,
  disabledReason: w,
  startEnhancer: A,
  overrides: g,
  hasInteractions: I,
  initialIsOpen: d,
  minWidth: i = K,
  maxWidth: n = Q,
  popoverProps: { minWidth: v } = {},
  onClear: x
}) => {
  const u = I || r.filter(Boolean).length > 0, [T, _] = b(d), [m, P] = q(), t = C(
    () => {
      var p;
      return N(
        g,
        Y({
          $isActive: u,
          $isOpen: T,
          $width: (p = m.current) == null ? void 0 : p.offsetWidth,
          $minWidth: i,
          $maxWidth: n,
          $popoverMinWidth: v
        })
      );
    },
    [u, T, m, g, i, n, v]
  ), k = c(t.Popover) || X, R = c(t.Button) || y, V = c(t.ValueText) || J, W = c(t.Tag) || G, $ = r.filter(({ id: p }) => !!p).length > 1, s = S(() => {
    _(!1);
  }, []), D = C(
    () => typeof e == "function" ? e({ close: s }) : e,
    [e, s]
  );
  j(() => {
    d && m.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    });
  }, [m, d]);
  const H = i ? `calc(${i} - ${E})` : void 0, L = n ? `calc(${n} - ${E})` : void 0;
  return /* @__PURE__ */ o(
    k,
    {
      showArrow: !0,
      isOpen: T,
      content: D,
      autoFocus: !1,
      onClickOutside: s,
      onEsc: s,
      ...l(t.Popover),
      children: /* @__PURE__ */ o(
        U,
        {
          content: f ? w : "",
          placement: "bottom",
          ignoreBoundary: !0,
          showArrow: !0,
          children: /* @__PURE__ */ o("div", { children: /* @__PURE__ */ M(
            R,
            {
              ref: P,
              "data-testid": a,
              size: O,
              kind: F,
              startEnhancer: A,
              disabled: f,
              onClick: () => _(!0),
              endEnhancer: x && /* @__PURE__ */ o(
                z,
                {
                  "data-testid": `${a}__end-enhancer`,
                  isActive: u,
                  disabled: f,
                  onClear: x
                }
              ),
              ...l(t.Button),
              children: [
                /* @__PURE__ */ o(
                  V,
                  {
                    multi: $,
                    value: r,
                    tooltipText: h,
                    label: B,
                    minWidth: H,
                    maxWidth: L,
                    ...l(t.ValueText)
                  }
                ),
                $ && /* @__PURE__ */ o(
                  W,
                  {
                    "data-testid": `${a}--tag`,
                    tooltipText: h,
                    ...l(t.Tag),
                    children: r.length
                  }
                )
              ]
            }
          ) })
        }
      )
    }
  );
};
export {
  Ot as Filter
};
//# sourceMappingURL=filter.js.map
