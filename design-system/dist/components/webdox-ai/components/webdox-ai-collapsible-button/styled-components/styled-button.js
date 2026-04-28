import { getSuiteAIBackgroundGradient as i } from "../../../webdox-ai.styles.js";
import { themedStyled as r } from "../../../../../themes/utilities.js";
import { WEBDOX_AI_BUTTON_SIZE as t } from "../../webdox-ai-button/webdox-ai-button.constants.js";
const u = r(
  "button",
  ({ $isLoading: e, $isToggled: o }) => ({
    position: "relative",
    height: t,
    width: t,
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    outline: "unset",
    border: "unset",
    borderRadius: "50%",
    cursor: "pointer",
    ...i({ isLoading: e && !o })
  })
);
export {
  u as StyledButton
};
//# sourceMappingURL=styled-button.js.map
