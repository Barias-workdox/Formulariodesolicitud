import { jsx as o, jsxs as c } from "react/jsx-runtime";
import { useState as l, useRef as W, useMemo as y, useEffect as A } from "react";
import { ErrorFilled as E, WarningFilled as L } from "@carbon/icons-react";
import { useIdleTimer as _ } from "react-idle-timer";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as k } from "../utils/i18n/utils.js";
import { Button as B } from "../button/button.js";
import "../button/variants/icon-button/icon-button.js";
import "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import { useCss as C } from "../utils/hooks/use-css.js";
import { Modal as F } from "../modal/modal.js";
import { RegularModalHeader as U, RegularModalLabel as j, RegularModalBody as z, RegularModalFooter as G } from "../modal/regular-modal.js";
import "../modal/sectioned-modal.js";
import "../spinner/full-spinner/full-spinner-context.js";
import { Text as H } from "../text/text.js";
import { styles as V } from "./inactivity-modal.styles.js";
const Y = "inactivity-modal", $ = 1e3 * 60 * 15, n = 1e3 * 60 * 2, Mo = ({
  config: { timeout: e = $, onExpiredConfirm: M, onTimeout: d, title: h }
}) => {
  const { warningIconWrapperStyles: I, expiredIconWrapperStyles: T, bodyWrapperStyles: b, theme: s } = C(V), [i, p] = l(!1), a = W(i), [r, m] = l(!1), [f, v] = l(!1), { t } = k(), S = () => {
    p(!0), a.current = !0;
  }, x = y(() => e > n ? e - n : e * 0.25, [e]), u = y(() => e > n ? n : e * 0.75, [e]);
  A(() => {
    i && (m(!1), setTimeout(() => {
      a.current && (m(!0), d());
    }, u));
  }, [i, u, d]);
  function w() {
    i || g();
  }
  async function O() {
    r || (g(), p(!1), a.current = !1);
  }
  function R() {
    r ? (M(), v(!0)) : O();
  }
  const { reset: g } = _({
    timeout: x,
    onIdle: S,
    onAction: w,
    debounce: 5e3,
    crossTab: !0
  }), N = r ? /* @__PURE__ */ o("span", { className: T, children: /* @__PURE__ */ o(
    E,
    {
      size: 20,
      color: s.colors.sweet
    }
  ) }) : /* @__PURE__ */ o("span", { className: I, children: /* @__PURE__ */ o(
    L,
    {
      size: 20,
      color: s.colors.warning
    }
  ) });
  return /* @__PURE__ */ c(
    F,
    {
      isOpen: i,
      closeable: !1,
      children: [
        /* @__PURE__ */ c(U, { children: [
          /* @__PURE__ */ o(j, { children: h }),
          t("inactivityModal.subtitle")
        ] }),
        /* @__PURE__ */ o(z, { children: /* @__PURE__ */ c("div", { className: b, children: [
          N,
          /* @__PURE__ */ o(
            H,
            {
              variant: "body",
              color: "neutralSubdued",
              marginTop: s.spacing.spacingMd,
              marginBottom: 0,
              children: t(r ? "inactivityModal.expiredSession" : "inactivityModal.warning")
            }
          )
        ] }) }),
        /* @__PURE__ */ o(G, { children: /* @__PURE__ */ o(
          B,
          {
            "data-testid": `${Y}__confirm-button`,
            onClick: R,
            disabled: f,
            isLoading: f,
            children: t(r ? "inactivityModal.login" : "inactivityModal.keepSession")
          }
        ) })
      ]
    }
  );
};
export {
  Mo as InactivityModal
};
//# sourceMappingURL=inactivity-modal.js.map
