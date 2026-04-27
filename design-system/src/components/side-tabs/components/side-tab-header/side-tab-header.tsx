import type { ReactElement, ReactNode } from 'react';

import { Close } from '@carbon/icons-react';

import { IconButton } from '@components/button';
import { useCss } from '@components/utils/hooks/use-css';

import { styles } from './side-tab-header.styles';

export type SideTabHeaderProps = {
  'data-testid'?: string;
  children: ReactNode;
  /** If is undefined the close button will be hidden */
  onClose?(): void;
};

/** Reusable component that renders a heading for a side tab */
export const SideTabHeader = ({
  'data-testid': dataTestId,
  children,
  onClose,
}: SideTabHeaderProps): ReactElement => {
  const { tabHeaderStyles } = useCss(styles);

  return (
    <div className={tabHeaderStyles}>
      {children}
      {onClose !== undefined && (
        <IconButton
          data-testid={`${dataTestId}--close`}
          size="32px"
          onClick={onClose}
        >
          <Close />
        </IconButton>
      )}
    </div>
  );
};
