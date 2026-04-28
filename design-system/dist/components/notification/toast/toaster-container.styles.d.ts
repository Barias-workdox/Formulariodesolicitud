import { ToasterOverrides } from './toast.interface';
/**
 * Override props for the Toast Container component with responsive support
 * Uses mobile-first approach: base styles for mobile, placement margins for desktop (small breakpoint and up)
 */
export declare const toastOverrides: ({ zIndex, marginX, marginY, }: {
    zIndex: number;
    marginX?: string | number;
    marginY?: string | number;
}) => ToasterOverrides;
