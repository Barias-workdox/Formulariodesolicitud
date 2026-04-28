import { jsxs as i, Fragment as g, jsx as r } from "react/jsx-runtime";
import { useState as I, useEffect as P } from "react";
import { LicenseDraft as C } from "@carbon/icons-react";
import { useAutoAnimate as W } from "@formkit/auto-animate/react";
import { useFormContext as O } from "react-hook-form";
import "baseui/form-control";
import "baseui";
import { Text as t } from "../../../../../text/text.js";
import "baseui/tooltip";
import "../../../../../../themes/v3/light/theme.js";
import "../../../../../../themes/v3/dark/theme.js";
import "../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../../themes/utilities.js";
import "baseui/textarea";
import "baseui/input";
import { noop as f } from "../../../../../../utils/noop.js";
import "lodash";
import "../../../../../button/button.js";
import "../../../../../button/variants/icon-button/icon-button.js";
import { COMMON_ICON_SIZE_24 as D } from "../../../../../../constants/common.constants.js";
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
import { useTranslation as E } from "../../../../../utils/i18n/utils.js";
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
import { RadioGroupControl as L } from "../../../../../forms/components/radio-group/radio-group-control.js";
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
import { DetailedRadio as m } from "../../../../../radio/components/detailed-radio/detailed-radio.js";
import { MAX_RATING_VALUE as w, AnswerProblem as a } from "../../legal-whisper-answer-rating.constants.js";
import { radioGroupControlOverrides as T, detailedRadioOverrides as p } from "../../legal-whisper-answer-rating.styles.js";
import "../../styled-components/styled-container.js";
import { StyledBody as F } from "../../styled-components/styled-body.js";
import "../../styled-components/styled-footer.js";
import { StyledTitleContainer as M } from "../../styled-components/styled-title-container.js";
import "../../styled-components/styled-radio-description-with-textarea.js";
import "../../styled-components/styled-quotes-container.js";
import "../../styled-components/styled-radio-description-container.js";
import "../../styled-components/styled-success-message-container.js";
import "../../styled-components/styled-success-message-options-container.js";
import { composeDataTestId as e } from "../../utils/compose-data-test-id.util.js";
import "../rating-selector/rating-selector.js";
import { RatingSelectorControl as V } from "../rating-selector/rating-selector-control.js";
import { StepFooter as G } from "../step-footer/step-footer.js";
import { StyledOptionsContainer as N } from "./styled-components/styled-options-container.js";
const vo = ({
  nextStep: b = f,
  onSubmit: h = f
}) => {
  const [A, S] = I(0), [v] = W(), { t: o } = E(), {
    watch: y,
    setValue: l,
    formState: { dirtyFields: d, errors: c, isSubmitting: _ }
  } = O(), n = y("score"), u = d.score, s = u && n < w, R = !!c.score || !!c.answerProblem, x = u && (s ? d.answerProblem : !0);
  return P(() => {
    n === w && l("answerProblem", void 0, { shouldValidate: !0, shouldDirty: !0 });
  }, [n, l]), /* @__PURE__ */ i(g, { children: [
    /* @__PURE__ */ i(F, { children: [
      /* @__PURE__ */ i(M, { children: [
        /* @__PURE__ */ r(C, { size: D }),
        /* @__PURE__ */ r(
          t,
          {
            variant: "body",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            margin: 0,
            children: o("webdoxAI.legalWhisperAnswerRating.title")
          }
        )
      ] }),
      /* @__PURE__ */ r(
        V,
        {
          "data-testid": e("__rating-selector"),
          onChange: S,
          value: A,
          name: "score"
        }
      ),
      /* @__PURE__ */ r(N, { ref: v, children: s && /* @__PURE__ */ i(g, { children: [
        /* @__PURE__ */ r(
          t,
          {
            variant: "body",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            margin: 0,
            children: o("webdoxAI.legalWhisperAnswerRating.answerProblem.title")
          }
        ),
        /* @__PURE__ */ i(
          L,
          {
            name: "answerProblem",
            error: !1,
            formControlOverrides: T,
            children: [
              /* @__PURE__ */ r(
                m,
                {
                  overrides: p,
                  "data-testid": e("__detailed-radio-main-answer"),
                  description: /* @__PURE__ */ r(
                    t,
                    {
                      variant: "bodySmall",
                      margin: 0,
                      color: "neutralSubdued",
                      children: o("webdoxAI.legalWhisperAnswerRating.answerProblem.options.mainAnswer")
                    }
                  ),
                  value: a.MainAnswer
                }
              ),
              /* @__PURE__ */ r(
                m,
                {
                  overrides: p,
                  "data-testid": e("__detailed-radio-quotes"),
                  description: /* @__PURE__ */ r(
                    t,
                    {
                      variant: "bodySmall",
                      margin: 0,
                      color: "neutralSubdued",
                      children: o("webdoxAI.legalWhisperAnswerRating.answerProblem.options.quotes")
                    }
                  ),
                  value: a.Quotes
                }
              ),
              /* @__PURE__ */ r(
                m,
                {
                  overrides: p,
                  "data-testid": e("__detailed-radio-legal-whisper-usage"),
                  description: /* @__PURE__ */ r(
                    t,
                    {
                      variant: "bodySmall",
                      margin: 0,
                      color: "neutralSubdued",
                      children: o(
                        "webdoxAI.legalWhisperAnswerRating.answerProblem.options.legalWhisperUsage"
                      )
                    }
                  ),
                  value: a.LegalWhisperUsage
                }
              ),
              /* @__PURE__ */ r(
                m,
                {
                  overrides: p,
                  "data-testid": e("__detailed-radio-system-error"),
                  description: /* @__PURE__ */ r(
                    t,
                    {
                      variant: "bodySmall",
                      margin: 0,
                      color: "neutralSubdued",
                      children: o("webdoxAI.legalWhisperAnswerRating.answerProblem.options.systemError")
                    }
                  ),
                  value: a.SystemError
                }
              )
            ]
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ r(
      G,
      {
        disabled: R || !x,
        isLoading: _,
        isLastStep: !s,
        onSubmit: h,
        nextStep: b
      }
    )
  ] });
};
export {
  vo as RatingAnswerStep
};
//# sourceMappingURL=rating-answer-step.js.map
