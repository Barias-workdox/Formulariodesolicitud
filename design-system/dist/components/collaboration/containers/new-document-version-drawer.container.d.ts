import { ReactElement } from 'react';
import { NewDocumentVersionFormFields } from '../components/contract-negotiation/new-document-version-drawer/new-document-version-drawer.logic';
interface NewDocumentVersionDrawerContainerProps {
    'data-testid': string;
    isOpen: boolean;
    isLoading: boolean;
    onClose(): void;
    onSubmit(values: NewDocumentVersionFormFields): void;
}
/**
 * Container that manages the state and behavior of a form for uploading a new document version.
 */
export declare const NewDocumentVersionDrawerContainer: ({ "data-testid": dataTestId, isOpen, isLoading, onClose, onSubmit, }: NewDocumentVersionDrawerContainerProps) => ReactElement;
export {};
