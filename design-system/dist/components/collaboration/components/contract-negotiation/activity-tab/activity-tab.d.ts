import { ReactElement } from 'react';
import { ActivityTabContainerProps, Option } from '../../../containers';
import { CollaborationActivityDocument, CollaborationDetails } from '../../../interfaces';
export interface ActivityTabProps extends ActivityTabContainerProps {
    collaborationDetails: CollaborationDetails;
    documents: CollaborationActivityDocument[];
    selectedDocument: CollaborationActivityDocument;
    handleOnChange(value: Option): void;
}
/**
 * Component that renders a summary for the collaboration.
 *
 * In the first place there is a banner with the status of the collaboration and after that there
 * is the status for a document with the information of each third party involved
 */
export declare const ActivityTab: ({ "data-testid": dataTestId, documents, selectedDocument, handleOnChange, onClose, }: ActivityTabProps) => ReactElement;
