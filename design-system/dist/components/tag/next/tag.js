import { jsxs as O, jsx as r } from "react/jsx-runtime";
import { useRef as _, useState as P, useMemo as v, useCallback as k, useEffect as B } from "react";
import { Close as F } from "@carbon/icons-react";
import { Text as W } from "../../text/text.js";
import { StatefulTooltipNext as w } from "../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import { TruncatedText as I } from "../../truncated-text/truncated-text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as j } from "../../utils/i18n/utils.js";
import { ariaKeyDownHandler as z } from "../../utils/accessibility.utils.js";
import { useObserver as K } from "../../utils/hooks/use-observer.hook.js";
import { getStringFromReactNode as N } from "../../../utils/react.utils.js";
import { DEFAULT_SIZE as U, DEFAULT_SHAPE as M, ELLIPSIS_THRESHOLD as Z, TOOLTIP_THRESHOLD as q } from "./tag.constants.js";
import { StyledTag as G, StyledIconWrapper as J, StyledActionButton as Q, StyledTagEllipsisText as V } from "./tag.styled-components.js";
const ht = ({
  "data-testid": f = "design-system-tag",
  kind: m,
  variant: c,
  shape: E = M,
  disabled: t = !1,
  size: b = U,
  icon: d,
  showAction: g = !1,
  actionIcon: L = F,
  zIndex: s = 1,
  children: o,
  $style: x,
  onClick: n
}) => {
  const { t: l } = j(), T = typeof n < "u", e = !g && T, a = _(null), [$, h] = P(0), i = v(() => N(o) || "", [o]), A = v(
    () => i ? `${l("general.delete")} ${i}` : l("general.delete"),
    [i, l]
  ), R = k((p) => {
    var S;
    const u = p == null ? void 0 : p[0], y = (S = u == null ? void 0 : u.contentRect) == null ? void 0 : S.width;
    typeof y == "number" && h(y);
  }, []);
  K({
    element: a,
    callback: R
  }), B(() => {
    a.current && h(a.current.offsetWidth);
  }, []);
  const C = $ > q, D = $ > Z, H = () => o ? D ? /* @__PURE__ */ r(
    w,
    {
      content: o,
      ignoreBoundary: !0,
      zIndex: s,
      showArrow: !0,
      children: /* @__PURE__ */ r(
        V,
        {
          variant: "microCopy",
          margin: 0,
          color: "inherit",
          children: o
        }
      )
    }
  ) : C ? /* @__PURE__ */ r(
    w,
    {
      content: o,
      ignoreBoundary: !0,
      zIndex: s,
      showArrow: !0,
      children: /* @__PURE__ */ r(
        W,
        {
          variant: "microCopy",
          margin: 0,
          color: "inherit",
          children: o
        }
      )
    }
  ) : /* @__PURE__ */ r(
    I,
    {
      textProps: { variant: "microCopy", margin: 0, color: "inherit" },
      tooltipProps: { content: o, showArrow: !0 },
      zIndex: s,
      children: o
    }
  ) : null;
  return /* @__PURE__ */ O(
    G,
    {
      ref: a,
      "data-testid": f,
      $variant: c,
      $kind: m,
      $shape: E,
      $size: b,
      $disabled: t,
      $clickable: e,
      $style: x,
      role: e && !t ? "button" : void 0,
      tabIndex: e && !t ? 0 : void 0,
      "aria-disabled": t || void 0,
      "aria-label": e && !t && i ? i : void 0,
      onClick: e && !t ? n : void 0,
      onKeyDown: e && !t ? z(n) : void 0,
      children: [
        d && /* @__PURE__ */ r(
          J,
          {
            $kind: m,
            $variant: c,
            $disabled: t,
            children: /* @__PURE__ */ r(
              d,
              {
                size: 12,
                height: 12
              }
            )
          }
        ),
        H(),
        g && T && /* @__PURE__ */ r(
          Q,
          {
            "data-testid": `${f}__action-button`,
            role: "button",
            "aria-label": A,
            $kind: m,
            $variant: c,
            disabled: t,
            onClick: n,
            children: /* @__PURE__ */ r(L, { size: 12 })
          }
        )
      ]
    }
  );
};
export {
  ht as Tag
};
//# sourceMappingURL=tag.js.map
