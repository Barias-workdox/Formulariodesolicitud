import { themedStyled as e } from "../../themes/utilities.js";
import { FILE_ICON_FONT as n } from "../../themes/v3/tokens/typography.js";
const r = {
  iconStyles: (t, { primaryColor: o, secondaryColor: i }) => ({
    height: "100%",
    width: "100%",
    ":has(*) .background": {
      fill: o
    },
    ":has(*) .corner": {
      fill: i
    }
  })
}, a = e("div", ({ $size: t, $isDisabled: o }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexShrink: 0,
  height: `${t}px`,
  opacity: o ? 0.2 : 1,
  /**
   * It's calculated to maintain the base aspect ratio of 20px width and 24px height.
   */
  width: `${5 / 6 * t}px`
})), c = e(
  "span",
  ({ $theme: t, size: o }) => ({
    ...n,
    position: "absolute",
    marginTop: t.spacing.spacing2xs,
    transform: "scaleY(0.9)",
    /**
     * It's calculated based on 30% of the size of the icon,
     * allowing the font size to scale with the icon size.
     */
    fontSize: `${(o ?? 24) * 0.3}px`,
    fontWeight: "700",
    color: t.colors.iconBase
  })
);
export {
  a as StyledContainer,
  c as StyledFileTypeText,
  r as styles
};
//# sourceMappingURL=file-type-icon.styles.js.map
