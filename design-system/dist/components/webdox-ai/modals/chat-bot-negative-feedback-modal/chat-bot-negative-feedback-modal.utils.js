import * as o from "yup";
import "@hookform/resolvers/yup";
import "@hookform/resolvers/zod";
import "lodash/debounce";
import { useFormContext as a } from "react-hook-form";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as m } from "../../../utils/i18n/utils.js";
const x = () => {
  const { t: e } = m();
  return o.object().shape({
    comments: o.string().when(
      "option",
      ([i], r) => i === "custom" ? o.string().trim().test("empty-check", e("forms.validations.required"), (t) => t != null && t !== "").required(e("forms.validations.required")) : r
    ),
    option: o.string().required(e("forms.validations.required"))
  });
}, F = {
  comments: "",
  option: void 0
}, q = () => a(), w = (e) => [
  {
    id: "not_real",
    label: e("webdoxAI.chat.feedback.modal.negative.options.not_real")
  },
  {
    id: "incomplete",
    label: e("webdoxAI.chat.feedback.modal.negative.options.incomplete")
  },
  {
    id: "unhelpful",
    label: e("webdoxAI.chat.feedback.modal.negative.options.unhelpful")
  },
  {
    id: "custom",
    label: e("webdoxAI.chat.feedback.modal.negative.options.custom")
  }
];
export {
  F as defaultNegativeFeedbackFormValues,
  w as getFormOptions,
  x as useChatBotNegativeFeedbackValidationSchema,
  q as useNegativeFeedbackFormContext
};
//# sourceMappingURL=chat-bot-negative-feedback-modal.utils.js.map
