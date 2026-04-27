import { faker } from '@faker-js/faker';

import { conversationUtils } from '@components/webdox-ai/utils/conversation.util';

export const errorExample = {
  conversation: {
    ...conversationUtils.createConversation({
      questions: [
        conversationUtils.createQuestion({
          variant: 'persist',
          value: faker.lorem.words(5),
          answers: [
            conversationUtils.createAnswer({
              variant: 'error',
              value:
                '**Parece que el proveedor se tomó un descanso inesperado** 😅. Estoy resolviendo el contratiempo. Intenta de nuevo en unos minutos. ¡Gracias por tu comprensión!',
            }),
          ],
        }),
        conversationUtils.createQuestion({
          variant: 'persist',
          value: faker.lorem.words(5),
          answers: [
            conversationUtils.createAnswer({
              variant: 'persist',
              value: faker.lorem.words(8),
            }),
          ],
        }),
      ],
    }),
  },
};
