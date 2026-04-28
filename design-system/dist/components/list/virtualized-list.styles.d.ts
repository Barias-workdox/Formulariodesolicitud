import { CSSProperties } from 'react';
import { VirtualItem } from '@tanstack/react-virtual';
/**
 * Return base values for virtualized list item styles
 */
export declare const getVirtualItemStyles: ({ start, index, size }: VirtualItem, itemHeight: number) => CSSProperties;
