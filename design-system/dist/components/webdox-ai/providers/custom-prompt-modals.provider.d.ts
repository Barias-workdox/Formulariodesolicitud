import { PropsWithChildren } from 'react';
import { CustomPromptAction } from '../constants';
import { CustomPrompt } from '../interfaces';
import { WithZIndex } from '../../../interfaces/common.interfaces';
export type CustomPromptModalsProviderProps = WithZIndex<PropsWithChildren<{
    isEditingDisabled?: boolean;
    onExecuteCustomPromptAction?(action: CustomPromptAction, payload: Partial<CustomPrompt>): Promise<void>;
}>>;
/**
 * Provider component for Custom Prompt modals.
 * Wraps its children with the CustomPromptModalsContext.Provider and provides the context value to them.
 */
export declare const CustomPromptModalsProvider: ({ children, isEditingDisabled, onExecuteCustomPromptAction, zIndex, }: CustomPromptModalsProviderProps) => JSX.Element;
