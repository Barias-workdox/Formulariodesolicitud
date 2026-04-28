import { useState as r, useMemo as t } from "react";
const d = () => {
  const [e, o] = r(!1), [s, a] = r(!1);
  return t(
    () => ({
      isHovered: s || e,
      setIsHeaderHovered: a,
      setIsTableMenuHovered: o
    }),
    [s, e]
  );
};
export {
  d as useMessageTableHeaderHover
};
//# sourceMappingURL=use-message-table-header-hover.hook.js.map
