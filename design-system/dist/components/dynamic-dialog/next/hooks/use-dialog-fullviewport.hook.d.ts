interface UseDialogFullViewportProps {
    fullViewport: boolean;
}
/**
 * Hook to manage full viewport functionality for the dialog
 * Makes the dialog occupy the entire viewport (100vw x 100vh) using CSS
 */
export declare const useDialogFullViewport: ({ fullViewport, }: UseDialogFullViewportProps) => {
    containerRef: React.RefObject<HTMLDivElement>;
};
export {};
