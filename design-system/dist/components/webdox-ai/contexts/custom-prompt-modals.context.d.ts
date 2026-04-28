import { CustomPromptAction } from '../constants';
import { CustomPrompt } from '../interfaces';
/**
 * A context for managing actions related to custom prompt modals.
 */
export type CustomPromptModalsContextValue = {
    isEditingDisabled: boolean;
    openModal(params: {
        kind: CustomPromptAction;
        customPrompt?: CustomPrompt;
    }): void;
};
/**
 * A context for managing actions related to documents in the repository.
 */
export declare const CustomPromptModalsContext: import('react').Context<CustomPromptModalsContextValue>;
