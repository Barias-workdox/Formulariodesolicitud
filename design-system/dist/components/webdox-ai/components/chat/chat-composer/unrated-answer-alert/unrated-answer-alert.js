import { jsxs as m, jsx as t } from "react/jsx-runtime";
import { Button as p } from "../../../../../button/button.js";
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
import { Text as e } from "../../../../../text/text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as n } from "../../../../../utils/i18n/utils.js";
import { noop as a } from "../../../../../../utils/noop.js";
import { StyledContainer as s } from "./styled-components/styled-container.js";
const G = ({
  dataTestId: o = "unrated-answer-alert",
  onClick: i = a
}) => {
  const { t: r } = n();
  return /* @__PURE__ */ m(s, { children: [
    /* @__PURE__ */ t(
      e,
      {
        variant: "bodySmall",
        margin: 0,
        children: r("webdoxAI.legalWhisperAnswerRating.unratedAnswerAlert")
      }
    ),
    /* @__PURE__ */ t(
      p,
      {
        dataTestId: o,
        onClick: i,
        kind: "primary",
        size: "32px",
        children: r("webdoxAI.legalWhisperAnswerRating.rateButton")
      }
    )
  ] });
};
export {
  G as UnratedAnswerAlert
};
//# sourceMappingURL=unrated-answer-alert.js.map
