import { jsx as e } from "react/jsx-runtime";
import { useForm as c } from "../../../forms/hooks/use-form.js";
import { FormProvider as l } from "react-hook-form";
import { ChatBotNegativeFeedbackModal as f } from "./chat-bot-negative-feedback-modal.js";
import { useChatBotNegativeFeedbackValidationSchema as n, defaultNegativeFeedbackFormValues as h } from "./chat-bot-negative-feedback-modal.utils.js";
const g = ({
  "data-testid": a,
  isOpen: t = !1,
  isLoading: o = !1,
  zIndex: r,
  onClose: d,
  onSubmit: i
}) => {
  const m = n(), s = c({
    schema: m,
    defaultValues: h
  });
  return /* @__PURE__ */ e(l, { ...s, children: /* @__PURE__ */ e(
    f,
    {
      "data-testid": `${a}--negative-feedback-modal`,
      isLoading: o,
      isOpen: t,
      zIndex: r,
      onClose: d,
      onSubmit: i
    }
  ) });
};
export {
  g as ChatBotNegativeFeedbackModalContainer
};
//# sourceMappingURL=chat-bot-negative-feedback-modal.container.js.map
