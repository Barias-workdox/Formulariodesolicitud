import { FILE_UPLOAD_MANAGER_WIDTH as e } from "../../file-upload-manager.constants.js";
import { themedStyled as r } from "../../../../themes/utilities.js";
const p = r("div", ({ $theme: o, $position: d, $margin: t }) => ({
  border: `2px solid ${o.colors.neutralSubtle}`,
  borderRadius: "4px",
  overflow: "hidden",
  position: "absolute",
  right: t ?? 0,
  bottom: d === "BOTTOM" ? t ?? 0 : void 0,
  top: d === "TOP" ? t ?? 0 : void 0,
  width: `${e}px`,
  backgroundColor: o.colors.bgBase
})), s = r("div", ({ $theme: o }) => ({
  display: "flex",
  gap: o.spacing.spacing2xs
}));
export {
  s as StyledActionsWrapper,
  p as StyledRoot
};
//# sourceMappingURL=file-upload-manager-root.styles.js.map
