import { useRef, useCallback } from 'react';

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
export const useKeyboardNavigation = ({
  isOpen,
  isLanguageExpanded = false,
  onClose,
  onToggleLanguage,
  onFocusTrigger,
}: UseKeyboardNavigationProps): UseKeyboardNavigationResult => {
  const menuRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);

  /**
   * Focuses the first focusable element in the menu
   */
  const focusFirstMenuItem = useCallback(() => {
    if (!menuRef.current) return;

    const focusableElements = menuRef.current.querySelectorAll(
      'button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );

    if (focusableElements.length > 0) {
      (focusableElements[0] as HTMLElement).focus();
    }
  }, []);

  /**
   * Focuses the trigger button
   */
  const focusTrigger = useCallback(() => {
    onFocusTrigger?.();
  }, [onFocusTrigger]);

  /**
   * Handles keyboard navigation within the menu
   */
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (!isOpen) return;

      const { key, target, currentTarget } = event;

      // Handle Escape key to close menu
      if (key === 'Escape') {
        event.preventDefault();
        onClose();
        focusTrigger();

        return;
      }

      // Handle Enter and Space for menu items
      if (key === 'Enter' || key === ' ') {
        const targetElement = target as HTMLElement;

        // If clicking on language selector button, toggle it
        if (targetElement.getAttribute('data-role') === 'language-trigger') {
          event.preventDefault();
          onToggleLanguage?.();

          return;
        }

        // If clicking on language option, let the default behavior handle it
        if (targetElement.getAttribute('data-role') === 'language-option') {
          return;
        }

        // For other menu items, let the default behavior handle it
        return;
      }

      // Handle Tab navigation
      if (key === 'Tab') {
        const focusableElements = currentTarget.querySelectorAll(
          'button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );

        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        // If Tab with Shift, focus previous element or close menu
        if (event.shiftKey) {
          if (target === firstElement) {
            event.preventDefault();
            onClose();
            focusTrigger();
          }
        } else {
          // If Tab without Shift, focus next element or close menu
          if (target === lastElement) {
            event.preventDefault();
            onClose();
            focusTrigger();
          }
        }
      }

      // Handle arrow keys for language selector navigation
      if (isLanguageExpanded && (key === 'ArrowDown' || key === 'ArrowUp')) {
        event.preventDefault();

        const languageOptions = languageRef.current?.querySelectorAll(
          '[data-role="language-option"]',
        );
        if (!languageOptions || languageOptions.length === 0) return;

        const currentIndex = Array.from(languageOptions).findIndex((element) => element === target);

        if (currentIndex === -1) return;

        let nextIndex: number;
        if (key === 'ArrowDown') {
          nextIndex = currentIndex === languageOptions.length - 1 ? 0 : currentIndex + 1;
        } else {
          nextIndex = currentIndex === 0 ? languageOptions.length - 1 : currentIndex - 1;
        }

        (languageOptions[nextIndex] as HTMLElement).focus();
      }
    },
    [isOpen, isLanguageExpanded, onClose, onToggleLanguage, focusTrigger],
  );

  return {
    menuRef,
    languageRef,
    handleKeyDown,
    focusFirstMenuItem,
    focusTrigger,
  };
};
