import type { InputProps } from '@components/input/next/input.interfaces';

/**
 * Get the input overrides for the input selector component.
 */
export const getInputOverrides = ({
  isOpen,
  handleOpen,
}: {
  isOpen: boolean;
  handleOpen(): void;
}): InputProps['overrides'] => ({
  Root: {
    props: {
      ...(isOpen ? { $isFocused: true } : {}),
      onClick: handleOpen,
    },
    style: {
      cursor: 'pointer',
    },
  },
  Input: {
    style: {
      pointerEvents: 'none',
    },
  },
});
