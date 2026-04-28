import { DynamicDialogProps } from '../dynamic-dialog.interfaces';
type UseDialogStateProps = Pick<DynamicDialogProps, 'fullViewport' | 'onClose' | 'onFullViewportChange'>;
/**
 * Hook to manage dialog state
 */
export declare const useDialogState: ({ fullViewport: controlledFullViewport, onClose, onFullViewportChange, }: UseDialogStateProps) => {
    fullViewport: boolean;
    close(): void;
    updateFullViewport(newValue: boolean): void;
};
export {};
