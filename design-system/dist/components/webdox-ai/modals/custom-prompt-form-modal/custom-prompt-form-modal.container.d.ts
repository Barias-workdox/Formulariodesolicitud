import { CustomPromptFormModalProps } from './custom-prompt-form-modal';
import { CustomPromptForm } from './custom-prompt-form-modal.interfaces';
import { CustomPrompt } from '../../interfaces';
export type CustomPromptFormModalContainerProps = Omit<CustomPromptFormModalProps, 'isLoading' | 'onSubmit'> & {
    customPrompt?: CustomPrompt;
    onSubmit(formValues: CustomPromptForm): Promise<void>;
};
/**
 * Custom prompt form modal container component.
 *
 * This component is responsible for managing the state and behavior of the custom prompt form modal.
 * It uses the `useForm` hook to handle form validation and submission.
 */
export declare const CustomPromptFormModalContainer: ({ customPrompt, isOpen, onClose, onSubmit, zIndex, }: CustomPromptFormModalContainerProps) => React.JSX.Element;
