export interface CommentsTabContainerProps {
    'data-testid'?: string;
    onClose(): void;
}
/**
 * Comments Tab container, which makes all context connections,
 * supplying clean props to data rendering component.
 */
export declare const CommentsTabContainer: ({ "data-testid": dataTestId, onClose, }: CommentsTabContainerProps) => JSX.Element;
