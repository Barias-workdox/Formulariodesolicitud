import { jsx as o, jsxs as P } from "react/jsx-runtime";
import { MessageBoxActions as R } from "./components/message-box-actions/message-box-actions.js";
import { MessageBoxRoot as S } from "./components/message-box-root/message-box-root.js";
import { TextEditor as T } from "./components/text-editor/text-editor.js";
import "@carbon/icons-react";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import "react";
import "./contexts/message-box.context.js";
import "@tiptap/react";
import "./utils/compose-message-box-test-id.utils.js";
import "../../button/button.js";
import "../../button/variants/icon-button/icon-button.js";
import "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import "../../../themes/v3/light/theme.js";
import "../../../themes/v3/dark/theme.js";
import "../../../themes/utilities.js";
import "baseui/modal";
import "baseui";
import "../../modal/components/modal-close-button/modal-close-button.js";
import "../../modal/regular-modal.js";
import "../../modal/sectioned-modal.js";
import "../../spinner/full-spinner/full-spinner-context.js";
import "./components/text-editor-toolbar/styled-components/styled-container.js";
import "./components/compact-message-box-actions/styled-components/styled-container.js";
import "./components/basic-message-box-actions/styled-components/styled-desktop-wrapper.js";
import "./components/basic-message-box-actions/styled-components/styled-mobile-wrapper.js";
import { MessageBoxProvider as b } from "./providers/message-box.provider.js";
import "./styled-components/styled-root.js";
import "./styled-components/styled-message-box-container.js";
import "./styled-components/styled-textarea-container.js";
import { StyledAddonsContainer as k } from "./styled-components/styled-addons-container.js";
const ho = ({
  addons: r,
  ariaLabel: t,
  autofocus: i,
  canSendWithEnter: m = !0,
  disabled: p = !1,
  isReadOnly: e = !1,
  extraActions: s,
  maxHeight: n,
  maxLength: f,
  margin: x,
  onChange: a,
  onSecondaryButtonClick: c,
  onSubmit: d,
  placeholder: l,
  plugins: g = [],
  primaryButtonIcon: B,
  primaryButtonProps: M,
  primaryButtonText: h,
  richTextEnabled: j,
  richTextOptions: u,
  secondaryButtonIcon: A,
  secondaryButtonProps: v,
  secondaryButtonText: y,
  defaultValue: C,
  width: E
}) => /* @__PURE__ */ o(
  b,
  {
    ariaLabel: t,
    autofocus: i,
    canSendWithEnter: m,
    disabled: p,
    isReadOnly: e,
    maxLength: f,
    onChange: a,
    onSubmit: d,
    placeholder: l,
    richTextEnabled: j,
    richTextOptions: u,
    defaultValue: C,
    children: /* @__PURE__ */ P(
      S,
      {
        margin: x,
        maxHeight: n,
        plugins: g,
        width: E,
        children: [
          r && /* @__PURE__ */ o(k, { children: r }),
          /* @__PURE__ */ o(
            T,
            {
              actions: /* @__PURE__ */ o(
                R,
                {
                  extraActions: s,
                  onSecondaryButtonClick: c,
                  primaryButtonIcon: B,
                  primaryButtonProps: M,
                  primaryButtonText: h,
                  secondaryButtonIcon: A,
                  secondaryButtonProps: v,
                  secondaryButtonText: y
                }
              )
            }
          )
        ]
      }
    )
  }
);
export {
  ho as MessageBox
};
//# sourceMappingURL=message-box.js.map
