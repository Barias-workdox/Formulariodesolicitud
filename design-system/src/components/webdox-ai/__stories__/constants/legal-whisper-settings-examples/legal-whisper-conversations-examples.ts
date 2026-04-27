import { faker } from '@faker-js/faker';

import type { LegalWhisperConversationListItemType } from '@components/webdox-ai/interfaces/legal-whisper.interfaces';

export const legalWhisperConversationsExamples: LegalWhisperConversationListItemType[] = Array.from(
  { length: 10 },
  () => ({
    id: faker.string.uuid(),
    title: faker.lorem.words(5),
  }),
);
