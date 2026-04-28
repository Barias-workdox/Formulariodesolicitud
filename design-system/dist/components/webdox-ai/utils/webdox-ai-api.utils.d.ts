import { FeedbackKind } from '../../feedback-button';
/** Convert the feedback from api endpoint to webdox AI entity */
export declare const convertApiFeedbackToEntity: (rawFeedback: boolean) => FeedbackKind | undefined;
/** Convert the entity feedback value to the value required by endpoint */
export declare const convertEntityFeedbackToApi: (feedback?: FeedbackKind) => boolean | undefined;
