import { jsx as o } from "react/jsx-runtime";
import { Button as l } from "../../../../../button/button.js";
import "../../../../../button/variants/icon-button/icon-button.js";
import "../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../../themes/v3/light/theme.js";
import "../../../../../../themes/v3/dark/theme.js";
import "../../../../../../themes/utilities.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../../modal/regular-modal.js";
import "../../../../../modal/sectioned-modal.js";
import "../../../../../spinner/full-spinner/full-spinner-context.js";
import "@carbon/icons-react";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as s } from "../../../../../utils/i18n/utils.js";
import { noop as i } from "../../../../../../utils/noop.js";
import "../../styled-components/styled-container.js";
import "../../styled-components/styled-body.js";
import { StyledFooter as a } from "../../styled-components/styled-footer.js";
import "../../styled-components/styled-title-container.js";
import "../../styled-components/styled-radio-description-with-textarea.js";
import "../../styled-components/styled-quotes-container.js";
import "../../styled-components/styled-radio-description-container.js";
import "../../styled-components/styled-success-message-container.js";
import "../../styled-components/styled-success-message-options-container.js";
const Q = ({
  disabled: m,
  isLastStep: t = !1,
  isLoading: p = !1,
  nextStep: e = i,
  onSubmit: n = i
}) => {
  const { t: r } = s();
  return /* @__PURE__ */ o(a, { children: /* @__PURE__ */ o(
    l,
    {
      "data-testid": "legal-whisper-answer-rating__step-footer__button",
      kind: "primary-whisper",
      fullWidth: !0,
      disabled: m,
      onClick: t ? n : e,
      isLoading: p,
      children: r(t ? "webdoxAI.legalWhisperAnswerRating.submitButton" : "general.continue")
    }
  ) });
};
export {
  Q as StepFooter
};
//# sourceMappingURL=step-footer.js.map
