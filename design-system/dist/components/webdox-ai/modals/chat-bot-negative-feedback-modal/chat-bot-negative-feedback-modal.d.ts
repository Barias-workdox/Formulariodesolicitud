import { ModalProps } from '../../../modal';
import { NegativeFeedbackFormValues } from '../../interfaces/webdox-ai.interfaces';
export interface ChatBotNegativeFeedbackModalProps {
    'data-testid': string;
    isLoading?: boolean;
    zIndex?: number;
    isOpen: ModalProps['isOpen'];
    onClose: ModalProps['onClose'];
    onSubmit(values: NegativeFeedbackFormValues): void;
}
/**
 * Chat bot Negative feedback modal, that will require that the user add a comment
 * and select a item from the options radio group to submit the Negative feedback
 * on the selected message
 */
export declare const ChatBotNegativeFeedbackModal: ({ "data-testid": dataTestId, isLoading, isOpen, zIndex, onClose, onSubmit, }: ChatBotNegativeFeedbackModalProps) => JSX.Element;
