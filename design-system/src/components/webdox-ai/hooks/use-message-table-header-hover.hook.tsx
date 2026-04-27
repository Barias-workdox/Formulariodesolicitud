import { useMemo, useState } from 'react';

export interface UseMessageTableHeaderHoverReturn {
  /** Indicates if either the table menu or the header is hovered. */
  isHovered: boolean;
  /** Sets the hover state of the table menu. */
  setIsTableMenuHovered(hovered: boolean): void;
  /** Sets the hover state of the header. */
  setIsHeaderHovered(hovered: boolean): void;
}

/** Custom hook to manage hover states for a message table header and its menu. */
export const useMessageTableHeaderHover = (): UseMessageTableHeaderHoverReturn => {
  const [isTableMenuHovered, setIsTableMenuHovered] = useState(false);
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);

  return useMemo(
    () => ({
      isHovered: isHeaderHovered || isTableMenuHovered,
      setIsHeaderHovered,
      setIsTableMenuHovered,
    }),
    [isHeaderHovered, isTableMenuHovered],
  );
};
