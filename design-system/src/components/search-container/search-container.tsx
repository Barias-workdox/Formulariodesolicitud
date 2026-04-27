import type { PropsWithChildren, ReactElement } from 'react';

import { SearchInput } from './components/search-input';
import { StyledBody, StyledContainer } from './search-container.styles';

import type { SearchInputProps } from './components/search-input';
import type { StyleObject } from 'styletron-react';

export type SearchContainerProps = SearchInputProps &
  PropsWithChildren<{
    minWidth?: StyleObject['minWidth'];
    isFiltrable?: boolean;
    maxWidth?: StyleObject['maxWidth'];
    maxHeight?: StyleObject['maxHeight'];
  }>;

/**
 * A container component that displays a search input at the top and
 * renders its children in a scrollable body area.
 */
export const SearchContainer = ({
  dataTestId,
  children,
  searchValue,
  searchPlaceholder,
  minWidth,
  maxWidth,
  maxHeight,
  isFiltrable = true,
  autoFocus = true,
  onSearchChange: onChange,
}: SearchContainerProps): ReactElement => {
  return (
    <StyledContainer
      $minWidth={minWidth}
      $maxWidth={maxWidth}
      $maxHeight={maxHeight}
    >
      {isFiltrable && (
        <SearchInput
          dataTestId={`${dataTestId}--search-input`}
          autoFocus={autoFocus}
          searchValue={searchValue}
          searchPlaceholder={searchPlaceholder}
          onSearchChange={onChange}
        />
      )}
      <StyledBody>{children}</StyledBody>
    </StyledContainer>
  );
};
