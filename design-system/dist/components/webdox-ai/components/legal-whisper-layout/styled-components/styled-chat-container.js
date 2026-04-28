import { MAX_EXPANDED_CHAT_WIDTH as o } from "../../../constants/webdox-ai.constants.js";
import { themedStyled as d } from "../../../../../themes/utilities.js";
const m = d(
  "div",
  ({ $isExpanded: t, $theme: i }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    ...t && {
      maxWidth: o,
      paddingBottom: i.spacing.spacingMd
    }
  })
);
export {
  m as StyledChatContainer
};
//# sourceMappingURL=styled-chat-container.js.map
