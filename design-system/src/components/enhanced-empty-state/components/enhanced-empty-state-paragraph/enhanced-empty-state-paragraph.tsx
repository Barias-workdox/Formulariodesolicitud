import type { ReactElement, ReactNode } from 'react';

import { Text } from '@components/text';
import { useCss } from '@components/utils/hooks/use-css';

import { styles } from './enhanced-empty-state-paragraph.styles';

export interface EnhancedEmptyStateParagraphProps {
  children: ReactNode;
}

/**
 * A component to enhance the empty state paragraph.
 */
export const EnhancedEmptyStateParagraph = ({
  children,
}: EnhancedEmptyStateParagraphProps): ReactElement => {
  const { theme } = useCss();

  return (
    <Text
      variant="bodySmall"
      color={theme.colors.neutralSubdued}
      margin={0}
      $style={styles.textStyles(theme)}
    >
      {children}
    </Text>
  );
};
