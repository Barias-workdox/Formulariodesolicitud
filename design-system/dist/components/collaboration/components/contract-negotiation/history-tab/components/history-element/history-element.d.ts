import { ReactElement } from 'react';
import { CollaborationActivity, CollaborationUser } from '../../../../../interfaces';
type HistoryListProps = {
    activity: CollaborationActivity;
    responsible: CollaborationUser;
    isLast: boolean;
};
/** Component that renders an activity that is rendered inside a `Timeline` component */
export declare const HistoryElement: ({ isLast, responsible, activity: { id, key, createdAt, owner: { firstName, lastName }, collaboration: { message }, parameters: { comment, documentName, documentVersion, documents, thirdParties, }, }, }: HistoryListProps) => ReactElement;
export {};
