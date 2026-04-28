import { ReactNode } from 'react';
import { InformationPopoverContentOverrides } from '../../information-popover.interfaces';
export interface InformationPopoverContentProps {
    'data-testid': string;
    title: string | ReactNode;
    content: string | ReactNode;
    overrides?: InformationPopoverContentOverrides;
    close(): void;
}
/**
 * Component to use as a popover content.
 */
export declare const InformationPopoverContent: ({ "data-testid": dataTestId, content, title, overrides, close, }: InformationPopoverContentProps) => JSX.Element;
