import type { StyleOverrideProps } from '@themes/theme.interfaces';
import type { InputOverrides } from 'baseui/input';

/**
 * Style overrides for the input used in the search input component.
 */
export const inputOverrides: InputOverrides = {
  Root: {
    style: ({ $isFocused, $isHovered, $theme }: StyleOverrideProps) => ({
      borderRadius: 0,
      outlineOffset: $isFocused ? '-2px' : '-1px',
      borderBottom: `1px solid ${$theme.colors.neutralWashed}`,
      ...($isFocused ? { outlineWidth: '2px' } : { outlineWidth: $isHovered ? '1px' : 0 }),
    }),
  },
  Input: {
    style: ({ $theme }: StyleOverrideProps) => ({
      padding: 0,
      height: '40px',
      fontSize: '14px',
      '::placeholder': {
        color: $theme.colors.neutralDepressed,
      },
    }),
  },
  StartEnhancer: {
    style: { padding: 0, border: '1px solid transparent' },
  },
  EndEnhancer: {
    style: { padding: 0, border: '1px solid transparent' },
  },
};
