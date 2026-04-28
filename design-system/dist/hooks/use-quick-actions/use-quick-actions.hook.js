import { useState as f, useEffect as u, useCallback as h } from "react";
const g = ({
  allOptions: t,
  setIsOpen: e,
  onSelect: c
}) => {
  const [i, l] = f(t), [o, a] = f("");
  u(() => {
    o === "" && t.length > 0 && e(!0);
  }, [o, e, t]), u(() => {
    const r = t.filter(
      ({ title: n = "", content: d = "" }) => `${n} ${d}`.toLowerCase().includes(o.toLowerCase())
    );
    r.length > 0 ? l(r) : e(!1);
  }, [t, o, e]);
  const s = h(
    (r) => {
      c(r.content), e(!1);
    },
    [c, e]
  );
  return {
    options: i,
    setFilterValue: a,
    handleSelect: s
  };
};
export {
  g as useQuickActions
};
//# sourceMappingURL=use-quick-actions.hook.js.map
