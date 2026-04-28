import { jsxs as t, Fragment as v, jsx as r } from "react/jsx-runtime";
import { useCallback as y, useEffect as R } from "react";
import { CheckmarkOutline as S } from "@carbon/icons-react";
import { BackgroundIcon as C } from "../../../../../background-icon/background-icon.js";
import { Button as P } from "../../../../../button/button.js";
import "../../../../../button/variants/icon-button/icon-button.js";
import "../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../../themes/v3/light/theme.js";
import "../../../../../../themes/v3/dark/theme.js";
import "../../../../../../themes/utilities.js";
import "baseui/modal";
import "baseui";
import "../../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../../modal/regular-modal.js";
import "../../../../../modal/sectioned-modal.js";
import "../../../../../spinner/full-spinner/full-spinner-context.js";
import { useFormContext as M } from "react-hook-form";
import "baseui/form-control";
import { Text as n } from "../../../../../text/text.js";
import "baseui/tooltip";
import "baseui/textarea";
import "baseui/input";
import { noop as c } from "../../../../../../utils/noop.js";
import "lodash";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as I } from "../../../../../utils/i18n/utils.js";
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
import { RadioGroupControl as k } from "../../../../../forms/components/radio-group/radio-group-control.js";
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
import { checkFieldUsedWithValue as E, checkFieldUsed as a } from "../../../../utils/answer-rating.util.js";
import { ANSWER_RATING_FORM_DEFAULT_VALUES as U, AnswerProblem as e, MAX_RATING_VALUE as O } from "../../legal-whisper-answer-rating.constants.js";
import { radioGroupControlOverrides as F, radioWithoutMarkOverrides as m } from "../../legal-whisper-answer-rating.styles.js";
import "../../styled-components/styled-container.js";
import { StyledBody as L } from "../../styled-components/styled-body.js";
import { StyledFooter as T } from "../../styled-components/styled-footer.js";
import "../../styled-components/styled-title-container.js";
import "../../styled-components/styled-radio-description-with-textarea.js";
import "../../styled-components/styled-quotes-container.js";
import "../../styled-components/styled-radio-description-container.js";
import { StyledSuccessMessageContainer as B } from "../../styled-components/styled-success-message-container.js";
import { StyledSuccessMessageOptionsContainer as G } from "../../styled-components/styled-success-message-options-container.js";
import { CustomRadioDescription as p } from "./components/custom-radio-description/custom-radio-description.js";
const Ao = ({
  prevSubmittedValues: i,
  nextStep: l = c,
  onClose: g = c
}) => {
  const { t: o } = I(), { setValue: d, reset: h, watch: u } = M(), w = u("answerProblem"), A = !E(
    "score",
    O,
    i
  ), b = !a("mainAnswerProblem", i), f = !a(
    "legalWhisperUsageProblem",
    i
  ), W = !a("systemError", i), _ = y(
    (x) => {
      d("answerProblem", x.target.value), l();
    },
    [d, l]
  );
  return R(() => {
    h(U);
  }, []), /* @__PURE__ */ t(v, { children: [
    /* @__PURE__ */ t(L, { children: [
      /* @__PURE__ */ t(B, { children: [
        /* @__PURE__ */ r(
          C,
          {
            Icon: S,
            size: "44px",
            backgroundColor: "positiveWashed",
            iconColor: "positive"
          }
        ),
        /* @__PURE__ */ r(
          n,
          {
            variant: "body",
            fontWeight: "500",
            margin: 0,
            textAlign: "center",
            children: o("webdoxAI.legalWhisperAnswerRating.successMessage.title")
          }
        ),
        /* @__PURE__ */ r(
          n,
          {
            variant: "bodySmall",
            margin: 0,
            color: "neutralSubdued",
            textAlign: "center",
            children: o("webdoxAI.legalWhisperAnswerRating.successMessage.subtitle")
          }
        )
      ] }),
      A && /* @__PURE__ */ t(G, { children: [
        /* @__PURE__ */ r(
          n,
          {
            variant: "body",
            fontWeight: "500",
            margin: 0,
            textAlign: "center",
            children: o("webdoxAI.legalWhisperAnswerRating.successMessage.anyOtherProblem")
          }
        ),
        /* @__PURE__ */ t(
          k,
          {
            "data-testid": "success-message-step__radio-group",
            name: "answerProblem",
            error: !1,
            formControlOverrides: F,
            onChange: _,
            value: w,
            children: [
              b && /* @__PURE__ */ r(
                s,
                {
                  "data-testid": `radio-group__option--${e.MainAnswer}`,
                  overrides: m,
                  description: /* @__PURE__ */ r(p, { children: o("webdoxAI.legalWhisperAnswerRating.answerProblem.options.mainAnswer") }),
                  value: e.MainAnswer
                }
              ),
              /* @__PURE__ */ r(
                s,
                {
                  "data-testid": `radio-group__option--${e.Quotes}`,
                  overrides: m,
                  description: /* @__PURE__ */ r(p, { children: o("webdoxAI.legalWhisperAnswerRating.answerProblem.options.quotes") }),
                  value: e.Quotes
                }
              ),
              f && /* @__PURE__ */ r(
                s,
                {
                  "data-testid": `radio-group__option--${e.LegalWhisperUsage}`,
                  overrides: m,
                  description: /* @__PURE__ */ r(p, { children: o(
                    "webdoxAI.legalWhisperAnswerRating.answerProblem.options.legalWhisperUsage"
                  ) }),
                  value: e.LegalWhisperUsage
                }
              ),
              W && /* @__PURE__ */ r(
                s,
                {
                  "data-testid": `radio-group__option--${e.SystemError}`,
                  overrides: m,
                  description: /* @__PURE__ */ r(p, { children: o("webdoxAI.legalWhisperAnswerRating.answerProblem.options.systemError") }),
                  value: e.SystemError
                }
              )
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ r(T, { children: /* @__PURE__ */ r(
      P,
      {
        "data-testid": "success-message-step__close-button",
        kind: "primary-whisper",
        fullWidth: !0,
        onClick: g,
        children: o("webdoxAI.legalWhisperAnswerRating.successMessage.closeButton")
      }
    ) })
  ] });
};
export {
  Ao as SuccessMessageStep
};
//# sourceMappingURL=success-message-step.js.map
