import { jsx as i } from "react/jsx-runtime";
import { useState as k } from "react";
import { Checkmark as C, Copy as v } from "@carbon/icons-react";
import { Button as I } from "../../../button/button.js";
import "../../../button/variants/icon-button/icon-button.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import { useCss as A } from "../../../utils/hooks/use-css.js";
import "baseui/modal";
import "baseui";
import "../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../modal/regular-modal.js";
import "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import { StatefulTooltipNext as D } from "../../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as X } from "../../../utils/i18n/utils.js";
import { ariaKeyDownHandler as j } from "../../../utils/accessibility.utils.js";
import { styles as z } from "./copy-to-clipboard-button.styles.js";
const E = (e, o, a, n) => ({
  default: {
    Icon: v,
    tooltipTextKey: "copyToClipboardButton.defaultTooltipText",
    mainTooltipText: e,
    mainButtonText: a,
    textKey: "copyToClipboardButton.defaultText"
  },
  copied: {
    tooltipTextKey: "copyToClipboardButton.copiedTooltipText",
    Icon: C,
    mainTooltipText: o,
    mainButtonText: n,
    textKey: "copyToClipboardButton.defaultText"
  }
}), nt = ({
  "data-testid": e,
  value: o,
  tooltipText: a,
  copiedTooltipText: n,
  buttonText: d,
  copiedButtonText: T,
  children: r,
  buttonProps: u = {},
  tooltipProps: x = {},
  zIndex: f,
  buttonKind: b = "tertiary",
  onCopy: t
}) => {
  const [p, c] = k("default"), { t: s } = X(), { theme: m } = A(), { tooltipTextKey: y, mainTooltipText: B, Icon: g, textKey: w, mainButtonText: K } = E(
    a,
    n,
    d,
    T
  )[p], h = B ?? s(y), S = K ?? s(w), l = async () => {
    try {
      typeof o == "string" ? await navigator.clipboard.writeText(o) : await navigator.clipboard.write([o]), c("copied"), p === "default" && setTimeout(() => {
        c("default");
      }, 2e3), t == null || t();
    } catch {
      t == null || t(!0);
    }
  };
  return r ? /* @__PURE__ */ i(
    "div",
    {
      "data-testid": e,
      role: "button",
      tabIndex: 0,
      onClick: l,
      onKeyDown: j(l),
      children: typeof r == "function" ? r({ buttonState: p }) : r
    }
  ) : /* @__PURE__ */ i(
    D,
    {
      content: h,
      showArrow: !0,
      placement: "bottom",
      zIndex: f,
      ...x,
      children: /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
        I,
        {
          kind: b,
          size: "32px",
          "data-testid": e,
          onClick: l,
          overrides: {
            BaseButton: {
              style: z.buttonStyles(m, { state: p })
            }
          },
          endEnhancer: /* @__PURE__ */ i(g, {}),
          paddingLeft: m.spacing.spacingXs,
          paddingRight: m.spacing.spacingXs,
          ...u,
          children: S
        }
      ) })
    }
  );
};
export {
  nt as CopyToClipboardButton,
  E as getAllCopyToClipboardButtonStates
};
//# sourceMappingURL=copy-to-clipboard-button.js.map
