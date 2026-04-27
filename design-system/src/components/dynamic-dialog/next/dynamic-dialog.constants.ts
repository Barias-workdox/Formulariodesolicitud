import { breakpoints } from '@tokens/breakpoints';

import type { PlacementType } from '@interfaces/common.interfaces';

/**
 * Default dimensions for the dynamic dialog component
 */
export const DEFAULT_DIALOG_WIDTH = 500;

export const DEFAULT_DIALOG_HEIGHT = 700;

/**
 * Minimum dimensions for the dynamic dialog component
 */
export const MIN_DIALOG_WIDTH = 390;

export const MIN_DIALOG_HEIGHT = 430;

/**
 * Represents the thickness of the resize handle in the dynamic dialog component
 */
export const HANDLE_THICKNESS = '1px';

/**
 * Represents the thickness of the corner handle in the dynamic dialog component
 */
export const HANDLE_CORNER_THICKNESS = '16px';

/**
 * Transition animation for smooth dialog interactions
 */
export const DIALOG_TRANSITION = 'all 0.4s cubic-bezier(0.22, 0.61, 0.36, 1)';

/**
 * Z-index values for different dialog states
 */
export const DIALOG_Z_INDEX = {
  DEFAULT: 1000,
  FULL_VIEWPORT: 1100,
  TOOLTIP: 1200,
} as const;

/**
 * Default placement for the dialog
 */
export const DEFAULT_PLACEMENT: PlacementType = 'bottomRight';

/**
 * Breakpoint for mobile responsive behavior
 */
export const MOBILE_BREAKPOINT = breakpoints.medium;

/**
 * Dialog header height
 */
export const DIALOG_HEADER_HEIGHT = 56;
