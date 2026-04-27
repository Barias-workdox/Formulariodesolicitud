import type { ReactNode } from 'react';

import { Search } from '@carbon/icons-react';

import { Text } from '@components/text';
import { useCss } from '@components/utils/hooks/use-css';
import { COMMON_ICON_SIZE_16 } from '@constants/common.constants';

export interface SelectPlaceholderProps {
  isDisabled: boolean;
  placeholder: ReactNode;
}

/** Render a custom placeholder for the user-select */
export const SelectPlaceholder = ({
  isDisabled,
  placeholder,
}: SelectPlaceholderProps): JSX.Element => {
  const { theme } = useCss();

  return (
    <Text
      variant="bodySmall"
      margin={0}
      display="flex"
      alignItems="center"
      color={isDisabled ? 'neutralDepressed' : 'neutralSubdued'}
    >
      <Search
        size={COMMON_ICON_SIZE_16}
        style={{ marginRight: theme.spacing.spacingXs }}
      />{' '}
      {placeholder}
    </Text>
  );
};
