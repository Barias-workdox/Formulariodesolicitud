import type { ForwardedRef, ReactElement, ReactNode } from 'react';

import { Close } from '@carbon/icons-react';

import { IconButton } from '@components/button';
import { CollapsibleContent } from '@components/collapsible-content/collapsible-content';
import { ArrowIcon } from '@components/select/next/components/arrow-icon';

import {
  FileUploadManagerTitle,
  type FileUploadManagerTitleProps,
} from '../file-upload-manager-title';

import { StyledActionsWrapper, StyledRoot } from './file-upload-manager-root.styles';

import type { SharedProps } from '@components/collapsible-content/collapsible-content.interfaces';
import type { ManagerPosition } from '@components/file-upload-manager/contexts/file-uploader-manager.context';
import type { WithTestId } from '@interfaces/common.interfaces';

interface ActionIconsProps {
  position: ManagerPosition;
  onCloseUpload?(): void;
}

export interface FileUploadManagerRootProps
  extends WithTestId<FileUploadManagerTitleProps>, ActionIconsProps {
  initialState: boolean;
  children: ReactNode;
  rootRef: ForwardedRef<HTMLDivElement>;
  headerRef: ForwardedRef<HTMLDivElement>;
  margin?: number;
}

/**
 * Action icons for the file upload manager.
 */
const ActionIcons = ({
  $isOpen,
  $onToggle,
  onCloseUpload,
  position,
}: SharedProps & ActionIconsProps): ReactElement => {
  // The toggle button should be on the opposite side of the $isOpen prop when the position is 'BOTTOM'
  const isOpen = position == 'TOP' ? $isOpen : !$isOpen;

  return (
    <StyledActionsWrapper>
      <IconButton
        data-testid="toggle-button"
        size="24px"
        onClick={$onToggle}
      >
        <ArrowIcon isOpen={isOpen} />
      </IconButton>
      {onCloseUpload && (
        <IconButton
          data-testid="close-button"
          size="24px"
          onClick={onCloseUpload}
        >
          <Close />
        </IconButton>
      )}
    </StyledActionsWrapper>
  );
};

/**
 * A collapsible content component with a title and body.
 */
export const FileUploadManagerRoot = ({
  'data-testid': dataTestId,
  initialState,
  children,
  files,
  status,
  position,
  headerRef,
  rootRef,
  margin,
  onCloseUpload,
}: FileUploadManagerRootProps): ReactElement => {
  return (
    <CollapsibleContent
      initialState={initialState}
      title={
        <FileUploadManagerTitle
          files={files}
          status={status}
        />
      }
      overrides={{
        Root: {
          component: StyledRoot,
          props: {
            'data-testid': dataTestId,
            ref: rootRef,
            $position: position,
            $margin: `${margin}px`,
          },
        },
        Header: {
          props: { ref: headerRef },
        },
        ActionIcons: {
          component: ActionIcons,
          props: { onCloseUpload, position },
        },
      }}
    >
      {children}
    </CollapsibleContent>
  );
};
