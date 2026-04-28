export interface HistoryTabContainerProps {
    'data-testid'?: string;
    onClose(): void;
}
/**
 * History Tab container, which makes all context connections,
 * supplying clean props to data rendering component.
 */
export declare const HistoryTabContainer: ({ "data-testid": dataTestId, onClose, }: HistoryTabContainerProps) => JSX.Element;
