import { jsxs as t } from "react/jsx-runtime";
import { themedStyled as a } from "../../../../themes/utilities.js";
const p = a("span", ({ $theme: o }) => ({
  ...o.typography.ParagraphXSmall,
  color: o.colors.brand
})), l = a(
  "li",
  ({ $theme: o, $isBorderless: r }) => ({
    ...o.typography.ParagraphXSmall,
    position: "sticky",
    top: 0,
    zIndex: 1,
    backgroundColor: o.colors.bgBase,
    fontFamily: "Roboto",
    textTransform: "uppercase",
    color: o.colors.neutral,
    padding: `${o.spacing.spacingXs} ${o.spacing.spacingSm}`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: "1px",
    borderBottomColor: o.colors.divisionLine,
    borderBottomStyle: "solid",
    ...r && {
      ...o.typography.ParagraphSmall,
      border: "none"
    }
  })
), d = ({
  children: o,
  count: r,
  isBorderless: e = !1,
  ...n
}) => /* @__PURE__ */ t(
  l,
  {
    ...n,
    $isBorderless: e,
    children: [
      o,
      " ",
      /* @__PURE__ */ t(p, { children: [
        "(",
        r,
        ")"
      ] })
    ]
  }
);
export {
  d as SelectOptgroupHeader
};
//# sourceMappingURL=select-optgroup-header.js.map
