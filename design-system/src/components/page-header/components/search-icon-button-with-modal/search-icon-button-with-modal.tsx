import { useState } from 'react';

import { Search } from '@carbon/icons-react';

import { IconButton } from '@components/button';
import { Modal } from '@components/modal';
import { SuggestionInput } from '@components/suggestion-input';
import { useCss } from '@components/utils/hooks/use-css';
import { COMMON_HEIGHT_32, COMMON_ICON_SIZE_16 } from '@constants/common.constants';

import { customModalOverrides } from './search-icon-button-with-modal.overrides';

import type { SuggestionInputProps } from '@components/suggestion-input';

export type SearchIconButtonWithModalProps<T> = SuggestionInputProps<T>;

/**
 * `SearchIconButtonWithModal` is a component that displays an icon button.
 * When clicked, it opens a modal containing a search input.
 */
export function SearchIconButtonWithModal<T>({
  'data-testid': dataTestId = 'page-header__search',
  onSelect,
  ...restProps
}: SearchIconButtonWithModalProps<T>): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useCss();

  /** Callback to close the modal. */
  const handleClose = (): void => {
    setIsOpen(false);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        autoFocus
        overrides={customModalOverrides}
      >
        <SuggestionInput
          {...restProps}
          data-testid={`${dataTestId}__input`}
          onSelect={(value) => {
            onSelect(value);
            setIsOpen(false);
          }}
        />
      </Modal>
      <IconButton
        data-testid={`${dataTestId}--icon-button`}
        size={COMMON_HEIGHT_32}
        kind="tertiary"
        onClick={() => setIsOpen(true)}
      >
        <Search
          height={COMMON_ICON_SIZE_16}
          color={theme.colors.neutral}
        />
      </IconButton>
    </>
  );
}
