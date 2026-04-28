var i = Object.defineProperty;
var e = (s, a, t) => a in s ? i(s, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[a] = t;
var n = (s, a, t) => e(s, typeof a != "symbol" ? a + "" : a, t);
class o {
  constructor() {
    n(this, "assistantTabs", {
      chat: "chat",
      metadata: "metadata"
    });
    n(this, "assistantOptions", [
      {
        label: "webdoxAI.assistantOptions.brainCompanion",
        value: "webdoxAI.chat.assistantTitle",
        id: "brainCompanion"
      },
      {
        label: "webdoxAI.assistantOptions.legalWhisper",
        value: "webdoxAI.chat.legalWhisperTitle",
        id: "legalWhisper"
      }
    ]);
    n(this, "assistantOptionMap", {
      brainCompanion: "brainCompanion",
      legalWhisper: "legalWhisper"
    });
  }
}
const p = new o();
export {
  o as AssistantConstants,
  p as assistantConstants
};
//# sourceMappingURL=assistant.constant.js.map
