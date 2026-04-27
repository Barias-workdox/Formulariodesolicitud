import { errorExample } from './error-example';
import { feedbackExample } from './feedback-example';
import { loadingExample } from './loading-example';
import { markdownExample } from './markdown-example';

export const chatConversationExamples = {
  feedbackExample,
  loadingExample,
  markdownExample,
  errorExample,
} as const;

export const chatConversationExamplesKeys = Object.keys(chatConversationExamples);
