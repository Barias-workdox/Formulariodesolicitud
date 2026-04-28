import { COMMON_HEIGHT_44 as r, COMMON_HEIGHT_32 as i, COMMON_HEIGHT_24 as o } from "../../../../../constants/common.constants.js";
import { themedStyled as n } from "../../../../../themes/utilities.js";
const g = {
  round: {
    [o]: {
      width: "6px",
      height: "6px",
      right: "0px"
    },
    [i]: {
      width: "8px",
      height: "8px",
      right: "0px"
    },
    [r]: {
      width: "10px",
      height: "10px",
      right: "3px"
    }
  },
  square: {
    [o]: {
      width: "6px",
      height: "6px",
      right: "0px"
    },
    [i]: {
      width: "8px",
      height: "8px",
      right: "-2px",
      top: "-1px"
    },
    [r]: {
      width: "10px",
      height: "10px",
      right: "-3px",
      top: "-3px"
    }
  }
}, a = n(
  "div",
  ({ $kind: p, $size: e, $shape: x, $theme: t }) => {
    const d = p === "brand" ? t.colors.brand : t.colors.neutral, h = g[x][e];
    return {
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: d,
      borderRadius: t.borders.borderCircle,
      boxSizing: "border-box",
      padding: "0",
      top: "0px",
      ...h
    };
  }
);
export {
  a as StyledBadgeRoot
};
//# sourceMappingURL=badge.styles.js.map
