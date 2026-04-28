import { jsx as o, jsxs as r } from "react/jsx-runtime";
import { useEffect as S } from "react";
import { SendAlt as g } from "@carbon/icons-react";
import { Button as c } from "../../../button/button.js";
import "../../../button/variants/icon-button/icon-button.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import { useCss as k } from "../../../utils/hooks/use-css.js";
import { Modal as v } from "../../../modal/modal.js";
import "../../../modal/regular-modal.js";
import { SectionedModalHeader as $, SectionedModalFooter as w } from "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import "react-hook-form";
import "baseui/form-control";
import "baseui";
import { Text as A } from "../../../text/text.js";
import "baseui/tooltip";
import "../../../radio/radio-group.js";
import "baseui/radio";
import { RadioGroupControlContainer as C } from "../../../forms/components/radio-group/radio-group-control-container.js";
import "baseui/textarea";
import "baseui/input";
import "lodash";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as M } from "../../../utils/i18n/utils.js";
import "../../../input/next/components/compound-end-enhancer/styled-components/styled-container.js";
import "../../../input/next/components/compound-start-enhancer/styled-components/styled-container.js";
import "../../../input/next/components/compound-start-enhancer/styled-components/styled-leading.js";
import "../../../input/next/components/compound-start-enhancer/styled-components/styled-prefix-text.js";
import "../../../input/next/components/compound-start-enhancer/styled-components/styled-right-column.js";
import "../../../input/next/input.overrides.js";
import { TextareaControlContainer as F } from "../../../forms/components/textarea-control/textarea-control-container.js";
import { chatBotModalStyles as B, modalOverrides as I, StyledSectionedModalBody as R } from "../../webdox-ai.styles.js";
import { getSectionedModalHeaderStyles as G, getStyledSectionedModalBodyStyles as N, radioGroupOverrides as j, formControlOverrides as z, getSectionedModalFooterStyles as E } from "./chat-bot-negative-feedback-modal.styles.js";
import { useNegativeFeedbackFormContext as H, getFormOptions as L } from "./chat-bot-negative-feedback-modal.utils.js";
const Mt = ({
  "data-testid": e = "modal",
  isLoading: i = !1,
  isOpen: m,
  zIndex: p,
  onClose: d,
  onSubmit: s
}) => {
  const { formContainerStyles: f, theme: a } = k(B), { t } = M(), {
    watch: b,
    handleSubmit: h,
    reset: n,
    resetField: u,
    formState: { isValid: y }
  } = H(), l = b("option"), x = t("webdoxAI.chat.feedback.modal.comments", {
    kind: t(`webdoxAI.chat.feedback.modal.${l !== "custom" ? "optional" : "mandatory"}`)
  });
  return S(() => {
    m || (n(), u("option"));
  }, [m, n]), /* @__PURE__ */ o(
    v,
    {
      isOpen: m,
      onClose: d,
      zIndex: p,
      autoFocus: !1,
      overrides: I(),
      children: /* @__PURE__ */ r(
        "form",
        {
          "data-testid": `${e}__form`,
          className: f,
          onSubmit: h(s),
          children: [
            /* @__PURE__ */ o($, { $style: G({ $theme: a }), children: t("webdoxAI.chat.feedback.modal.title", {
              kind: t("webdoxAI.chat.feedback.modal.negative.text")
            }) }),
            /* @__PURE__ */ r(R, { $style: N({ $theme: a }), children: [
              /* @__PURE__ */ o(
                A,
                {
                  variant: "body",
                  margin: 0,
                  color: "neutralSubdued",
                  fontWeight: "500",
                  children: t("webdoxAI.chat.feedback.modal.negative.body")
                }
              ),
              /* @__PURE__ */ r("div", { children: [
                /* @__PURE__ */ o(
                  C,
                  {
                    "data-testid": `${e}--optionRadioGroup`,
                    name: "option",
                    options: L(t),
                    align: "vertical",
                    formControlOverrides: z,
                    overrides: j
                  }
                ),
                l === "custom" && /* @__PURE__ */ o(
                  F,
                  {
                    "data-testid": `${e}-comments-textarea`,
                    label: x,
                    placeholder: t("webdoxAI.chat.feedback.modal.commentsPlaceholder"),
                    name: "comments",
                    kind: "gray",
                    maxLength: 255,
                    disabled: i
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ r(w, { $style: E({ $theme: a }), children: [
              /* @__PURE__ */ o(
                c,
                {
                  "data-testid": `${e}-cancel-button`,
                  kind: "secondary-brain",
                  paddingLeft: "1.25rem",
                  paddingRight: "1.25rem",
                  onClick: d,
                  children: t("webdoxAI.chat.feedback.modal.cancelButton")
                }
              ),
              /* @__PURE__ */ o(
                c,
                {
                  "data-testid": `${e}-confirm-button`,
                  kind: "primary-brain",
                  type: "submit",
                  size: "44px",
                  paddingLeft: "1.25rem",
                  paddingRight: "1.25rem",
                  startEnhancer: /* @__PURE__ */ o(g, { size: 20 }),
                  disabled: i || !y,
                  isLoading: i,
                  children: t("webdoxAI.chat.feedback.modal.submitButton")
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
  Mt as ChatBotNegativeFeedbackModal
};
//# sourceMappingURL=chat-bot-negative-feedback-modal.js.map
