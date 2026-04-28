import { jsx as e } from "react/jsx-runtime";
import { StyledListItem as s } from "../styled-list/styled-list-item.js";
import { StyledListItemContentText as a } from "../styled-list/styled-list-item-content-text.js";
const d = ({
  "data-testid": t,
  children: o,
  tooltipProps: r,
  onClick: i
}) => /* @__PURE__ */ e(
  s,
  {
    "data-testid": `${t}-wrapper`,
    onClick: i,
    children: /* @__PURE__ */ e(
      a,
      {
        "data-testid": `${t}-content`,
        tooltipProps: { showArrow: !0, content: o, ignoreBoundary: !0, ...r },
        textProps: { variant: "bodySmall" },
        children: o
      }
    )
  }
);
export {
  d as MessageListItem
};
//# sourceMappingURL=message-list-item.js.map
