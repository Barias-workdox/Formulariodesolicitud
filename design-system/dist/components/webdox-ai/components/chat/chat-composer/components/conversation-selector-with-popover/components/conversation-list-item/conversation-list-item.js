import { jsx as o } from "react/jsx-runtime";
import { withIsHovered as v } from "../../../../../../../../hocs/with-is-hovered.js";
import { ConversationListItemContent as C } from "../../../../../../conversation-list-item-content/conversation-list-item-content.js";
import "../../styled-components/styled-body.js";
import "../../styled-components/styled-popover-content.js";
import "../../styled-components/styled-list.js";
import { StyledListItem as I } from "../../styled-components/styled-list-item.js";
import "../../styled-components/styled-list-item-label-wrapper.js";
const L = ({
  dataTestId: i = "conversation-list-item",
  zIndex: r,
  conversation: m,
  isHovered: e,
  isLast: n,
  isSelected: t,
  onEditConversation: s,
  onDeleteConversation: p,
  onClick: a
}) => /* @__PURE__ */ o(
  I,
  {
    $isLast: n,
    $isSelected: t,
    onClick: a,
    children: /* @__PURE__ */ o(
      C,
      {
        conversation: m,
        dataTestId: i,
        isHovered: e,
        isSelected: t,
        onDeleteConversation: p,
        onEditConversation: s,
        zIndex: r
      }
    )
  }
), u = v(L);
export {
  u as ConversationListItem
};
//# sourceMappingURL=conversation-list-item.js.map
