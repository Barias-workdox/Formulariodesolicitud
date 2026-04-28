import { ReactNode } from 'react';
import { InformationPopoverOverrides } from './information-popover.interfaces';
import { StatefulPopoverProps } from 'baseui/popover';
export interface StatefulInformationPopoverProps extends Omit<StatefulPopoverProps, 'content' | 'overrides'> {
    'data-testid': string;
    title: string | ReactNode;
    content: string | ReactNode;
    children: ReactNode;
    overrides?: InformationPopoverOverrides;
}
/**
 * A popover component for displaying informational content.
 *
 * @remarks
 * This component wraps the StatefulPopover component from Base Web and consists of a title and content.
 */
export declare const StatefulInformationPopover: ({ "data-testid": dataTestId, title, content, children, overrides, ...popoverProps }: StatefulInformationPopoverProps) => JSX.Element;
