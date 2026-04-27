import { themedStyled } from '@themes/utilities';

import {
  DIALOG_HEADER_HEIGHT,
  DIALOG_TRANSITION,
  HANDLE_CORNER_THICKNESS,
  HANDLE_THICKNESS,
} from '../dynamic-dialog.constants';

import type { StyleObject } from 'styletron-react';

/**
 * Main container for the dynamic dialog
 */
export const StyledDialogContainer = themedStyled<
  'div',
  {
    $fullViewport: boolean;
    $zIndex?: number;
    $isMobile: boolean;
  }
>('div', ({ $fullViewport, $zIndex, $isMobile, $theme }) => {
  const baseStyles: StyleObject = {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: $fullViewport || $isMobile ? '0' : $theme.borders.borderSm,
    borderColor: $theme.colors.neutralSubtle,
    backgroundColor: $theme.colors.bgBase,
    boxShadow: '0 12px 24px 0 rgba(26, 26, 26, 0.08), 0 24px 48px 0 rgba(26, 26, 26, 0.08)',
    transition: DIALOG_TRANSITION,
    zIndex: $zIndex || 1000,
    overflow: 'hidden',
  };

  if ($isMobile) {
    return {
      ...baseStyles,
      bottom: 0,
      left: 0,
      right: 0,
      maxHeight: '90vh',
      borderTopLeftRadius: $theme.borders.borderSm,
      borderTopRightRadius: $theme.borders.borderSm,
      borderBottomLeftRadius: '0',
      borderBottomRightRadius: '0',
    };
  }

  if ($fullViewport) {
    return {
      ...baseStyles,
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      width: '100vw',
      height: '100vh',
      maxWidth: 'none',
      maxHeight: 'none',
    };
  }

  return baseStyles;
});

/**
 * Header container
 */
export const StyledDialogHeader = themedStyled<
  'div',
  {
    $draggable: boolean;
    $fullViewport: boolean;
    $isMobile: boolean;
  }
>('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: `${DIALOG_HEADER_HEIGHT}px`,
  borderBottom: `1px solid ${$theme.colors.neutralSubtle}`,
}));

/**
 * Header main row - contains the back button, content, and actions
 */
export const StyledHeaderMainRow = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: $theme.spacing.spacingXs,
  padding: `${$theme.spacing.spacingXs} ${$theme.spacing.spacingMd}`,
}));

/**
 * Header content wrapper
 */
export const StyledHeaderContent = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: $theme.spacing.spacingXs,
  flex: 1,
  minWidth: 0,
}));

/**
 * Header text content
 */
export const StyledHeaderTexts = themedStyled('div', () => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  minWidth: 0,
}));

/**
 * Header actions container
 */
export const StyledHeaderActions = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: $theme.spacing.spacingXs,
  flexShrink: 0,
}));

/**
 * Body container
 */
export const StyledDialogBody = themedStyled<
  'div',
  {
    $padding?: string;
  }
>('div', ({ $theme, $padding }) => ({
  flex: 1,
  overflow: 'auto',
  padding: $padding || $theme.spacing.spacingMd,
}));

/**
 * Footer container
 */
export const StyledDialogFooter = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: $theme.spacing.spacingXs,
  padding: $theme.spacing.spacingMd,
  borderTop: `1px solid ${$theme.colors.neutralSubtle}`,
  flexShrink: 0,
}));

/**
 * Resize handle base styles
 */
const resizeHandleBase = {
  position: 'absolute' as const,
  backgroundColor: 'transparent',
  zIndex: 10,
};

/**
 * Factory to create a resize handle styled component
 */
function createResizeHandle(
  position: Record<string, number | string>,
  size: Record<string, string>,
  cursor: string,
): ReturnType<typeof themedStyled> {
  return themedStyled('div', () => ({
    ...resizeHandleBase,
    ...position,
    ...size,
    cursor,
  }));
}

/**
 * Left resize handle
 */
export const StyledLeftHandle = createResizeHandle(
  { top: 0, left: 0, bottom: 0 },
  { width: HANDLE_THICKNESS },
  'ew-resize',
);

/**
 * Right resize handle
 */
export const StyledRightHandle = createResizeHandle(
  { top: 0, right: 0, bottom: 0 },
  { width: HANDLE_THICKNESS },
  'ew-resize',
);

/**
 * Top resize handle
 */
export const StyledTopHandle = createResizeHandle(
  { top: 0, left: 0, right: 0 },
  { height: HANDLE_THICKNESS },
  'ns-resize',
);

/**
 * Bottom resize handle
 */
export const StyledBottomHandle = createResizeHandle(
  { bottom: 0, left: 0, right: 0 },
  { height: HANDLE_THICKNESS },
  'ns-resize',
);

/**
 * Corner resize handle base
 */
const cornerHandleBase = {
  ...resizeHandleBase,
  width: HANDLE_CORNER_THICKNESS,
  height: HANDLE_CORNER_THICKNESS,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

/**
 * Factory to create a corner resize handle with given position and cursor
 */
function createCornerHandle(
  position: Record<string, number>,
  cursor: string,
): ReturnType<typeof themedStyled> {
  return themedStyled('div', () => ({
    ...cornerHandleBase,
    ...position,
    cursor,
  }));
}

/**
 * Top-left corner resize handle
 */
export const StyledTopLeftCornerHandle = createCornerHandle({ top: 0, left: 0 }, 'nw-resize');

/**
 * Top-right corner resize handle
 */
export const StyledTopRightCornerHandle = createCornerHandle({ top: 0, right: 0 }, 'ne-resize');

/**
 * Bottom-left corner resize handle
 */
export const StyledBottomLeftCornerHandle = createCornerHandle({ bottom: 0, left: 0 }, 'sw-resize');

/**
 * Bottom-right corner resize handle
 */
export const StyledBottomRightCornerHandle = createCornerHandle(
  { bottom: 0, right: 0 },
  'se-resize',
);

/**
 * Drag handle indicator - full width at top of header
 */
export const StyledDragHandle = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  cursor: 'grab',
  padding: $theme.spacing.spacing2xs,
  color: $theme.colors.neutral,
  ':active': {
    cursor: 'grabbing',
  },
}));

/**
 * Mobile bottom sheet handle
 */
export const StyledMobileHandle = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: $theme.spacing.spacing2xs,
}));
