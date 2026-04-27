import type { PropsWithChildren, ReactElement } from 'react';

import { Text } from '@components/text';

import { StyledLi } from './suggestion-list.styled';

export type SuggestionListItemProps = PropsWithChildren<{
  'data-testid': string;
  onClick(): void;
}>;

/**
 * Reusable styled message list item. Has a truncated text
 * and an optional artwork on the left
 */
export const SuggestionListItem = ({
  'data-testid': dataTestId,
  children,
  onClick,
}: SuggestionListItemProps): ReactElement => {
  return (
    <StyledLi
      tabIndex={0}
      data-testid={`${dataTestId}-wrapper`}
      onClick={onClick}
    >
      <Text
        color="inherit"
        margin="0"
        variant="bodySmall"
        $style={{ textDecoration: 'underline', cursor: 'pointer' }}
      >
        {children}
      </Text>
    </StyledLi>
  );
};
