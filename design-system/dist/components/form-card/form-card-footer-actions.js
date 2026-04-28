import { jsxs as d, jsx as t } from "react/jsx-runtime";
import { Button as n } from "../button/next/button.js";
import { themedStyled as p } from "../../themes/utilities.js";
const a = p("div", ({ $theme: e }) => ({
  display: "flex",
  gap: e.spacing.spacingXs
})), l = ({
  cancelButton: e,
  submitButton: r
}) => {
  const { text: i } = e || {}, { text: o } = r || {};
  return /* @__PURE__ */ d(a, { children: [
    e && /* @__PURE__ */ t(
      n,
      {
        kind: "brand",
        appearance: "outlined",
        size: "32px",
        ...e,
        children: i
      }
    ),
    r && /* @__PURE__ */ t(
      n,
      {
        kind: "brand",
        appearance: "filled",
        size: "32px",
        ...r,
        children: o
      }
    )
  ] });
};
export {
  l as FormCardFooterActions
};
//# sourceMappingURL=form-card-footer-actions.js.map
