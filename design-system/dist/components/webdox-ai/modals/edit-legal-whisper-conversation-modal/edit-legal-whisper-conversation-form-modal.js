import { jsx as o, jsxs as m } from "react/jsx-runtime";
import { Save as s } from "@carbon/icons-react";
import { Button as p } from "../../../button/next/button.js";
import "react-hook-form";
import "react";
import "baseui/form-control";
import "baseui";
import "../../../text/text.js";
import "baseui/tooltip";
import "../../../../themes/v3/light/theme.js";
import "../../../../themes/v3/dark/theme.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import "../../../../themes/utilities.js";
import "baseui/textarea";
import "baseui/input";
import { noop as e } from "../../../../utils/noop.js";
import "lodash";
import "../../../button/button.js";
import "../../../button/variants/icon-button/icon-button.js";
import { Modal as c } from "../../../modal/modal.js";
import "../../../modal/regular-modal.js";
import { SectionedModalHeader as h, SectionedModalBody as f, SectionedModalFooter as u } from "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
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
import "@hookform/resolvers/yup";
import "@hookform/resolvers/zod";
import "lodash/debounce";
import "baseui/checkbox";
import "../../../utils/hooks/use-country-code-options/use-country-code-options.js";
import "baseui/select";
import "../../../select/next/styled-components/styled-icons-container.js";
import "../../../select/next/styled-components/styled-start-enhancer-container.js";
import "../../../select/next/components/select-dropdown-container.js";
import "../../../select/next/components/select-optgroup-header.js";
import "../../../radio/radio-group.js";
import "baseui/radio";
import { InputControlContainer as b } from "../../../forms/components/input/input-control-container.js";
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
import { TEXT_AREA_LENGTH as g } from "../../../../constants/form.constants.js";
import { inputOverrides as v } from "./custom-prompt-form-modal.overrides.js";
const Lo = ({
  isLoading: t = !1,
  isOpen: l,
  disabled: n = !0,
  onClose: i = e,
  onSubmit: a = e,
  zIndex: d
}) => {
  const { t: r } = x();
  return /* @__PURE__ */ o(
    c,
    {
      onClose: i,
      isOpen: l,
      zIndex: d,
      children: /* @__PURE__ */ m("form", { onSubmit: a, children: [
        /* @__PURE__ */ o(h, { children: r("webdoxAI.legalWhisperSettings.editConversationModal.title") }),
        /* @__PURE__ */ o(f, { children: /* @__PURE__ */ o(
          b,
          {
            label: r("webdoxAI.legalWhisperSettings.editConversationModal.formControl.title.label"),
            name: "title",
            placeholder: r(
              "webdoxAI.legalWhisperSettings.editConversationModal.formControl.title.placeholder"
            ),
            size: "md",
            maxLength: g.small,
            overrides: v
          }
        ) }),
        /* @__PURE__ */ m(u, { children: [
          /* @__PURE__ */ o(
            p,
            {
              size: "44px",
              kind: "neutral",
              appearance: "outlined",
              onClick: i,
              disabled: t,
              children: r("general.cancel")
            }
          ),
          /* @__PURE__ */ o(
            p,
            {
              startEnhancer: s,
              size: "44px",
              disabled: n || t,
              isLoading: t,
              type: "submit",
              children: r("general.save")
            }
          )
        ] })
      ] })
    }
  );
};
export {
  Lo as EditLegalWhisperConversationFormModal
};
//# sourceMappingURL=edit-legal-whisper-conversation-form-modal.js.map
