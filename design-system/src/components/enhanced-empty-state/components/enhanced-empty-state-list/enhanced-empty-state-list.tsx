import type { ReactNode } from 'react';

import { StyledList } from './enhanced-empty-state-list.styles';

export interface EnhancedEmptyStateListProps {
  children: ReactNode;
}

/**
 * A component to enhance the empty state list.
 */
export const EnhancedEmptyStateList = ({ children }: EnhancedEmptyStateListProps): JSX.Element => {
  return <StyledList>{children}</StyledList>;
};
