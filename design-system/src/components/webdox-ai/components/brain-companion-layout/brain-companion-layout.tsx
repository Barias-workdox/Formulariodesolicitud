import type { PropsWithChildren } from 'react';

import { StyledChatContainer, StyledContainer } from './styled-components';

type BrainCompanionLayoutProps = PropsWithChildren<{
  isExpanded?: boolean;
}>;

/**
 * BrainCompanionLayout is a layout component for the Brain Companion feature.
 * It is used to wrap the content of the Brain Companion chat interface.
 * It provides a styled container for the chat messages and other elements.
 */
export const BrainCompanionLayout = ({
  children,
  isExpanded = false,
}: BrainCompanionLayoutProps): JSX.Element => {
  return (
    <StyledContainer>
      <StyledChatContainer $isExpanded={isExpanded}>{children}</StyledChatContainer>
    </StyledContainer>
  );
};
