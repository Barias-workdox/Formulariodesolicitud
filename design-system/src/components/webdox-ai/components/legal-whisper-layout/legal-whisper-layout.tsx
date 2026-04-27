import type { PropsWithChildren, ReactNode } from 'react';

import {
  StyledChatContainer,
  StyledContainer,
  StyledLeftColumnContainer,
  StyledRightColumnContainer,
} from './styled-components';

export type LegalWhisperLayoutProps = PropsWithChildren<{
  isExpanded?: boolean;
  showLeftColumn?: boolean;
  showRightColumn?: boolean;
  leftColumnContent?: ReactNode;
  rightColumnContent?: ReactNode;
}>;

/**
 * LegalWhisperLayout is a layout component for the Legal Whisper feature.
 * It is used to wrap the content of the Legal Whisper chat interface.
 * It provides a styled container for the chat messages and other elements.
 */
export const LegalWhisperLayout = ({
  children,
  isExpanded = false,
  leftColumnContent,
  rightColumnContent,
  showRightColumn = false,
  showLeftColumn = false,
}: LegalWhisperLayoutProps): JSX.Element => {
  const shouldShowRightColumn = showRightColumn && isExpanded;
  const shouldShowLeftColumn = showLeftColumn && isExpanded;

  return (
    <StyledContainer>
      <StyledLeftColumnContainer $isOpen={shouldShowLeftColumn}>
        {leftColumnContent}
      </StyledLeftColumnContainer>
      <StyledChatContainer $isExpanded={isExpanded}>{children}</StyledChatContainer>
      <StyledRightColumnContainer $isOpen={shouldShowRightColumn}>
        {rightColumnContent}
      </StyledRightColumnContainer>
    </StyledContainer>
  );
};
