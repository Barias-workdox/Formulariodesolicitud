interface UseDynamicSizingProps {
    initialWidth?: number;
    initialHeight?: number;
    minWidth?: number;
    minHeight?: number;
    fullViewport: boolean;
    isMobile: boolean;
}
/**
 * Hook to manage dynamic sizing based on viewport and full viewport state
 */
export declare const useDynamicSizing: ({ initialWidth, initialHeight, minWidth, minHeight, fullViewport, isMobile, }: UseDynamicSizingProps) => {
    width: number;
    height: number;
};
export {};
