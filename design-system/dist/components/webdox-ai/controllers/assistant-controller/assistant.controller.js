import { jsx as o, jsxs as L } from "react/jsx-runtime";
import { useState as tt, useMemo as l, useCallback as j, useEffect as U } from "react";
import { DataViewAlt as ot, Chat as it } from "@carbon/icons-react";
import { LoadingWrapperOverlayed as T } from "../../../loading-wrapper/variants/loading-wrapper-overlayed/loading-wrapper-overlayed.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as rt } from "../../../utils/i18n/utils.js";
import { conversationConstants as mt } from "../../constants/conversation.constant.js";
import { messageConstants as $ } from "../../constants/message.constant.js";
import { assistantConstants as r } from "../../constants/assistant.constant.js";
import "../../constants/webdox-ai-regex.constants.js";
import { noop as g } from "../../../../utils/noop.js";
import "../../components/webdox-ai-button/webdox-ai-button.js";
import "baseui/popover";
import "baseui";
import "../../../text/text.js";
import "../../../../themes/v3/light/theme.js";
import "../../../../themes/v3/dark/theme.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import "../../../../themes/utilities.js";
import "../../../button/button.js";
import "../../../button/variants/icon-button/icon-button.js";
import "baseui/modal";
import "../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../modal/regular-modal.js";
import "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import "../../../information-popover/components/information-popover-header/information-popover-header.styles.js";
import "baseui/typography";
import "baseui/input";
import "../../../menu/stateful-menu/stateful-menu.js";
import "../../../menu/virtualized-menu/components/virtualized-list/virtualized-list.js";
import "baseui/avatar";
import "baseui/tooltip";
import "../../../avatar/avatar.styles.js";
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
import "baseui/menu";
import "../../../menu/stateless-menu/stateless-menu.overrides.js";
import "dompurify";
import "baseui/tag";
import "../../../truncated-text/truncated-text.js";
import "../../components/webdox-ai-button-information-popover/webdox-ai-button-information-popover.styles.js";
import "../../components/webdox-ai-button-information-popover/components/popover-title-with-icon/popover-title-with-icon.js";
import "../../../messages/message-composer/common/composer-textarea/composer-textarea.styles.js";
import "../../components/webdox-ai-button-information-popover/components/chat-shortcut-information-popover/styled-chat-shortcut-wrapper.js";
import "../../components/webdox-ai-button-information-popover/components/chat-shortcut-information-popover/styled-detail-chat-shortcut-wrapper.js";
import "../../components/webdox-ai-button-information-popover/next/components/information-popover-content/styled-components/styled-actions-container.js";
import "../../components/webdox-ai-button-information-popover/next/components/information-popover-content/styled-components/styled-content-with-actions-container.js";
import "../../components/webdox-ai-button-information-popover/next/components/information-popover-title/styled-components/styled-emoji.js";
import "../../components/webdox-ai-button-information-popover/next/components/popover-title-with-icon/popover-title-with-icon.js";
import { AssistantLayout as c } from "../../components/assistant-layout/assistant-layout.js";
import "../../components/webdox-ai-document-viewer-wrapper/webdox-ai-document-viewer-wrapper.styles.js";
import "../../../popover/popover.styles.js";
import "../../components/webdox-ai-collapsible-button/webdox-ai-collapsible-button.js";
import "../../components/legal-whisper-answer-rating/legal-whisper-answer-rating.js";
import "../../components/legal-whisper-answer-rating/styled-components/styled-container.js";
import "../../components/legal-whisper-answer-rating/styled-components/styled-body.js";
import "../../components/legal-whisper-answer-rating/styled-components/styled-footer.js";
import "../../components/legal-whisper-answer-rating/styled-components/styled-title-container.js";
import "../../components/legal-whisper-answer-rating/styled-components/styled-radio-description-with-textarea.js";
import "../../components/legal-whisper-answer-rating/styled-components/styled-quotes-container.js";
import "../../components/legal-whisper-answer-rating/styled-components/styled-radio-description-container.js";
import "../../components/legal-whisper-answer-rating/styled-components/styled-success-message-container.js";
import "../../components/legal-whisper-answer-rating/styled-components/styled-success-message-options-container.js";
import "../../components/legal-whisper-answer-rating/legal-whisper-answer-rating.constants.js";
import "marked";
import "../../../data-table/data-table.styles.js";
import "../../components/business-summary/business-summary.styles.js";
import "baseui/drawer";
import "resize-observer-polyfill";
import "../../../drawer/components/side-nav/side-nav.styles.js";
import "baseui/header-navigation";
import "baseui/layer";
import "../../../../constants/placement.constants.js";
import "../../../dynamic-dialog/next/dynamic-dialog.constants.js";
import "../../../dynamic-dialog/next/components/styled-components.js";
import "../../../dynamic-dialog/next/context/dynamic-dialog.context.js";
import "react-is";
import "../../../tag/next/tag.styled-components.js";
import "../../../notification/next/notification.js";
import "../../contexts/plan-usage.context.js";
import "../../components/usage-overview-popover/usage-overview-popover.js";
import "../../components/text-rotator/text-rotator.styles.js";
import "../../components/data-extraction/components/data-extraction-beta/components/metadata-descriptive-loading/styled-components/styled-container.js";
import "lodash";
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
import { CustomPromptModalsProvider as pt } from "../../providers/custom-prompt-modals.provider.js";
import { PlanUsageProvider as at } from "../../providers/plan-usage.provider.js";
import { conversationUtils as st } from "../../utils/conversation.util.js";
import { AssistantChatController as nt } from "../assistant-chat.controller.js";
import { AssistantMetadataController as et } from "../assistant-metadata-controller/assistant-metadata.controller.js";
const q = (m, p) => ({
  ...m,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - it is correct but i18next wont allow strings
  label: p(`webdoxAI.dataExtraction.contractTypes.${m.label}`, {
    defaultValue: m.label,
    ignoreErrors: !0
  })
}), Ii = ({
  contractKinds: m,
  contractKind: p,
  metadataList: v,
  selectedTab: A = r.assistantTabs.metadata,
  selectedAIService: d = "brainCompanion",
  showLegalWhisper: x = !1,
  isQuestionWritingAllowed: w = !0,
  onClose: z,
  onAIServiceChange: O = g,
  onClickDynamicView: B = g,
  availablePlans: F = [],
  isPlanUsageActive: G = !1,
  legalWhisperController: H,
  ...y
}) => {
  var V;
  const { t: i } = rt(), [a, E] = tt([
    r.assistantOptions[0]
  ]), {
    "data-testid": J,
    isLoading: b,
    onTabChange: s,
    conversationDisabled: f,
    onTempAnswerSubmit: P = () => {
    },
    isPreparingConversation: I,
    isPreparingDocument: D,
    conversationDispatch: K = g,
    conversation: { questions: M = [] } = {},
    prompts: h,
    isConversationEmpty: S,
    onExecuteCustomPromptAction: N,
    zIndex: Q
  } = y, n = (V = a == null ? void 0 : a[0]) == null ? void 0 : V.id, R = l(
    () => m.map((t) => q(t, i)),
    [m, i]
  ), u = l(
    () => p !== void 0 ? q(p, i) : void 0,
    [p, i]
  ), W = l(
    () => v.map((t) => ({
      ...t,
      label: i(`webdoxAI.dataExtraction.metadata.${t.label}`, {
        ignoreErrors: !0,
        defaultValue: t.label
      })
    })),
    [v, i]
  ), X = j(
    (t, e) => {
      const { item: C } = e ?? {};
      [
        $.specialAnswerId.editContract,
        $.specialAnswerId.contractKind
      ].some((_) => _ === (C == null ? void 0 : C.id)) && s({ activeKey: r.assistantTabs.metadata }), f || P(t, e);
    },
    [f, s, P]
  ), k = {
    ...y,
    selectedTab: A,
    contractKind: u,
    contractKinds: R,
    metadataList: W,
    disabled: f,
    isQuestionWritingAllowed: w,
    onTabChange: s,
    onTempAnswerSubmit: X
  };
  U(() => {
    !I && !D && S && st.findQuestionByVariant(M, "contractKind") === void 0 && n === "brainCompanion" && h.length > 0 && K({
      type: mt.actions.contractKindAnswer,
      payload: {
        tempProps: {
          item: u,
          options: h
        }
      }
    });
  }, [
    u,
    K,
    S,
    I,
    D,
    h,
    M,
    a,
    n
  ]);
  const Y = l(() => {
    if (x)
      return r.assistantOptions.map((t) => ({
        ...t,
        label: i(t.label)
      }));
  }, [i, x]), Z = j(
    (t) => {
      t && (E(t), O(t[0].id));
    },
    [O]
  );
  return U(() => {
    if (d) {
      const t = r.assistantOptions.find(
        (e) => e.id === d
      );
      E([t]);
    }
  }, [d]), /* @__PURE__ */ o(
    pt,
    {
      onExecuteCustomPromptAction: N,
      isEditingDisabled: !w,
      zIndex: Q,
      children: /* @__PURE__ */ o(
        at,
        {
          availablePlans: F,
          isPlanUsageActive: G,
          children: /* @__PURE__ */ L(
            c,
            {
              "data-testid": J,
              selectOptions: Y,
              selectedOption: a,
              onSelectChange: Z,
              onClose: z,
              onClickDynamicView: B,
              children: [
                n === r.assistantOptionMap.brainCompanion && /* @__PURE__ */ L(
                  c.Tabs,
                  {
                    onChange: s,
                    activeKey: A,
                    children: [
                      /* @__PURE__ */ o(
                        c.Tab,
                        {
                          title: i("webdoxAI.tabsTitles.contractSheet"),
                          artwork: () => /* @__PURE__ */ o(
                            ot,
                            {
                              width: 16,
                              height: 16,
                              color: "inherit"
                            }
                          ),
                          children: /* @__PURE__ */ o(T, { isLoading: b, children: /* @__PURE__ */ o(et, { ...k }) })
                        },
                        r.assistantTabs.metadata
                      ),
                      /* @__PURE__ */ o(
                        c.Tab,
                        {
                          title: i("webdoxAI.tabsTitles.askMe"),
                          artwork: () => /* @__PURE__ */ o(
                            it,
                            {
                              width: 16,
                              height: 16,
                              color: "inherit"
                            }
                          ),
                          children: /* @__PURE__ */ o(T, { isLoading: b, children: /* @__PURE__ */ o(nt, { ...k }) })
                        },
                        r.assistantTabs.chat
                      )
                    ]
                  }
                ),
                n === r.assistantOptionMap.legalWhisper && /* @__PURE__ */ o(T, { isLoading: b, children: H })
              ]
            }
          )
        }
      )
    }
  );
};
export {
  Ii as AssistantController
};
//# sourceMappingURL=assistant.controller.js.map
