import { ACCOUNT_MENU_MAX_WIDTH as t } from "../../account-menu.constants.js";
import { themedStyled as n } from "../../../../themes/utilities.js";
const d = n(
  "div",
  ({ $theme: i }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: i.spacing.spacingXs,
    paddingTop: i.spacing.spacingMd,
    paddingBottom: i.spacing.spacingMd,
    backgroundColor: i.colors.brandBase
  })
), s = n(
  "div",
  () => ({
    flex: 1,
    minWidth: 0,
    textAlign: "center",
    maxWidth: t
  })
);
export {
  s as StyledUserDetails,
  d as StyledUserSection
};
//# sourceMappingURL=account-menu.styles.js.map
