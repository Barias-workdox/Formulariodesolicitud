import { jsxs as o } from "react/jsx-runtime";
import { themedStyled as t } from "../../../../themes/utilities.js";
const l = t("span", ({ $theme: r }) => ({
  ...r.typography.ParagraphXSmall,
  color: r.colors.brand
})), n = t("li", ({ $theme: r }) => ({
  ...r.typography.ParagraphXSmall,
  textTransform: "uppercase",
  color: r.colors.neutralSubdued,
  padding: `${r.spacing.spacingXs} ${r.spacing.spacingSm}`,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottomWidth: "1px",
  borderBottomColor: r.colors.neutralSubtle,
  borderBottomStyle: "solid"
})), c = ({
  innerRef: r,
  count: e,
  label: a,
  ...p
}) => /* @__PURE__ */ o(
  n,
  {
    ...p,
    ref: r,
    children: [
      a,
      " ",
      /* @__PURE__ */ o(l, { children: [
        "(",
        e,
        ")"
      ] })
    ]
  }
);
export {
  c as SelectOptgroupHeader
};
//# sourceMappingURL=select-optgroup-header.js.map
