import type { ResizableContainerProps } from './components/resizable-container';

/**
 * Represents the thickness of the handle in the dynamic dialog component.
 */
export const HANDLE_THICKNESS = '1px';

/**
 * Represents the thickness of the corner handle in the dynamic dialog component.
 */
export const HANDLE_CORNER_THICKNESS = '16px';

export const DEFAULT_RESIZABLE_CONTAINER_VALUES: Pick<
  ResizableContainerProps,
  'initialHeight' | 'initialWidth' | 'minHeight' | 'minWidth'
> = {
  initialHeight: 680,
  initialWidth: 500,
  minHeight: 680,
  minWidth: 500,
};

export const CONTAINER_TRANSITION = `all .4s cubic-bezier(0.22, 0.61, 0.36, 1)`;
