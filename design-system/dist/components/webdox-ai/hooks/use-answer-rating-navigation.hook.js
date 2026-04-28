import { useState as l, useMemo as g, useCallback as m } from "react";
import "../components/webdox-ai-button/webdox-ai-button.js";
import "react/jsx-runtime";
import "baseui/popover";
import "baseui";
import "../../text/text.js";
import "../../../themes/v3/light/theme.js";
import "../../../themes/v3/dark/theme.js";
import "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import "../../../themes/utilities.js";
import "@carbon/icons-react";
import "../../button/button.js";
import "../../button/variants/icon-button/icon-button.js";
import "baseui/modal";
import "../../modal/components/modal-close-button/modal-close-button.js";
import "../../modal/regular-modal.js";
import "../../modal/sectioned-modal.js";
import "../../spinner/full-spinner/full-spinner-context.js";
import "../../information-popover/components/information-popover-header/information-popover-header.styles.js";
import "baseui/typography";
import "baseui/input";
import "../../menu/stateful-menu/stateful-menu.js";
import "../../menu/virtualized-menu/components/virtualized-list/virtualized-list.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import "baseui/avatar";
import "baseui/tooltip";
import "../../avatar/avatar.styles.js";
import "../../message-box/components/expand-button/styled-components/styled-button.js";
import "../../message-box/components/message-box-textarea/message-box-textarea.js";
import "../../messages/message-composer/message-composer.styles.js";
import "react-dom/server";
import "../../messages/message-content/message-content.js";
import "lodash/isEqual";
import "../../../contexts/locale-provider/locale-provider.js";
import "date-fns";
import "date-fns/locale";
import "@formkit/auto-animate/react";
import "react-use";
import "../../background-icon/background-icon.styles.js";
import "../../messages/message-list/message-list.styles.js";
import "baseui/menu";
import "../../menu/stateless-menu/stateless-menu.overrides.js";
import "dompurify";
import "baseui/tag";
import "../../truncated-text/truncated-text.js";
import "../components/webdox-ai-button-information-popover/webdox-ai-button-information-popover.styles.js";
import "../components/webdox-ai-button-information-popover/components/popover-title-with-icon/popover-title-with-icon.js";
import "../../messages/message-composer/common/composer-textarea/composer-textarea.styles.js";
import "../components/webdox-ai-button-information-popover/components/chat-shortcut-information-popover/styled-chat-shortcut-wrapper.js";
import "../components/webdox-ai-button-information-popover/components/chat-shortcut-information-popover/styled-detail-chat-shortcut-wrapper.js";
import "../components/webdox-ai-button-information-popover/next/components/information-popover-content/styled-components/styled-actions-container.js";
import "../components/webdox-ai-button-information-popover/next/components/information-popover-content/styled-components/styled-content-with-actions-container.js";
import "../components/webdox-ai-button-information-popover/next/components/information-popover-title/styled-components/styled-emoji.js";
import "../components/webdox-ai-button-information-popover/next/components/popover-title-with-icon/popover-title-with-icon.js";
import "../components/assistant-layout/assistant-layout.js";
import "../components/webdox-ai-document-viewer-wrapper/webdox-ai-document-viewer-wrapper.styles.js";
import "../../popover/popover.styles.js";
import "../components/webdox-ai-collapsible-button/webdox-ai-collapsible-button.js";
import "../components/legal-whisper-answer-rating/legal-whisper-answer-rating.js";
import "../components/legal-whisper-answer-rating/styled-components/styled-container.js";
import "../components/legal-whisper-answer-rating/styled-components/styled-body.js";
import "../components/legal-whisper-answer-rating/styled-components/styled-footer.js";
import "../components/legal-whisper-answer-rating/styled-components/styled-title-container.js";
import "../components/legal-whisper-answer-rating/styled-components/styled-radio-description-with-textarea.js";
import "../components/legal-whisper-answer-rating/styled-components/styled-quotes-container.js";
import "../components/legal-whisper-answer-rating/styled-components/styled-radio-description-container.js";
import "../components/legal-whisper-answer-rating/styled-components/styled-success-message-container.js";
import "../components/legal-whisper-answer-rating/styled-components/styled-success-message-options-container.js";
import { AnswerRatingStep as e, answerRatingStepsMap as v } from "../components/legal-whisper-answer-rating/legal-whisper-answer-rating.constants.js";
import "marked";
import "../../data-table/data-table.styles.js";
import "../components/business-summary/business-summary.styles.js";
import "baseui/drawer";
import "resize-observer-polyfill";
import "../../drawer/components/side-nav/side-nav.styles.js";
import "baseui/header-navigation";
import "baseui/layer";
import "../../../constants/placement.constants.js";
import "../../dynamic-dialog/next/dynamic-dialog.constants.js";
import "../../dynamic-dialog/next/components/styled-components.js";
import "../../dynamic-dialog/next/context/dynamic-dialog.context.js";
import "react-is";
import "../../tag/next/tag.styled-components.js";
import "../../notification/next/notification.js";
import "../contexts/plan-usage.context.js";
import "../components/usage-overview-popover/usage-overview-popover.js";
import "../components/text-rotator/text-rotator.styles.js";
import "../components/data-extraction/components/data-extraction-beta/components/metadata-descriptive-loading/styled-components/styled-container.js";
import "lodash";
import "../components/data-extraction/components/data-extraction-list-item/data-extraction-list-item.styles.js";
import "../components/data-extraction/data-extraction.styles.js";
import "../components/data-extraction/styled-components/styled-container.js";
import "../components/data-extraction/styled-components/styled-header.js";
import "../components/data-extraction/styled-components/styled-content.js";
import "../components/data-extraction/styled-components/styled-data-extraction-plan-counter.js";
import "../components/webdox-ai-spinner/styled-components/styled-container.js";
import "../components/brain-companion-layout/styled-components/styled-container.js";
import "../components/brain-companion-layout/styled-components/styled-chat-container.js";
import "../components/legal-whisper-layout/styled-components/styled-container.js";
import "../components/legal-whisper-layout/styled-components/styled-chat-container.js";
import "../components/legal-whisper-layout/styled-components/styled-left-column-container.js";
import "../components/legal-whisper-layout/styled-components/styled-right-column-container.js";
import "@tanstack/react-virtual";
import "../components/virtualized-conversations-list/styled-components/styled-conversations-list-spinner-wrapper.js";
import "../components/virtualized-conversations-list/styled-components/styled-list.js";
const hp = (n) => {
  const { initialStep: s = e.RatingAnswer } = n || {}, [o, p] = l(s), t = g(() => v[o], [o]), a = m(
    (r = {}) => {
      if (typeof t.nextStep == "function") {
        const i = t.nextStep(r);
        p(i);
      } else
        p(t.nextStep);
    },
    [t]
  ), S = m(
    (r = {}) => {
      if (typeof t.prevStep == "function") {
        const i = t.prevStep(r);
        p(i);
      } else
        p(t.prevStep);
    },
    [t]
  ), c = () => {
    p(e.SuccessMessage);
  }, u = m(() => {
    p(e.RatingAnswer);
  }, []);
  return {
    currentStep: o,
    nextStep: a,
    prevStep: S,
    goToSuccessStep: c,
    resetNavigation: u
  };
};
export {
  hp as useAnswerRatingNavigation
};
//# sourceMappingURL=use-answer-rating-navigation.hook.js.map
