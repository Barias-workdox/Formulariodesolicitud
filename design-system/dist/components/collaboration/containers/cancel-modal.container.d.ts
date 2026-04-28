import { ReactElement } from 'react';
type CancelModalContainerProps = {
    'data-testid': string;
    isOpen: boolean;
    onClose(): void;
};
/** Container that manages the state and behavior of the form for canceling the collaboration */
export declare const CancelModalContainer: ({ "data-testid": dataTestId, isOpen, onClose, }: CancelModalContainerProps) => ReactElement;
export {};
