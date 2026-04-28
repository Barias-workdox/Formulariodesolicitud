var P = Object.defineProperty;
var S = (o, e, t) => e in o ? P(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var m = (o, e, t) => S(o, typeof e != "symbol" ? e + "" : e, t);
import H from "dompurify";
import { TEMP_PREFIX as v } from "../../utils/id.util.js";
import { messageConstants as g } from "../constants/message.constant.js";
import { WEBDOX_AI_PAGE_REGEX as f, ALL_QUOTES_VARIANTS as k, INDEX_ID_KEY_REGEX as O, WEBDOX_AI_RANGES_REGEX as $, WEBDOX_AI_RANGE_REGEX as J } from "../constants/webdox-ai-regex.constants.js";
import { checkNotEmptyValue as N } from "../../../utils/check-not-empty-value.util.js";
import { stringUtils as E } from "../../../utils/string.util.js";
class V {
  constructor() {
    m(this, "renderQuestionVariants", ["persist", "placeholder"]);
  }
  /** Transform all conversation's questions and answers into a message */
  mapQuestionsIntoMessages(e, t) {
    return e.reduce(
      (n, s) => [
        ...n,
        ...this.mapQuestionIntoMessages({ question: s, extraParams: t }),
        ...s.answers.map(
          (a) => this.mapAnswerIntoMessage({ answer: a, question: s, extraParams: t })
        )
      ],
      []
    );
  }
  /**
   * Process the message value with a regexp to find the encoded data in the message delimited by
   * `{{{<data>}}}`.
   *
   * As this value comes from a not controlled source, it can be inconsistent, so it is required to sanitize it.
   * Only the templates containing a valid `page` property will be returned
   */
  getMessageEncodedData(e) {
    return E.getAllMatches(e, f).map(([, t]) => this.mapEncodedDataToJson(this.getJsonString(t))).filter((t) => N(t) && this.checkEncodedDataHasValidReference(t));
  }
  /**
   * This function is going to generate a list of page references
   *
   * @example
   * ```
   * {
   *   "[page 1]": 1,
   *   "[page 4]": 4,
   *   ...
   * }
   * ```
   */
  getMessageMapReferences(e, t = (n) => n.toString()) {
    const n = this.getMessageEncodedData(e);
    return Object.assign(
      {},
      ...n.map(({ page: s }) => ({ [`[${t(s)}]`]: s }))
    );
  }
  /**
   * Process the message value with a regexp to replace the encoded data in the message delimited by
   * `{{{<data>}}}`. Only the templates containing a valid `page` property
   * will be replaced.
   */
  replaceEncodedPages(e, t) {
    return e.replaceAll(f, (n, s) => {
      const a = this.mapEncodedDataToJson(this.getJsonString(s));
      return a === void 0 || !this.checkEncodedDataHasValidReference(a) ? n : this.encodedPageRefHtml(t(a.page));
    });
  }
  /**
   * Sanitize the encoded range pair string by removing all quotes and spaces,
   * and ensuring the index_id key is properly formatted.
   */
  sanitizeEncodedRangePair(e) {
    return e.replaceAll(k, "").replaceAll(" ", "").replaceAll(O, '"index_id"');
  }
  /**
   * Process the message value with a regexp to find the encoded range data in the message delimited by
   * `[{"start":1}]`.
   *
   * As this value comes from a not controlled source, it is required to sanitize it.
   */
  replaceEncodedReferences(e, t = []) {
    let n = 1;
    return e.replaceAll($, (s) => {
      const a = [...s.matchAll(J)], r = [];
      return a.forEach(([c]) => {
        const d = this.sanitizeEncodedRangePair(c), { index_id: i } = JSON.parse(d), l = r.find(({ id: p }) => p === i);
        t.find(({ id: p }) => p === i) && !l && (r.push({ id: i, position: n }), n++);
      }), this.encodedAnswerReferencesRefHtml(JSON.stringify({ references: r }));
    });
  }
  /**
   * Process the message value with a regexp to replace the encoded data in the message delimited by
   * `{{{<data>}}}` with an html string value. Only the templates containing a valid `page` property
   * will be replaced
   */
  getMessageWithReplacedEncodedData({
    message: e,
    availableReferences: t,
    getReferenceName: n = (s) => s.toString()
  }) {
    let s = this.replaceEncodedReferences(e, t);
    return s = this.replaceEncodedPages(s, n), s;
  }
  /** Check if the message is a special one */
  checkIsSpecialAnswerId({ id: e }) {
    return Object.values(g.specialAnswerId).some((t) => t === e);
  }
  /** Sanitize raw message */
  sanitizeString(e) {
    return H.sanitize(e);
  }
  /** Check if the encoded data has a valid page reference */
  checkEncodedDataHasValidReference(e) {
    return e.page !== void 0;
  }
  /**
   * Convert the raw value from message encoded data into a json string.
   *
   * It is required to convert all single quotes to double quotes
   */
  getJsonString(e) {
    return `{${e.replaceAll("'", '"')}}`;
  }
  /** Convert the json string into the required json with the specific data model */
  mapEncodedDataToJson(e) {
    try {
      const t = JSON.parse(e);
      return this.checkEncodedDataHasValidReference(t) && (t.page = E.mapToNumber(t.page)), t;
    } catch {
      return;
    }
  }
  /** The encoded page reference HTML template to replace the encoded reference in the chat bot message */
  encodedPageRefHtml(e) {
    return `<${g.pageRefHtml}>[${e}]</${g.pageRefHtml}>`;
  }
  /** The encoded range reference HTML template to replace the encoded reference in the chat bot message */
  encodedAnswerReferencesRefHtml(e) {
    return `<${g.answerReferencesRefHtml}>${e}</${g.answerReferencesRefHtml}>`;
  }
  /** Transform a single conversation's question into messages */
  mapQuestionIntoMessages({
    question: e,
    extraParams: { questionLayoutKind: t, loadingVariant: n = "loading" }
  }) {
    const { id: s, uuid: a = "", value: r, variant: c, isWaiting: d, answers: i } = e, l = i.length === 0 && d ? [
      {
        kind: "answer",
        id: `${v}-${s}-loading`,
        variant: n
      }
    ] : [];
    return [...this.renderQuestionVariants.includes(c) ? [
      {
        kind: "question",
        id: s,
        uuid: a,
        value: r,
        layoutKind: t
      }
    ] : [], ...l];
  }
  /** Transform a single conversation's answer into a message */
  mapAnswerIntoMessage({
    answer: e,
    question: t,
    extraParams: {
      activeAnswerId: n,
      selectedAnswerReference: s,
      updateActiveMessage: a,
      updateAnswerReference: r,
      onCopyToClipboardButtonClick: c,
      onTempAnswerSubmit: d,
      onFeedbackButtonClick: i,
      onRetryAnswerGeneration: l,
      ...u
    }
  }) {
    const {
      id: p,
      uuid: h = "",
      value: R,
      variant: A,
      createdAt: D,
      feedback: _,
      staticContent: w,
      tempProps: I,
      quotes: M
    } = e;
    return {
      content: "",
      read: !1,
      kind: "answer",
      id: p,
      uuid: h,
      value: R,
      variant: A,
      createdAt: D,
      feedback: _,
      staticContent: w,
      question: t,
      selectedAnswerReference: s,
      onCopyToClipboardButtonClick: c,
      onFeedbackButtonClick: i,
      onRetryAnswerGeneration: l,
      updateAnswerReference: r,
      updateActiveMessage: a,
      quotes: M,
      activeAnswerId: n,
      tempProps: {
        ...I,
        onSubmit: d
      },
      ...u
    };
  }
}
const z = new V();
export {
  V as MessageUtils,
  z as messageUtils
};
//# sourceMappingURL=message.util.js.map
