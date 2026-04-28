import { ReactElement, ReactNode } from 'react';
import { LinkProps } from 'react-router-dom';
export interface EnhancedEmptyStateLinkProps extends Omit<LinkProps, 'className' | 'style'> {
    dataTestId?: string;
    children: ReactNode;
}
/**
 * A component to enhance the empty state link.
 */
export declare const EnhancedEmptyStateLink: ({ dataTestId, children, ...others }: EnhancedEmptyStateLinkProps) => ReactElement;
