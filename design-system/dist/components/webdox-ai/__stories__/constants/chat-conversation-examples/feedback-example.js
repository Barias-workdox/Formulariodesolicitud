import { a as r } from "../../../../../node_modules/@faker-js/faker/dist/chunk-KZPPZA2C.js";
import { conversationUtils as e } from "../../../utils/conversation.util.js";
const t = {
  conversation: {
    ...e.createConversation({
      questions: [
        e.createQuestion({
          variant: "persist",
          value: r.lorem.words(5),
          answers: [
            e.createAnswer({
              variant: "persist",
              value: r.lorem.words(8)
            })
          ]
        }),
        e.createQuestion({
          variant: "persist",
          value: r.lorem.words(5),
          answers: [
            e.createAnswer({
              variant: "persist",
              value: `positive ${r.lorem.words(8)}`,
              feedback: {
                value: "positive"
              }
            })
          ]
        }),
        e.createQuestion({
          variant: "persist",
          value: r.lorem.words(5),
          answers: [
            e.createAnswer({
              variant: "persist",
              value: `negative ${r.lorem.words(8)}`,
              feedback: {
                value: "negative"
              }
            })
          ]
        })
      ]
    })
  }
};
export {
  t as feedbackExample
};
//# sourceMappingURL=feedback-example.js.map
