import { ReactElement, ReactNode } from 'react';
import { CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon';
import { ButtonProps } from '../../button/button.interfaces';
import { CommonHeight } from '../../../constants/common.constants';
import { DesignSystemColorType } from '../../../themes';
type EmptyStateButtonProps = Pick<ButtonProps, 'onClick' | 'data-testid'> & {
    text: string;
    startEnhancer?: ButtonProps['startEnhancer'];
};
/**
 * Props for the EmptyState component.
 *
 * This component displays an empty state message with an icon, title, description,
 * optional link, and action buttons.
 */
export interface EmptyStateProps {
    /** The icon component to be rendered in the background. */
    Icon?: CarbonIconType;
    /** The size of the background icon. */
    size?: CommonHeight;
    /** The color of the icon. */
    iconColor?: DesignSystemColorType;
    /** The background color of the icon. */
    backgroundColor?: DesignSystemColorType;
    /** The title text to display in the empty state. */
    title?: ReactNode;
    /** The description text to display below the title. */
    description?: ReactNode;
    /** Optional link configuration with text and href. */
    link?: {
        text: string;
        href: string;
    };
    /** Configuration for the primary action button. */
    primaryButtonProps?: EmptyStateButtonProps;
    /** Configuration for the secondary action button. */
    secondaryButtonProps?: EmptyStateButtonProps;
    /** The data test id for the empty state. */
    dataTestId?: string;
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
export declare const EmptyState: ({ title, description, link, primaryButtonProps, secondaryButtonProps, Icon, size, iconColor, backgroundColor, dataTestId, }: EmptyStateProps) => ReactElement;
export {};
