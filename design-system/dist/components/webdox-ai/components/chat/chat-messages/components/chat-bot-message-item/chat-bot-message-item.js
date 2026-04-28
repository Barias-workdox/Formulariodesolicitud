import { jsx as n } from "react/jsx-runtime";
import { PersistAnswerVariant as p } from "./components/persist-answer-variant/persist-answer-variant.js";
import { ContractKindAnswerVariant as s } from "./components/contract-kind-answer-variant/contract-kind-answer-variant.js";
import { PromptsSuggestionAnswerVariant as e } from "./components/prompts-suggestion-answer-variant/prompts-suggestion-answer-variant.js";
import { FirstAnswerVariant as a } from "./components/first-answer-variant/first-answer-variant.js";
import { GenerativeAnswerVariant as f } from "./components/generative-answer-variant/generative-answer-variant.js";
import { LoadingAnswerVariant as d } from "./components/loading-answer-variant/loading-answer-variant.js";
import { DescriptiveLoadingAnswerVariant as g } from "./components/descriptive-loading-answer-variant/descriptive-loading-answer-variant.js";
import { SystemAnswerVariant as w } from "./components/system-answer-variant/system-answer-variant.js";
import "react";
import "@carbon/icons-react";
import "../../../../../../text/text.js";
import "baseui";
import "baseui/tooltip";
import "../../../../../../truncated-text/truncated-text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import "resize-observer-polyfill";
import "react-is";
import "../../../../../../tag/next/tag.styled-components.js";
import "../../../../../../../contexts/locale-provider/locale-provider.js";
import "date-fns";
import "date-fns/locale";
import "./components/answer-header/styled-components/styled-container.js";
import { ErrorVariant as A } from "./components/error-variant/error-variant.js";
const V = {
  persist: p,
  contractKind: s,
  promptsSuggestions: e,
  firstAnswer: a,
  generative: f,
  loading: d,
  descriptiveLoading: g,
  systemAnswer: w,
  error: A
}, U = ({ ...r }) => {
  const { id: i, variant: t = "persist", tempProps: o } = r, m = V[t];
  return /* @__PURE__ */ n(
    m,
    {
      dataTestId: i,
      variant: t,
      ...r,
      ...o
    }
  );
};
export {
  U as ChatBotMessageItem
};
//# sourceMappingURL=chat-bot-message-item.js.map
