import { ReactElement } from 'react';
import { CollaborationActivityDocumentsForm, CollaborationResourceStatusInfo } from '../../../../../interfaces';
export type CheckboxFormProps = {
    'data-testid': string;
    document: CollaborationActivityDocumentsForm;
    status: CollaborationResourceStatusInfo;
};
/**
 * Component that renders a custom checkbox element for a document along with a Collapsible component
 * with all the required information of that specific document
 */
export declare const CheckboxForm: ({ "data-testid": dataTestId, document, status, }: CheckboxFormProps) => ReactElement;
