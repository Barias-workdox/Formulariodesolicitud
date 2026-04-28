import { themedStyled as r } from "../../themes/utilities.js";
const d = r("ul", ({ $theme: t, $height: e, $withBorder: o = !0, $overflow: i = "auto" }) => ({
  minHeight: "1px",
  width: "100%",
  position: "relative",
  padding: 0,
  margin: 0,
  border: o ? `1px solid ${t.colors.neutralSubtle}` : "unset",
  height: e,
  overflow: i
}));
export {
  d as List
};
//# sourceMappingURL=list.js.map
