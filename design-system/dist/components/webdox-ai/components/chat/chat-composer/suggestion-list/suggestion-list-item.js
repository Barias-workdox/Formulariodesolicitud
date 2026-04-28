import { jsx as t } from "react/jsx-runtime";
import { Text as o } from "../../../../../text/text.js";
import { StyledLi as n } from "./suggestion-list.styled.js";
const s = ({
  "data-testid": r,
  children: e,
  onClick: i
}) => /* @__PURE__ */ t(
  n,
  {
    tabIndex: 0,
    "data-testid": `${r}-wrapper`,
    onClick: i,
    children: /* @__PURE__ */ t(
      o,
      {
        color: "inherit",
        margin: "0",
        variant: "bodySmall",
        $style: { textDecoration: "underline", cursor: "pointer" },
        children: e
      }
    )
  }
);
export {
  s as SuggestionListItem
};
//# sourceMappingURL=suggestion-list-item.js.map
