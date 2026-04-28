import { jsxs as i, Fragment as b, jsx as o } from "react/jsx-runtime";
import { useCallback as S } from "react";
import { useFormContext as w } from "react-hook-form";
import "baseui/form-control";
import "baseui";
import "@carbon/icons-react";
import { Text as e } from "../../../../../text/text.js";
import "baseui/tooltip";
import "../../../../../../themes/v3/light/theme.js";
import "../../../../../../themes/v3/dark/theme.js";
import "../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../../themes/utilities.js";
import "baseui/textarea";
import "baseui/input";
import { noop as n } from "../../../../../../utils/noop.js";
import "lodash";
import "../../../../../button/button.js";
import "../../../../../button/variants/icon-button/icon-button.js";
import "baseui/modal";
import "../../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../../modal/regular-modal.js";
import "../../../../../modal/sectioned-modal.js";
import "../../../../../spinner/full-spinner/full-spinner-context.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as x } from "../../../../../utils/i18n/utils.js";
import "../../../../../input/next/components/compound-end-enhancer/styled-components/styled-container.js";
import "../../../../../input/next/components/compound-start-enhancer/styled-components/styled-container.js";
import "../../../../../input/next/components/compound-start-enhancer/styled-components/styled-leading.js";
import "../../../../../input/next/components/compound-start-enhancer/styled-components/styled-prefix-text.js";
import "../../../../../input/next/components/compound-start-enhancer/styled-components/styled-right-column.js";
import "../../../../../input/next/input.overrides.js";
import "@hookform/resolvers/yup";
import "@hookform/resolvers/zod";
import "lodash/debounce";
import "baseui/checkbox";
import "../../../../../utils/hooks/use-country-code-options/use-country-code-options.js";
import "baseui/select";
import "../../../../../select/next/styled-components/styled-icons-container.js";
import "../../../../../select/next/styled-components/styled-start-enhancer-container.js";
import "../../../../../select/next/components/select-dropdown-container.js";
import "../../../../../select/next/components/select-optgroup-header.js";
import { RadioGroupControl as A } from "../../../../../forms/components/radio-group/radio-group-control.js";
import "../../../../../forms/components/datepicker/datepicker-control.js";
import "yup";
import "../../../../../color-picker/next/color-picker.js";
import "../../../../../checkbox/checkbox.js";
import "../../../../../file-uploader/file-uploader.js";
import "baseui/menu";
import "../../../../../menu/stateful-menu-with-infinite-scroll/components/styled-list-with-infinite-scroll.js";
import "../../../../../dynamic-text-input/dynamic-text-input.js";
import "baseui/popover";
import "baseui/avatar";
import "../../../../../avatar/avatar.styles.js";
import "../../../../../input/input.js";
import "../../../../../layouts/title-layout/title-layout.styles.js";
import "../../../../../truncated-text/truncated-text.js";
import "resize-observer-polyfill";
import "react-is";
import "../../../../../tag/next/tag.styled-components.js";
import "../../../../../radio/radio-group.js";
import "baseui/radio";
import { DetailedRadio as p } from "../../../../../radio/components/detailed-radio/detailed-radio.js";
import { QuoteType as m } from "../../legal-whisper-answer-rating.constants.js";
import { radioGroupControlOverrides as q, detailedRadioOverrides as a } from "../../legal-whisper-answer-rating.styles.js";
import "../../styled-components/styled-container.js";
import { StyledBody as _ } from "../../styled-components/styled-body.js";
import "../../styled-components/styled-footer.js";
import "../../styled-components/styled-title-container.js";
import "../../styled-components/styled-radio-description-with-textarea.js";
import "../../styled-components/styled-quotes-container.js";
import "../../styled-components/styled-radio-description-container.js";
import "../../styled-components/styled-success-message-container.js";
import "../../styled-components/styled-success-message-options-container.js";
import { composeDataTestId as t } from "../../utils/compose-data-test-id.util.js";
import { StepFooter as R } from "../step-footer/step-footer.js";
import { StepHeader as j } from "../step-header/step-header.js";
const ar = ({
  answer: { quotes: s } = {},
  prevStep: d = n,
  nextStep: u = n
}) => {
  const { t: r } = x(), {
    resetField: l,
    formState: { dirtyFields: v, errors: c }
  } = w(), T = v.quoteTypeToImprove, g = !!c.quoteTypeToImprove, { administrativeQuotes: f = [], jurisprudentialQuotes: y = [], legalQuotes: h = [] } = s || {}, I = S(() => {
    l("quoteTypeToImprove"), d();
  }, [l, d]);
  return /* @__PURE__ */ i(b, { children: [
    /* @__PURE__ */ i(_, { children: [
      /* @__PURE__ */ o(
        j,
        {
          onBack: I,
          "data-testid": t("__header"),
          title: r("webdoxAI.legalWhisperAnswerRating.quoteTypeToImprove.title")
        }
      ),
      /* @__PURE__ */ i(
        A,
        {
          name: "quoteTypeToImprove",
          error: !1,
          formControlOverrides: q,
          children: [
            h.length > 0 && /* @__PURE__ */ o(
              p,
              {
                overrides: a,
                "data-testid": t("__detailed-radio-legal"),
                description: /* @__PURE__ */ o(
                  e,
                  {
                    variant: "bodySmall",
                    margin: 0,
                    color: "neutralSubdued",
                    children: r("webdoxAI.legalWhisperAnswerRating.quoteTypeToImprove.options.legal")
                  }
                ),
                value: m.Legal
              }
            ),
            y.length > 0 && /* @__PURE__ */ o(
              p,
              {
                overrides: a,
                "data-testid": t("__detailed-radio-jurisprudential"),
                description: /* @__PURE__ */ o(
                  e,
                  {
                    variant: "bodySmall",
                    margin: 0,
                    color: "neutralSubdued",
                    children: r(
                      "webdoxAI.legalWhisperAnswerRating.quoteTypeToImprove.options.jurisprudential"
                    )
                  }
                ),
                value: m.Jurisprudential
              }
            ),
            f.length > 0 && /* @__PURE__ */ o(
              p,
              {
                overrides: a,
                "data-testid": t("__detailed-radio-administrative"),
                description: /* @__PURE__ */ o(
                  e,
                  {
                    variant: "bodySmall",
                    margin: 0,
                    color: "neutralSubdued",
                    children: r("webdoxAI.legalWhisperAnswerRating.quoteTypeToImprove.options.administrative")
                  }
                ),
                value: m.Administrative
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ o(
      R,
      {
        disabled: g || !T,
        nextStep: u
      }
    )
  ] });
};
export {
  ar as QuoteTypeToImproveStep
};
//# sourceMappingURL=quote-type-to-improve-step.js.map
