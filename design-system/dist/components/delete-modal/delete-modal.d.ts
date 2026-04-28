import { DeleteModalProps } from './delete-modal.interfaces';
/** Modal used for deletion, has a timer that allows the user to prevent an unwanted delete*/
declare const DeleteModal: {
    ({ zIndex, status, isOpen, ...rest }: DeleteModalProps): JSX.Element;
    DisclaimerText: ({ text, }: import('./components/delete-modal-disclaimer-text').DeleteModalDisclaimerTextProps) => JSX.Element;
};
export { DeleteModal };
