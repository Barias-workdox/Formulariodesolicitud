import { jsx as i } from "react/jsx-runtime";
import { createContext as d, useContext as c, useState as s } from "react";
const t = d(void 0), C = ({
  children: e,
  defaultProps: o
}) => {
  const [r, n] = s();
  return /* @__PURE__ */ i(t.Provider, { value: { ...o, activeKey: r, setActiveKey: n }, children: e });
}, v = () => {
  const e = c(t);
  if (!e)
    throw new Error("useSectionedCard must be used within a SectionedCardProvider");
  return e;
};
export {
  C as SectionedCardProvider,
  v as useSectionedCard
};
//# sourceMappingURL=sectioned-card.provider.js.map
