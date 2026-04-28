import { COMMON_HEIGHT_32 as n } from "../../../../constants/common.constants.js";
import { themedStyled as d } from "../../../../themes/utilities.js";
import { getGuideLinesStyles as s } from "../group-resolutions/group-resolutions.styles.js";
const g = d("div", ({ $theme: r }) => ({
  position: "relative",
  width: "fit-content",
  backgroundColor: "transparent",
  margin: `${r.spacing.spacingMd} 0`,
  zIndex: 1,
  ...s(r, !0)
})), p = d("div", ({ $theme: r }) => ({
  border: `1px solid ${r.colors.brandDepressed}`,
  borderRadius: r.spacing.spacing2xs,
  overflow: "hidden"
})), t = ({
  isActive: r,
  isOrButton: a
}) => ({
  BaseButton: {
    style: ({ $theme: o }) => ({
      ...o.typography.ParagraphSmall,
      fontWeight: r ? "500" : "400",
      padding: `${o.spacing.spacingSm} ${o.spacing.spacingXs}`,
      height: n,
      width: n,
      borderRight: a ? `1px solid ${o.colors.brandDepressed}` : "none",
      color: o.colors.brandMedium,
      backgroundColor: r ? o.colors.brandSubtle : o.colors.bgBase,
      ":hover": {
        color: o.colors.brandMedium,
        backgroundColor: r ? o.colors.brandSubtle : o.colors.brandWashed
      },
      ":active": {
        backgroundColor: r ? o.colors.brandSubtle : o.colors.bgBase
      }
    })
  }
});
export {
  g as StyledContainer,
  p as StyledInner,
  t as buttonOverrides
};
//# sourceMappingURL=conditional-buttons.styles.js.map
