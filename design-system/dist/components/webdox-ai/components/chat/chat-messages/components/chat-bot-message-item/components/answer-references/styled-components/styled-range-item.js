import { themedStyled as n } from "../../../../../../../../../../themes/utilities.js";
import { ANSWER_REFERENCES_HEIGHT_PX as s, ANSWER_REFERENCES_WIDTH_PX as a } from "../../../../../chat-messages.constants.js";
const t = n(
  "span",
  ({ $isActive: r, $disabled: l, $theme: o }) => ({
    ...o.typography.LabelSmall,
    padding: `0 ${o.spacing.spacing2xs}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: a,
    height: s,
    boxSizing: "border-box",
    borderRadius: o.spacing.spacing2xs,
    border: `solid 1px ${o.colors.neutralSubtle}`,
    color: o.colors.neutral,
    ...r && {
      color: o.colors.neutralStrong,
      borderColor: o.colors.neutralStrong,
      backgroundColor: o.colors.brandSubtle
    },
    ...l && {
      color: o.colors.neutralDepressed,
      borderColor: o.colors.neutralSubtle,
      backgroundColor: o.colors.neutralSubtle
    },
    ":hover": {
      ...!l && !r && {
        cursor: "pointer",
        borderColor: o.colors.neutralDepressed,
        color: o.colors.neutral,
        backgroundColor: o.colors.brandWashed
      }
    }
  })
);
export {
  t as StyledRangeItem
};
//# sourceMappingURL=styled-range-item.js.map
