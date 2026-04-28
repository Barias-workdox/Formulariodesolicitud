import { useContext as t } from "react";
import { CustomPromptModalsContext as r } from "../contexts/custom-prompt-modals.context.js";
const m = () => {
  const o = t(r);
  if (!o)
    throw new Error(
      "useCustomPromptModalsContext must be used within a CustomPromptModalsProvider"
    );
  return o;
};
export {
  m as useCustomPromptModalsContext
};
//# sourceMappingURL=use-custom-prompt-modals-context.hook.js.map
