import { ClipboardEvent, KeyboardEvent } from 'react';
export interface UseMessageComposerProps {
    defaultValue?: string;
    maxLength?: number;
    onChange?(value: string): void;
    onCreate?(value: string): void;
    onEscape?(): void;
}
export interface UseMessageComposerReturn {
    isEmpty: boolean;
    textareaRef: React.RefObject<HTMLDivElement>;
    value: string;
    handleChange(value: string): void;
    handleCreate(): void;
    handleKeyDown(e: KeyboardEvent<HTMLDivElement>): void;
    handlePaste(e: ClipboardEvent<HTMLDivElement>): void;
}
/**
 * Hook to manage the state and behavior of a message composer.
 *
 * This hook provides functionalities to handle text input, paste events, and key down events
 * within a contentEditable div. It also manages the cursor position and ensures that pasted
 * content is sanitized to prevent unwanted HTML tags.
 */
export declare const useMessageComposer: ({ defaultValue, maxLength, onChange, onCreate, onEscape, }: UseMessageComposerProps) => UseMessageComposerReturn;
