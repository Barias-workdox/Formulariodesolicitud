import { jsx as t } from "react/jsx-runtime";
import { useRef as a } from "react";
import { useAutoAnimate as u } from "@formkit/auto-animate/react";
import { useVirtualizer as E } from "@tanstack/react-virtual";
import { VIRTUALIZED_LIST_PADDING as l, VIRTUALIZED_LIST_ITEMS_GAP as c, VIRTUALIZED_LIST_OVERSCAN as I, VIRTUALIZED_MESSAGE_ESTIMATE_SIZE as A, MESSAGE_ANIMATION_DURATION_MS as S, MESSAGES_SCROLL_OFFSET as g } from "../../../../../constants/webdox-ai.constants.js";
import "@carbon/icons-react";
import "../../../../../constants/webdox-ai-regex.constants.js";
import "nanoid";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import "dompurify";
import { useVirtualizedMessageScroll as _ } from "../../../../../hooks/use-virtualized-messages-scroll.hook.js";
import "../../../../../contexts/custom-prompt-modals.context.js";
import "zod";
import "../../../../webdox-ai-button/webdox-ai-button.js";
import "baseui/popover";
import "baseui";
import "../../../../../../text/text.js";
import "../../../../../../../themes/v3/light/theme.js";
import "../../../../../../../themes/v3/dark/theme.js";
import "../../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../../../themes/utilities.js";
import "../../../../../../button/button.js";
import "../../../../../../button/variants/icon-button/icon-button.js";
import "baseui/modal";
import "../../../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../../../modal/regular-modal.js";
import "../../../../../../modal/sectioned-modal.js";
import "../../../../../../spinner/full-spinner/full-spinner-context.js";
import "../../../../../../information-popover/components/information-popover-header/information-popover-header.styles.js";
import "baseui/typography";
import "baseui/input";
import "../../../../../../menu/stateful-menu/stateful-menu.js";
import "../../../../../../menu/virtualized-menu/components/virtualized-list/virtualized-list.js";
import "baseui/avatar";
import "baseui/tooltip";
import "../../../../../../avatar/avatar.styles.js";
import "../../../../../../message-box/components/expand-button/styled-components/styled-button.js";
import "../../../../../../message-box/components/message-box-textarea/message-box-textarea.js";
import "../../../../../../messages/message-composer/message-composer.styles.js";
import "react-dom/server";
import "../../../../../../messages/message-content/message-content.js";
import "lodash/isEqual";
import "../../../../../../../contexts/locale-provider/locale-provider.js";
import "date-fns";
import "date-fns/locale";
import "react-use";
import "../../../../../../background-icon/background-icon.styles.js";
import "../../../../../../messages/message-list/message-list.styles.js";
import "baseui/menu";
import "../../../../../../menu/stateless-menu/stateless-menu.overrides.js";
import "baseui/tag";
import "../../../../../../truncated-text/truncated-text.js";
import "../../../../webdox-ai-button-information-popover/webdox-ai-button-information-popover.styles.js";
import "../../../../webdox-ai-button-information-popover/components/popover-title-with-icon/popover-title-with-icon.js";
import "../../../../../../messages/message-composer/common/composer-textarea/composer-textarea.styles.js";
import "../../../../webdox-ai-button-information-popover/components/chat-shortcut-information-popover/styled-chat-shortcut-wrapper.js";
import "../../../../webdox-ai-button-information-popover/components/chat-shortcut-information-popover/styled-detail-chat-shortcut-wrapper.js";
import "../../../../webdox-ai-button-information-popover/next/components/information-popover-content/styled-components/styled-actions-container.js";
import "../../../../webdox-ai-button-information-popover/next/components/information-popover-content/styled-components/styled-content-with-actions-container.js";
import "../../../../webdox-ai-button-information-popover/next/components/information-popover-title/styled-components/styled-emoji.js";
import "../../../../webdox-ai-button-information-popover/next/components/popover-title-with-icon/popover-title-with-icon.js";
import "../../../../assistant-layout/assistant-layout.js";
import "../../../../webdox-ai-document-viewer-wrapper/webdox-ai-document-viewer-wrapper.styles.js";
import "../../../../../../popover/popover.styles.js";
import "../../../../webdox-ai-collapsible-button/webdox-ai-collapsible-button.js";
import "../../../../legal-whisper-answer-rating/legal-whisper-answer-rating.js";
import "../../../../legal-whisper-answer-rating/styled-components/styled-container.js";
import "../../../../legal-whisper-answer-rating/styled-components/styled-body.js";
import "../../../../legal-whisper-answer-rating/styled-components/styled-footer.js";
import "../../../../legal-whisper-answer-rating/styled-components/styled-title-container.js";
import "../../../../legal-whisper-answer-rating/styled-components/styled-radio-description-with-textarea.js";
import "../../../../legal-whisper-answer-rating/styled-components/styled-quotes-container.js";
import "../../../../legal-whisper-answer-rating/styled-components/styled-radio-description-container.js";
import "../../../../legal-whisper-answer-rating/styled-components/styled-success-message-container.js";
import "../../../../legal-whisper-answer-rating/styled-components/styled-success-message-options-container.js";
import "../../../../legal-whisper-answer-rating/legal-whisper-answer-rating.constants.js";
import "marked";
import "../../../../../../data-table/data-table.styles.js";
import "../../../../business-summary/business-summary.styles.js";
import "baseui/drawer";
import "resize-observer-polyfill";
import "../../../../../../drawer/components/side-nav/side-nav.styles.js";
import "baseui/header-navigation";
import "baseui/layer";
import "../../../../../../../constants/placement.constants.js";
import "../../../../../../dynamic-dialog/next/dynamic-dialog.constants.js";
import "../../../../../../dynamic-dialog/next/components/styled-components.js";
import "../../../../../../dynamic-dialog/next/context/dynamic-dialog.context.js";
import "react-is";
import "../../../../../../tag/next/tag.styled-components.js";
import "../../../../../../notification/next/notification.js";
import "../../../../../contexts/plan-usage.context.js";
import "../../../../usage-overview-popover/usage-overview-popover.js";
import "../../../../text-rotator/text-rotator.styles.js";
import "../../../../data-extraction/components/data-extraction-beta/components/metadata-descriptive-loading/styled-components/styled-container.js";
import "lodash";
import "../../../../data-extraction/components/data-extraction-list-item/data-extraction-list-item.styles.js";
import "../../../../data-extraction/data-extraction.styles.js";
import "../../../../data-extraction/styled-components/styled-container.js";
import "../../../../data-extraction/styled-components/styled-header.js";
import "../../../../data-extraction/styled-components/styled-content.js";
import "../../../../data-extraction/styled-components/styled-data-extraction-plan-counter.js";
import "../../../../webdox-ai-spinner/styled-components/styled-container.js";
import "../../../../brain-companion-layout/styled-components/styled-container.js";
import "../../../../brain-companion-layout/styled-components/styled-chat-container.js";
import "../../../../legal-whisper-layout/styled-components/styled-container.js";
import "../../../../legal-whisper-layout/styled-components/styled-chat-container.js";
import "../../../../legal-whisper-layout/styled-components/styled-left-column-container.js";
import "../../../../legal-whisper-layout/styled-components/styled-right-column-container.js";
import "../../../../virtualized-conversations-list/styled-components/styled-conversations-list-spinner-wrapper.js";
import "../../../../virtualized-conversations-list/styled-components/styled-list.js";
import { StyledContainer as T } from "./styled-components/styled-container.js";
import { StyledVirtualizedFloatingWrapper as L } from "./styled-components/styled-virtualized-floating-wrapper.js";
import { StyledVirtualizedWrapper as R } from "./styled-components/styled-virtualized-wrapper.js";
const Fr = ({
  children: p,
  isGeneratingAnswer: d = !1
}) => {
  var s;
  const r = a(null), e = a(null), n = p.length, i = E({
    count: n,
    getScrollElement: () => r.current,
    estimateSize: () => A,
    overscan: I,
    gap: c,
    paddingStart: l,
    paddingEnd: l
  }), o = i.getVirtualItems();
  _({
    childrenLength: n,
    contentRef: e,
    isGeneratingAnswer: d,
    listRef: r,
    messageAnimationDurationMs: S,
    messagesScrollOffset: g,
    virtualItemsLength: o.length
  });
  const [f] = u({
    duration: S
  });
  return /* @__PURE__ */ t(T, { ref: r, children: /* @__PURE__ */ t(
    R,
    {
      ref: e,
      $minHeight: i.getTotalSize(),
      children: /* @__PURE__ */ t(L, { $firstElementPosition: (s = o[0]) == null ? void 0 : s.start, children: o.map((m) => /* @__PURE__ */ t(
        "div",
        {
          ref: i.measureElement,
          "data-index": m.index,
          children: /* @__PURE__ */ t("div", { ref: f, children: p[m.index] })
        },
        m.key
      )) })
    }
  ) });
};
export {
  Fr as VirtualizedMessagesList
};
//# sourceMappingURL=virtualized-messages-list.js.map
