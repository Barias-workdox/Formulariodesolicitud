import { jsx as o } from "react/jsx-runtime";
import { withIsHovered as v } from "../../../../../../../hocs/with-is-hovered.js";
import { ConversationListItemContent as C } from "../../../../../conversation-list-item-content/conversation-list-item-content.js";
import { StyledListItem as I } from "../../styled-components/styled-list-item.js";
const a = ({
  dataTestId: e = "conversation-list-item",
  zIndex: r,
  conversation: i,
  isHovered: n,
  isSelected: t,
  onEditConversation: m,
  onDeleteConversation: s,
  onClick: p
}) => /* @__PURE__ */ o(
  I,
  {
    $isSelected: t,
    onClick: p,
    children: /* @__PURE__ */ o(
      C,
      {
        conversation: i,
        dataTestId: e,
        isHovered: n,
        isSelected: t,
        onDeleteConversation: s,
        onEditConversation: m,
        zIndex: r
      }
    )
  }
), l = v(a);
export {
  l as ConversationListItem
};
//# sourceMappingURL=conversation-list-item.js.map
