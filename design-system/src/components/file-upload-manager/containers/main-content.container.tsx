import { type ReactElement, useEffect, useRef } from 'react';

import { useDraggableElement } from '@hooks/use-draggable-element.hook';

import { FileUploadManagerRoot } from '../components/file-upload-manager-root';
import { useFileUploadManagerContext } from '../hooks/use-file-uploader-manager-context';

import { FooterContainer } from './footer.container';
import { TabsContentContainer } from './tabs-content.container';

import type { WithTestId } from '@interfaces/common.interfaces';

/** Container for the tabs content of the file upload manager. */
export const MainContentContainer = ({ 'data-testid': dataTestId }: WithTestId): ReactElement => {
  const rootRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const {
    files,
    status,
    showContentHelper,
    contentHelper,
    position,
    margin,
    isDraggable,
    onCloseUpload,
  } = useFileUploadManagerContext();

  const { handlePointerDown } = useDraggableElement({
    elementRef: rootRef,
    direction: 'horizontal',
    margin,
  });

  useEffect(() => {
    const headerElement = headerRef.current;

    if (headerElement && isDraggable) {
      headerElement.addEventListener('pointerdown', handlePointerDown);

      return (): void => {
        headerElement.removeEventListener('pointerdown', handlePointerDown);
      };
    }
  }, [isDraggable, handlePointerDown]);

  return (
    <FileUploadManagerRoot
      data-testid={dataTestId}
      initialState={true}
      files={files}
      status={status}
      onCloseUpload={onCloseUpload}
      rootRef={rootRef}
      headerRef={headerRef}
      position={position}
      margin={margin}
    >
      {showContentHelper ? (
        contentHelper
      ) : (
        <>
          <TabsContentContainer dataTestId={`${dataTestId}__tabs-content`} />
          <FooterContainer dataTestId={`${dataTestId}__footer`} />
        </>
      )}
    </FileUploadManagerRoot>
  );
};
