import type { ReactElement, ReactNode } from 'react';

import { Link } from 'react-router-dom';

import { useCss } from '@components/utils/hooks/use-css';

import { styles } from './enhanced-empty-state-link.styles';

import type { LinkProps } from 'react-router-dom';

export interface EnhancedEmptyStateLinkProps extends Omit<LinkProps, 'className' | 'style'> {
  dataTestId?: string;
  children: ReactNode;
}

/**
 * A component to enhance the empty state link.
 */
export const EnhancedEmptyStateLink = ({
  dataTestId = 'enhanced-empty-state__link',
  children,
  ...others
}: EnhancedEmptyStateLinkProps): ReactElement => {
  const { linkStyles } = useCss(styles);

  return (
    <Link
      data-testid={dataTestId}
      {...others}
      className={linkStyles}
    >
      {children}
    </Link>
  );
};
