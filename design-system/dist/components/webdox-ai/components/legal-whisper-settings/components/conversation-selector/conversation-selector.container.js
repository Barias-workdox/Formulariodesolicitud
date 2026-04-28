import { jsx as l } from "react/jsx-runtime";
import { useLegalWhisperConversationsContext as m } from "../../../../hooks/use-legal-whisper-conversations-context.hook.js";
import { ConversationSelector as d } from "./conversation-selector.js";
const f = ({
  dataTestId: o,
  zIndex: e
}) => {
  const {
    conversations: n,
    isLoadingMoreConversations: r,
    onDeleteConversation: t,
    onEditConversation: s,
    onLoadMoreConversations: i,
    onSearch: a,
    onSelectConversation: C,
    searchValue: v,
    selectedConversation: c
  } = m();
  return /* @__PURE__ */ l(
    d,
    {
      conversations: n,
      dataTestId: o,
      isLoadingMore: r,
      onDeleteConversation: t,
      onEditConversation: s,
      onLoadMoreConversations: i,
      onSearch: a,
      onSelectConversation: C,
      searchValue: v,
      selectedConversation: c,
      zIndex: e
    }
  );
};
export {
  f as ConversationSelectorContainer
};
//# sourceMappingURL=conversation-selector.container.js.map
