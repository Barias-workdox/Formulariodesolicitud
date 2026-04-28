import { jsx as e } from "react/jsx-runtime";
import { noop as o } from "../../../../utils/noop.js";
import { LegalWhisperUsageStep as f } from "./components/legal-whisper-usage-step/legal-whisper-usage-step.js";
import { MainAnswerProblemsStep as g } from "./components/main-answer-problems-step/main-answer-problems-step.js";
import { QuoteProblemStep as l } from "./components/quote-problem-step/quote-problem-step.js";
import { QuoteTypeToImproveStep as u } from "./components/quote-type-to-improve-step/quote-type-to-improve-step.js";
import { QuotesToImproveStep as c } from "./components/quotes-to-improve-step/quotes-to-improve-step.js";
import { RatingAnswerStep as w } from "./components/rating-answer-step/rating-answer-step.js";
import { SuccessMessageStep as A } from "./components/success-message-step/success-message-step.js";
import { SystemErrorStep as Q } from "./components/system-error-step/system-error-step.js";
import { AnswerRatingStep as r } from "./legal-whisper-answer-rating.constants.js";
import { StyledContainer as T } from "./styled-components/styled-container.js";
import "./styled-components/styled-body.js";
import "./styled-components/styled-footer.js";
import "./styled-components/styled-title-container.js";
import "./styled-components/styled-radio-description-with-textarea.js";
import "./styled-components/styled-quotes-container.js";
import "./styled-components/styled-radio-description-container.js";
import "./styled-components/styled-success-message-container.js";
import "./styled-components/styled-success-message-options-container.js";
const y = {
  [r.LegalWhisperUsage]: f,
  [r.MainAnswerProblems]: g,
  [r.QuoteProblem]: l,
  [r.QuotesToImprove]: c,
  [r.QuoteTypeToImprove]: u,
  [r.RatingAnswer]: w,
  [r.SuccessMessage]: A,
  [r.SystemError]: Q
}, F = ({
  currentStep: t,
  answer: p,
  prevSubmittedValues: m = [],
  nextStep: i = o,
  prevStep: s = o,
  onSubmit: n = o,
  onClose: a = o
}) => {
  const S = y[t];
  return /* @__PURE__ */ e(T, { children: /* @__PURE__ */ e(
    S,
    {
      answer: p,
      prevSubmittedValues: m,
      nextStep: i,
      prevStep: s,
      onSubmit: n,
      onClose: a
    }
  ) });
};
export {
  F as LegalWhisperAnswerRating
};
//# sourceMappingURL=legal-whisper-answer-rating.js.map
