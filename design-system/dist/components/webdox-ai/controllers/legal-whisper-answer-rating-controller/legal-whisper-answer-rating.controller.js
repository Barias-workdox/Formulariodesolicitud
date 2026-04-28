import { jsx as u } from "react/jsx-runtime";
import { useState as R, useCallback as i, useEffect as P } from "react";
import { FormProvider as b } from "react-hook-form";
import "baseui/form-control";
import "baseui";
import "@carbon/icons-react";
import "../../../text/text.js";
import "baseui/tooltip";
import "../../../../themes/v3/light/theme.js";
import "../../../../themes/v3/dark/theme.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import "../../../../themes/utilities.js";
import "baseui/textarea";
import "baseui/input";
import "lodash";
import "../../../button/button.js";
import "../../../button/variants/icon-button/icon-button.js";
import "baseui/modal";
import "../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../modal/regular-modal.js";
import "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import "../../../input/next/components/compound-end-enhancer/styled-components/styled-container.js";
import "../../../input/next/components/compound-start-enhancer/styled-components/styled-container.js";
import "../../../input/next/components/compound-start-enhancer/styled-components/styled-leading.js";
import "../../../input/next/components/compound-start-enhancer/styled-components/styled-prefix-text.js";
import "../../../input/next/components/compound-start-enhancer/styled-components/styled-right-column.js";
import "../../../input/next/input.overrides.js";
import { useForm as v } from "../../../forms/hooks/use-form.js";
import "baseui/checkbox";
import "../../../utils/hooks/use-country-code-options/use-country-code-options.js";
import "baseui/select";
import "../../../select/next/styled-components/styled-icons-container.js";
import "../../../select/next/styled-components/styled-start-enhancer-container.js";
import "../../../select/next/components/select-dropdown-container.js";
import "../../../select/next/components/select-optgroup-header.js";
import "../../../radio/radio-group.js";
import "baseui/radio";
import "../../../forms/components/datepicker/datepicker-control.js";
import "yup";
import "../../../color-picker/next/color-picker.js";
import "../../../checkbox/checkbox.js";
import "../../../file-uploader/file-uploader.js";
import "baseui/menu";
import "../../../menu/stateful-menu-with-infinite-scroll/components/styled-list-with-infinite-scroll.js";
import "../../../dynamic-text-input/dynamic-text-input.js";
import "baseui/popover";
import "baseui/avatar";
import "../../../avatar/avatar.styles.js";
import "../../../input/input.js";
import "../../../layouts/title-layout/title-layout.styles.js";
import "../../../truncated-text/truncated-text.js";
import "resize-observer-polyfill";
import "react-is";
import "../../../tag/next/tag.styled-components.js";
import "../../components/webdox-ai-button/webdox-ai-button.js";
import "../../../information-popover/components/information-popover-header/information-popover-header.styles.js";
import "baseui/typography";
import "../../../menu/stateful-menu/stateful-menu.js";
import "../../../menu/virtualized-menu/components/virtualized-list/virtualized-list.js";
import "../../../message-box/components/expand-button/styled-components/styled-button.js";
import "../../../message-box/components/message-box-textarea/message-box-textarea.js";
import "../../../messages/message-composer/message-composer.styles.js";
import "react-dom/server";
import "../../../messages/message-content/message-content.js";
import "lodash/isEqual";
import "../../../../contexts/locale-provider/locale-provider.js";
import "date-fns";
import "date-fns/locale";
import "@formkit/auto-animate/react";
import "react-use";
import "../../../background-icon/background-icon.styles.js";
import "../../../messages/message-list/message-list.styles.js";
import "../../../menu/stateless-menu/stateless-menu.overrides.js";
import "dompurify";
import "baseui/tag";
import "../../components/webdox-ai-button-information-popover/webdox-ai-button-information-popover.styles.js";
import "../../components/webdox-ai-button-information-popover/components/popover-title-with-icon/popover-title-with-icon.js";
import "../../../messages/message-composer/common/composer-textarea/composer-textarea.styles.js";
import "../../components/webdox-ai-button-information-popover/components/chat-shortcut-information-popover/styled-chat-shortcut-wrapper.js";
import "../../components/webdox-ai-button-information-popover/components/chat-shortcut-information-popover/styled-detail-chat-shortcut-wrapper.js";
import "../../components/webdox-ai-button-information-popover/next/components/information-popover-content/styled-components/styled-actions-container.js";
import "../../components/webdox-ai-button-information-popover/next/components/information-popover-content/styled-components/styled-content-with-actions-container.js";
import "../../components/webdox-ai-button-information-popover/next/components/information-popover-title/styled-components/styled-emoji.js";
import "../../components/webdox-ai-button-information-popover/next/components/popover-title-with-icon/popover-title-with-icon.js";
import "../../components/assistant-layout/assistant-layout.js";
import "../../components/webdox-ai-document-viewer-wrapper/webdox-ai-document-viewer-wrapper.styles.js";
import "../../../popover/popover.styles.js";
import "../../components/webdox-ai-collapsible-button/webdox-ai-collapsible-button.js";
import { LegalWhisperAnswerRating as y } from "../../components/legal-whisper-answer-rating/legal-whisper-answer-rating.js";
import "../../components/legal-whisper-answer-rating/styled-components/styled-container.js";
import "../../components/legal-whisper-answer-rating/styled-components/styled-body.js";
import "../../components/legal-whisper-answer-rating/styled-components/styled-footer.js";
import "../../components/legal-whisper-answer-rating/styled-components/styled-title-container.js";
import "../../components/legal-whisper-answer-rating/styled-components/styled-radio-description-with-textarea.js";
import "../../components/legal-whisper-answer-rating/styled-components/styled-quotes-container.js";
import "../../components/legal-whisper-answer-rating/styled-components/styled-radio-description-container.js";
import "../../components/legal-whisper-answer-rating/styled-components/styled-success-message-container.js";
import "../../components/legal-whisper-answer-rating/styled-components/styled-success-message-options-container.js";
import { ANSWER_RATING_FORM_DEFAULT_VALUES as d } from "../../components/legal-whisper-answer-rating/legal-whisper-answer-rating.constants.js";
import "marked";
import "../../../data-table/data-table.styles.js";
import "../../components/business-summary/business-summary.styles.js";
import "baseui/drawer";
import "../../../drawer/components/side-nav/side-nav.styles.js";
import "baseui/header-navigation";
import "baseui/layer";
import "../../../../constants/placement.constants.js";
import "../../../dynamic-dialog/next/dynamic-dialog.constants.js";
import "../../../dynamic-dialog/next/components/styled-components.js";
import "../../../dynamic-dialog/next/context/dynamic-dialog.context.js";
import "../../../notification/next/notification.js";
import "../../contexts/plan-usage.context.js";
import "../../components/usage-overview-popover/usage-overview-popover.js";
import "../../components/text-rotator/text-rotator.styles.js";
import "../../components/data-extraction/components/data-extraction-beta/components/metadata-descriptive-loading/styled-components/styled-container.js";
import "../../components/data-extraction/components/data-extraction-list-item/data-extraction-list-item.styles.js";
import "../../components/data-extraction/data-extraction.styles.js";
import "../../components/data-extraction/styled-components/styled-container.js";
import "../../components/data-extraction/styled-components/styled-header.js";
import "../../components/data-extraction/styled-components/styled-content.js";
import "../../components/data-extraction/styled-components/styled-data-extraction-plan-counter.js";
import "../../components/webdox-ai-spinner/styled-components/styled-container.js";
import "../../components/brain-companion-layout/styled-components/styled-container.js";
import "../../components/brain-companion-layout/styled-components/styled-chat-container.js";
import "../../components/legal-whisper-layout/styled-components/styled-container.js";
import "../../components/legal-whisper-layout/styled-components/styled-chat-container.js";
import "../../components/legal-whisper-layout/styled-components/styled-left-column-container.js";
import "../../components/legal-whisper-layout/styled-components/styled-right-column-container.js";
import "@tanstack/react-virtual";
import "../../components/virtualized-conversations-list/styled-components/styled-conversations-list-spinner-wrapper.js";
import "../../components/virtualized-conversations-list/styled-components/styled-list.js";
import { composeDataTestId as T } from "../../components/legal-whisper-answer-rating/utils/compose-data-test-id.util.js";
import "../../constants/webdox-ai-regex.constants.js";
import "nanoid";
import "../../contexts/custom-prompt-modals.context.js";
import { useAnswerRatingValidationSchema as V } from "../../hooks/use-answer-rating-validation-schema.hook.js";
import { useAnswerRatingNavigation as q } from "../../hooks/use-answer-rating-navigation.hook.js";
import "zod";
const ho = ({
  answerToRate: p,
  onSubmit: e,
  onClose: g
}) => {
  const [r, s] = R(), { currentStep: h, nextStep: a, prevStep: n, goToSuccessStep: c, resetNavigation: l } = q(), S = V({
    isScoreRequired: (r == null ? void 0 : r.length) === 0
  }), t = v({
    schema: S,
    defaultValues: d,
    resolverType: "zod",
    mode: "onChange"
  }), f = i(() => {
    const o = {
      answerProblem: t.getValues("answerProblem"),
      quoteProblem: t.getValues("quoteProblem"),
      quoteType: t.getValues("quoteType")
    };
    a(o);
  }, [t, a]), A = i(() => {
    const o = {
      alreadyRated: (r == null ? void 0 : r.length) > 0
    };
    n(o);
  }, [n, r]), w = i(async () => {
    const o = t.getValues();
    try {
      await e(o), s((m) => [...m || [], o]), t.reset(d), c();
    } catch (m) {
      console.error("An error occurred while submitting the form:", m);
    }
  }, [c, t, e]);
  return P(() => {
    l(), s([]), t.reset();
  }, [p, t, l]), /* @__PURE__ */ u(b, { ...t, children: /* @__PURE__ */ u(
    y,
    {
      "data-testid": T(""),
      answer: p,
      prevSubmittedValues: r,
      currentStep: h,
      nextStep: f,
      prevStep: A,
      onSubmit: t.handleSubmit(w),
      onClose: g
    }
  ) });
};
export {
  ho as LegalWhisperAnswerRatingController
};
//# sourceMappingURL=legal-whisper-answer-rating.controller.js.map
