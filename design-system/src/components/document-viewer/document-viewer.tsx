import { type ReactElement, useCallback, useMemo, useState } from 'react';

import { DocumentViewer as DocumentViewerRenderer } from '@webdoxclm/document-viewer-front';

import { LoadingWrapper } from '@components/loading-wrapper';
import { Text } from '@components/text';
import { useCss } from '@components/utils/hooks/use-css';
import { useTranslation } from '@components/utils/i18n/utils';
import { useLocale } from '@contexts/locale-provider';

import { styles } from './document-viewer.styles';

import type { NativeLocaleType } from '@components/utils';
import type { DocumentViewerType } from '@webdoxclm/document-viewer-front';

export interface DocumentViewerProps {
  'data-testid'?: string;
  /**
   * it contains the preview url of the document to be displayed in an iframe
   *
   * @deprecated instead use attachmentUrl
   */
  url?: string;
  isLoading?: boolean;
  /**
   * it contains the file url of the document to be displayed
   * it is used to be consumed from the new document viewer replacing the old documentUrl
   */
  attachmentUrl?: string;
  kind?: DocumentViewerType;
  pageNumber?: number;
}

/** Component that use a iframe to render the document */
export const DocumentViewer = ({
  'data-testid': dataTestId = 'document-viewer',
  url = '',
  isLoading = false,
  kind = 'online',
  pageNumber = -1,
  attachmentUrl = '',
}: DocumentViewerProps): ReactElement => {
  const { documentStyles, containerStyles } = useCss(styles);
  const { t } = useTranslation();
  const { locale } = useLocale();
  const [isPdfError, setIsPdfError] = useState(false);

  const documentError = (!url && !attachmentUrl) || isPdfError;

  const shouldRenderLoading = isLoading;
  const shouldRenderError = !shouldRenderLoading && documentError;
  const shouldRenderDocumentViewer = !shouldRenderError && attachmentUrl && !isLoading;
  const shouldRenderIframe =
    !shouldRenderError && !shouldRenderDocumentViewer && !shouldRenderLoading && url;
  const onErrorPdfViewer = useCallback(() => {
    setIsPdfError(true);
  }, []);

  const onSuccessPdfViewer = useCallback(() => {
    setIsPdfError(false);
  }, []);

  const onFetchPdfViewer = useCallback(() => attachmentUrl, [attachmentUrl]);

  const viewerConfig = useMemo(
    () => ({
      pdfNextPage: pageNumber,
      documentViewerType: kind,
      pdfMaxWidth: 700,
      pdfVerticalScrollByDefault: true,
      showPdfDownloadControl: false,
      showPdfVerticalScrollControl: false,
      pdfMinZoomLevel: 0.015,
      onFetchPdfViewer,
      onErrorPdfViewer,
      onSuccessPdfViewer,
    }),
    [kind, onErrorPdfViewer, onFetchPdfViewer, onSuccessPdfViewer, pageNumber],
  );

  return (
    <LoadingWrapper isLoading={shouldRenderLoading}>
      <div className={containerStyles}>
        {shouldRenderError && (
          <Text
            variant="body"
            color="contentPrimary"
          >
            {t('documentViewerModal.previewNotAvailable')}
          </Text>
        )}
        {shouldRenderIframe && (
          <iframe
            data-testid={`${dataTestId}--document`}
            title="Document viewer"
            height="100%"
            src={url}
            className={documentStyles}
            width="100%"
          />
        )}
        {shouldRenderDocumentViewer && (
          <DocumentViewerRenderer
            language={locale as NativeLocaleType}
            uri={attachmentUrl}
            config={viewerConfig}
          />
        )}
      </div>
    </LoadingWrapper>
  );
};
