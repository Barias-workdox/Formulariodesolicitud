import { jsx as p } from "react/jsx-runtime";
import { useLegalWhisperConversationsContext as m } from "../../../../../hooks/use-legal-whisper-conversations-context.hook.js";
import { ConversationSelectorWithPopover as d } from "./conversation-selector-with-popover.js";
const f = ({
  dataTestId: o,
  zIndex: e
}) => {
  const {
    conversations: n,
    isLoadingMoreConversations: r,
    onCreateConversation: t,
    onDeleteConversation: s,
    onEditConversation: i,
    onLoadMoreConversations: a,
    onSearch: v,
    onSelectConversation: C,
    searchValue: c,
    selectedConversation: l
  } = m();
  return /* @__PURE__ */ p(
    d,
    {
      conversations: n,
      dataTestId: o,
      isLoadingMore: r,
      onCreateConversation: t,
      onDeleteConversation: s,
      onEditConversation: i,
      onLoadMoreConversations: a,
      onSearch: v,
      onSelectConversation: C,
      searchValue: c,
      selectedConversation: l,
      zIndex: e
    }
  );
};
export {
  f as ConversationSelectorWithPopoverContainer
};
//# sourceMappingURL=conversation-selector-with-popover.container.js.map
