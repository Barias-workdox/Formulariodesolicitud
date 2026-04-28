import { jsxs as a, jsx as o } from "react/jsx-runtime";
import { ParagraphXSmall as m } from "baseui/typography";
import "../../../themes/v3/light/theme.js";
import "../../../themes/v3/dark/theme.js";
import "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import { themedUseStyletron as l } from "../../../themes/utilities.js";
const n = (t) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  minWidth: "135px",
  cursor: "pointer",
  gap: t.spacing.spacingXs
}), x = ({
  item: { label: t, Icon: e, "data-testid": s }
}) => {
  const [i, r] = l();
  return /* @__PURE__ */ a(
    "div",
    {
      "data-testid": s,
      className: i(n(r)),
      children: [
        e && /* @__PURE__ */ o(
          e,
          {
            color: r.colors.neutralSubdued,
            className: i({ flexShrink: 0 }),
            width: 14,
            height: 14
          }
        ),
        /* @__PURE__ */ o(
          m,
          {
            color: r.colors.neutralSubdued,
            margin: "0",
            children: t
          }
        )
      ]
    }
  );
};
export {
  x as DropdownListItem
};
//# sourceMappingURL=dropdown-list-item.js.map
