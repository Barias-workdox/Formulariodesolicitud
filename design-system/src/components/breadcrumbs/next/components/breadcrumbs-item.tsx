import type { ReactNode } from 'react';

import { Text } from '@components/text';
import { useCss } from '@components/utils/hooks/use-css';

export interface BreadcrumbsItemProps {
  dataTestId?: string;
  children: ReactNode;
  label: string;
  isLast?: boolean;
  isFirst?: boolean;
  onClick?(): void;
}

/**
 * A component to represent a breadcrumb item.
 */
export const BreadcrumbsItem = ({
  dataTestId,
  children,
  isLast = false,
  isFirst = false,
  onClick,
  ...rest
}: BreadcrumbsItemProps): JSX.Element => {
  const { theme } = useCss();
  const styles = {
    cursor: onClick ? 'pointer' : 'default',
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <Text
      data-testid={dataTestId}
      variant="bodySmall"
      height="24px"
      margin={0}
      onClick={onClick}
      $style={styles}
      {...(isFirst ? {} : { paddingLeft: theme.spacing.spacing2xs })}
      {...(isLast ? { fontWeight: '500' } : { marginRight: theme.spacing.spacing2xs })}
      {...rest}
    >
      {children}
    </Text>
  );
};
