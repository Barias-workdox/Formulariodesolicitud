import { COMMON_HEIGHT_36 as c, COMMON_HEIGHT_44 as d } from "../../../../constants/common.constants.js";
import { themedStyled as l } from "../../../../themes/utilities.js";
const e = {
  md: {
    label: "body",
    details: "bodySmall",
    height: d
  },
  sm: {
    label: "body",
    details: "bodySmall",
    height: c
  }
}, u = {
  textDetails: ({ theme: o, $isClickable: r, $isHovered: n, $disabled: s, $active: t }) => ({
    color: t && !n ? o.colors.brandMedium : n && r && !s ? o == null ? void 0 : o.colors.neutralSubdued : o == null ? void 0 : o.colors.neutralDepressed
  }),
  labelContainer: (o) => ({
    display: "flex",
    alignItems: "center",
    gap: o.spacing.spacingSm
  })
}, i = ({
  $theme: o,
  $disabled: r,
  $size: n = "md",
  $withBorderBottom: s
}) => {
  const t = n === "md" ? o.spacing.spacingXs : o.spacing.spacing2xs;
  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    columnGap: o.spacing.spacingXs,
    color: o.colors.neutralSubdued,
    padding: `${t} ${o.spacing.spacingMd}`,
    backgroundColor: "transparent",
    // Transparent border to be replaced by focused border in focus state.
    border: "1px solid transparent",
    borderBottom: `1px solid ${s ? o.colors.neutralSubtle : "transparent"}`,
    outline: "none",
    minHeight: e[n].height,
    boxSizing: "border-box",
    ...r && {
      color: o.colors.neutralDepressed,
      backgroundColor: o.colors.neutralSubtle
    }
  };
}, b = l("li", i), a = ({ $theme: o }) => ({
  color: `${o.colors.brandMedium} !important`,
  backgroundColor: `${o.colors.brandSubtle} !important`
}), y = l(
  "button",
  ({ $theme: o, $active: r, $disabled: n, $size: s, $withBorderBottom: t }) => ({
    width: "100%",
    cursor: "not-allowed",
    ...i({ $theme: o, $disabled: n, $size: s, $withBorderBottom: t }),
    ...!n && {
      ...r ? a({ $theme: o }) : {},
      cursor: "pointer",
      ":hover": {
        color: o.colors.neutral,
        backgroundColor: o.colors.neutralWashed
      },
      ":focus": {
        border: `1px solid ${o.colors.brandSubdued}`
      },
      ":active": a({ $theme: o })
    }
  })
), S = l("div", ({ $theme: o }) => ({
  display: "flex",
  alignItems: "center",
  columnGap: o.spacing.spacingXs,
  overflow: "hidden",
  flex: 1
})), I = l("div", () => ({
  flex: 1,
  overflow: "hidden"
})), x = l("div", () => ({
  display: "grid",
  alignContent: "center",
  flexShrink: 0
})), f = l(
  "div",
  ({ $theme: o }) => ({
    display: "flex",
    alignItems: "center",
    columnGap: o.spacing.spacingXs
  })
);
export {
  y as StyledButtonRoot,
  f as StyledListItemIconInner,
  x as StyledListItemIconWrap,
  I as StyledListItemInfo,
  S as StyledListItemInner,
  b as StyledListItemRoot,
  e as propertiesBySize,
  u as styles
};
//# sourceMappingURL=list-item.styles.js.map
