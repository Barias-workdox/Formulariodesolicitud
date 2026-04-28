import { jsxs as a, jsx as o } from "react/jsx-runtime";
import { useRef as N } from "react";
import { SendAlt as q } from "@carbon/icons-react";
import { useClickAway as G } from "react-use";
import { Button as H } from "../button/button.js";
import "../button/variants/icon-button/icon-button.js";
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
import { StatefulTooltipNext as J } from "../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as Q } from "../utils/i18n/utils.js";
import { useMessageComposer as U } from "../../hooks/use-message-composer/use-message-composer.hook.js";
import { noop as s } from "../../utils/noop.js";
import { ExpandButton as V } from "./components/expand-button/expand-button.js";
import { MessageBoxTextarea as X } from "./components/message-box-textarea/message-box-textarea.js";
import { StyledRoot as Y } from "./styled-components/styled-root.js";
import { StyledFooter as Z } from "./styled-components/styled-footer.js";
import { StyledTextBoxContainer as _ } from "./styled-components/styled-text-box-container.js";
import { StyledTooltipAnchorContainer as E } from "./styled-components/styled-tooltip-anchor-container.js";
import { StyledExtraActionsContainer as L } from "./styled-components/styled-extra-actions-container.js";
const zt = ({
  "data-testid": i,
  addonsRef: m,
  buttonProps: x,
  closeOnClickAway: y = !0,
  defaultValue: $,
  disabled: l,
  isExpanded: t,
  isLoading: c,
  isOpen: r,
  infoTooltip: S,
  isWritingDisabled: f,
  extraActions: u,
  placeholder: d,
  zIndex: B,
  maxLength: b,
  onCreate: w = s,
  setIsExpanded: p = s,
  setIsOpen: n = s
}) => {
  const { t: g } = Q(), h = N(null), { handleChange: k, handleCreate: A, handleKeyDown: v, handlePaste: M, isEmpty: C, textareaRef: P, value: T } = U({
    defaultValue: $,
    maxLength: b,
    onCreate: (e) => {
      t && p(!1), w(e);
    },
    onEscape: () => {
      t ? p(!1) : n(!1);
    }
  }), { text: j, ...D } = x || {}, K = C || c;
  G(h, (e) => {
    const F = (m == null ? void 0 : m.current) && m.current.contains(e.target);
    y && C && (!t && r) && !F && n(!1);
  });
  const z = (e) => {
    r || n(!0), f || k(e.currentTarget.textContent || "");
  };
  return /* @__PURE__ */ a(
    Y,
    {
      "data-testid": `${i}--root`,
      ref: h,
      $isOpen: r,
      $isExpanded: t,
      $disabled: l,
      onClick: () => !l && n(!0),
      $overflow: "visible",
      children: [
        r && /* @__PURE__ */ o(
          V,
          {
            "data-testid": `${i}--${t ? "collapse" : "expand"}-button`,
            isExpanded: t,
            onClick: () => p(!t)
          }
        ),
        /* @__PURE__ */ o(
          J,
          {
            content: S,
            zIndex: B,
            showArrow: !0,
            placement: "top",
            children: /* @__PURE__ */ a(E, { children: [
              /* @__PURE__ */ o(_, { $isExpanded: t, children: /* @__PURE__ */ o(
                X,
                {
                  "data-testid": `${i}--textarea`,
                  disabled: l || f,
                  ref: P,
                  value: T,
                  placeholder: d,
                  onInput: z,
                  onKeyDown: v,
                  onPaste: M
                }
              ) }),
              r && /* @__PURE__ */ a(Z, { children: [
                u && /* @__PURE__ */ o(L, { children: u }),
                /* @__PURE__ */ o(
                  H,
                  {
                    "data-testid": `${i}--send-button`,
                    kind: "primary",
                    size: "32px",
                    disabled: K,
                    onClick: A,
                    isLoading: c,
                    startEnhancer: /* @__PURE__ */ o(q, {}),
                    ...D,
                    children: j || g("general.send")
                  }
                )
              ] })
            ] })
          }
        )
      ]
    }
  );
};
export {
  zt as MessageBox
};
//# sourceMappingURL=message-box.js.map
