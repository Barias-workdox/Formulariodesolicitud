import { jsx as t } from "react/jsx-runtime";
import { CodeBlock as l } from "@carbon/icons-react";
import "../../../button/button.js";
import { IconButton as f } from "../../../button/variants/icon-button/icon-button.js";
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
import { StatefulTooltipNext as h } from "../../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as P } from "../../../utils/i18n/utils.js";
import { CustomPromptsPopover as x } from "./components/custom-prompts-popover/custom-prompts-popover.js";
const M = ({
  dataTestId: o = "add-custom-prompt",
  customPrompts: i,
  isEditingDisabled: e,
  isOpen: r,
  zIndex: m,
  onClose: p,
  onCreateButtonClick: n,
  onCustomPromptClick: s,
  onCustomPromptDelete: c,
  onCustomPromptEdit: d,
  onOpen: u
}) => {
  const { t: a } = P();
  return /* @__PURE__ */ t(
    x,
    {
      "data-testid": `${o}__popover`,
      isEditingDisabled: e,
      isOpen: r,
      onClose: p,
      onCreateButtonClick: n,
      onCustomPromptClick: s,
      onCustomPromptDelete: c,
      onCustomPromptEdit: d,
      prompts: i,
      zIndex: m,
      children: /* @__PURE__ */ t(
        h,
        {
          content: a("webdoxAI.chat.customPrompts.mySavedPrompts"),
          placement: "bottomRight",
          showArrow: !0,
          zIndex: m,
          children: /* @__PURE__ */ t(
            f,
            {
              dataTestId: `${o}__button`,
              kind: "tertiary",
              size: "32px",
              onClick: r ? p : u,
              children: /* @__PURE__ */ t(l, {})
            }
          )
        }
      )
    }
  );
};
export {
  M as AddCustomPromptButton
};
//# sourceMappingURL=add-custom-prompt-button.js.map
