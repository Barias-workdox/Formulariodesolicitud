import { PlacementType } from '../../../../interfaces/common.interfaces';
interface UseDialogPositioningProps {
    placement: PlacementType;
    width: number;
    height: number;
    fullViewport: boolean;
    isMobile: boolean;
}
/**
 * Hook to calculate dialog positioning based on placement and viewport state
 * Specifies all positioning properties to ensure correct anchor point during animations
 */
export declare const useDialogPositioning: ({ placement, width, height, fullViewport, isMobile, }: UseDialogPositioningProps) => React.CSSProperties;
export {};
