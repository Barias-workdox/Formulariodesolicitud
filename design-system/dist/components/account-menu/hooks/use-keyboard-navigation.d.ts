export interface UseKeyboardNavigationProps {
    /** Whether the menu is open */
    isOpen: boolean;
    /** Whether the language selector is expanded */
    isLanguageExpanded?: boolean;
    /** Callback to close the menu */
    onClose(): void;
    /** Callback to toggle language selector */
    onToggleLanguage?(): void;
    /** Callback when focus should move to trigger */
    onFocusTrigger?(): void;
}
export interface UseKeyboardNavigationResult {
    /** Ref for the menu container */
    menuRef: React.RefObject<HTMLDivElement>;
    /** Ref for the language selector container */
    languageRef: React.RefObject<HTMLDivElement>;
    /** Function to handle keydown events */
    handleKeyDown(event: React.KeyboardEvent): void;
    /** Function to focus the first menu item */
    focusFirstMenuItem(): void;
    /** Function to focus the trigger button */
    focusTrigger(): void;
}
/**
 * Custom hook to handle keyboard navigation for the account menu
 * Implements WCAG 2.1 AA guidelines for keyboard navigation
 */
export declare const useKeyboardNavigation: ({ isOpen, isLanguageExpanded, onClose, onToggleLanguage, onFocusTrigger, }: UseKeyboardNavigationProps) => UseKeyboardNavigationResult;
