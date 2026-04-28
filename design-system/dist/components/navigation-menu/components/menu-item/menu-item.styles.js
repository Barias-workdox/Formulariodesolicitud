import { Link as l } from "react-router-dom";
import { COMMON_HEIGHT_56 as s, COMMON_HEIGHT_36 as a } from "../../../../constants/common.constants.js";
import { themedStyled as g } from "../../../../themes/utilities.js";
const d = ({
  $theme: o
}) => ({
  default: {
    height: a,
    padding: `0 ${o.spacing.spacingXs}`
  },
  large: {
    height: s,
    padding: `0 ${o.spacing.spacingXl}`
  }
}), S = {
  default: "36px",
  large: "56px"
}, f = {
  default: "36px",
  large: "56px"
}, c = (o) => ({
  outline: `2px solid ${o.colors.neutralStrong}`,
  outlineOffset: "-2px",
  borderRadius: o.borders.borderSm
}), m = g(l, ({ $theme: o, $isFocused: n, $size: r, $disabled: e }) => {
  const { height: t, padding: i } = d({ $theme: o })[r];
  return {
    height: t,
    padding: i,
    display: "flex",
    alignItems: "center",
    cursor: e ? "not-allowed" : "pointer",
    textDecoration: "none",
    boxSizing: "border-box",
    outline: "none",
    ...n && {
      ...c(o)
    },
    ...e && { backgroundColor: o.colors.bgBase },
    ...!e && {
      ":hover": { backgroundColor: o.colors.brandWashed }
    }
  };
});
export {
  m as StyledLink,
  S as menuItemHeightBySize,
  f as menuItemPaddingBySize
};
//# sourceMappingURL=menu-item.styles.js.map
