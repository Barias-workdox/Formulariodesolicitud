import type { ReactElement, ReactNode } from 'react';

import { CheckmarkFilled } from '@carbon/icons-react';

import { Text } from '@components/text';
import { useCss } from '@components/utils/hooks/use-css';

import { StyledListItem, styles } from './enhanced-empty-state-list-item.styles';

export interface EnhancedEmptyStateListItemProps {
  children: ReactNode;
}

/**
 * A component to enhance the empty state list item.
 */
export const EnhancedEmptyStateListItem = ({
  children,
}: EnhancedEmptyStateListItemProps): ReactElement => {
  const { iconStyles, theme } = useCss(styles);

  return (
    <StyledListItem>
      <CheckmarkFilled
        color={theme.colors.nature}
        className={iconStyles}
      />
      <Text
        variant="bodySmall"
        color={theme.colors.neutralSubdued}
        margin={0}
        $style={styles.textStyles(theme)}
      >
        {children}
      </Text>
    </StyledListItem>
  );
};
