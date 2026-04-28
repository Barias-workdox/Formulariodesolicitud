import { ReactNode } from 'react';
import { PlacementType, WithTestId } from '../../../interfaces/common.interfaces';
/**
 * Props for the main DynamicDialog component
 */
export interface DynamicDialogProps extends WithTestId {
    /** Whether the dialog is open */
    isOpen?: boolean;
    /** Initial width of the dialog */
    initialWidth?: number;
    /** Initial height of the dialog */
    initialHeight?: number;
    /** Minimum width of the dialog */
    minWidth?: number;
    /** Minimum height of the dialog */
    minHeight?: number;
    /** Maximum width of the dialog */
    maxWidth?: number;
    /** Maximum height of the dialog */
    maxHeight?: number;
    /** Placement of the dialog */
    placement?: PlacementType;
    /** Whether the dialog occupies the full viewport (100vw x 100vh) */
    fullViewport?: boolean;
    /** Whether the dialog can be closed */
    closable?: boolean;
    /** Whether to show drag handle when not in full viewport */
    draggable?: boolean;
    /** Whether to show resize handles when not in full viewport */
    resizable?: boolean;
    /** Custom z-index */
    zIndex?: number;
    /** Children components */
    children?: ReactNode;
    /** Callback when dialog is closed */
    onClose?(): void;
    /** Callback when full viewport state changes */
    onFullViewportChange?(isFullViewport: boolean): void;
}
/**
 * Props for the DynamicDialogHeader component
 */
export interface DynamicDialogHeaderProps extends WithTestId {
    /** Title text */
    title?: string;
    /** Optional icon next to title */
    icon?: ReactNode;
    /** Description text below title */
    description?: string;
    /** Whether to show description */
    showDescription?: boolean;
    /** Whether to show back button */
    showBackButton?: boolean;
    /** Additional actions */
    actions?: ReactNode;
    /** Whether to show actions */
    showActions?: boolean;
    /** Whether to show the header */
    visible?: boolean;
    /** Custom className */
    className?: string;
    /** Callback when back button is clicked */
    onBackButtonClick?(): void;
}
/**
 * Props for the DynamicDialogBody component
 */
export interface DynamicDialogBodyProps extends WithTestId {
    /** Body content */
    children?: ReactNode;
    /** Custom className */
    className?: string;
    /** Custom padding */
    padding?: string;
}
/**
 * Props for the DynamicDialogFooter component
 */
export interface DynamicDialogFooterProps extends WithTestId {
    /** Footer content */
    children?: ReactNode;
    /** Custom className */
    className?: string;
    /** Whether to show the footer */
    visible?: boolean;
}
/**
 * Props for internal dialog context
 */
export interface DynamicDialogContextValue {
    /** Whether the dialog occupies the full viewport (100vw x 100vh) */
    fullViewport: boolean;
    /** Whether the dialog can be closed */
    closable: boolean;
    /** Whether the dialog is draggable */
    draggable: boolean;
    /** Whether the dialog is resizable */
    resizable: boolean;
    /** Whether we're in mobile mode */
    isMobile: boolean;
    /** Function to toggle full viewport mode */
    toggleFullViewport(): void;
    /** Function to close the dialog */
    close(): void;
    /** Function to handle drag start for the drag handle */
    handleDragStart(event: React.PointerEvent): void;
}
