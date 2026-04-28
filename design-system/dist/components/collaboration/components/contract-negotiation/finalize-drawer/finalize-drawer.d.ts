import { ReactElement } from 'react';
import { CollaborationActivityDocumentsForm, FinalizeNegotiationFormFields } from '../../../interfaces';
export type FinalizeDrawerProps = {
    'data-testid': string;
    documents: CollaborationActivityDocumentsForm[];
    isOpen: boolean;
    isLoading: boolean;
    onClose(): void;
    onSubmit(values: FinalizeNegotiationFormFields): void;
};
/**
 * Component that is responsible for rendering a drawer that allows users
 * to finalize a negotiation.
 */
export declare const FinalizeDrawer: ({ "data-testid": dataTestId, documents, isOpen, isLoading, onClose, onSubmit, }: FinalizeDrawerProps) => ReactElement;
