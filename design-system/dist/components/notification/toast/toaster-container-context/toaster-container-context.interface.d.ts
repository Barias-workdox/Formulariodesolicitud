import { PlacementType } from '../toast.interface';
export interface ToasterContainerContextProps {
    /**
     * Defines the position where toasts will appear on the screen.
     * Available options: 'topLeft', 'top', 'topRight', 'bottomRight', 'bottom', 'bottomLeft'
     */
    placement?: PlacementType;
    /**
     * The z-index value for the toast container. Higher values appear above other elements.
     * Used to control the stacking order of toasts relative to other UI elements.
     */
    zIndex?: number;
    /**
     * Horizontal margin for the toast container.
     * Can be a number (pixels) or string (e.g., '16px', '1rem').
     * Applied to the left/right sides depending on placement.
     */
    marginX?: string | number;
    /**
     * Vertical margin for the toast container.
     * Can be a number (pixels) or string (e.g., '16px', '1rem').
     * Applied to the top/bottom sides depending on placement.
     */
    marginY?: string | number;
    /**
     * Width of the toast container.
     * Can be any valid CSS width value (e.g., '300px', '50%', 'auto').
     * If not specified, toasts will use their natural width.
     */
    width?: string;
    /**
     * Time in milliseconds before the toast disappears automatically.
     * Set to 0 to disable auto-hide behavior (toast will remain visible until manually closed).
     * Default: 4000ms (see DEFAULT_TOAST_DURATION_MS constant)
     */
    duration?: number;
}
export interface ToastManagerState {
    /**
     * List of currently active toast keys
     */
    activeToasts: React.Key[];
    /**
     * Maximum number of toasts that can be shown simultaneously
     * Default: 3
     */
    maxToasts: number;
}
export type ToasterContainerContextType = {
    toasterContainerProps: ToasterContainerContextProps;
    /**
     * Toast manager state and controls
     */
    toastManager: ToastManagerState;
    /**
     * Updates the toaster container props
     */
    updateToasterContainerProps(newProps?: ToasterContainerContextProps): void;
    /**
     * Checks if a new toast can be shown, removes oldest if at limit with smooth transition
     */
    canShowToast(): Promise<boolean>;
    /**
     * Adds a toast to the active queue (called after successful creation)
     */
    addToastToQueue(toastKey: React.Key): void;
    /**
     * Removes a toast from the active queue
     */
    removeToastFromQueue(toastKey: React.Key): void;
    /**
     * Updates the maximum number of toasts allowed
     */
    updateMaxToasts(maxToasts: number): void;
};
