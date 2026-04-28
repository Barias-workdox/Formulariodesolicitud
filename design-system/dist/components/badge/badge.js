import { jsxs as m, jsx as d } from "react/jsx-runtime";
import { useCss as p } from "../utils/hooks/use-css.js";
import { styles as f } from "./badge.styles.js";
const b = ({
  content: s,
  children: e,
  backgroundColor: t = "brand",
  color: r = "base",
  placement: o = "topRight",
  shape: c = "circle",
  hidden: i = !1,
  overrides: n = {}
}) => {
  const { containerStyles: a, contentStyles: l } = p(f, {
    backgroundColor: t,
    color: r,
    placement: o,
    shape: c,
    hidden: i,
    overrides: n
  });
  return /* @__PURE__ */ m("div", { className: a, children: [
    /* @__PURE__ */ d("div", { className: l, children: s }),
    e
  ] });
};
export {
  b as Badge
};
//# sourceMappingURL=badge.js.map
