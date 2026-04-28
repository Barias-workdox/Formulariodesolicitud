import { ReactElement } from 'react';
type FinalizeDrawerContainerProps = {
    'data-testid': string;
    isOpen: boolean;
    onClose(): void;
};
/**
 * Container that manages the state and behavior of a form
 * that finalizes the contract negotiation process
 */
export declare const FinalizeDrawerContainer: ({ "data-testid": dataTestId, isOpen, onClose, }: FinalizeDrawerContainerProps) => ReactElement;
export {};
