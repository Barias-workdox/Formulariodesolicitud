import { DynamicDialogContextValue } from '../dynamic-dialog.interfaces';
interface UseDialogContextProps {
    fullViewport: boolean;
    closable: boolean;
    draggable: boolean;
    resizable: boolean;
    isMobile: boolean;
    toggleFullViewport(): void;
    close(): void;
    handleDragStart(event: React.PointerEvent): void;
}
/**
 * Hook to create dialog context value
 */
export declare const useDialogContext: ({ fullViewport, closable, draggable, resizable, isMobile, toggleFullViewport, close, handleDragStart, }: UseDialogContextProps) => DynamicDialogContextValue;
export {};
