import { jsx as r, jsxs as e } from "react/jsx-runtime";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as p } from "../../../../../../../../utils/i18n/utils.js";
import { TextRotator as n } from "../../../../../../text-rotator/text-rotator.js";
import { WebdoxAISpinner as m } from "../../../../../../webdox-ai-spinner/webdox-ai-spinner.js";
import { ChatMessageLayout as a } from "../../../chat-message-layout/chat-message-layout.js";
import { StyledContainer as d } from "./styled-components/styled-container.js";
const y = ({
  dataTestId: i = "descriptive-loading"
}) => {
  const { t } = p(), o = [
    t("webdoxAI.chat.descriptiveLoading.text1"),
    t("webdoxAI.chat.descriptiveLoading.text2"),
    t("webdoxAI.chat.descriptiveLoading.text3")
  ];
  return /* @__PURE__ */ r(a, { kind: "primary", children: /* @__PURE__ */ e(d, { children: [
    /* @__PURE__ */ r(m, { dataTestId: `${i}--spinner` }),
    /* @__PURE__ */ r(n, { texts: o })
  ] }) });
};
export {
  y as DescriptiveLoadingAnswerVariant
};
//# sourceMappingURL=descriptive-loading-answer-variant.js.map
