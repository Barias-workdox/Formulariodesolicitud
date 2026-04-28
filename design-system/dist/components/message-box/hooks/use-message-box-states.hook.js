import { useState as e } from "react";
const c = (s) => {
  const { forcedOpen: t } = s || {}, [n, o] = e(!1), [p, a] = e(!1);
  return {
    isOpen: t || n,
    isExpanded: p,
    setIsOpen: o,
    setIsExpanded: a
  };
};
export {
  c as useMessageBoxStates
};
//# sourceMappingURL=use-message-box-states.hook.js.map
