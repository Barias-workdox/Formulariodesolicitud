import type { ButtonProps } from '@components/button';

/**
 * Overrides for Header component.
 */
export const getButtonAriaLabelOverride = (label: string): ButtonProps['overrides'] => ({
  BaseButton: {
    props: {
      'aria-label': label,
    },
  },
});
