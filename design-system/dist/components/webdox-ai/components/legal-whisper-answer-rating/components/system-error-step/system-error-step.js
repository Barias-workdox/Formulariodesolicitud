import { jsxs as t, Fragment as v, jsx as r } from "react/jsx-runtime";
import { useCallback as E, useEffect as x } from "react";
import { ChevronLeft as w } from "@carbon/icons-react";
import "../../../../../button/button.js";
import { IconButton as S } from "../../../../../button/variants/icon-button/icon-button.js";
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
import { useFormContext as C } from "react-hook-form";
import "baseui/form-control";
import { Text as d } from "../../../../../text/text.js";
import "baseui/tooltip";
import "baseui/textarea";
import "baseui/input";
import { noop as l } from "../../../../../../utils/noop.js";
import "lodash";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as A } from "../../../../../utils/i18n/utils.js";
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
import { RadioGroupControl as R } from "../../../../../forms/components/radio-group/radio-group-control.js";
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
import { DetailedRadio as I } from "../../../../../radio/components/detailed-radio/detailed-radio.js";
import { SystemError as c, LegalWhisperUsageProblem as L } from "../../legal-whisper-answer-rating.constants.js";
import { radioGroupControlOverrides as O, detailedRadioOverrides as T } from "../../legal-whisper-answer-rating.styles.js";
import "../../styled-components/styled-container.js";
import { StyledBody as W } from "../../styled-components/styled-body.js";
import "../../styled-components/styled-footer.js";
import { StyledTitleContainer as _ } from "../../styled-components/styled-title-container.js";
import "../../styled-components/styled-radio-description-with-textarea.js";
import "../../styled-components/styled-quotes-container.js";
import "../../styled-components/styled-radio-description-container.js";
import "../../styled-components/styled-success-message-container.js";
import "../../styled-components/styled-success-message-options-container.js";
import { composeDataTestId as m } from "../../utils/compose-data-test-id.util.js";
import { DetailedRadioWithTextarea as F } from "../detailed-radio-with-textarea/detailed-radio-with-textarea.js";
import { StepFooter as D } from "../step-footer/step-footer.js";
const co = ({
  prevStep: e = l,
  onSubmit: f = l
}) => {
  const { t: i } = A(), {
    watch: h,
    resetField: o,
    formState: { errors: p, dirtyFields: s, isSubmitting: y }
  } = C(), a = h("systemError"), n = a === c.Other, g = !!p.systemError || !!p.observations, u = s.systemError && (n ? s.observations : !0), b = E(() => {
    o("observations"), o("systemError"), e();
  }, [o, e]);
  return x(() => {
    o("observations");
  }, [a, o]), /* @__PURE__ */ t(v, { children: [
    /* @__PURE__ */ t(W, { children: [
      /* @__PURE__ */ t(_, { children: [
        /* @__PURE__ */ r(
          S,
          {
            onClick: b,
            size: "32px",
            "data-testid": m("__header--back-button"),
            children: /* @__PURE__ */ r(w, {})
          }
        ),
        /* @__PURE__ */ r(
          d,
          {
            variant: "body",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            margin: 0,
            children: i("webdoxAI.legalWhisperAnswerRating.systemError.title")
          }
        )
      ] }),
      /* @__PURE__ */ t(
        R,
        {
          name: "systemError",
          error: !1,
          formControlOverrides: O,
          children: [
            /* @__PURE__ */ r(
              I,
              {
                overrides: T,
                "data-testid": m("__detailed-radio-answer-loading-error"),
                description: /* @__PURE__ */ r(
                  d,
                  {
                    variant: "bodySmall",
                    margin: 0,
                    color: "neutralSubdued",
                    children: i("webdoxAI.legalWhisperAnswerRating.systemError.options.answerLoadingError")
                  }
                ),
                value: c.AnswerLoadingError
              }
            ),
            /* @__PURE__ */ r(
              F,
              {
                description: i("webdoxAI.legalWhisperAnswerRating.systemError.options.other"),
                showObservationTextarea: n,
                "data-testid": m("__detailed-radio-other"),
                value: L.Other
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ r(
      D,
      {
        disabled: g || !u,
        isLoading: y,
        isLastStep: !0,
        onSubmit: f
      }
    )
  ] });
};
export {
  co as SystemErrorStep
};
//# sourceMappingURL=system-error-step.js.map
