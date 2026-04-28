import { ModalProps } from '../../../modal';
import { WithZIndex } from '../../../../interfaces/common.interfaces';
export type DeleteLegalWhisperConversationModalProps = WithZIndex<Pick<ModalProps, 'isOpen' | 'onClose'> & {
    conversationTitle: string;
    isLoading: boolean;
    onSubmit(): Promise<void>;
}>;
/**
 * Modal to confirm the deletion of a legal whisper conversation.
 */
export declare const DeleteLegalWhisperConversationModal: ({ conversationTitle, isLoading, isOpen, onClose, onSubmit, zIndex, }: DeleteLegalWhisperConversationModalProps) => React.JSX.Element;
