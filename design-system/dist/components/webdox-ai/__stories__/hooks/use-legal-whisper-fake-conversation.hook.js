import { useCallback as r, useEffect as n } from "react";
import { conversationConstants as s } from "../../constants/conversation.constant.js";
import "@carbon/icons-react";
import "../../constants/webdox-ai-regex.constants.js";
import { useLegalWhisperConversationState as u } from "../../hooks/use-legal-whisper-conversation-state.hook.js";
import { conversationUtils as c } from "../../utils/conversation.util.js";
import { chatStoriesUtils as t } from "../utils/chat-stories.util.js";
const f = () => {
  const { state: o, dispatch: e } = u(), a = r(() => {
    e({
      type: s.actions.setConversation,
      payload: {
        conversation: {
          createdAt: "2023-01-01",
          id: "conversation-1",
          title: "title",
          questions: [],
          userId: "user-1",
          customerId: "customer-1"
        }
      }
    }), e({
      type: s.actions.updateDisabled,
      payload: { disabled: !1 }
    });
  }, [e]);
  return n(() => {
    a();
  }, [a]), {
    onCreateMessage: async (i) => {
      e({
        type: s.actions.createQuestion,
        payload: {
          value: i
        }
      }), setTimeout(() => {
        e({
          type: s.actions.persistAnswer,
          payload: {
            ...c.createAnswer({
              value: t.getFakeAnswerMarkdown(!0),
              quotes: {
                legalQuotes: t.getFakeLegalQuotes(),
                jurisprudentialQuotes: t.getFakeJurisprudentialQuotes(),
                administrativeQuotes: t.getFakeAdministrativeQuotes()
              }
            })
          }
        });
      }, t.timeout);
    },
    conversationState: o,
    conversationDispatch: e
  };
};
export {
  f as useLegalWhisperFakeConversation
};
//# sourceMappingURL=use-legal-whisper-fake-conversation.hook.js.map
