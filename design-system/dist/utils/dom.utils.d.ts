/**
 * Validates whether the scroll position is at or near the bottom of the list.
 * Adds a tolerance to account for small discrepancies.
 */
export declare const validateIsScrolledToBottom: ({ element, tolerance, }: {
    element: HTMLElement;
    tolerance?: number;
}) => boolean;
/**
 * Scrolls to the bottom of the element with the specified scroll behavior.
 * Adds a tolerance to account for small discrepancies.
 */
export declare const scrollToBottom: ({ element, tolerance, behavior, }: {
    element: HTMLElement;
    tolerance?: number;
    behavior?: "auto" | "instant" | "smooth";
}) => void;
