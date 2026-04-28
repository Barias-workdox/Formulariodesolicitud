import { jsxs as m, Fragment as x, jsx as r } from "react/jsx-runtime";
import { useCallback as S, useEffect as w } from "react";
import { useFormContext as A } from "react-hook-form";
import "baseui/form-control";
import "baseui";
import "@carbon/icons-react";
import { Text as d } from "../../../../../text/text.js";
import "baseui/tooltip";
import "../../../../../../themes/v3/light/theme.js";
import "../../../../../../themes/v3/dark/theme.js";
import "../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../../themes/utilities.js";
import "baseui/textarea";
import "baseui/input";
import { noop as g } from "../../../../../../utils/noop.js";
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
import { useTranslation as O } from "../../../../../utils/i18n/utils.js";
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
import { RadioGroupControl as P } from "../../../../../forms/components/radio-group/radio-group-control.js";
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
import { DetailedRadio as h } from "../../../../../radio/components/detailed-radio/detailed-radio.js";
import { LegalWhisperUsageProblem as i } from "../../legal-whisper-answer-rating.constants.js";
import { radioGroupControlOverrides as R, detailedRadioOverrides as c } from "../../legal-whisper-answer-rating.styles.js";
import "../../styled-components/styled-container.js";
import { StyledBody as _ } from "../../styled-components/styled-body.js";
import "../../styled-components/styled-footer.js";
import "../../styled-components/styled-title-container.js";
import "../../styled-components/styled-radio-description-with-textarea.js";
import "../../styled-components/styled-quotes-container.js";
import "../../styled-components/styled-radio-description-container.js";
import "../../styled-components/styled-success-message-container.js";
import "../../styled-components/styled-success-message-options-container.js";
import { composeDataTestId as e } from "../../utils/compose-data-test-id.util.js";
import { DetailedRadioWithTextarea as I } from "../detailed-radio-with-textarea/detailed-radio-with-textarea.js";
import { StepFooter as y } from "../step-footer/step-footer.js";
import { StepHeader as C } from "../step-header/step-header.js";
const lo = ({
  prevStep: p = g,
  onSubmit: u = g
}) => {
  const { t } = O(), {
    watch: b,
    resetField: o,
    formState: { errors: a, dirtyFields: s, isSubmitting: f }
  } = A(), l = b("legalWhisperUsageProblem"), n = l === i.Other, v = !!a.legalWhisperUsageProblem || !!a.observations, W = s.legalWhisperUsageProblem && (n ? s.observations : !0), U = S(() => {
    o("observations"), o("legalWhisperUsageProblem"), p();
  }, [o, p]);
  return w(() => {
    o("observations");
  }, [l, o]), /* @__PURE__ */ m(x, { children: [
    /* @__PURE__ */ m(_, { children: [
      /* @__PURE__ */ r(
        C,
        {
          onBack: U,
          "data-testid": e("__header"),
          title: t("webdoxAI.legalWhisperAnswerRating.legalWhisperUsage.title")
        }
      ),
      /* @__PURE__ */ m(
        P,
        {
          name: "legalWhisperUsageProblem",
          error: !1,
          formControlOverrides: R,
          children: [
            /* @__PURE__ */ r(
              h,
              {
                overrides: c,
                "data-testid": e("__detailed-radio-not-intuitive"),
                description: /* @__PURE__ */ r(
                  d,
                  {
                    variant: "bodySmall",
                    margin: 0,
                    color: "neutralSubdued",
                    children: t("webdoxAI.legalWhisperAnswerRating.legalWhisperUsage.options.notIntuitive")
                  }
                ),
                value: i.NotIntuitive
              }
            ),
            /* @__PURE__ */ r(
              h,
              {
                overrides: c,
                "data-testid": e("__detailed-radio-unclear-organization"),
                description: /* @__PURE__ */ r(
                  d,
                  {
                    variant: "bodySmall",
                    margin: 0,
                    color: "neutralSubdued",
                    children: t(
                      "webdoxAI.legalWhisperAnswerRating.legalWhisperUsage.options.unclearOrganization"
                    )
                  }
                ),
                value: i.UnclearOrganization
              }
            ),
            /* @__PURE__ */ r(
              I,
              {
                description: t("webdoxAI.legalWhisperAnswerRating.legalWhisperUsage.options.other"),
                showObservationTextarea: n,
                "data-testid": e("__detailed-radio-other"),
                value: i.Other
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ r(
      y,
      {
        disabled: v || !W,
        isLastStep: !0,
        onSubmit: u,
        isLoading: f
      }
    )
  ] });
};
export {
  lo as LegalWhisperUsageStep
};
//# sourceMappingURL=legal-whisper-usage-step.js.map
