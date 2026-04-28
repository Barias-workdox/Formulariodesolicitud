var c = Object.defineProperty;
var r = (n, e, s) => e in n ? c(n, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[e] = s;
var t = (n, e, s) => r(n, typeof e != "symbol" ? e + "" : e, s);
import { Idea as a } from "@carbon/icons-react";
class o {
  constructor() {
    t(this, "pageRefHtml", "bai-page");
    t(this, "answerReferencesRefHtml", "bai-references");
    t(this, "pageRefBrHtml", "br");
    t(this, "specialAnswerId", {
      editContract: "answer__edit-contract",
      contractKind: "answer__contract-kind",
      suggestions: "answer__suggestions",
      pageChange: "action__page-change",
      textSelectionRange: "action__text-selection-range"
    });
    t(this, "contractKindPrompt", {
      id: this.specialAnswerId.contractKind,
      label: "webdoxAI.chat.contractKindAnswer.contractSheet",
      Icon: a,
      isInternal: !0
    });
    t(this, "suggestionsPrompt", {
      id: this.specialAnswerId.suggestions,
      label: "webdoxAI.chat.contractKindAnswer.suggestions",
      Icon: a,
      isInternal: !0
    });
  }
}
const d = new o();
export {
  o as MessageConstants,
  d as messageConstants
};
//# sourceMappingURL=message.constant.js.map
