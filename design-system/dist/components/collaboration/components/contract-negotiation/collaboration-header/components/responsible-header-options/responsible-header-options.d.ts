import { ReactElement } from 'react';
export type ResponsibleHeaderOptionsProps = {
    'data-testid': string;
    onFinalize(): void;
    onCancel(): void;
};
/**
 * Component that provides a set of header options for a
 * responsible within a collaboration negotiation.
 */
export declare const ResponsibleHeaderOptions: ({ "data-testid": dataTestId, onFinalize, onCancel, }: ResponsibleHeaderOptionsProps) => ReactElement;
