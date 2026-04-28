const g = "legal-whisper-answer-rating", v = "260px", r = [1, 2, 3, 4, 5], c = r[r.length - 1], I = {
  score: 0,
  answerProblem: void 0
}, m = 1e3;
var s = /* @__PURE__ */ ((e) => (e.RatingAnswer = "ratingAnswer", e.MainAnswerProblems = "mainAnswerProblems", e.QuoteTypeToImprove = "quoteTypeToImprove", e.LegalWhisperUsage = "legalWhisperUsage", e.SystemError = "systemError", e.QuoteProblem = "quoteProblem", e.QuotesToImprove = "quotesToImprove", e.SuccessMessage = "successMessage", e))(s || {}), o = /* @__PURE__ */ ((e) => (e.MainAnswer = "mainAnswer", e.Quotes = "quotes", e.LegalWhisperUsage = "legalWhisperUsage", e.SystemError = "systemError", e))(o || {}), n = /* @__PURE__ */ ((e) => (e.NotAlignedWithInvestigation = "notAlignedWithInvestigation", e.TooLong = "tooLong", e.Other = "other", e))(n || {}), a = /* @__PURE__ */ ((e) => (e.NotIntuitive = "notIntuitive", e.UnclearOrganization = "unclearOrganization", e.Other = "other", e))(a || {}), i = /* @__PURE__ */ ((e) => (e.AnswerLoadingError = "answerLoadingError", e.Other = "other", e))(i || {}), p = /* @__PURE__ */ ((e) => (e.QuoteNotInForce = "quoteNotInForce", e.IrrelevantQuote = "irrelevantQuote", e.IncorrectQuoteInformation = "incorrectQuoteInformation", e.Other = "other", e))(p || {}), u = /* @__PURE__ */ ((e) => (e.Legal = "legal", e.Administrative = "administrative", e.Jurisprudential = "jurisprudential", e))(u || {});
const t = {
  mainAnswer: "mainAnswerProblems",
  quotes: "quoteTypeToImprove",
  legalWhisperUsage: "legalWhisperUsage",
  systemError: "systemError"
  /* SystemError */
}, l = {
  ratingAnswer: {
    nextStep: ({ answerProblem: e }) => t[e],
    prevStep: "ratingAnswer"
    /* RatingAnswer */
  },
  mainAnswerProblems: {
    nextStep: "mainAnswerProblems",
    prevStep: ({ alreadyRated: e }) => e ? "successMessage" : "ratingAnswer"
    /* RatingAnswer */
  },
  quoteTypeToImprove: {
    nextStep: "quoteProblem",
    prevStep: ({ alreadyRated: e }) => e ? "successMessage" : "ratingAnswer"
    /* RatingAnswer */
  },
  quoteProblem: {
    nextStep: "quotesToImprove",
    prevStep: "quoteTypeToImprove"
    /* QuoteTypeToImprove */
  },
  quotesToImprove: {
    nextStep: "quotesToImprove",
    prevStep: "quoteProblem"
    /* QuoteProblem */
  },
  legalWhisperUsage: {
    nextStep: "legalWhisperUsage",
    prevStep: ({ alreadyRated: e }) => e ? "successMessage" : "ratingAnswer"
    /* RatingAnswer */
  },
  systemError: {
    nextStep: "systemError",
    prevStep: ({ alreadyRated: e }) => e ? "successMessage" : "ratingAnswer"
    /* RatingAnswer */
  },
  successMessage: {
    nextStep: ({ answerProblem: e }) => t[e],
    prevStep: "successMessage"
    /* SuccessMessage */
  }
};
export {
  g as ANSWER_RATING_BASE_TEST_ID,
  I as ANSWER_RATING_FORM_DEFAULT_VALUES,
  o as AnswerProblem,
  s as AnswerRatingStep,
  a as LegalWhisperUsageProblem,
  m as MAX_OBSERVATIONS_MESSAGE_LENGHT,
  c as MAX_RATING_VALUE,
  n as MainAnswerProblem,
  p as QuoteProblem,
  u as QuoteType,
  v as RATING_DESCRIPTION_WIDTH,
  r as RATING_VALUES_ARRAY,
  i as SystemError,
  l as answerRatingStepsMap
};
//# sourceMappingURL=legal-whisper-answer-rating.constants.js.map
