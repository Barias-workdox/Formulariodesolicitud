import type { ReactNode } from 'react';

import { Modal } from 'baseui/modal';

import { FullScreenBody, FullScreenLayout } from '@components/layouts/full-screen-layout';
import { useCss } from '@components/utils/hooks/use-css';

import { getModalOverrides } from './brain-viewer-modal.overrides';
import { BrainViewerModalHeader } from './components/brain-viewer-modal-header';

import type { CopyButtonTexts } from './interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';

export interface BrainViewerModalProps extends WithTestId {
  isOpen: boolean;
  children: ReactNode;
  title: string;
  clipboardItem?: ClipboardItem | string;
  copyButtonTexts?: CopyButtonTexts;
  zIndex?: number;
  onClose(): void;
}

/** Stateless Modal to display the table viewer received as children. */
export const BrainViewerModal = ({
  'data-testid': dataTestId,
  title,
  isOpen,
  children,
  clipboardItem,
  copyButtonTexts = {},
  zIndex,
  onClose,
}: BrainViewerModalProps): JSX.Element => {
  const { theme } = useCss();

  return (
    <Modal
      autoFocus={false}
      isOpen={isOpen}
      onClose={onClose}
      size="full"
      overrides={getModalOverrides({ zIndex })}
    >
      <FullScreenLayout>
        <BrainViewerModalHeader
          onClose={onClose}
          title={title}
          data-testid={`${dataTestId}__modal-header`}
          clipboardItem={clipboardItem}
          copyButtonTexts={copyButtonTexts}
          zIndex={zIndex}
        />
        <FullScreenBody
          $backgroundColor="bgBase"
          $padding={theme.spacing.spacingMd}
          $style={{
            overflow: 'hidden',
          }}
        >
          {children}
        </FullScreenBody>
      </FullScreenLayout>
    </Modal>
  );
};
