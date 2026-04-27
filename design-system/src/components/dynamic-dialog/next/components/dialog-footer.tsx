import type { ReactElement } from 'react';

import { StyledDialogFooter } from './styled-components';

import type { DynamicDialogFooterProps } from '../dynamic-dialog.interfaces';

/**
 * Footer component for the DynamicDialog
 */
export const DynamicDialogFooter = ({
  dataTestId = 'dynamic-dialog-footer',
  children,
  className,
  visible = true,
}: DynamicDialogFooterProps): ReactElement | null => {
  if (!visible) {
    return null;
  }

  return (
    <StyledDialogFooter
      data-testid={dataTestId}
      className={className}
    >
      {children}
    </StyledDialogFooter>
  );
};
