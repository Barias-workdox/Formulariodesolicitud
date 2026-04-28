import { jsxs as T, jsx as t } from "react/jsx-runtime";
import { TextBold as u, TextItalic as x, TextUnderline as B } from "@carbon/icons-react";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as I } from "../../../../utils/i18n/utils.js";
import "react";
import "../../contexts/message-box.context.js";
import { useTextEditorToolbar as f } from "../../hooks/use-text-editor-toolbar.hook.js";
import { composeTextEditorToolbarTestId as e } from "../../utils/compose-message-box-test-id.utils.js";
import { ToolbarButton as r } from "./components/toolbar-button/toolbar-button.js";
import { StyledContainer as h } from "./styled-components/styled-container.js";
const G = () => {
  const {
    canBold: a,
    canItalic: l,
    canUnderline: n,
    disabled: o,
    isBold: d,
    isItalic: s,
    isUnderline: m,
    handleBold: c,
    handleItalic: p,
    handleUnderline: b
  } = f(), { t: i } = I();
  return /* @__PURE__ */ T(h, { children: [
    a && /* @__PURE__ */ t(
      r,
      {
        ariaLabel: i("messageBox.ariaLabels.boldButton"),
        dataTestId: e("__bold-button"),
        disabled: o,
        isActive: d,
        onClick: c,
        children: /* @__PURE__ */ t(u, {})
      }
    ),
    l && /* @__PURE__ */ t(
      r,
      {
        ariaLabel: i("messageBox.ariaLabels.italicButton"),
        dataTestId: e("__italic-button"),
        disabled: o,
        isActive: s,
        onClick: p,
        children: /* @__PURE__ */ t(x, {})
      }
    ),
    n && /* @__PURE__ */ t(
      r,
      {
        ariaLabel: i("messageBox.ariaLabels.underlineButton"),
        dataTestId: e("__underline-button"),
        disabled: o,
        isActive: m,
        onClick: b,
        children: /* @__PURE__ */ t(B, {})
      }
    )
  ] });
};
export {
  G as TextEditorToolbar
};
//# sourceMappingURL=text-editor-toolbar.js.map
