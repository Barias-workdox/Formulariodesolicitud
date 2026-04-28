import { themedStyled as s } from "../../../../../../../themes/utilities.js";
import { LIST_ITEM_HEIGHT_SELECTED as a, LIST_ITEM_HEIGHT as d } from "../../../legal-whisper-settings.constants.js";
const l = s(
  "div",
  ({ $theme: r, $isSelected: o }) => ({
    display: "flex",
    alignItems: "center",
    gap: r.spacing.spacingXs,
    padding: `0 ${r.spacing.spacingMd}`,
    cursor: "pointer",
    height: d,
    border: `1px solid ${r.colors.neutralSubtle}`,
    borderRadius: r.spacing.spacing2xs,
    ...o && {
      backgroundColor: r.colors.brandWashed,
      border: "none",
      height: a
    },
    ...!o && {
      ":hover": {
        backgroundColor: r.colors.brandBase,
        borderColor: r.colors.neutralDepressed
      }
    }
  })
);
export {
  l as StyledListItem
};
//# sourceMappingURL=styled-list-item.js.map
