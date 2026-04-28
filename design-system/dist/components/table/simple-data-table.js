import { jsx as s } from "react/jsx-runtime";
import { withStyle as e, styled as a } from "baseui";
import { StyledTable as p, StyledHead as g, StyledHeadCell as c, StyledRow as y, StyledCell as m, StyledBody as b } from "baseui/table";
import { fontSizeMap as h } from "../button/button.styles.js";
import { useCss as S } from "../utils/hooks/use-css.js";
import { themedWithStyle as f } from "../../themes/utilities.js";
import { Button as B } from "../button/button.js";
import "../button/variants/icon-button/icon-button.js";
import "@carbon/icons-react";
const x = {
  borderTopWidth: "0px",
  borderBottomWidth: "0px",
  borderLeftWidth: "0px",
  borderRightWidth: "0px"
}, z = {
  borderTopLeftRadius: "0",
  borderTopRightRadius: "0",
  borderBottomRightRadius: "0",
  borderBottomLeftRadius: "0"
}, k = e(p, () => ({
  ...x,
  ...z
})), F = e(g, ({ $theme: t }) => ({
  borderBottom: "solid 1px #E5E5E5",
  boxShadow: "none",
  color: "#515B60",
  paddingLeft: t.sizing.scale100,
  paddingRight: t.sizing.scale100,
  height: t.sizing.scale1200,
  display: "flex",
  alignItems: "center"
})), v = e(c, ({ $theme: t }) => ({
  fontFamily: t.typography.LabelXSmall.fontFamily,
  fontSize: t.sizing.scale400,
  lineHeight: t.sizing.scale500,
  textTransform: "uppercase",
  color: "#515B60"
})), I = b, j = f(y, ({ $theme: t }) => ({
  borderBottom: `solid 1px ${t.colors.neutralWashed}`,
  minHeight: t.sizing.scale1200,
  paddingLeft: t.sizing.scale100,
  paddingRight: t.sizing.scale100
})), A = e(m, ({ $theme: t }) => ({
  ...t.typography.ParagraphSmall,
  paddingTop: "12px",
  paddingBottom: "12px",
  color: "#515B60"
})), M = a("header", ({ $theme: t }) => ({
  backgroundColor: "#0F62FE",
  height: t.sizing.scale1200
})), P = a("div", () => ({
  paddingLeft: "16px",
  paddingRight: "16px",
  display: "inline-flex",
  alignItems: "center",
  height: "100%",
  color: "white"
}));
function X({
  "data-testid": t = "table-toolbar-action",
  kind: d = "primary",
  ...l
}) {
  const { theme: r } = S(), i = d === "control" ? "transparent" : r.colors.brand;
  return /* @__PURE__ */ s(
    B,
    {
      "data-testid": t,
      kind: "primary",
      overrides: {
        BaseButton: {
          style: ({ $theme: o, $size: n }) => ({
            fontSize: h[n],
            backgroundColor: i,
            fontWeight: "normal",
            paddingLeft: o.sizing.scale600,
            paddingRight: o.sizing.scale600,
            height: "100%",
            ":active": {
              backgroundColor: i
            }
          })
        },
        EndEnhancer: {
          style: ({ $theme: o }) => ({ marginLeft: o.sizing.scale300 })
        }
      },
      ...l
    }
  );
}
export {
  I as StyledBody,
  A as StyledCell,
  F as StyledHead,
  v as StyledHeadCell,
  j as StyledRow,
  k as StyledTable,
  M as TableToolbar,
  X as TableToolbarAction,
  P as TableToolbarTextBlock
};
//# sourceMappingURL=simple-data-table.js.map
