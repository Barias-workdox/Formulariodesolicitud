import { jsx as c } from "react/jsx-runtime";
import { activeCollaborationStates as l } from "../../../logic/business/contract-negotiation.business.js";
import { useContractNegotiationContext as u } from "../../../logic/contexts/contract-negotiation.context.js";
import { CommentsTab as C } from "./comments-tab.js";
const M = ({
  "data-testid": t = "comments-tab",
  onClose: e
}) => {
  const {
    collaborationDetails: { status: o },
    currentThirdParty: { id: a },
    isSendMessageLoading: s,
    messages: r,
    stakeholders: n,
    loadMoreMessages: i,
    onSendMessage: d
  } = u(), m = l.includes(o);
  return /* @__PURE__ */ c(
    C,
    {
      "data-testid": t,
      canCreate: m,
      currentUserId: Number(a),
      isLoading: s,
      messages: r,
      users: n,
      onCreate: d,
      onPageEnd: i,
      onClose: e
    }
  );
};
export {
  M as CommentsTabContainer
};
//# sourceMappingURL=comments-tab.container.js.map
