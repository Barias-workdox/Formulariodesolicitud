import { jsxs as n, Fragment as y, jsx as o } from "react/jsx-runtime";
import { useCallback as R, useEffect as _ } from "react";
import { useFormContext as F } from "react-hook-form";
import "baseui/form-control";
import "baseui";
import "@carbon/icons-react";
import { Text as l } from "../../../../../text/text.js";
import "baseui/tooltip";
import "../../../../../../themes/v3/light/theme.js";
import "../../../../../../themes/v3/dark/theme.js";
import "../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../../themes/utilities.js";
import "baseui/textarea";
import "baseui/input";
import { noop as d } from "../../../../../../utils/noop.js";
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
import { useTranslation as W } from "../../../../../utils/i18n/utils.js";
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
import { RadioGroupControl as C } from "../../../../../forms/components/radio-group/radio-group-control.js";
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
import { DetailedRadio as s } from "../../../../../radio/components/detailed-radio/detailed-radio.js";
import { checkQuoteProblemUsed as u } from "../../../../utils/answer-rating.util.js";
import { QuoteProblem as t } from "../../legal-whisper-answer-rating.constants.js";
import { radioGroupControlOverrides as O, detailedRadioOverrides as c } from "../../legal-whisper-answer-rating.styles.js";
import "../../styled-components/styled-container.js";
import { StyledBody as D } from "../../styled-components/styled-body.js";
import "../../styled-components/styled-footer.js";
import "../../styled-components/styled-title-container.js";
import "../../styled-components/styled-radio-description-with-textarea.js";
import "../../styled-components/styled-quotes-container.js";
import "../../styled-components/styled-radio-description-container.js";
import "../../styled-components/styled-success-message-container.js";
import "../../styled-components/styled-success-message-options-container.js";
import { composeDataTestId as i } from "../../utils/compose-data-test-id.util.js";
import { DetailedRadioWithTextarea as N } from "../detailed-radio-with-textarea/detailed-radio-with-textarea.js";
import { StepFooter as k } from "../step-footer/step-footer.js";
import { StepHeader as L } from "../step-header/step-header.js";
const It = ({
  prevSubmittedValues: p,
  prevStep: b = d,
  nextStep: g = d,
  onSubmit: q = d
}) => {
  const { t: r } = W(), {
    watch: h,
    resetField: e,
    formState: { errors: f, dirtyFields: v, isSubmitting: w }
  } = F(), I = h("quoteProblem"), m = h("quoteTypeToImprove"), a = I === t.Other, P = !!f.quoteProblem || !!f.observations, S = v.quoteProblem && (a ? v.observations : !0), Q = !u(
    t.QuoteNotInForce,
    m,
    p
  ), x = !u(
    t.IrrelevantQuote,
    m,
    p
  ), A = !u(
    t.IncorrectQuoteInformation,
    m,
    p
  ), T = R(() => {
    e("observations"), e("quoteProblem"), b();
  }, [e, b]);
  return _(() => {
    e("observations");
  }, [I, e]), /* @__PURE__ */ n(y, { children: [
    /* @__PURE__ */ n(D, { children: [
      /* @__PURE__ */ o(
        L,
        {
          "data-testid": i("__header"),
          title: r("webdoxAI.legalWhisperAnswerRating.quoteProblem.title", {
            quoteType: String(
              r(
                `webdoxAI.legalWhisperAnswerRating.quoteTypeToImprove.options.${m}`
              )
            ).toLowerCase()
          }),
          onBack: T
        }
      ),
      /* @__PURE__ */ n(
        C,
        {
          name: "quoteProblem",
          error: !1,
          formControlOverrides: O,
          children: [
            Q && /* @__PURE__ */ o(
              s,
              {
                overrides: c,
                "data-testid": i("__detailed-radio-quote-not-in-force"),
                description: /* @__PURE__ */ o(
                  l,
                  {
                    variant: "bodySmall",
                    margin: 0,
                    color: "neutralSubdued",
                    children: r("webdoxAI.legalWhisperAnswerRating.quoteProblem.options.quoteNotInForce")
                  }
                ),
                value: t.QuoteNotInForce
              }
            ),
            x && /* @__PURE__ */ o(
              s,
              {
                overrides: c,
                "data-testid": i("__detailed-radio-irrelevant-quote"),
                description: /* @__PURE__ */ o(
                  l,
                  {
                    variant: "bodySmall",
                    margin: 0,
                    color: "neutralSubdued",
                    children: r("webdoxAI.legalWhisperAnswerRating.quoteProblem.options.irrelevantQuote")
                  }
                ),
                value: t.IrrelevantQuote
              }
            ),
            A && /* @__PURE__ */ o(
              s,
              {
                overrides: c,
                "data-testid": i("__detailed-radio-incorrect-quote-information"),
                description: /* @__PURE__ */ o(
                  l,
                  {
                    variant: "bodySmall",
                    margin: 0,
                    color: "neutralSubdued",
                    children: r(
                      "webdoxAI.legalWhisperAnswerRating.quoteProblem.options.incorrectQuoteInformation"
                    )
                  }
                ),
                value: t.IncorrectQuoteInformation
              }
            ),
            /* @__PURE__ */ o(
              N,
              {
                description: r("webdoxAI.legalWhisperAnswerRating.quoteProblem.options.other"),
                showObservationTextarea: a,
                "data-testid": i("__detailed-radio-other"),
                value: t.Other
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ o(
      k,
      {
        disabled: P || !S,
        isLastStep: a,
        nextStep: g,
        onSubmit: q,
        isLoading: w
      }
    )
  ] });
};
export {
  It as QuoteProblemStep
};
//# sourceMappingURL=quote-problem-step.js.map
