import { jsx as t } from "react/jsx-runtime";
import { StyledPopoverMenuItemButton as p } from "./popover-menu-item.styles.js";
const a = ({
  dataTestId: e = "data-table__popover-menu--item",
  children: o,
  $styles: r = {},
  disabled: m,
  onClick: n
}) => /* @__PURE__ */ t("li", { children: /* @__PURE__ */ t(
  p,
  {
    "data-testid": e,
    type: "button",
    disabled: m,
    $style: r,
    onClick: n,
    children: o
  }
) });
export {
  a as PopoverMenuItem
};
//# sourceMappingURL=popover-menu-item.js.map
