import { ReactElement } from 'react';
import { CancelCollaborationFormFields } from '../../../interfaces';
export type CancelModalProps = {
    'data-testid': string;
    isOpen: boolean;
    isLoading: boolean;
    onClose(): void;
    onSubmit(values: CancelCollaborationFormFields): void;
};
/** Component that is designed to present a modal for canceling a collaboration negotiation */
export declare const CancelModal: ({ "data-testid": dataTestId, isOpen, isLoading, onClose, onSubmit, }: CancelModalProps) => ReactElement;
