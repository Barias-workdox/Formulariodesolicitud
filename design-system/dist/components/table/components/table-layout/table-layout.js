import { jsx as o, jsxs as y } from "react/jsx-runtime";
import "../../../../themes/v3/light/theme.js";
import "../../../../themes/v3/dark/theme.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import { themedUseStyletron as n } from "../../../../themes/utilities.js";
import { TableHeader as h } from "../table-header/table-header.js";
import "../table-header/table-header-container.js";
import { tableSeparationLineStyles as d, tableLayoutContainerStyles as f } from "./table-layout.styles.js";
const b = () => {
  const [e, s] = n();
  return /* @__PURE__ */ o(
    "div",
    {
      id: "division-line",
      className: e(d(s))
    }
  );
}, C = ({
  headerValues: e,
  gridTemplateColumns: s,
  children: m,
  overrides: r = {}
}) => {
  const [a, i] = n(), { Root: t } = r, l = a({
    ...f(i, s),
    ...t != null && t.style ? typeof (t == null ? void 0 : t.style) == "function" ? t.style({ $theme: i }) : t.style : {}
  });
  return /* @__PURE__ */ y("div", { className: l, children: [
    e.map((c, p) => /* @__PURE__ */ o(h, { children: c }, `header-${p}`)),
    /* @__PURE__ */ o(b, {}),
    m
  ] });
};
export {
  b as TableDivisionLine,
  C as TableLayout
};
//# sourceMappingURL=table-layout.js.map
