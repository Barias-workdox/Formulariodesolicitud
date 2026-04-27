import type { FieldValues } from '@components/forms';

export type EditLegalWhisperConversationForm = FieldValues & {
  title?: string;
  id: string;
};
