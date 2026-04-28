import { PlacementType } from '../../../../interfaces/common.interfaces';
interface UseDialogStylesProps {
    width: number;
    height: number;
    maxWidth?: number;
    maxHeight?: number;
    placement: PlacementType;
    fullViewport: boolean;
    isMobile: boolean;
}
/**
 * Hook to calculate dialog container styles
 */
export declare const useDialogStyles: ({ width, height, maxWidth, maxHeight, placement, fullViewport, isMobile, }: UseDialogStylesProps) => React.CSSProperties;
export {};
