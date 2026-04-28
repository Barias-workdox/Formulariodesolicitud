var c = Object.defineProperty;
var n = (a, t, o) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[t] = o;
var e = (a, t, o) => n(a, typeof t != "symbol" ? t + "" : t, o);
class r {
  constructor() {
    e(this, "sendQuery", "BC: Send query");
    e(this, "closeAssistant", "BC: Close drawer");
    e(this, "metadataTabChange", "BC: Open data extraction");
    e(this, "chatTabChange", "BC: Open chat");
    e(this, "copyToClipboard", "BC: Copy to clipboard");
    e(this, "positiveFeedback", "BC: Positive feedback");
    e(this, "negativeFeedback", "BC: Negative feedback");
    e(this, "selectSuggestion", "BC: Used suggestion");
    e(this, "clickSuggestions", "BC: Click on suggestions");
    e(this, "changeContractKind", "BC: Edit contract type");
    e(this, "changeMetadata", "BC: Edit contract data");
    e(this, "summaryScroll", "BC: Summary scroll");
    e(this, "copySummary", "BC: Copy summary");
    e(this, "generateSummary", "BC: Generate summary");
    e(this, "generateContractReport", "BC: Generate contract report");
    e(this, "documentViewerCopyAction", "Document viewer: Copy action");
    e(this, "documentViewerTranslateAction", "BC: Document viewer: Translate action");
    e(this, "documentViewerExplainAction", "BC: Document viewer: Explain action");
    e(this, "clickAnswerReference", "BC: Answer reference clicked");
    e(this, "clickCustomPrompt", "BC: Custom prompt clicked");
    e(this, "deleteCustomPrompt", "BC: Custom prompt deleted");
    e(this, "createCustomPrompt", "BC: Custom prompt created");
    e(this, "editCustomPrompt", "BC: Custom prompt edited");
    e(this, "clickSignatureAI", "BC: Click Signature AI");
  }
}
const s = new r();
export {
  r as AssistantTrackingConstants,
  s as assistantTrackingConstants
};
//# sourceMappingURL=assistant-tracking.constant.js.map
