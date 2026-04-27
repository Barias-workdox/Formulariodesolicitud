import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { mockNegotiableDocuments, mockReadOnlyDocuments } from '../../../__mocks__/documents.mock';

import { DocumentsTab } from './documents-tab';

import type { DocumentsTabProps } from './documents-tab';
import type { RenderType } from '@test/test-utils';

const mockOnClick = testHelpers.fn();
const mockOnClose = testHelpers.fn();
const [
  {
    document: { id: mockSelectedDocumentId },
  },
] = mockNegotiableDocuments;
const baseDataTestId = 'documents-tab';

const defaultProps: DocumentsTabProps = {
  'data-testid': baseDataTestId,
  negotiableDocuments: mockNegotiableDocuments,
  readOnlyDocuments: mockReadOnlyDocuments,
  selectedDocumentId: mockSelectedDocumentId,
  onClick: mockOnClick,
  onClose: mockOnClose,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<DocumentsTabProps>): RenderType => {
  return render(
    <DocumentsTab
      {...defaultProps}
      {...props}
    />,
  );
};

describe('DocumentsTab - tests', () => {
  const { t } = renderUseTranslation();

  it('should render the component correctly', () => {
    renderComponent();

    expect(
      screen.getByText(t('contractNegotiationCollaboration.documentsTab.documents')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('contractNegotiationCollaboration.documentsTab.negotiable')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('contractNegotiationCollaboration.documentsTab.background')),
    ).toBeInTheDocument();

    mockNegotiableDocuments.forEach(({ document: { name }, status }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
      expect(
        screen.getByText(t(`collaborationDetails.documentStatus.${status}`)),
      ).toBeInTheDocument();
    });

    mockReadOnlyDocuments.forEach(({ document: { name } }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  it('should render the component correctly when readOnlyDocuments is empty', () => {
    renderComponent({ readOnlyDocuments: [] });

    expect(
      screen.getByText(t('contractNegotiationCollaboration.documentsTab.documents')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('contractNegotiationCollaboration.documentsTab.negotiable')),
    ).toBeInTheDocument();
    expect(
      screen.queryByText(t('contractNegotiationCollaboration.documentsTab.background')),
    ).not.toBeInTheDocument();

    mockNegotiableDocuments.forEach(({ document: { name }, status }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
      expect(
        screen.getByText(t(`collaborationDetails.documentStatus.${status}`)),
      ).toBeInTheDocument();
    });
  });

  it('should execute onClose when the close button is clicked', async () => {
    renderComponent();

    await userEvent.click(screen.getByTestId(`${baseDataTestId}--close`));

    expect(mockOnClose).toHaveBeenCalled();
  });

  it('should execute onClick when some document is clicked', async () => {
    renderComponent();

    const [
      {
        document: { name: documentName, id: documentId },
      },
    ] = mockNegotiableDocuments;

    await userEvent.click(screen.getByText(documentName));

    expect(mockOnClick).toHaveBeenCalledWith(documentId);
  });
});
