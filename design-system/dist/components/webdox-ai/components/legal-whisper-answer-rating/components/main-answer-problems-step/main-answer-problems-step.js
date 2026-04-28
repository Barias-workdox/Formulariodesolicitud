import { jsxs as p, Fragment as P, jsx as o } from "react/jsx-runtime";
import { useCallback as x, useEffect as S } from "react";
import { useFormContext as R } from "react-hook-form";
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
import { noop as b } from "../../../../../../utils/noop.js";
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
import { useTranslation as _ } from "../../../../../utils/i18n/utils.js";
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
import { RadioGroupControl as I } from "../../../../../forms/components/radio-group/radio-group-control.js";
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
import { DetailedRadio as c } from "../../../../../radio/components/detailed-radio/detailed-radio.js";
import { MainAnswerProblem as i } from "../../legal-whisper-answer-rating.constants.js";
import { radioGroupControlOverrides as W, detailedRadioOverrides as w } from "../../legal-whisper-answer-rating.styles.js";
import "../../styled-components/styled-container.js";
import { StyledBody as y } from "../../styled-components/styled-body.js";
import "../../styled-components/styled-footer.js";
import "../../styled-components/styled-title-container.js";
import "../../styled-components/styled-radio-description-with-textarea.js";
import "../../styled-components/styled-quotes-container.js";
import "../../styled-components/styled-radio-description-container.js";
import "../../styled-components/styled-success-message-container.js";
import "../../styled-components/styled-success-message-options-container.js";
import { composeDataTestId as e } from "../../utils/compose-data-test-id.util.js";
import { DetailedRadioWithTextarea as O } from "../detailed-radio-with-textarea/detailed-radio-with-textarea.js";
import { StepFooter as T } from "../step-footer/step-footer.js";
import { StepHeader as C } from "../step-header/step-header.js";
const dr = ({
  prevStep: n = b,
  onSubmit: g = b
}) => {
  const { t } = _(), {
    watch: A,
    resetField: r,
    formState: { dirtyFields: a, errors: s, isSubmitting: h }
  } = R(), m = A("mainAnswerProblem"), d = m === i.Other, u = !!s.mainAnswerProblem || !!s.observations, f = a.mainAnswerProblem && (d ? a.observations : !0), v = x(() => {
    r("observations"), r("mainAnswerProblem"), n();
  }, [r, n]);
  return S(() => {
    r("observations");
  }, [m, r]), /* @__PURE__ */ p(P, { children: [
    /* @__PURE__ */ p(y, { children: [
      /* @__PURE__ */ o(
        C,
        {
          onBack: v,
          "data-testid": e("__header"),
          title: t("webdoxAI.legalWhisperAnswerRating.mainAnswerProblem.title")
        }
      ),
      /* @__PURE__ */ p(
        I,
        {
          name: "mainAnswerProblem",
          error: !1,
          formControlOverrides: W,
          value: m,
          children: [
            /* @__PURE__ */ o(
              c,
              {
                overrides: w,
                "data-testid": e("__detailed-radio-not-aligned-with-investigation"),
                description: /* @__PURE__ */ o(
                  l,
                  {
                    variant: "bodySmall",
                    margin: 0,
                    color: "neutralSubdued",
                    children: t(
                      "webdoxAI.legalWhisperAnswerRating.mainAnswerProblem.options.notAlignedWithInvestigation"
                    )
                  }
                ),
                value: i.NotAlignedWithInvestigation
              }
            ),
            /* @__PURE__ */ o(
              c,
              {
                overrides: w,
                "data-testid": e("__detailed-radio-too-long"),
                description: /* @__PURE__ */ o(
                  l,
                  {
                    variant: "bodySmall",
                    margin: 0,
                    color: "neutralSubdued",
                    children: t("webdoxAI.legalWhisperAnswerRating.mainAnswerProblem.options.tooLong")
                  }
                ),
                value: i.TooLong
              }
            ),
            /* @__PURE__ */ o(
              O,
              {
                description: t("webdoxAI.legalWhisperAnswerRating.mainAnswerProblem.options.other"),
                showObservationTextarea: d,
                "data-testid": e("__detailed-radio-other"),
                value: i.Other
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ o(
      T,
      {
        disabled: u || !f,
        isLastStep: !0,
        onSubmit: g,
        isLoading: h
      }
    )
  ] });
};
export {
  dr as MainAnswerProblemsStep
};
//# sourceMappingURL=main-answer-problems-step.js.map
