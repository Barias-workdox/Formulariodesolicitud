import { useContext as t } from "react";
import { noop as e } from "../../../../utils/noop.js";
import { MessageBoxContext as s } from "../contexts/message-box.context.js";
const n = {
  disabled: !1,
  editorContentNode: null,
  isEmpty: !0,
  isFocused: !1,
  isHovered: !1,
  handleSubmit: e,
  setIsFocused: e,
  setIsHovered: e
}, a = () => {
  const o = t(s);
  return o || (console.warn("useMessageBoxContext must be used within a MessageBoxProvider"), n);
};
export {
  n as defaultContext,
  a as useMessageBoxContext
};
//# sourceMappingURL=use-message-box-context.hook.js.map
