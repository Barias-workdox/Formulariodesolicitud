import { useCallback, useEffect, useRef } from 'react';

interface UseDialogFullViewportProps {
  fullViewport: boolean;
}

/**
 * Hook to manage full viewport functionality for the dialog
 * Makes the dialog occupy the entire viewport (100vw x 100vh) using CSS
 */
export const useDialogFullViewport = ({
  fullViewport,
}: UseDialogFullViewportProps): {
  containerRef: React.RefObject<HTMLDivElement>;
} => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Apply full viewport styles to the container
  const applyFullViewportStyles = useCallback(() => {
    if (containerRef.current) {
      const element = containerRef.current;

      element.style.position = 'fixed';
      element.style.top = '0';
      element.style.left = '0';
      element.style.width = '100vw';
      element.style.height = '100vh';
      element.style.zIndex = '9999';
      element.style.margin = '0';
      element.style.transform = 'none';
    }
  }, []);

  // Remove full viewport styles from the container
  const removeFullViewportStyles = useCallback(() => {
    if (containerRef.current) {
      const element = containerRef.current;

      element.style.position = '';
      element.style.top = '';
      element.style.left = '';
      element.style.width = '';
      element.style.height = '';
      element.style.zIndex = '';
      element.style.margin = '';
      element.style.transform = '';
    }
  }, []);

  // Apply or remove full viewport styles when state changes
  useEffect(() => {
    if (fullViewport) {
      applyFullViewportStyles();
    } else {
      removeFullViewportStyles();
    }
  }, [fullViewport, applyFullViewportStyles, removeFullViewportStyles]);

  return {
    containerRef,
  };
};
