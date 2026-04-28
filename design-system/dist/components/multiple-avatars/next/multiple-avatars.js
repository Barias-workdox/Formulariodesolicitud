import { jsxs as R, jsx as a } from "react/jsx-runtime";
import { useMemo as T } from "react";
import { Avatar as U } from "../../avatar/next/avatar.js";
import { Tag as L } from "../../tag/next/tag.js";
import { StatefulTooltipNext as N } from "../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as O } from "../../utils/i18n/utils.js";
import { useResponsiveProps as B } from "../../../utils/use-responsive-props.util.js";
import { DEFAULT_SIZES as j, EMPTY_AVATARS as Z, multipleAvatarsKindMap as k, DEFAULT_KIND as y, DEFAULT_APPEARANCE as V, DEFAULT_MAX_COUNT as W } from "./multiple-avatars.constants.js";
import { multipleAvatarsTagKindMap as X } from "./multiple-avatars.interfaces.js";
import { getMultipleAvatarsAvatarOverrides as Y } from "./multiple-avatars.overrides.js";
import { MultipleAvatarsRoot as q, MultipleAvatarItemWrapper as M, MultipleAvatarsTooltipAnchor as G } from "./multiple-avatars.styles.js";
import { getCounterText as H, getCounterTooltipContent as J, shouldRenderImage as Q, getOverlapPxFromSize as tt } from "./multiple-avatars.utils.js";
const Mt = ({
  avatars: C,
  dataTestId: p = "multiple-avatars",
  sizes: A = j,
  kind: m = y,
  appearance: I = V,
  maxCount: $ = W,
  onAvatarClick: n,
  onCounterClick: d,
  disabled: o = !1
}) => {
  const { t: z } = O(), r = C ?? Z, c = Math.max(0, $), v = B(
    {
      extralarge: A,
      large: A,
      medium: "24px",
      small: "24px",
      extrasmall: "24px"
    },
    "24px"
  ), f = tt(v ?? "24px"), { visibleAvatars: u, overflowAvatars: E, overflowCount: x } = T(() => {
    const t = r.length >= 4, e = c === 0 ? 0 : t ? 1 : Math.min(c, r.length), l = e === 0 ? [] : r.slice(0, e), s = e === 0 ? r : r.slice(e);
    return {
      visibleAvatars: l,
      overflowAvatars: s,
      overflowCount: Math.max(0, s.length)
    };
  }, [r, c]), P = k[m], g = !!n && !o, i = !!d && !o, S = T(() => Y(), []), w = (t) => () => {
    n == null || n(t);
  };
  if (r.length === 0) return null;
  const F = H(x), b = v === "32px" ? "lg" : "md", h = J(E, z), _ = X[m], D = x ? /* @__PURE__ */ a(
    N,
    {
      content: h,
      showArrow: !0,
      placement: "bottom",
      zIndex: 99,
      children: /* @__PURE__ */ a(
        G,
        {
          type: "button",
          $isClickable: i && !o,
          "aria-label": h,
          "aria-disabled": o || !i || void 0,
          tabIndex: i && !o ? 0 : -1,
          onClick: i && !o ? d : void 0,
          children: /* @__PURE__ */ a(
            L,
            {
              "data-testid": `${p}--counter`,
              kind: _,
              variant: "light",
              size: b,
              disabled: o,
              children: F
            }
          )
        }
      )
    }
  ) : null;
  return /* @__PURE__ */ R(q, { "data-testid": p, children: [
    u.map((t, e) => {
      const l = Q({ item: t, appearance: I, kind: m }), s = l ? t.src : void 0, K = u.length - e + 1;
      return /* @__PURE__ */ a(
        M,
        {
          $overlapPx: f,
          $zIndex: K,
          $isFirst: e === 0,
          children: /* @__PURE__ */ a(
            U,
            {
              dataTestId: `${p}--avatar-${t.id}`,
              name: t.name,
              initials: t.initials,
              src: s,
              size: v,
              kind: P,
              appearance: l ? "image" : "filled",
              clickable: g,
              onClick: g ? w(t.id) : void 0,
              disabled: o,
              overrides: S,
              zIndex: 99
            }
          )
        },
        t.id
      );
    }),
    x ? /* @__PURE__ */ a(
      M,
      {
        $overlapPx: f,
        $zIndex: 0,
        $isFirst: u.length === 0,
        children: D
      }
    ) : null
  ] });
};
export {
  Mt as MultipleAvatars
};
//# sourceMappingURL=multiple-avatars.js.map
