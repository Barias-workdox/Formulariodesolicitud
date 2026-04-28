import { jsxs as m, jsx as t } from "react/jsx-runtime";
import { useCss as c } from "../../../utils/hooks/use-css.js";
import { styles as d } from "./collaboration.layout.styles.js";
const u = ({
  Header: e,
  Banner: o,
  children: l,
  showBanner: s
}) => {
  const { layoutStyles: r, headerStyles: a, contentStyles: i } = c(d, { showBanner: s });
  return /* @__PURE__ */ m("div", { className: r, children: [
    /* @__PURE__ */ t("div", { className: a, children: e }),
    s && o,
    /* @__PURE__ */ t("div", { className: i, children: l })
  ] });
};
export {
  u as CollaborationLayout
};
//# sourceMappingURL=collaboration.layout.js.map
