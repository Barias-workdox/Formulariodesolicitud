import { themedStyled as e } from "../../../../../../../themes/utilities.js";
import { MAX_CONTENT_HEIGHT as t, MAX_CONTENT_WIDTH as r } from "../custom-prompts-popover.constants.js";
const d = e("div", ({ $theme: o }) => ({
  display: "flex",
  flexDirection: "column",
  width: r,
  maxHeight: t,
  border: `1px solid ${o.colors.neutralSubtle}`
}));
export {
  d as StyledPopoverContent
};
//# sourceMappingURL=styled-popover-content.js.map
