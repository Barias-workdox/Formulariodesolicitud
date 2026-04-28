import { jsx as s } from "react/jsx-runtime";
import { Block as a } from "baseui/block";
import { tableCellStyles as d } from "./table-cell.styles.js";
const c = ({
  children: t,
  "data-testid": e,
  as: r = "td",
  $style: o = {}
}) => /* @__PURE__ */ s(
  a,
  {
    as: r,
    "data-testid": e,
    overrides: {
      Block: {
        style: ({ $theme: l }) => ({
          ...d(l),
          ...o
        })
      }
    },
    children: t
  }
);
export {
  c as TableCell
};
//# sourceMappingURL=table-cell.js.map
