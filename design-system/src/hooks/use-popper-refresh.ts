import { useRef, useEffect } from 'react';

import type Popper from 'popper.js';

/**
 * usePopperRefresh is a hook that creates a Popper instance and captures the Popper instance for later use.
 * It sets up ResizeObserver to automatically update positioning when content size changes.
 * This version properly handles multiple popover openings and closings.
 */
export const usePopperRefresh = (): Popper.PopperOptions => {
  const popperInstanceRef = useRef<Popper | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const updateTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /**
   * Debounced update function to prevent excessive popper updates during transitions
   */
  const debouncedUpdate = (): void => {
    if (updateTimeoutRef.current) {
      clearTimeout(updateTimeoutRef.current);
    }

    updateTimeoutRef.current = setTimeout(() => {
      if (popperInstanceRef.current) {
        popperInstanceRef.current.scheduleUpdate();
      }
    }, 16); // ~60fps to ensure smooth updates during transitions
  };

  /**
   * Clean up current instance and observers
   */
  const cleanupInstance = (): void => {
    if (resizeObserverRef.current) {
      resizeObserverRef.current.disconnect();
      resizeObserverRef.current = null;
    }
    if (updateTimeoutRef.current) {
      clearTimeout(updateTimeoutRef.current);
      updateTimeoutRef.current = null;
    }

    popperInstanceRef.current = null;
  };

  /**
   * Sets up ResizeObserver to watch for size changes in the popper element
   *
   * @param popperInstance - The Popper instance to observe
   */
  const setupResizeObserver = (popperInstance: Popper): void => {
    // Clean up existing observer if any
    if (resizeObserverRef.current) {
      resizeObserverRef.current.disconnect();
    }

    // Create ResizeObserver to watch for actual size changes (including during transitions)
    resizeObserverRef.current = new ResizeObserver((entries) => {
      if (entries.length > 0) {
        // Use debounced update when size changes are detected
        debouncedUpdate();
      }
    });

    // Start observing the popper element with ResizeObserver
    resizeObserverRef.current.observe(popperInstance.popper);

    // Also observe direct children that might have transitions
    const { children } = popperInstance.popper;
    for (let i = 0; i < children.length; i++) {
      const child = children[i] as Element;

      resizeObserverRef.current.observe(child);
    }
  };

  // Cleanup function for unmount
  useEffect(() => {
    return (): void => {
      cleanupInstance();
    };
  }, []);

  // Create popper options with modifier to capture instance
  const popperOptions: Popper.PopperOptions = {
    modifiers: {
      // Custom modifier to capture the Popper instance
      instanceCapture: {
        enabled: true,
        order: 1, // Run early in the modifier chain
        fn: (data) => {
          if (data.instance) {
            // Always update the instance reference and set up ResizeObserver
            // This handles cases where the popover is closed and reopened
            popperInstanceRef.current = data.instance;

            // Set up ResizeObserver for the new instance
            setupResizeObserver(data.instance);
          } else {
            // Clean up when instance is null (popover closed)
            cleanupInstance();
          }

          return data;
        },
      },
      shift: {
        enabled: true,
      },
      flip: {
        enabled: true,
        flipVariationsByContent: true,
      },
      preventOverflow: {
        enabled: true,
        boundariesElement: 'viewport',
        padding: 8,
      },
    },
  };

  return popperOptions;
};
