import { a as t } from "../../../../../node_modules/@faker-js/faker/dist/chunk-KZPPZA2C.js";
import { conversationUtils as e } from "../../../utils/conversation.util.js";
const a = 600 * 1e3, s = {
  conversation: {
    ...e.createConversation({
      questions: [
        e.createQuestion({
          variant: "persist",
          value: t.lorem.words(5),
          createdAt: new Date(Date.now() - a * 2).toISOString(),
          answers: [
            e.createAnswer({
              variant: "persist",
              createdAt: new Date(Date.now() - a * 2).toISOString(),
              value: `positive ${t.lorem.words(8)}`,
              feedback: {
                value: "positive"
              }
            })
          ]
        }),
        e.createQuestion({
          variant: "persist",
          value: t.lorem.words(5),
          isWaiting: !1,
          createdAt: new Date(Date.now() - a).toISOString(),
          answers: []
        })
      ]
    })
  }
};
export {
  s as loadingExample
};
//# sourceMappingURL=loading-example.js.map
