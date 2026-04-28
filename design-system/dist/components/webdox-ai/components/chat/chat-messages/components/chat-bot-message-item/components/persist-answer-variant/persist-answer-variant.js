import { jsx as r, jsxs as Q } from "react/jsx-runtime";
import { useMemo as D, useCallback as C } from "react";
import { Link as G } from "../../../../../../../../link/link.js";
import { Markdown as J } from "../../../../../../../../markdown/markdown.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as K } from "../../../../../../../../utils/i18n/utils.js";
import { ChatMessageMenu as N } from "../../../../../../chat-message-menu/chat-message-menu.js";
import { StyledBaseParagraphText as O } from "../../../../../../styled-base-paragraph-text/styled-base-paragraph-text.js";
import { messageConstants as a } from "../../../../../../../constants/message.constant.js";
import "../../../../../../../constants/webdox-ai-regex.constants.js";
import "nanoid";
import { useMessages as U } from "../../../../../../../hooks/use-messages.hook.js";
import "../../../../../../../contexts/custom-prompt-modals.context.js";
import "zod";
import "../../../../../../webdox-ai-button/webdox-ai-button.js";
import { noop as t } from "../../../../../../../../../utils/noop.js";
import "baseui/popover";
import "baseui";
import "../../../../../../../../text/text.js";
import "../../../../../../../../../themes/v3/light/theme.js";
import "../../../../../../../../../themes/v3/dark/theme.js";
import "../../../../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../../../../../themes/utilities.js";
import "@carbon/icons-react";
import "../../../../../../../../button/button.js";
import "../../../../../../../../button/variants/icon-button/icon-button.js";
import "baseui/modal";
import "../../../../../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../../../../../modal/regular-modal.js";
import "../../../../../../../../modal/sectioned-modal.js";
import "../../../../../../../../spinner/full-spinner/full-spinner-context.js";
import "../../../../../../../../information-popover/components/information-popover-header/information-popover-header.styles.js";
import "baseui/typography";
import "baseui/input";
import "../../../../../../../../menu/stateful-menu/stateful-menu.js";
import "../../../../../../../../menu/virtualized-menu/components/virtualized-list/virtualized-list.js";
import "baseui/avatar";
import "baseui/tooltip";
import "../../../../../../../../avatar/avatar.styles.js";
import "../../../../../../../../message-box/components/expand-button/styled-components/styled-button.js";
import "../../../../../../../../message-box/components/message-box-textarea/message-box-textarea.js";
import "../../../../../../../../messages/message-composer/message-composer.styles.js";
import "react-dom/server";
import "../../../../../../../../messages/message-content/message-content.js";
import "lodash/isEqual";
import "../../../../../../../../../contexts/locale-provider/locale-provider.js";
import "date-fns";
import "date-fns/locale";
import "@formkit/auto-animate/react";
import "react-use";
import "../../../../../../../../background-icon/background-icon.styles.js";
import "../../../../../../../../messages/message-list/message-list.styles.js";
import "baseui/menu";
import "../../../../../../../../menu/stateless-menu/stateless-menu.overrides.js";
import "dompurify";
import "baseui/tag";
import "../../../../../../../../truncated-text/truncated-text.js";
import "../../../../../../webdox-ai-button-information-popover/webdox-ai-button-information-popover.styles.js";
import "../../../../../../webdox-ai-button-information-popover/components/popover-title-with-icon/popover-title-with-icon.js";
import "../../../../../../../../messages/message-composer/common/composer-textarea/composer-textarea.styles.js";
import "../../../../../../webdox-ai-button-information-popover/components/chat-shortcut-information-popover/styled-chat-shortcut-wrapper.js";
import "../../../../../../webdox-ai-button-information-popover/components/chat-shortcut-information-popover/styled-detail-chat-shortcut-wrapper.js";
import "../../../../../../webdox-ai-button-information-popover/next/components/information-popover-content/styled-components/styled-actions-container.js";
import "../../../../../../webdox-ai-button-information-popover/next/components/information-popover-content/styled-components/styled-content-with-actions-container.js";
import "../../../../../../webdox-ai-button-information-popover/next/components/information-popover-title/styled-components/styled-emoji.js";
import "../../../../../../webdox-ai-button-information-popover/next/components/popover-title-with-icon/popover-title-with-icon.js";
import "../../../../../../assistant-layout/assistant-layout.js";
import "../../../../../../webdox-ai-document-viewer-wrapper/webdox-ai-document-viewer-wrapper.styles.js";
import "../../../../../../../../popover/popover.styles.js";
import "../../../../../../webdox-ai-collapsible-button/webdox-ai-collapsible-button.js";
import "../../../../../../legal-whisper-answer-rating/legal-whisper-answer-rating.js";
import "../../../../../../legal-whisper-answer-rating/styled-components/styled-container.js";
import "../../../../../../legal-whisper-answer-rating/styled-components/styled-body.js";
import "../../../../../../legal-whisper-answer-rating/styled-components/styled-footer.js";
import "../../../../../../legal-whisper-answer-rating/styled-components/styled-title-container.js";
import "../../../../../../legal-whisper-answer-rating/styled-components/styled-radio-description-with-textarea.js";
import "../../../../../../legal-whisper-answer-rating/styled-components/styled-quotes-container.js";
import "../../../../../../legal-whisper-answer-rating/styled-components/styled-radio-description-container.js";
import "../../../../../../legal-whisper-answer-rating/styled-components/styled-success-message-container.js";
import "../../../../../../legal-whisper-answer-rating/styled-components/styled-success-message-options-container.js";
import "../../../../../../legal-whisper-answer-rating/legal-whisper-answer-rating.constants.js";
import "../../../../../../business-summary/business-summary.styles.js";
import "baseui/drawer";
import "resize-observer-polyfill";
import "../../../../../../../../drawer/components/side-nav/side-nav.styles.js";
import "baseui/header-navigation";
import "baseui/layer";
import "../../../../../../../../../constants/placement.constants.js";
import "../../../../../../../../dynamic-dialog/next/dynamic-dialog.constants.js";
import "../../../../../../../../dynamic-dialog/next/components/styled-components.js";
import "../../../../../../../../dynamic-dialog/next/context/dynamic-dialog.context.js";
import "react-is";
import "../../../../../../../../tag/next/tag.styled-components.js";
import "../../../../../../../../notification/next/notification.js";
import "../../../../../../../contexts/plan-usage.context.js";
import "../../../../../../usage-overview-popover/usage-overview-popover.js";
import "../../../../../../text-rotator/text-rotator.styles.js";
import "../../../../../../data-extraction/components/data-extraction-beta/components/metadata-descriptive-loading/styled-components/styled-container.js";
import "lodash";
import "../../../../../../data-extraction/components/data-extraction-list-item/data-extraction-list-item.styles.js";
import "../../../../../../data-extraction/data-extraction.styles.js";
import "../../../../../../data-extraction/styled-components/styled-container.js";
import "../../../../../../data-extraction/styled-components/styled-header.js";
import "../../../../../../data-extraction/styled-components/styled-content.js";
import "../../../../../../data-extraction/styled-components/styled-data-extraction-plan-counter.js";
import "../../../../../../webdox-ai-spinner/styled-components/styled-container.js";
import "../../../../../../brain-companion-layout/styled-components/styled-container.js";
import "../../../../../../brain-companion-layout/styled-components/styled-chat-container.js";
import "../../../../../../legal-whisper-layout/styled-components/styled-container.js";
import "../../../../../../legal-whisper-layout/styled-components/styled-chat-container.js";
import "../../../../../../legal-whisper-layout/styled-components/styled-left-column-container.js";
import "../../../../../../legal-whisper-layout/styled-components/styled-right-column-container.js";
import "@tanstack/react-virtual";
import "../../../../../../virtualized-conversations-list/styled-components/styled-conversations-list-spinner-wrapper.js";
import "../../../../../../virtualized-conversations-list/styled-components/styled-list.js";
import { useMessageTableHeaderHover as X } from "../../../../../../../hooks/use-message-table-header-hover.hook.js";
import { ChatMessageLayout as Y } from "../../../chat-message-layout/chat-message-layout.js";
import { styles as Z } from "../../chat-box-message-item.styles.js";
import "../../styled-components/styled-animated-dots.js";
import "../../styled-components/styled-brand-text.js";
import { StyledPreViewer as z } from "../../styled-components/styled-pre-viewer.js";
import { StyledPre as rr } from "../../styled-components/styled-pre.js";
import { StyledReferenceWrapper as or } from "../../styled-components/styled-reference-wrapper.js";
import { StyledTableCell as tr } from "../../styled-components/styled-table-cell.js";
import { StyledTableHeaderCell as er } from "../../styled-components/styled-table-header-cell.js";
import { StyledTableHeader as ir } from "../../styled-components/styled-table-header.js";
import { StyledTableViewer as mr, StyledTable as pr } from "../../styled-components/styled-table.js";
import { AnswerHeader as nr } from "../answer-header/answer-header.js";
import { AnswerReferences as sr } from "../answer-references/answer-references.js";
import { LegalWhisperQuotesTabs as ar } from "../legal-whisper-quotes-tabs/legal-whisper-quotes-tabs.js";
import { MarkdownModal as M } from "../markdown-modal/markdown-modal.js";
import { StyledContainer as lr } from "./styled-components/styled-container.js";
const Gt = ({
  dataTestId: p = "persist-answer",
  createdAt: h,
  activeAnswerId: l,
  feedback: n,
  id: o,
  isFeedbackLoading: S,
  question: H,
  quotes: d,
  selectedAnswerReference: g,
  showCopyToClipboard: v,
  showFeedback: k,
  showRetry: R,
  suiteAIOption: V,
  tempProps: A,
  value: c = "",
  zIndex: i,
  onCopyToClipboardButtonClick: _ = t,
  onFeedbackButtonClick: B = t,
  onRetryAnswerGeneration: L = t,
  updateActiveMessage: f = t,
  updateAnswerReference: u = t
}) => {
  const { value: T, answers: $ = [] } = H || {}, [{ references: s = [] }] = $, { onSubmit: w = t } = A || {}, { t: m } = K(), { isHovered: y, setIsHeaderHovered: b, setIsTableMenuHovered: E } = X(), { replacedValue: I, referenceMap: F } = U({
    value: c,
    answerReferences: s
  }), P = D(() => l === o, [l, o]), j = C(
    (e) => {
      w("persist", {
        item: {
          id: a.specialAnswerId.pageChange,
          value: String(e)
        }
      });
    },
    [w]
  ), W = C(
    (e) => {
      const x = s.find(({ id: q }) => q === e.id);
      x && (u(x), f(o));
    },
    [o, s, f, u]
  );
  return /* @__PURE__ */ r(
    Y,
    {
      kind: "primary",
      header: /* @__PURE__ */ r(
        nr,
        {
          dataTestId: `${p}__header`,
          createdAt: h,
          suiteAIOption: V
        }
      ),
      footer: /* @__PURE__ */ r(
        N,
        {
          dataTestId: `webdox-ai__message-footer-${o}`,
          id: o,
          zIndex: i,
          content: c,
          isLoading: S,
          selectedFeedback: n == null ? void 0 : n.value,
          renderFeedback: k,
          renderRetry: R,
          renderCopyToClipboard: v,
          onFeedbackButtonClick: B,
          onCopyToClipboardButtonClick: _,
          onRetryAnswerGeneration: L
        }
      ),
      children: /* @__PURE__ */ r(lr, { children: /* @__PURE__ */ Q(
        O,
        {
          $style: Z.markdownStyles(),
          as: "span",
          children: [
            /* @__PURE__ */ r(
              J,
              {
                extraComponents: {
                  [a.pageRefHtml]: /* @__PURE__ */ r(
                    or,
                    {
                      "data-testid": `${p}__reference-wrapper`,
                      onClick: (e) => j(F[e.currentTarget.innerHTML])
                    }
                  ),
                  [a.answerReferencesRefHtml]: /* @__PURE__ */ r(
                    sr,
                    {
                      selectedReference: P ? g : void 0,
                      updateSelectedAnswerReference: W
                    }
                  ),
                  table: /* @__PURE__ */ r(
                    M,
                    {
                      isMenuVisible: y,
                      setIsMenuHovered: E,
                      questionValue: T,
                      isViewerFullwidth: !0,
                      overrides: {
                        MarkdownElement: { component: pr },
                        MarkdownElementViewer: { component: mr }
                      },
                      isFixed: !0,
                      zIndex: i
                    }
                  ),
                  thead: /* @__PURE__ */ r(
                    ir,
                    {
                      $isHovered: y,
                      onMouseEnter: () => b(!0),
                      onMouseLeave: () => b(!1)
                    }
                  ),
                  th: /* @__PURE__ */ r(er, {}),
                  td: /* @__PURE__ */ r(tr, {}),
                  a: /* @__PURE__ */ r(G, {}),
                  pre: /* @__PURE__ */ r(
                    M,
                    {
                      questionValue: T,
                      zIndex: i,
                      copyButtonTexts: {
                        tooltipText: m("webdoxAI.textCopyToClipboardButton.defaultTooltipText"),
                        copiedTooltipText: m("webdoxAI.textCopyToClipboardButton.copiedTooltipText"),
                        buttonText: m("webdoxAI.textCopyToClipboardButton.defaultText"),
                        copiedButtonText: m("webdoxAI.textCopyToClipboardButton.defaultText")
                      },
                      copyText: !0,
                      overrides: {
                        MarkdownElement: {
                          component: rr
                        },
                        MarkdownElementViewer: { component: z }
                      }
                    }
                  )
                },
                children: I
              }
            ),
            d && /* @__PURE__ */ r(
              ar,
              {
                dataTestId: `${p}__quotes`,
                quotes: d,
                zIndex: i
              }
            )
          ]
        }
      ) })
    }
  );
};
export {
  Gt as PersistAnswerVariant
};
//# sourceMappingURL=persist-answer-variant.js.map
