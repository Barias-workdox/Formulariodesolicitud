import { ReactElement } from 'react';
export interface DocumentsTabContainerProps {
    'data-testid'?: string;
    onClose(): void;
}
/**
 * Document Tab container, which makes all context connections,
 * supplying clean props to data rendering component.
 */
export declare const DocumentsTabContainer: ({ "data-testid": dataTestId, onClose, }: DocumentsTabContainerProps) => ReactElement;
