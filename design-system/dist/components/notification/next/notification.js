import { jsx as o, jsxs as m } from "react/jsx-runtime";
import { useMemo as $ } from "react";
import { Notification as b } from "baseui/notification";
import { BackgroundIcon as B } from "../../background-icon/background-icon.js";
import { Spinner as C } from "../../spinner/spinner.js";
import "baseui/modal";
import { mergeOverridesDeep as j } from "../../utils/baseui/helpers.js";
import "../../modal/components/modal-close-button/modal-close-button.js";
import "../../modal/regular-modal.js";
import "../../modal/sectioned-modal.js";
import "../../spinner/full-spinner/full-spinner-context.js";
import { Text as l } from "../../text/text.js";
import { useCss as D } from "../../utils/hooks/use-css.js";
import { noop as t } from "../../../utils/noop.js";
import { NotificationLink as L } from "./components/notification-link/notification-link.js";
import { getNotificationBaseOverrides as z, StyledNotification as A, StyledNotificationContent as M, iconVariants as V, StyledNotificationTexts as W, getTitleOverrides as q, getDescriptionOverrides as w, StyledNotificationActionContainer as E } from "./notification.styles.js";
const F = ({
  "data-testid": r = "notification",
  showSpinner: v = !1,
  closeable: a = !1,
  size: s = "default",
  kind: i = "info",
  overrides: c = {},
  title: n = "",
  description: g,
  direction: f = "vertical",
  Icon: p,
  onClose: h = t,
  onBlur: N = t,
  onFocus: u = t,
  onMouseEnter: S = t,
  onMouseLeave: x = t,
  actions: d = null
}) => {
  const { theme: e } = D(), y = $(() => {
    const O = z({
      "data-testid": r,
      size: s,
      kind: i,
      theme: e
    });
    return j(O, c);
  }, [r, s, i, e, c]);
  return /* @__PURE__ */ o(
    b,
    {
      "data-testid": r,
      closeable: a,
      onClose: h,
      onBlur: N,
      onFocus: u,
      onMouseEnter: S,
      onMouseLeave: x,
      overrides: y,
      children: /* @__PURE__ */ m(A, { children: [
        /* @__PURE__ */ m(M, { children: [
          v ? /* @__PURE__ */ o(
            C,
            {
              "data-testid": `${r}--spinner`,
              size: "sm"
            }
          ) : /* @__PURE__ */ o(
            B,
            {
              "data-testid": `${r}--icon-${i}`,
              size: "24px",
              ...V[i],
              ...p && { Icon: p }
            }
          ),
          /* @__PURE__ */ m(W, { $direction: f, children: [
            n && /* @__PURE__ */ o(
              l,
              {
                variant: "bodySmall",
                margin: 0,
                overrides: q(e, i),
                children: n
              }
            ),
            /* @__PURE__ */ o(
              l,
              {
                variant: "bodySmall",
                margin: 0,
                fontWeight: "400",
                overrides: w(e, f, !!n, i),
                children: g
              }
            )
          ] })
        ] }),
        d && /* @__PURE__ */ o(E, { $closeable: a, children: d })
      ] })
    }
  );
};
F.Link = L;
export {
  F as Notification
};
//# sourceMappingURL=notification.js.map
