import { faker } from '@faker-js/faker';

import { conversationUtils } from '@components/webdox-ai/utils/conversation.util';

// 10 minutes
const dateOffset = 10 * 60 * 1000;

export const loadingExample = {
  conversation: {
    ...conversationUtils.createConversation({
      questions: [
        conversationUtils.createQuestion({
          variant: 'persist',
          value: faker.lorem.words(5),
          createdAt: new Date(Date.now() - dateOffset * 2).toISOString(),
          answers: [
            conversationUtils.createAnswer({
              variant: 'persist',
              createdAt: new Date(Date.now() - dateOffset * 2).toISOString(),
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
          isWaiting: false,
          createdAt: new Date(Date.now() - dateOffset).toISOString(),
          answers: [],
        }),
      ],
    }),
  },
};
