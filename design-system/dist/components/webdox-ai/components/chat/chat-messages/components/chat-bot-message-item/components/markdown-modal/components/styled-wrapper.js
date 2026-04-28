import { MAX_CHAT_MESSAGE_TABLE_HEIGHT as t } from "../../../../../../../../constants/webdox-ai.constants.js";
import { themedStyled as r } from "../../../../../../../../../../themes/utilities.js";
const d = r("div", ({ $theme: o }) => ({
  overflow: "auto",
  maxHeight: t,
  border: `1px solid ${o.colors.neutralSubtle}`
})), i = r(
  "div",
  ({ $theme: o, $isFullWidth: e }) => ({
    overflow: "auto",
    backgroundColor: o.colors.neutralWashed,
    flex: 1,
    maxWidth: e ? "" : "600px",
    maxHeight: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    border: `1px solid ${o.colors.neutralSubtle}`
  })
);
export {
  d as StyledMarkdownWrapper,
  i as StyledMarkdownWrapperViewer
};
//# sourceMappingURL=styled-wrapper.js.map
