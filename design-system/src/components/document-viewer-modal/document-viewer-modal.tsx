import { ChevronLeft, Close } from '@carbon/icons-react';
import { Modal, ModalBody, ModalHeader } from 'baseui/modal';

import { DocumentViewer } from '@components/document-viewer/document-viewer';

import { IconButton } from '../button';
import { Text } from '../text';
import { useCss } from '../utils/hooks/use-css';

import { documentViewerModalStyles, modalStyledOverrides } from './document-viewer-modal.styles';

import type { DocumentViewerType } from '@webdoxclm/document-viewer-front';
import type { ModalProps } from 'baseui/modal';

export interface DocumentViewerModalProps extends ModalProps {
  dataTestId?: string;
  documentName: string;
  /**
   * it contains the preview url of the document to be displayed in an iframe
   *
   * @deprecated instead use attachmentUrl
   */
  documentUrl?: string;
  /**
   * it contains the file url of the document to be displayed
   * it is used to be consumed from the new document viewer replacing the old documentUrl
   */
  attachmentUrl?: string;

  isLoading: boolean;
  /**
   * Document viewer props
   */
  kind?: DocumentViewerType;
  pageNumber?: number;
}

/**
 * Stylized full-screen modal used to view a document
 *
 * The header shows the name of the document and the back and close buttons
 */
export const DocumentViewerModal = ({
  dataTestId = 'document-viewer-modal',
  isOpen,
  onClose,
  documentName,
  documentUrl,
  attachmentUrl,
  isLoading,
  pageNumber,
  kind,
}: DocumentViewerModalProps): JSX.Element => {
  const { documentNameWrapper, theme } = useCss(documentViewerModalStyles);

  return (
    <Modal
      size="full"
      isOpen={isOpen}
      autoFocus={false}
      overrides={modalStyledOverrides()}
    >
      <ModalHeader $style={documentViewerModalStyles.modalHeaderStyles(theme)}>
        <div className={documentNameWrapper}>
          <IconButton
            data-testid={`${dataTestId}__back-button`}
            aria-label="BackButton"
            size="32px"
            onClick={(): unknown => onClose({ closeSource: 'backdrop' })}
          >
            <ChevronLeft
              size={20}
              color={theme.colors.neutralSubdued}
            />
          </IconButton>
          <Text
            $style={documentViewerModalStyles.documentNameStyles(theme)}
            variant="bodySmall"
            color="neutralSubdued"
          >
            {documentName}
          </Text>
        </div>
        <IconButton
          data-testid={`${dataTestId}__close-button`}
          aria-label="CloseButton"
          size="32px"
          onClick={(): unknown => onClose({ closeSource: 'closeButton' })}
        >
          <Close
            size={20}
            color={theme.colors.neutralSubdued}
          />
        </IconButton>
      </ModalHeader>
      <ModalBody $style={documentViewerModalStyles.modalBodyStyles(theme)}>
        <DocumentViewer
          url={documentUrl}
          attachmentUrl={attachmentUrl}
          isLoading={isLoading}
          kind={kind}
          pageNumber={pageNumber}
        />
      </ModalBody>
    </Modal>
  );
};
