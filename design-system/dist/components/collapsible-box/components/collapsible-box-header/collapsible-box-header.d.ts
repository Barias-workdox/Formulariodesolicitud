import { CollapsibleBoxProps } from '../../collapsible-box';
export type CollapsibleBoxHeaderProps = Pick<CollapsibleBoxProps, 'title' | 'collapsedTitle' | 'Icon' | 'options' | 'overrides'> & {
    dataTestId?: string;
    $expanded: boolean;
    onClick(): void;
};
/**
 * Custom header for the overrides of the Collapsible Box accordion
 */
export declare const CollapsibleBoxHeader: import('react').ForwardRefExoticComponent<Pick<CollapsibleBoxProps, "title" | "overrides" | "options" | "Icon" | "collapsedTitle"> & {
    dataTestId?: string;
    $expanded: boolean;
    onClick(): void;
} & import('react').RefAttributes<HTMLDivElement>>;
