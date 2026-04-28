import { useCallback as r } from "react";
import { assistantTrackingConstants as o } from "../constants/assistant-tracking.constant.js";
import { assistantConstants as v } from "../constants/assistant.constant.js";
const n = ({
  pageScope: t,
  document: i,
  message: s,
  answerVariant: p,
  feedback: d,
  prompt: u,
  selectedTab: y,
  contractKind: m,
  metadata: g,
  customPrompt: C
}) => ({
  ...s !== void 0 && {
    message_id: s.id,
    message_content: s.value,
    message_label: s.label
  },
  ...i !== void 0 && {
    document_id: i.id,
    document_uuid: i.uuid,
    document_name: i.name,
    document_ext: i.fileExt
  },
  ...m !== void 0 && {
    contract_kind_id: m.id,
    contract_kind_value: m.value,
    contract_kind_label: String(m.label)
  },
  ...g !== void 0 && {
    metadata_id: g.id,
    metadata_value: g.value,
    metadata_label: String(g.label)
  },
  ...d !== void 0 && {
    feedback_comment: d.values.comments,
    feedback_option: d.values.option
  },
  ...u !== void 0 && {
    prompt_kind: u.label,
    prompt_value: u.value
  },
  ...p !== void 0 && { answer_variant: p },
  ...y !== void 0 && { tab: y },
  ...t !== void 0 && { origin: t },
  ...C !== void 0 && { customPrompt: C }
}), M = ({
  callback: t
}) => {
  const i = r(
    ({ message: e, ...a }) => {
      t({
        name: o.sendQuery,
        payload: n({
          prompt: {
            label: e.label,
            value: e.value
          },
          ...a
        })
      });
    },
    [t]
  ), s = r(
    (e) => {
      t({
        name: o.closeAssistant,
        payload: n(e)
      });
    },
    [t]
  ), p = r(
    (e) => {
      e.selectedTab === v.assistantTabs.metadata && t({
        name: o.metadataTabChange,
        payload: n(e)
      }), e.selectedTab === v.assistantTabs.chat && t({
        name: o.chatTabChange,
        payload: n(e)
      });
    },
    [t]
  ), d = r(
    (e) => {
      t({
        name: o.copyToClipboard,
        payload: n(e)
      });
    },
    [t]
  ), u = r(
    (e) => {
      t({
        name: o.summaryScroll,
        payload: n(e)
      });
    },
    [t]
  ), y = r(
    (e) => {
      t({
        name: o.copySummary,
        payload: n(e)
      });
    },
    [t]
  ), m = r(
    (e) => {
      t({
        name: o.generateSummary,
        payload: n(e)
      });
    },
    [t]
  ), g = r(
    (e) => {
      t({
        name: o.generateContractReport,
        payload: n(e)
      });
    },
    [t]
  ), C = r(
    (e) => {
      t({
        name: o.documentViewerCopyAction,
        payload: n(e)
      });
    },
    [t]
  ), _ = r(
    (e) => {
      t({
        name: o.documentViewerTranslateAction,
        payload: n(e)
      });
    },
    [t]
  ), S = r(
    (e) => {
      t({
        name: o.documentViewerExplainAction,
        payload: n(e)
      });
    },
    [t]
  ), A = r(
    (e) => {
      t({
        name: e.feedback.feedbackKind === "negative" ? o.negativeFeedback : o.positiveFeedback,
        payload: n(e)
      });
    },
    [t]
  ), T = r(
    (e) => {
      t({
        name: o.clickSuggestions,
        payload: n(e)
      });
    },
    [t]
  ), f = r(
    ({ message: e, ...a }) => {
      t({
        name: o.selectSuggestion,
        payload: n({
          prompt: {
            label: e.label,
            value: e.value
          },
          ...a
        })
      });
    },
    [t]
  ), h = r(
    ({ message: e, ...a }) => {
      t({
        name: o.changeContractKind,
        payload: n({
          ...a,
          contractKind: e
        })
      });
    },
    [t]
  ), w = r(
    ({ message: e, ...a }) => {
      t({
        name: o.changeMetadata,
        payload: n({
          ...a,
          metadata: e
        })
      });
    },
    [t]
  ), P = r(
    (e) => {
      t({
        name: o.clickAnswerReference,
        payload: n(e)
      });
    },
    [t]
  ), V = r(
    (e) => {
      t({
        name: o.clickCustomPrompt,
        payload: n(e)
      });
    },
    [t]
  ), x = r(
    (e) => {
      t({
        name: o.createCustomPrompt,
        payload: n(e)
      });
    },
    [t]
  ), D = r(
    (e) => {
      t({
        name: o.deleteCustomPrompt,
        payload: n(e)
      });
    },
    [t]
  ), E = r(
    (e) => {
      t({
        name: o.editCustomPrompt,
        payload: n(e)
      });
    },
    [t]
  ), F = r(
    (e) => {
      t({
        name: o.clickSignatureAI,
        payload: n(e)
      });
    },
    [t]
  );
  return {
    triggerChangeContractKind: h,
    triggerChangeMetadata: w,
    triggerClickSuggestions: T,
    triggerCloseAssistant: s,
    triggerCopyToClipboard: d,
    triggerFeedback: A,
    triggerSelectSuggestion: f,
    triggerSendQuery: i,
    triggerTabChange: p,
    triggerSummaryScroll: u,
    triggerCopySummary: y,
    triggerGenerateSummary: m,
    triggerGenerateContractReport: g,
    triggerDocumentViewerCopyAction: C,
    triggerDocumentViewerTranslateAction: _,
    triggerDocumentViewerExplainAction: S,
    triggerClickAnswerReference: P,
    triggerClickCustomPrompt: V,
    triggerCreateCustomPrompt: x,
    triggerDeleteCustomPrompt: D,
    triggerEditCustomPrompt: E,
    triggerSignatureClickAI: F
  };
};
export {
  M as useChatAssistantTracking
};
//# sourceMappingURL=use-chat-assistant-tracking.js.map
