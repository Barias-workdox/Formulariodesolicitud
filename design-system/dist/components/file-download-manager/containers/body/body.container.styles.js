import { FILES_LIST_ITEM_HEIGHT as o, FILES_LIST_MAX_HEIGHT as e } from "../../file-download-manager.constants.js";
import { themedStyled as I } from "../../../../themes/utilities.js";
const p = I(
  "div",
  ({ $minHeight: t }) => ({
    maxHeight: `${e}px`,
    minHeight: t ? `${t}px` : `${o}px`,
    overflowY: "auto"
  })
);
export {
  p as StyledFilesList
};
//# sourceMappingURL=body.container.styles.js.map
