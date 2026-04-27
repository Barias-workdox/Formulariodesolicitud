import { useCallback, useMemo } from 'react';

import { ChevronUp, ChevronDown } from '@carbon/icons-react';

import { Input } from '@components/input/next';

import { getInputOverrides } from './input-selector.overrides';

import type { InputProps } from '@components/input/next';
import type { WithTestId, WithZIndex } from '@interfaces/common.interfaces';

export interface InputSelectorProps extends WithZIndex, WithTestId {
  value: string;
  isOpen: boolean;
  handleOpen(): void;
}

/**
 * Input selector component to use with a popover.
 */
export const InputSelector = ({
  value,
  isOpen,
  handleOpen,
}: InputSelectorProps): React.JSX.Element => {
  const inputOverrides = useMemo(
    () => getInputOverrides({ isOpen, handleOpen }),
    [isOpen, handleOpen],
  );

  /**
   * Handles the key down event of the input
   */
  const handleKeyDown: InputProps['onKeyDown'] = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      if (e.key === 'Enter') {
        handleOpen();
      }
    },
    [handleOpen],
  );

  return (
    <Input
      size="sm"
      endEnhancer={isOpen ? <ChevronUp /> : <ChevronDown />}
      kind="white"
      width="100%"
      clearable={false}
      value={value}
      onKeyDown={handleKeyDown}
      overrides={inputOverrides}
    />
  );
};
