import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { ContractNegotiationProviderMock } from '../../../__mocks__/contract-negotiation-provider.mock';
import { mockNegotiableDocuments, mockReadOnlyDocuments } from '../../../__mocks__/documents.mock';

import { DocumentsTabContainer } from './documents-tab.container';

import type { DocumentsTabContainerProps } from './documents-tab.container';
import type { RenderType } from '@test/test-utils';

const mockOnClose = testHelpers.fn();
const mockUpdateSelectedDocument = testHelpers.fn();
const [mockSelectedDocument] = mockNegotiableDocuments;
const baseDataTestId = 'documents-tab';

const defaultProps: DocumentsTabContainerProps = {
  onClose: mockOnClose,
  'data-testid': baseDataTestId,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<DocumentsTabContainerProps>): RenderType => {
  return render(
    <ContractNegotiationProviderMock
      providerValues={{
        selectedDocument: mockSelectedDocument,
        updateSelectedDocument: mockUpdateSelectedDocument,
      }}
    >
      <DocumentsTabContainer
        {...defaultProps}
        {...props}
      />
    </ContractNegotiationProviderMock>,
  );
};

describe('DocumentsTabContainer - tests', () => {
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

    expect(mockUpdateSelectedDocument).toHaveBeenCalledWith(documentId);
  });
});
