import type { ReactElement } from 'react';

import { Text } from '../../../text';

import type { SwitchDescriptionProps } from '../switch.interface';

/**
 * SwitchDescription component that renders the description text for a switch component.
 * Handles proper styling, accessibility, disabled state, and ARIA described by functionality.
 */
export const SwitchDescription = ({
  description,
  variant = '16px',
  disabled = false,
  ariaDescribedBy,
}: SwitchDescriptionProps): ReactElement | null => {
  return (
    <Text
      variant={variant === '14px' ? 'microCopy' : 'bodySmall'}
      margin={0}
      color={disabled ? 'neutralDepressed' : 'neutral'}
      overrides={{ Block: { props: { id: ariaDescribedBy } } }}
    >
      {description}
    </Text>
  );
};
