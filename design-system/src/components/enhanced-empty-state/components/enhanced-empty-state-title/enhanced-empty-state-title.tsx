import type { ReactElement, ReactNode } from 'react';

import { Text } from '@components/text';
import { useCss } from '@components/utils/hooks/use-css';

import { styles } from './enhanced-empty-state-title.styles';

export interface EnhancedEmptyStateTitleProps {
  children: ReactNode;
}

/**
 * A component to render the title for an enhanced empty state.
 */
export const EnhancedEmptyStateTitle = ({
  children,
}: EnhancedEmptyStateTitleProps): ReactElement => {
  const { theme } = useCss();

  return (
    <Text
      variant="h2"
      fontWeight="500"
      $style={styles.textStyles(theme)}
    >
      {children}
    </Text>
  );
};
