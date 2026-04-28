import { themedStyled as s } from "../../../../../../../../themes/utilities.js";
import { LIST_ITEM_HEIGHT as d } from "../conversation-selector-with-popover.constants.js";
const l = s(
  "div",
  ({ $theme: o, $isLast: a, $isSelected: r }) => ({
    display: "flex",
    alignItems: "center",
    gap: o.spacing.spacingXs,
    padding: `0 ${o.spacing.spacingMd}`,
    cursor: "pointer",
    height: d,
    ...r && {
      backgroundColor: o.colors.brandWashed
    },
    ...!r && {
      ":hover": {
        backgroundColor: o.colors.brandBase
      }
    },
    ...!a && {
      borderBottom: `1px solid ${o.colors.neutralSubtle}`
    }
  })
);
export {
  l as StyledListItem
};
//# sourceMappingURL=styled-list-item.js.map
