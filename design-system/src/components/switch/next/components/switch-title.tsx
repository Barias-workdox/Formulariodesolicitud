import type { ReactElement } from 'react';

import { Text } from '../../../text';

import type { SwitchTitleProps } from '../switch.interface';

/**
 * SwitchTitle component that renders the title text for a switch component.
 * Handles proper styling, accessibility, and disabled state.
 */
export const SwitchTitle = ({
  title,
  variant = '16px',
  disabled = false,
}: SwitchTitleProps): ReactElement | null => {
  return (
    <Text
      variant={variant === '14px' ? 'bodySmall' : 'body'}
      margin={0}
      color={disabled ? 'neutralDepressed' : 'neutralStrong'}
    >
      {title}
    </Text>
  );
};
