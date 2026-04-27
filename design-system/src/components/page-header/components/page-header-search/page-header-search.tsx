import { useState } from 'react';
import type { ReactElement } from 'react';

import { SuggestionInput } from '@components/suggestion-input';
import { noop } from '@utils/noop';

import { SearchIconButtonWithModal } from '../search-icon-button-with-modal';

import { DesktopStyledWrapper, MobileStyledWrapper } from './page-header-search.styles';

import type { SuggestionInputProps } from '../../../suggestion-input';

export type PageHeaderSearchProps<T> = SuggestionInputProps<T>;

/**
 * `MobilePageHeaderSearch` is a component that renders a search icon button with a modal for mobile view.
 */
export function MobilePageHeaderSearch<T>(props: SuggestionInputProps<T>): ReactElement {
  return (
    <MobileStyledWrapper>
      <SearchIconButtonWithModal {...props} />
    </MobileStyledWrapper>
  );
}

/**
 * `DesktopPageHeaderSearch` is a component that renders a search input for desktop view.
 */
export function DesktopPageHeaderSearch<T>({
  onIsOpenChange = noop,
  ...props
}: SuggestionInputProps<T>): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Handles the change of the `isOpen` state.
   */
  const handleIsOpenChange = (nextIsOpen: boolean): void => {
    setIsOpen(nextIsOpen);
    onIsOpenChange(nextIsOpen);
  };

  return (
    <DesktopStyledWrapper $isOpen={isOpen}>
      <SuggestionInput
        {...props}
        delayRenderContent={250}
        onIsOpenChange={handleIsOpenChange}
      />
    </DesktopStyledWrapper>
  );
}

/**
 * `PageHeaderSearch` is a component that conditionally renders either a mobile or
 * desktop version of the search input based on toolbar visibility.
 */
export function PageHeaderSearch<T>(props: SuggestionInputProps<T>): ReactElement {
  return (
    <>
      <MobilePageHeaderSearch {...props} />
      <DesktopPageHeaderSearch {...props} />
    </>
  );
}
