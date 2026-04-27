import type { FeedbackKind } from '../../feedback-button';

/** Convert the feedback from api endpoint to webdox AI entity */
export const convertApiFeedbackToEntity = (rawFeedback: boolean): FeedbackKind | undefined =>
  rawFeedback ? 'positive' : rawFeedback === false ? 'negative' : undefined;

/** Convert the entity feedback value to the value required by endpoint */
export const convertEntityFeedbackToApi = (feedback?: FeedbackKind): boolean | undefined =>
  feedback === 'positive' ? true : feedback === 'negative' ? false : undefined;
