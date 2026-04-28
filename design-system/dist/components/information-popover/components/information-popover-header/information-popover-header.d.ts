import { ReactNode } from 'react';
import { InformationPopoverHeaderOverrides } from './information-popover-header.interfaces';
export interface InformationPopoverHeaderProps {
    'data-testid': string;
    title: string | ReactNode;
    overrides?: InformationPopoverHeaderOverrides;
    onClose(): void;
}
/**
 * Header component for the InformationPopover.
 *
 * @remarks
 * This component is responsible for rendering the header section of the InformationPopover.
 */
export declare const InformationPopoverHeader: ({ "data-testid": dataTestId, title, onClose, overrides, }: InformationPopoverHeaderProps) => JSX.Element;
