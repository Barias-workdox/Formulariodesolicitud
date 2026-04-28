/**
 * Creates a keyboard event handler for accessibility compliance.
 *
 * This utility function handles keyboard interactions for Space and Enter keys,
 * which are standard accessibility keys for activating interactive elements.
 * It prevents the default browser behavior and executes the provided callback
 * function when these keys are pressed.
 *
 * @param callback - The function to execute when Space or Enter is pressed
 * @returns A keyboard event handler function that can be attached to React components
 *
 * @example
 * ```tsx
 * const handleToggle = () => setExpanded(!expanded);
 * const keyHandler = ariaKeyDownHandler(handleToggle);
 *
 * return (
 *   <div onKeyDown={keyHandler} tabIndex={0}>
 *     Toggle content
 *   </div>
 * );
 * ```
 */
export declare const ariaKeyDownHandler: (callback: () => void) => (event: React.KeyboardEvent) => void;
