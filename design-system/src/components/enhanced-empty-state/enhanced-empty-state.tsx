import type { ReactElement, ReactNode } from 'react';

import { EnhancedEmptyStateContent } from './components/enhanced-empty-state-content';
import { EnhancedEmptyStateLink } from './components/enhanced-empty-state-link';
import { EnhancedEmptyStateList } from './components/enhanced-empty-state-list';
import { EnhancedEmptyStateListItem } from './components/enhanced-empty-state-list-item';
import { EnhancedEmptyStateParagraph } from './components/enhanced-empty-state-paragraph';
import { EnhancedEmptyStatePrimaryButton } from './components/enhanced-empty-state-primary-button';
import { EnhancedEmptyStateTitle } from './components/enhanced-empty-state-title';
import { StyledBody, StyledContainer, StyledImg } from './enhanced-empty-state.styles';

export interface EnhancedEmptyStateProps {
  dataTestId: string;
  imageSrc: string;
  children: ReactNode;
}

/**
 * A component to represent an enhanced empty state, typically used to display
 * a message when there is no data available.
 */
const EnhancedEmptyState = ({
  dataTestId,
  imageSrc,
  children,
}: EnhancedEmptyStateProps): ReactElement => {
  return (
    <StyledContainer>
      <StyledImg
        data-testid={`${dataTestId}--image`}
        src={imageSrc}
      />
      <StyledBody>{children}</StyledBody>
    </StyledContainer>
  );
};

EnhancedEmptyState.Title = EnhancedEmptyStateTitle;
EnhancedEmptyState.Content = EnhancedEmptyStateContent;
EnhancedEmptyState.Paragraph = EnhancedEmptyStateParagraph;
EnhancedEmptyState.List = EnhancedEmptyStateList;
EnhancedEmptyState.ListItem = EnhancedEmptyStateListItem;
EnhancedEmptyState.Link = EnhancedEmptyStateLink;
EnhancedEmptyState.PrimaryButton = EnhancedEmptyStatePrimaryButton;

export { EnhancedEmptyState };
