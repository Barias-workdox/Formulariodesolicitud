import { ReactElement, ReactNode } from 'react';
export interface BorderedRadioContentProps {
    /** The title of the content. */
    title?: string;
    /** The description of the content. */
    description?: string;
    /** The icon to be displayed above of the description. */
    icon: ReactNode;
}
/**
 * Displays content for a BorderedRadio component.
 * Contains a description and icon.
 */
export declare const BorderedRadioContent: ({ title, description, icon, }: BorderedRadioContentProps) => ReactElement;
