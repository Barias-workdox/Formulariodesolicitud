import { jsxs as m, Fragment as M, jsx as o } from "react/jsx-runtime";
import { useMemo as R, useCallback as E } from "react";
import { useFormContext as V, useFieldArray as j } from "react-hook-form";
import { Checkbox as D } from "../../../../../checkbox/checkbox.js";
import "baseui/form-control";
import "baseui";
import "@carbon/icons-react";
import { Text as N } from "../../../../../text/text.js";
import "baseui/tooltip";
import "../../../../../../themes/v3/light/theme.js";
import "../../../../../../themes/v3/dark/theme.js";
import "../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../../themes/utilities.js";
import "baseui/textarea";
import "baseui/input";
import { noop as h } from "../../../../../../utils/noop.js";
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
import "../../../../../radio/radio-group.js";
import "baseui/radio";
import "../../../../../forms/components/datepicker/datepicker-control.js";
import "yup";
import "../../../../../color-picker/next/color-picker.js";
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
import { ShowMoreButton as K } from "../../../show-more-button/show-more-button.js";
import { MIN_LEGAL_QUOTES_VISIBLE as O } from "../../../../constants/webdox-ai.constants.js";
import { usePartialQuotesRendering as G } from "../../../../hooks/use-partial-quotes-rendering.hook.js";
import { QuoteProblem as p, QuoteType as n } from "../../legal-whisper-answer-rating.constants.js";
import { checkboxOverrides as H } from "../../legal-whisper-answer-rating.styles.js";
import "../../styled-components/styled-container.js";
import { StyledBody as J } from "../../styled-components/styled-body.js";
import "../../styled-components/styled-footer.js";
import "../../styled-components/styled-title-container.js";
import "../../styled-components/styled-radio-description-with-textarea.js";
import { StyledQuotesContainer as U } from "../../styled-components/styled-quotes-container.js";
import "../../styled-components/styled-radio-description-container.js";
import "../../styled-components/styled-success-message-container.js";
import "../../styled-components/styled-success-message-options-container.js";
import { composeDataTestId as s } from "../../utils/compose-data-test-id.util.js";
import { StepFooter as $ } from "../step-footer/step-footer.js";
import { StepHeader as z } from "../step-header/step-header.js";
const X = {
  [p.QuoteNotInForce]: "webdoxAI.legalWhisperAnswerRating.quotesToImprove.title.quoteNotInForce",
  [p.IrrelevantQuote]: "webdoxAI.legalWhisperAnswerRating.quotesToImprove.title.irrelevantQuote",
  [p.IncorrectQuoteInformation]: "webdoxAI.legalWhisperAnswerRating.quotesToImprove.title.incorrectQuoteInformation"
}, Ct = ({
  answer: { quotes: t = {} } = {},
  prevStep: a = h,
  onSubmit: I = h
}) => {
  const { t: T } = W(), {
    watch: l,
    resetField: u,
    control: v,
    formState: { errors: g, isSubmitting: b }
  } = V(), r = l("quoteTypeToImprove"), Q = l("quoteProblem"), x = !!g.quotesToImprove, {
    fields: d = [],
    append: S,
    remove: w,
    replace: c
  } = j({
    control: v,
    name: "quotesToImprove"
  }), q = d.length > 0, y = R(() => r === n.Legal ? t.legalQuotes : r === n.Jurisprudential ? t.jurisprudentialQuotes : r === n.Administrative ? t.administrativeQuotes : [], [r, t]), { isShowMoreButtonVisible: _, onToggleShowAllQuotes: A, partialQuotes: k, showMoreQuotes: C } = G({
    quotes: y,
    minLegalQuotesVisible: O
  }), F = X[Q], L = E(() => {
    u("quotesToImprove"), c([]), a();
  }, [u, c, a]);
  return /* @__PURE__ */ m(M, { children: [
    /* @__PURE__ */ m(J, { children: [
      /* @__PURE__ */ o(
        z,
        {
          onBack: L,
          "data-testid": s("__header"),
          title: T(F)
        }
      ),
      /* @__PURE__ */ m(U, { children: [
        k.map(({ name: e }) => {
          const i = d.findIndex((P) => P.name === e), f = i !== -1, B = () => {
            f ? w(i) : S({ name: e });
          };
          return /* @__PURE__ */ o(
            D,
            {
              "data-testid": s(`__quote--${i}__checkbox`),
              overrides: H,
              error: !1,
              checked: f,
              onChange: B,
              children: /* @__PURE__ */ o(
                N,
                {
                  variant: "bodySmall",
                  margin: 0,
                  color: "neutralSubdued",
                  children: e
                }
              )
            },
            e
          );
        }),
        _ && /* @__PURE__ */ o(
          K,
          {
            dataTestId: s("__show-more-button"),
            onClick: A,
            isExpanded: C,
            withDivider: !1
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ o(
      $,
      {
        disabled: x || !q,
        isLastStep: !0,
        onSubmit: I,
        isLoading: b
      }
    )
  ] });
};
export {
  Ct as QuotesToImproveStep
};
//# sourceMappingURL=quotes-to-improve-step.js.map
