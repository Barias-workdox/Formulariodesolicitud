import { themedStyled as e } from "../../../../../themes/utilities.js";
import { WEBDOX_AI_BUTTON_CONTAINER_SIZE as n } from "../../webdox-ai-button/webdox-ai-button.constants.js";
const c = e(
  "div",
  ({ $theme: o, $direction: t }) => ({
    display: "flex",
    flexDirection: t === "column" ? "column" : "row-reverse",
    alignItems: "center",
    justifyContent: "center",
    width: "fit-content",
    height: "fit-content",
    padding: o.spacing.spacing2xs,
    backgroundColor: o.colors.bgBase,
    borderRadius: `${n / 2}px`,
    boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.16)"
  })
);
export {
  c as StyledContainer
};
//# sourceMappingURL=styled-container.js.map
