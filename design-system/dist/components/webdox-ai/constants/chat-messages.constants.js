import "react/jsx-runtime";
import "../components/chat/chat-messages/components/chat-message-layout/styled-components/styled-default-message-layout.js";
import "../components/chat/chat-messages/components/chat-message-layout/styled-components/styled-primary-message-layout.js";
import "../components/chat/chat-messages/components/chat-message-layout/styled-components/styled-secondary-message-layout.js";
import "../components/chat/chat-messages/components/chat-message-layout/styled-components/styled-tertiary-message-layout.js";
import { UserMessage as o } from "../components/chat/chat-messages/components/user-message/user-message.js";
import { ChatBotMessageItem as t } from "../components/chat/chat-messages/components/chat-bot-message-item/chat-bot-message-item.js";
const a = {
  question: {
    Component: o
  },
  answer: {
    Component: t
  }
};
export {
  a as CHAT_MESSAGES_KIND_MAP
};
//# sourceMappingURL=chat-messages.constants.js.map
