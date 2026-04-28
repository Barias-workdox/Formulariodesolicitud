import { ReactNode } from 'react';
import { InformationPopoverOverrides } from './information-popover.interfaces';
import { PopoverProps } from 'baseui/popover';
export interface InformationPopoverProps extends Omit<PopoverProps, 'content' | 'overrides'> {
    'data-testid': string;
    title: string | ReactNode;
    content: string | ReactNode;
    children: ReactNode;
    overrides?: InformationPopoverOverrides;
    close(): void;
}
/**
 * A popover component for displaying informational content.
 *
 * @remarks
 * This component wraps the Popover component from Base Web and consists of a title and content.
 */
export declare const InformationPopover: ({ "data-testid": dataTestId, title, content, children, overrides, close, ...popoverProps }: InformationPopoverProps) => JSX.Element;
