import { ReactElement } from 'react';
import { DynamicDialogProps } from './dynamic-dialog.interfaces';
/**
 * Enhanced DynamicDialog component with compound pattern support
 *
 * Features:
 * - Responsive design with mobile support
 * - Draggable and resizable when not in full viewport
 * - Full viewport mode toggle (occupies entire viewport)
 * - Customizable placement and dimensions
 * - Compound component pattern for flexible content
 */
export declare const DynamicDialog: ({ dataTestId, isOpen, initialWidth, initialHeight, minWidth, minHeight, maxWidth, maxHeight, placement, fullViewport: controlledFullViewport, closable, draggable, resizable, zIndex: customZIndex, onClose, onFullViewportChange, children, }: DynamicDialogProps) => ReactElement | null;
