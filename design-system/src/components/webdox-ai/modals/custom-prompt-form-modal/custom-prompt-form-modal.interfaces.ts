import type { FieldValues } from '@components/forms';

export type CustomPromptForm = FieldValues & {
  title?: string;
  description: string;
};
