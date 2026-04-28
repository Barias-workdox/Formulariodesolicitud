import { jsx as i } from "react/jsx-runtime";
import { useState as k } from "react";
import { Checkmark as K, Copy as S } from "@carbon/icons-react";
import { StatefulTooltipNext as h } from "../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import { ariaKeyDownHandler as y } from "../utils/accessibility.utils.js";
import "../button/button.js";
import { IconButton as I } from "../button/variants/icon-button/icon-button.js";
import "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import "../../themes/v3/light/theme.js";
import "../../themes/v3/dark/theme.js";
import "../../themes/utilities.js";
import "baseui/modal";
import "baseui";
import "../modal/components/modal-close-button/modal-close-button.js";
import "../modal/regular-modal.js";
import "../modal/sectioned-modal.js";
import "../spinner/full-spinner/full-spinner-context.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as g } from "../utils/i18n/utils.js";
const v = (o, r) => ({
  default: {
    Icon: S,
    tooltipTextKey: "copyToClipboardButton.defaultTooltipText",
    mainTooltipText: o
  },
  copied: {
    tooltipTextKey: "copyToClipboardButton.copiedTooltipText",
    Icon: K,
    mainTooltipText: r
  }
}), ot = ({
  "data-testid": o,
  text: r,
  tooltipText: l,
  copiedTooltipText: n,
  buttonKind: c = "control",
  buttonSize: T = "32px",
  children: p,
  iconButtonProps: d = {},
  tooltipProps: u = {},
  zIndex: s,
  onCopy: t
}) => {
  const [m, a] = k("default"), { t: x } = g(), { tooltipTextKey: f, mainTooltipText: b, Icon: w } = v(
    l,
    n
  )[m], B = b ?? x(f), e = async () => {
    try {
      await navigator.clipboard.writeText(r), a("copied"), m === "default" && setTimeout(() => {
        a("default");
      }, 2e3), t == null || t();
    } catch {
      t == null || t(!0);
    }
  };
  return p ? /* @__PURE__ */ i(
    "div",
    {
      "data-testid": o,
      role: "button",
      tabIndex: 0,
      onClick: e,
      onKeyDown: y(e),
      children: p
    }
  ) : /* @__PURE__ */ i(
    h,
    {
      content: B,
      showArrow: !0,
      placement: "bottom",
      zIndex: s,
      ...u,
      children: /* @__PURE__ */ i(
        I,
        {
          "data-testid": o,
          kind: c,
          size: T,
          onClick: e,
          ...d,
          children: /* @__PURE__ */ i(w, {})
        }
      )
    }
  );
};
export {
  ot as CopyToClipboardButton
};
//# sourceMappingURL=copy-to-clipboard-button.js.map
