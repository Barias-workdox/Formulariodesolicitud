import { a as r } from "../../../../../node_modules/@faker-js/faker/dist/chunk-KZPPZA2C.js";
import { conversationUtils as e } from "../../../utils/conversation.util.js";
const a = {
  conversation: {
    ...e.createConversation({
      questions: [
        e.createQuestion({
          variant: "persist",
          value: r.lorem.words(5),
          answers: [
            e.createAnswer({
              variant: "error",
              value: "**Parece que el proveedor se tomó un descanso inesperado** 😅. Estoy resolviendo el contratiempo. Intenta de nuevo en unos minutos. ¡Gracias por tu comprensión!"
            })
          ]
        }),
        e.createQuestion({
          variant: "persist",
          value: r.lorem.words(5),
          answers: [
            e.createAnswer({
              variant: "persist",
              value: r.lorem.words(8)
            })
          ]
        })
      ]
    })
  }
};
export {
  a as errorExample
};
//# sourceMappingURL=error-example.js.map
