import type { PropsWithChildren } from 'react';

import { Layer } from 'baseui/layer';

import { ResizableContainer } from './components/resizable-container';

import type { ResizableContainerProps } from './components/resizable-container';

export interface DynamicDialogProps extends PropsWithChildren<ResizableContainerProps> {
  isOpen?: boolean;
}

/**
 * A component that renders a page header.
 */
export const DynamicDialog = ({ children, isOpen, ...rest }: DynamicDialogProps): JSX.Element => {
  return (
    isOpen && (
      <Layer>
        <ResizableContainer {...rest}>{children}</ResizableContainer>
      </Layer>
    )
  );
};
