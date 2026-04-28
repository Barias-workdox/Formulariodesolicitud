import { jsx as t, jsxs as o } from "react/jsx-runtime";
import { useMemo as M } from "react";
import { Notification as R, KIND as _ } from "baseui/notification";
import { useCss as y } from "../utils/hooks/use-css.js";
import { Text as $ } from "../text/text.js";
import { ClearButton as H } from "../clear-button/clear-button.js";
import { StyledNotificationLink as K } from "./components/styled-notification-link/styled-notification-link.js";
import "baseui/toast";
import "../../themes/v3/light/theme.js";
import "../../themes/v3/dark/theme.js";
import "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import "../../themes/utilities.js";
import "../background-icon/background-icon.styles.js";
import "@carbon/icons-react";
import "./components/toast-close-icon/toast-close-icon.js";
import { kindStyles as O, notificationStyles as q, InnerContainerStyles as w, notificationOverrideStyles as z } from "./notification.styles.js";
const nt = ({
  "data-testid": i = "notification",
  message: r,
  duration: h = 5e3,
  kind: e = _.positive,
  width: v = "auto",
  closeable: N = !0,
  marginTop: u,
  marginBottom: S,
  marginLeft: C,
  marginRight: x,
  title: n,
  description: s,
  linkPath: a,
  linkText: c,
  linkType: I = "external",
  endEnhancer: m,
  ...W
}) => {
  const { theme: l } = y(), d = O(l, e), { icon: b, color: g } = d, { endEnhancerWrapper: j, notificationWrapper: k, textWrapper: B, titleStyles: D, verticalCenter: p } = y(q), E = M(() => s ?? r ?? "", [s, r]), f = a && c, L = f || m !== void 0;
  return /* @__PURE__ */ t(
    R,
    {
      kind: e,
      autoHideDuration: h,
      closeable: N,
      overrides: {
        CloseIcon: {
          component: H
        },
        Body: {
          style: z(l, {
            marginTop: u,
            marginBottom: S,
            marginLeft: C,
            marginRight: x,
            width: v,
            kindStyle: d
          })
        },
        InnerContainer: {
          style: w()
        }
      },
      ...W,
      children: /* @__PURE__ */ o(
        "div",
        {
          "data-testid": i,
          className: k,
          children: [
            /* @__PURE__ */ o("div", { className: p, children: [
              /* @__PURE__ */ t("div", { className: p, children: b }),
              /* @__PURE__ */ t("div", { className: B, children: /* @__PURE__ */ o(
                $,
                {
                  variant: "bodySmall",
                  color: g,
                  margin: 0,
                  children: [
                    n && /* @__PURE__ */ t("strong", { className: D, children: n }),
                    E
                  ]
                }
              ) })
            ] }),
            L && /* @__PURE__ */ o("div", { className: j, children: [
              f && /* @__PURE__ */ t(
                K,
                {
                  "data-testid": `${i}__link`,
                  linkPath: a,
                  linkText: c,
                  linkType: I
                }
              ),
              m
            ] })
          ]
        }
      )
    }
  );
};
export {
  nt as Notification
};
//# sourceMappingURL=notification.js.map
