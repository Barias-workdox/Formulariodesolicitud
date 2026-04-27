import type { ReactElement } from 'react';

import { StyledDialogBody } from './styled-components';

import type { DynamicDialogBodyProps } from '../dynamic-dialog.interfaces';

/**
 * Body component for the DynamicDialog
 */
export const DynamicDialogBody = ({
  dataTestId = 'dynamic-dialog-body',
  children,
  className,
  padding,
}: DynamicDialogBodyProps): ReactElement => {
  return (
    <StyledDialogBody
      data-testid={dataTestId}
      className={className}
      $padding={padding}
    >
      {children}
    </StyledDialogBody>
  );
};
