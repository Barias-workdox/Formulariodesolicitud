import { ReactElement, ReactNode } from 'react';
export interface EnhancedEmptyStateProps {
    dataTestId: string;
    imageSrc: string;
    children: ReactNode;
}
/**
 * A component to represent an enhanced empty state, typically used to display
 * a message when there is no data available.
 */
declare const EnhancedEmptyState: {
    ({ dataTestId, imageSrc, children, }: EnhancedEmptyStateProps): ReactElement;
    Title: ({ children, }: import('./components/enhanced-empty-state-title').EnhancedEmptyStateTitleProps) => ReactElement;
    Content: ({ children, }: import('./components/enhanced-empty-state-content').EnhancedEmptyStateContentProps) => JSX.Element;
    Paragraph: ({ children, }: import('./components/enhanced-empty-state-paragraph').EnhancedEmptyStateParagraphProps) => ReactElement;
    List: ({ children }: import('./components/enhanced-empty-state-list').EnhancedEmptyStateListProps) => JSX.Element;
    ListItem: ({ children, }: import('./components/enhanced-empty-state-list-item').EnhancedEmptyStateListItemProps) => ReactElement;
    Link: ({ dataTestId, children, ...others }: import('./components/enhanced-empty-state-link').EnhancedEmptyStateLinkProps) => ReactElement;
    PrimaryButton: ({ "data-testid": dataTestId, children, onClick, startEnhancer, disabled, }: import('./components/enhanced-empty-state-primary-button').EnhancedEmptyStatePrimaryButtonProps) => ReactElement;
};
export { EnhancedEmptyState };
