export interface UseTextEditorToolbarReturn {
    canBold: boolean;
    canItalic: boolean;
    canUnderline: boolean;
    disabled: boolean;
    isBold: boolean;
    isItalic: boolean;
    isUnderline: boolean;
    handleBold(): void;
    handleItalic(): void;
    handleUnderline(): void;
}
/**
 * Custom hook to manage the state and behavior of the text editor toolbar.
 */
export declare const useTextEditorToolbar: () => UseTextEditorToolbarReturn;
