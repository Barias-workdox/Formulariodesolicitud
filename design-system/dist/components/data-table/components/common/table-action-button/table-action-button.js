import { jsx as o } from "react/jsx-runtime";
import { useDataTableDisabledRow as p } from "../../../hooks/use-data-table-disabled-row.js";
import { Popover as l } from "../../../../popover/popover.js";
import "react";
import "baseui/popover";
import "baseui";
import "../../../../popover/popover.styles.js";
import { useCss as b } from "../../../../utils/hooks/use-css.js";
import { styles as u } from "./table-action-button.styles.js";
const v = ({
  dataTestId: r = "data-table__action-button",
  ariaLabel: e,
  children: s,
  popoverProps: i
}) => {
  const { isRowDisabled: t } = p(), { content: a = "", ...n } = i || {}, { actionButtonStyles: m } = b(u, { isDisabled: t });
  return /* @__PURE__ */ o(
    l,
    {
      showArrow: !0,
      ignoreBoundary: !0,
      content: a,
      ...n,
      children: /* @__PURE__ */ o(
        "button",
        {
          "data-testid": r,
          type: "button",
          className: m,
          "aria-label": e,
          disabled: t,
          children: s
        }
      )
    }
  );
};
export {
  v as TableActionButton
};
//# sourceMappingURL=table-action-button.js.map
