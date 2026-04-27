import type { CSSProperties } from 'react';

import { DEFAULT_FONT } from '@tokens';

import type { DesignSystemTheme } from '@themes/index';
import type { StyleObject } from 'styletron-standard';

/** Table row styles */
export const tableRowStyles = (
  theme: DesignSystemTheme,
  isDragging: boolean,
  draggableStyle: CSSProperties,
): CSSProperties => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  height: '100%',
  overflow: 'hidden',

  // change background color if dragging
  backgroundColor: isDragging ? theme.colors.bgBase : 'transparent',

  ...DEFAULT_FONT,

  // styles we need to apply on draggable items
  ...draggableStyle,
});

/** Table container styles */
export const tableContainerStyles = (): StyleObject => ({
  width: '100%',
  height: '100%',
  tableLayout: 'auto',
  borderSpacing: 0,
});
