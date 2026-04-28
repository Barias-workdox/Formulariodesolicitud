import { jsx as o, jsxs as d } from "react/jsx-runtime";
import "../../../button/button.js";
import "../../../button/variants/icon-button/icon-button.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import "../../../../themes/v3/light/theme.js";
import "../../../../themes/v3/dark/theme.js";
import "../../../../themes/utilities.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../modal/regular-modal.js";
import "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import "@carbon/icons-react";
import "../contexts/message-box.context.js";
import "@tiptap/react";
import "../components/basic-message-box-actions/styled-components/styled-desktop-wrapper.js";
import "../components/basic-message-box-actions/styled-components/styled-mobile-wrapper.js";
import "../utils/compose-message-box-test-id.utils.js";
import "../components/message-box-actions/styled-components/styled-container.js";
import "../components/message-box-actions/styled-components/styled-extra-actions-container.js";
import { MessageBoxRoot as l } from "../components/message-box-root/message-box-root.js";
import { TextEditor as g } from "../components/text-editor/text-editor.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import "../components/text-editor-toolbar/styled-components/styled-container.js";
import { CompactMessageBoxActions as B } from "../components/compact-message-box-actions/compact-message-box-actions.js";
import { MessageBoxProvider as M } from "../providers/message-box.provider.js";
import "../styled-components/styled-root.js";
import "../styled-components/styled-message-box-container.js";
import "../styled-components/styled-textarea-container.js";
import { StyledAddonsContainer as h } from "../styled-components/styled-addons-container.js";
const po = ({
  addons: r,
  disabled: t = !1,
  maxHeight: i,
  onChange: m,
  onSecondaryButtonClick: p,
  onSubmit: e,
  placeholder: s,
  primaryButtonProps: a,
  primaryButtonText: c,
  secondaryButtonProps: n,
  secondaryButtonText: x,
  defaultValue: f
}) => /* @__PURE__ */ o(
  M,
  {
    disabled: t,
    onChange: m,
    placeholder: s,
    defaultValue: f,
    onSubmit: e,
    children: /* @__PURE__ */ d(l, { maxHeight: i, children: [
      r && /* @__PURE__ */ o(h, { children: r }),
      /* @__PURE__ */ o(
        g,
        {
          variant: "compact",
          actions: /* @__PURE__ */ o(
            B,
            {
              onSecondaryButtonClick: p,
              primaryButtonProps: a,
              primaryButtonText: c,
              secondaryButtonProps: n,
              secondaryButtonText: x
            }
          )
        }
      )
    ] })
  }
);
export {
  po as CompactMessageBox
};
//# sourceMappingURL=compact-message-box.js.map
