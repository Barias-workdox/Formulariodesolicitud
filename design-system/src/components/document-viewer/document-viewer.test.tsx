import { render, renderUseTranslation, screen } from '@test/test-utils';

import { DocumentViewer } from './document-viewer';

import type { DocumentViewerProps } from './document-viewer';
import type { RenderType } from '@test/test-utils';

const mockDocumentUrl = 'example.com';

const defaultProps: DocumentViewerProps = { url: mockDocumentUrl };

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<DocumentViewerProps>): RenderType => {
  return render(
    <DocumentViewer
      {...defaultProps}
      {...props}
    />,
  );
};

const { t } = renderUseTranslation();

describe('DocumentViewer - tests', () => {
  it('should render the component correctly', () => {
    renderComponent();

    const documentViewer = screen.getByTitle('Document viewer');

    expect(documentViewer).toBeInTheDocument();
    expect(documentViewer).toHaveAttribute('src', mockDocumentUrl);
  });

  it('should render a default message when the document url is wrong', () => {
    renderComponent({ url: undefined });

    expect(screen.queryByTitle('Document viewer')).not.toBeInTheDocument();
    expect(screen.getByText(t('documentViewerModal.previewNotAvailable'))).toBeInTheDocument();
  });

  it('should render correctly when is loading', () => {
    renderComponent({ isLoading: true });

    expect(screen.queryByTitle('Document viewer')).not.toBeInTheDocument();
    expect(
      screen.queryByText(t('documentViewerModal.previewNotAvailable')),
    ).not.toBeInTheDocument();
  });
});
