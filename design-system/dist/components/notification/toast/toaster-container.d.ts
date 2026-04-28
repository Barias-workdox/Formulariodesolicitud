import { ToasterProps } from 'baseui/toast';
interface ToasterContainerProps {
    /**
     * Defines the position where toasts will appear on the screen.
     * Available options: 'topLeft', 'top', 'topRight', 'bottomRight', 'bottom', 'bottomLeft'
     * Default: 'bottomRight'
     */
    placement?: ToasterProps['placement'];
    /**
     * The z-index value for the toast container. Higher values appear above other elements.
     * Used to control the stacking order of toasts relative to other UI elements.
     */
    zIndex: number;
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
     * React children to be rendered inside the toast container.
     * Typically used for rendering the actual toast components.
     */
    children?: React.ReactNode;
    /**
     * Time in milliseconds before the toast disappears automatically.
     * Set to 0 to disable auto-hide behavior (toast will remain visible until manually closed).
     * Default: {@link DEFAULT_TOAST_DURATION_MS}
     */
    duration?: number;
}
/**
 * Styled version of Baseweb ToasterContainer component. It includes
 * the correct colors, close icon and the icon displayed on each kind (positive, negative)
 * of toast.
 *
 * It provides consistent spacing and responsive behavior for all toast types.
 *
 * The major differences from BaseWeb are:
 * - Colors
 * - Toast has an icon
 * - Close icon different
 * - Closable by default (configurable via `closeable` prop at individual toast level)
 * - Auto-hide after {@link DEFAULT_TOAST_DURATION_MS}ms by default (configurable via `duration` prop - set to 0 to disable)
 */
export declare const ToasterContainer: ({ children, placement, zIndex, marginX, marginY, width, duration, }: ToasterContainerProps) => JSX.Element;
export {};
