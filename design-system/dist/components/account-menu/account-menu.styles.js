import { themedStyled as r } from "../../themes/utilities.js";
import { ACCOUNT_MENU_MAX_WIDTH as e, ACCOUNT_MENU_MIN_WIDTH as l } from "./account-menu.constants.js";
const t = r(
  "div",
  ({ $theme: o }) => ({
    minWidth: l,
    maxWidth: e,
    width: "max-content",
    backgroundColor: o.colors.bgBase,
    borderRadius: o.borders.borderSm,
    border: `1px solid ${o.colors.neutralSubtle}`,
    boxShadow: "0px 6px 12px 0px rgba(26, 26, 26, 0.06), 0px 12px 24px 0px rgba(26, 26, 26, 0.06)",
    overflow: "visible",
    position: "relative"
  })
), p = r(
  "div",
  () => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "start"
  })
), s = {
  Inner: {
    style: () => ({
      overflow: "visible"
    })
  },
  Body: {
    style: ({ $theme: o }) => ({
      backgroundColor: o.colors.bgBase,
      borderRadius: o.borders.borderSm,
      border: `1px solid ${o.colors.neutralSubtle}`,
      boxShadow: "0px 6px 12px 0px rgba(26, 26, 26, 0.06), 0px 12px 24px 0px rgba(26, 26, 26, 0.06)",
      overflow: "visible",
      overflowY: "auto"
    })
  }
};
export {
  t as StyledMenuContainer,
  p as StyledMenuSection,
  s as popoverOverrides
};
//# sourceMappingURL=account-menu.styles.js.map
