import { COMMON_ICON_SIZE_20 as n } from "../../../constants/common.constants.js";
import { DEFAULT_FONT as p } from "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import "../../../themes/v3/light/theme.js";
import "../../../themes/v3/dark/theme.js";
import { themedStyled as i } from "../../../themes/utilities.js";
const f = i("div", ({ $hasIcon: t, $theme: e, $style: o = {} }) => ({
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  alignItems: "center",
  columnGap: t ? e.spacing.spacingXs : 0,
  ...o
})), g = {
  iconContainer: (t, { hasIcon: e, overrides: o }) => {
    const {
      width: l = n,
      height: r = n,
      ...a
    } = (o == null ? void 0 : o.StartEnhancer) ?? {};
    return {
      display: "flex",
      alignItems: "center",
      gridRow: "1 / 3",
      ...e && {
        width: l,
        height: r
      },
      ...a
    };
  }
}, h = i("div", ({ $hasSubtitle: t, $style: e = {} }) => ({
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
  ...!t && { gridRow: "1 / 3" },
  ...e
})), y = i(
  "div",
  ({ $style: t = {} }) => ({
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    gridColumn: "2",
    ...t
  })
), S = (t, e) => ({
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
  color: t.colors.neutralSubdued,
  margin: 0,
  ...p,
  ...e
});
export {
  f as TitleLayoutContainer,
  y as TitleLayoutSubtitleContainer,
  h as TitleLayoutTitleContainer,
  S as commonTitleLayoutTextStyles,
  g as titleLayoutStyles
};
//# sourceMappingURL=title-layout.styles.js.map
