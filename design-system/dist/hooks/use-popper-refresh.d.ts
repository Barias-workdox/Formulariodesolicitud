import { default as Popper } from 'popper.js';
/**
 * usePopperRefresh is a hook that creates a Popper instance and captures the Popper instance for later use.
 * It sets up ResizeObserver to automatically update positioning when content size changes.
 * This version properly handles multiple popover openings and closings.
 */
export declare const usePopperRefresh: () => Popper.PopperOptions;
