import { themedStyled as t } from "../../themes/utilities.js";
import { getTransitionStyles as e } from "../../utils/styles.utils.js";
import { DATA_TABLE_Z_INDEX as i } from "./data-table.constants.js";
const r = {
  transition: e(["background-color", "border", "opacity", "outline"]),
  boxSizing: "border-box"
}, l = ({ $theme: o }) => ({
  position: "relative",
  zIndex: i.base,
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  flex: 1,
  border: `1px solid ${o.colors.neutralSubtle}`,
  boxSizing: "border-box",
  backgroundColor: o.colors.bgBase,
  overflow: "auto",
  scrollbarWidth: "thin"
}), a = t("div", l), c = t("div", {
  display: "flex",
  flex: 1,
  scrollbarWidth: "thin",
  width: "fit-content",
  minWidth: "100%"
}), b = t("div", ({ $theme: o }) => ({
  ...r,
  position: "relative",
  display: "flex",
  minHeight: "100%",
  flex: 1,
  backgroundColor: o.colors.bgBase
})), p = t("div", {
  position: "sticky",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});
export {
  c as StyledColumnsContainer,
  p as StyledEmptyMessageWrapper,
  a as StyledTableContainer,
  b as StyledWrapper,
  r as commonStyles,
  l as getTableContainerStyles
};
//# sourceMappingURL=data-table.styles.js.map
