import { jsx as a } from "react/jsx-runtime";
import { useCss as i } from "../../utils/hooks/use-css.js";
const r = {
  containerStyles: (s, { padding: e, direction: t }) => ({
    position: "relative",
    padding: e ?? `${s.spacing.spacingMd} ${s.spacing.spacing3xl}`,
    [`:not(:${t === "reverse" ? "last-child" : "first-child"})`]: {
      borderTop: `1px solid ${s.colors.divisionLine}`
    }
  })
}, d = {
  headerStyles: (s) => ({
    display: "flex",
    alignItems: "center",
    marginBottom: s.spacing.spacingXs,
    overflow: "hidden"
  })
}, p = ({
  children: s,
  padding: e,
  direction: t,
  "data-testid": n
}) => {
  const { containerStyles: o } = i(r, { padding: e, direction: t });
  return /* @__PURE__ */ a(
    "div",
    {
      className: o,
      "data-testid": n,
      children: s
    }
  );
}, g = ({ children: s }) => {
  const { headerStyles: e } = i(d);
  return /* @__PURE__ */ a("div", { className: e, children: s });
};
export {
  p as MessageContainer,
  g as MessageHeader
};
//# sourceMappingURL=message-layout.js.map
