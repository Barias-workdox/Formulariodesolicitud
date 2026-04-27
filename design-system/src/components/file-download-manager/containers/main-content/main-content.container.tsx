import { useRef, type ReactNode } from 'react';

import { FileDownloadManagerDragContext } from '@components/file-download-manager/contexts/file-download-manager-drag.context';
import { useFileDownloadManagerContext } from '@components/file-download-manager/hooks/use-file-download-manager-context';
import { useDraggableElement } from '@hooks/use-draggable-element.hook';

import { StyledMainContentContainer } from './main-content.container.styles';

interface FileDownloadManagerMainContentContainerProps {
  children: ReactNode;
}

/** FileDownloadManagerMainContentContainer component */
export const FileDownloadManagerMainContentContainer = ({
  children,
}: FileDownloadManagerMainContentContainerProps): JSX.Element => {
  const {
    margin = 0,
    position = 'BOTTOM',
    isDraggable = false,
    status,
  } = useFileDownloadManagerContext();

  const innerRef = useRef<HTMLDivElement>(null);

  const { handlePointerDown } = useDraggableElement({
    elementRef: isDraggable ? innerRef : null,
    margin,
    direction: 'horizontal',
  });

  return (
    <FileDownloadManagerDragContext.Provider value={{ onPointerDown: handlePointerDown }}>
      <StyledMainContentContainer
        $margin={`${margin}px`}
        $position={position}
        data-testid="file-download-manager--main-content-container"
        ref={innerRef}
        role={status === 'error' ? 'alert' : 'status'}
        aria-live={status === 'error' ? 'assertive' : 'polite'}
      >
        {children}
      </StyledMainContentContainer>
    </FileDownloadManagerDragContext.Provider>
  );
};
