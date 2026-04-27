import { faker } from '@faker-js/faker';

import { conversationUtils } from '@components/webdox-ai/utils/conversation.util';

export const feedbackExample = {
  conversation: {
    ...conversationUtils.createConversation({
      questions: [
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
        conversationUtils.createQuestion({
          variant: 'persist',
          value: faker.lorem.words(5),
          answers: [
            conversationUtils.createAnswer({
              variant: 'persist',
              value: `positive ${faker.lorem.words(8)}`,
              feedback: {
                value: 'positive',
              },
            }),
          ],
        }),
        conversationUtils.createQuestion({
          variant: 'persist',
          value: faker.lorem.words(5),
          answers: [
            conversationUtils.createAnswer({
              variant: 'persist',
              value: `negative ${faker.lorem.words(8)}`,
              feedback: {
                value: 'negative',
              },
            }),
          ],
        }),
      ],
    }),
  },
};
