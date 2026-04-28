/**
 * Hook that creates a state with the selection range of the html element passed by the params.
 */
export declare const useHtmlSelection: (_node: Element) => {
    selectionRange: [number, number];
    updateSelection(nodeUpdated: Element): void;
    setSelectionOffset(start: number, end: number): void;
    getSelectionOffset(): [number, number];
    addSelectionListenersByClassName(className: string): void;
};
