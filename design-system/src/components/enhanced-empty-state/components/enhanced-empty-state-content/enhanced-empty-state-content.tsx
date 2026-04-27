import type { ReactNode } from 'react';

import { StyledDiv } from './enhanced-empty-state-content.styles';

export interface EnhancedEmptyStateContentProps {
  children: ReactNode;
}

/**
 * A component to enhance the empty state content.
 */
export const EnhancedEmptyStateContent = ({
  children,
}: EnhancedEmptyStateContentProps): JSX.Element => {
  return <StyledDiv>{children}</StyledDiv>;
};
