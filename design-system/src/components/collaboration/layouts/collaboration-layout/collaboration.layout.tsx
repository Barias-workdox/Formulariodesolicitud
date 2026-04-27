import type { ReactElement, ReactNode } from 'react';

import { useCss } from '@components/utils/hooks/use-css';

import { styles } from './collaboration.layout.styles';

export interface CollaborationLayoutProps {
  Header: ReactNode;
  Banner: ReactNode;
  children: ReactNode;
  showBanner: boolean;
}

/** Layout to use in the collaboration organisms */
export const CollaborationLayout = ({
  Header,
  Banner,
  children,
  showBanner,
}: CollaborationLayoutProps): ReactElement => {
  const { layoutStyles, headerStyles, contentStyles } = useCss(styles, { showBanner });

  return (
    <div className={layoutStyles}>
      <div className={headerStyles}>{Header}</div>
      {showBanner && Banner}
      <div className={contentStyles}>{children}</div>
    </div>
  );
};
