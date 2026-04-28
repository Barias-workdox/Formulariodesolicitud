import { ReactElement } from 'react';
import { IActivity } from '../../activity-timeline.interfaces';
export type ActivityDocumentsProps = Pick<IActivity['extraData'], 'documents'>;
/**
 * Component that displays a list of documents in the activity timeline
 *
 * @deprecated Use the `Timeline` API instead
 */
export declare const ActivityDocuments: ({ documents }: ActivityDocumentsProps) => ReactElement;
