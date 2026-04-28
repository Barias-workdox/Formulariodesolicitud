import { jsx as r, jsxs as I, Fragment as $ } from "react/jsx-runtime";
import { ChevronRight as w } from "@carbon/icons-react";
import { Link as E } from "react-router-dom";
import { Avatar as F } from "../../../avatar/avatar.js";
import { BackgroundIcon as T } from "../../../background-icon/background-icon.js";
import { useSidebar as Z } from "../../sidebar.provider.js";
import { Text as j } from "../../../text/text.js";
import { StatefulTooltipNext as A } from "../../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import { useCss as G } from "../../../utils/hooks/use-css.js";
import { COMMON_ICON_SIZE_16 as q } from "../../../../constants/common.constants.js";
import { sanitizeUrl as H } from "../../../../utils/url.utils.js";
import { Sublink as U } from "../sublink/sublink.js";
import { useSidebarLinkSublink as x } from "./hooks/use-sidebar-link-sublink.hook.js";
import { SIZE_MAPPING as O, ICON_SIZE_MAPPING as J } from "./sidebar-link.constants.js";
import { getAvatarOverrides as K, getBackgroundIconOverrides as Q, getTextOverrides as V } from "./sidebar-link.overrides.js";
import { styles as X } from "./sidebar-link.styles.js";
const fr = ({
  href: i,
  Icon: d,
  text: o,
  onClick: u,
  isActive: s,
  isAvatar: c,
  isDisabled: f,
  isExternal: N,
  hideTextWhenCollapsed: t = !0,
  subLinks: M = [],
  variant: m = "large",
  ...p
}) => {
  const { isCollapsed: e } = Z(), {
    hasSubLinks: h,
    isHovered: l,
    linkRef: k,
    shouldShowSublink: C,
    sublinkItems: _,
    sublinkPosition: S,
    sublinkRef: B,
    handleMouseEnter: a,
    handleMouseOut: y,
    handleBlur: b
  } = x({ subLinks: M, isDisabled: f }), { rootStyles: g, chevronStyles: z } = G(X, {
    isAvatar: c,
    isActive: s,
    isHovered: l,
    isDisabled: f,
    isCollapsed: e
  }), n = `sidebar-link__${H(i)}`, L = o && (!t || !e), P = h && (!e || !t), R = e && t && !h ? o : void 0, v = () => /* @__PURE__ */ I($, { children: [
    c ? /* @__PURE__ */ r(
      F,
      {
        size: O[m],
        name: o,
        showTooltip: !1,
        overrides: K({ isActive: s, isHovered: l })
      }
    ) : /* @__PURE__ */ r(
      T,
      {
        "data-testid": `${n}__icon`,
        shape: "square",
        size: O[m],
        overrides: Q({ isActive: s, isHovered: l }),
        children: d && /* @__PURE__ */ r(d, { size: J[m] })
      }
    ),
    L && /* @__PURE__ */ r(
      j,
      {
        variant: "bodySmall",
        overrides: V({ isCollapsed: e, hideTextWhenCollapsed: t }),
        children: o
      }
    ),
    P && /* @__PURE__ */ r(
      w,
      {
        "data-testid": `${n}__chevron`,
        size: q,
        className: z
      }
    )
  ] });
  return /* @__PURE__ */ r(
    A,
    {
      showArrow: !0,
      ignoreBoundary: !0,
      placement: "right",
      content: R,
      children: /* @__PURE__ */ I(
        "div",
        {
          onMouseOver: a,
          onMouseOut: y,
          onFocus: a,
          onBlur: b,
          onFocusCapture: a,
          onBlurCapture: b,
          children: [
            N ? /* @__PURE__ */ r(
              "a",
              {
                "data-testid": `${n}__link`,
                href: i,
                onClick: u,
                className: g,
                target: "_blank",
                rel: "noopener noreferrer",
                ref: k,
                ...p,
                children: v()
              }
            ) : /* @__PURE__ */ r(
              E,
              {
                "data-testid": `${n}__link`,
                to: i,
                onClick: u,
                className: g,
                ref: k,
                ...p,
                children: v()
              }
            ),
            C && S && _.length > 0 && /* @__PURE__ */ r(
              U,
              {
                ref: B,
                title: o ?? "",
                items: _,
                position: S
              }
            )
          ]
        }
      )
    }
  );
};
export {
  fr as SidebarLink
};
//# sourceMappingURL=sidebar-link.js.map
