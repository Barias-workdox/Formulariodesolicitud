import type { CSSProperties } from 'react';

import type { VirtualItem } from '@tanstack/react-virtual';

/**
 * Return base values for virtualized list item styles
 */
export const getVirtualItemStyles = (
  { start, index, size }: VirtualItem,
  itemHeight: number,
): CSSProperties => ({
  top: 0,
  left: 0,
  width: '100%',
  boxSizing: 'border-box',
  position: 'absolute',
  transform: `translateY(${start}px)`,
  minHeight: index === 0 ? `${itemHeight}px` : `${size}px`,
  display: 'flex',
});
