import { jsx as t, jsxs as m } from "react/jsx-runtime";
import { Save as c } from "@carbon/icons-react";
import { Button as p } from "../../../button/button.js";
import "../../../button/variants/icon-button/icon-button.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import "../../../../themes/v3/light/theme.js";
import "../../../../themes/v3/dark/theme.js";
import "../../../../themes/utilities.js";
import { Modal as f } from "../../../modal/modal.js";
import "../../../modal/regular-modal.js";
import { SectionedModalHeader as h, SectionedModalBody as u, SectionedModalFooter as b } from "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import "react-hook-form";
import "react";
import "baseui/form-control";
import "baseui";
import "../../../text/text.js";
import "baseui/tooltip";
import "baseui/textarea";
import "baseui/input";
import { noop as e } from "../../../../utils/noop.js";
import "lodash";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as x } from "../../../utils/i18n/utils.js";
import "../../../input/next/components/compound-end-enhancer/styled-components/styled-container.js";
import "../../../input/next/components/compound-start-enhancer/styled-components/styled-container.js";
import "../../../input/next/components/compound-start-enhancer/styled-components/styled-leading.js";
import "../../../input/next/components/compound-start-enhancer/styled-components/styled-prefix-text.js";
import "../../../input/next/components/compound-start-enhancer/styled-components/styled-right-column.js";
import "../../../input/next/input.overrides.js";
import { TextareaControlContainer as M } from "../../../forms/components/textarea-control/textarea-control-container.js";
import "baseui/checkbox";
import "@hookform/resolvers/yup";
import "@hookform/resolvers/zod";
import "lodash/debounce";
import "../../../utils/hooks/use-country-code-options/use-country-code-options.js";
import "baseui/select";
import "../../../select/next/styled-components/styled-icons-container.js";
import "../../../select/next/styled-components/styled-start-enhancer-container.js";
import "../../../select/next/components/select-dropdown-container.js";
import "../../../select/next/components/select-optgroup-header.js";
import "../../../radio/radio-group.js";
import "baseui/radio";
import { InputControlContainer as _ } from "../../../forms/components/input/input-control-container.js";
import "../../../forms/components/datepicker/datepicker-control.js";
import "yup";
import "../../../color-picker/next/color-picker.js";
import "../../../checkbox/checkbox.js";
import "../../../file-uploader/file-uploader.js";
import "baseui/menu";
import "../../../menu/stateful-menu-with-infinite-scroll/components/styled-list-with-infinite-scroll.js";
import "../../../dynamic-text-input/dynamic-text-input.js";
import "baseui/popover";
import "baseui/avatar";
import "../../../avatar/avatar.styles.js";
import "../../../input/input.js";
import "../../../layouts/title-layout/title-layout.styles.js";
import "../../../truncated-text/truncated-text.js";
import "resize-observer-polyfill";
import "react-is";
import "../../../tag/next/tag.styled-components.js";
import { TEXT_AREA_LENGTH as A } from "../../../../constants/form.constants.js";
import { inputOverrides as a } from "./custom-prompt-form-modal.overrides.js";
const Oo = ({
  isOpen: l,
  onClose: i = e,
  isLoading: r = !1,
  disabled: d = !0,
  onSubmit: n = e,
  zIndex: s
}) => {
  const { t: o } = x();
  return /* @__PURE__ */ t(
    f,
    {
      onClose: i,
      isOpen: l,
      zIndex: s,
      children: /* @__PURE__ */ m(
        "form",
        {
          "data-testid": "modal__form",
          onSubmit: n,
          children: [
            /* @__PURE__ */ t(h, { children: o("webdoxAI.chat.customPrompts.formModal.title") }),
            /* @__PURE__ */ m(u, { children: [
              /* @__PURE__ */ t(
                _,
                {
                  label: o("webdoxAI.chat.customPrompts.formModal.promptTitle.label"),
                  name: "title",
                  placeholder: o("webdoxAI.chat.customPrompts.formModal.promptTitle.placeholder"),
                  size: "md",
                  maxLength: A.small,
                  overrides: a
                }
              ),
              /* @__PURE__ */ t(
                M,
                {
                  label: o("webdoxAI.chat.customPrompts.formModal.promptContent.label"),
                  name: "content",
                  placeholder: o("webdoxAI.chat.customPrompts.formModal.promptContent.placeholder"),
                  size: "large",
                  overrides: a,
                  isBorderless: !0
                }
              )
            ] }),
            /* @__PURE__ */ m(b, { children: [
              /* @__PURE__ */ t(
                p,
                {
                  "data-testid": "modal__cancel-button",
                  size: "44px",
                  kind: "secondary",
                  onClick: i,
                  disabled: r,
                  children: o("general.cancel")
                }
              ),
              /* @__PURE__ */ t(
                p,
                {
                  "data-testid": "modal__save-button",
                  startEnhancer: /* @__PURE__ */ t(c, {}),
                  size: "44px",
                  kind: "primary",
                  disabled: d || r,
                  isLoading: r,
                  type: "submit",
                  children: o("general.save")
                }
              )
            ] })
          ]
        }
      )
    }
  );
};
export {
  Oo as CustomPromptFormModal
};
//# sourceMappingURL=custom-prompt-form-modal.js.map
