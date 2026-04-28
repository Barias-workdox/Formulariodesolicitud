import { ReactElement, ReactNode } from 'react';
import { ButtonProps } from '../button/button.interfaces';
type EmptyStateButtonProps = Pick<ButtonProps, 'onClick' | 'data-testid'> & {
    text: string;
    startEnhancer?: ButtonProps['startEnhancer'];
};
export interface EmptyStateProps {
    dataTestId?: string;
    title?: ReactNode;
    description?: ReactNode;
    Icon?: ReactNode;
    link?: {
        text: string;
        href: string;
    };
    primaryButtonProps?: EmptyStateButtonProps;
    secondaryButtonProps?: EmptyStateButtonProps;
}
/**
 * Represents an empty state component.
 *
 * This component is used to display an empty state message.
 * It is typically used when there are no items to display in the table.
 *
 * The component is composed by:
 * - An icon to be displayed in the empty state.
 * - A title and a description  of the empty state message.
 * - The link to provide additional information or actions.
 * - Two buttons: a primary button and a secondary button.
 *
 */
export declare const EmptyState: ({ dataTestId, Icon, title, description, link, primaryButtonProps, secondaryButtonProps, }: EmptyStateProps) => ReactElement;
export {};
