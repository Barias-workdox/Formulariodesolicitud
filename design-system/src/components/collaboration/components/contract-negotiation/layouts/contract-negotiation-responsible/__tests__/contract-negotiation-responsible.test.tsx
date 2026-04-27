import { userEvent } from '@testing-library/user-event';
import { vi } from 'vitest';

import { formatDateAsText } from '@components/utils/strings/date.utils';
import {
  render,
  renderUseTranslation,
  replaceHtmlTagsFromText,
  screen,
  waitFor,
} from '@test/test-utils';

import {
  allowedFileExtensionsMock,
  collaborationActivitiesMock1,
  collaborationDetailsMock1,
  collaborationDetailsMock2,
  collaborationResponsibleMock1,
  collaborationSubtasksMock1,
  collaborationSubtasksMock2,
  documentVersionsMock1,
  thirdPartyMock1,
} from '../../../../../__mocks__/collaboration.mock';
import {
  mockNegotiableDocuments,
  mockReadOnlyDocuments,
} from '../../../../../__mocks__/documents.mock';
import { messagesMock1, stakeholdersMock1 } from '../../../../../__mocks__/messages.mock';
import { ContractNegotiationResponsible } from '../contract-negotiation-responsible';

import type { ContractNegotiationResponsibleProps } from '../contract-negotiation-responsible';
import type { RenderType } from '@test/test-utils';

const baseDataTestId = 'contract-negotiation-responsible';
const mockCollaborationDetails = collaborationDetailsMock1;
const mockCollaborationName = collaborationDetailsMock1.name;
const mockCustomerName = 'Customer Name Example';
const mockSelectedDocumentPreviewUrl = 'example.com';
const mockOnApproveDocument = vi.fn();
const mockOnDownloadDocument = vi.fn();
const mockOnChangeSelectedDocument = vi.fn();
const mockOnChangeSelectedDocumentVersion = vi.fn();
const mockOnNewDocumentVersion = vi.fn();
const mockOnFinalize = vi.fn();
const mockOnCancel = vi.fn();

const defaultProps: ContractNegotiationResponsibleProps = {
  'data-testid': baseDataTestId,
  allowedFileExtensions: allowedFileExtensionsMock,
  collaborationDetails: mockCollaborationDetails,
  collaborationResponsible: collaborationResponsibleMock1,
  collaborationSubtasks: collaborationSubtasksMock1,
  currentThirdParty: thirdPartyMock1,
  customerName: mockCustomerName,
  messages: messagesMock1,
  selectedDocumentPreviewUrl: mockSelectedDocumentPreviewUrl,
  selectedDocumentVersions: documentVersionsMock1,
  stakeholders: stakeholdersMock1,
  collaborationActivities: collaborationActivitiesMock1,
  loadMoreActivities: vi.fn(),
  loadMoreMessages: vi.fn(),
  onApproveDocument: mockOnApproveDocument,
  onChangeSelectedDocument: mockOnChangeSelectedDocument,
  onChangeSelectedDocumentVersion: mockOnChangeSelectedDocumentVersion,
  onDownloadDocument: mockOnDownloadDocument,
  onNewDocumentVersion: mockOnNewDocumentVersion,
  onSendMessage: vi.fn(),
  onFinalize: mockOnFinalize,
  onCancel: mockOnCancel,
  onTriggerActivityTab: vi.fn(),
  onTriggerHistoryTab: vi.fn(),
  onWriteNewDocumentVersion: vi.fn(),
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<ContractNegotiationResponsibleProps>): RenderType => {
  return render(
    <ContractNegotiationResponsible
      {...defaultProps}
      {...props}
    />,
  );
};

beforeEach(() => {
  vi.clearAllMocks();
});

describe('ContractNegotiationResponsible - tests', () => {
  const { t } = renderUseTranslation();

  it('should render the component correctly', async () => {
    const { container } = renderComponent();

    // Header
    expect(screen.getByText(mockCollaborationName)).toBeInTheDocument();
    expect(container).toHaveTextContent(
      replaceHtmlTagsFromText(
        t('collaborationDetails.header.customerName', { customerName: mockCustomerName }),
      ),
    );

    // Documents Tab
    expect(
      screen.getByText(t('contractNegotiationCollaboration.documentsTab.documents')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('contractNegotiationCollaboration.documentsTab.negotiable')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('contractNegotiationCollaboration.documentsTab.background')),
    ).toBeInTheDocument();

    // The first element is selected by default and rendered on both left side and body header.
    const [firstDocument, ...otherDocuments] = mockNegotiableDocuments;

    expect(screen.getAllByText(firstDocument.document.name).length).toEqual(2);
    expect(
      screen.getByText(t(`collaborationDetails.documentStatus.${firstDocument.status}`)),
    ).toBeInTheDocument();

    otherDocuments.forEach(({ document: { name }, status }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
      expect(
        screen.getByText(t(`collaborationDetails.documentStatus.${status}`)),
      ).toBeInTheDocument();
    });

    mockReadOnlyDocuments.forEach(({ document: { name } }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });

    // Document version select
    const [{ versionNumber: firstVersionNumber, user: firstUserVersion }, ...otherVersions] =
      documentVersionsMock1;

    expect(
      screen.getByText(
        t('contractNegotiationCollaboration.version', {
          version: firstVersionNumber,
        }),
      ),
    ).toBeInTheDocument();

    await userEvent.click(
      screen.getByTestId(`${baseDataTestId}__contract-negotiation-body--version-select__input`),
    );

    await waitFor(() =>
      otherVersions.forEach(({ versionNumber }) =>
        expect(
          screen.getByText(
            t('contractNegotiationCollaboration.version', {
              version: versionNumber,
            }),
          ),
        ).toBeInTheDocument(),
      ),
    );

    // Document viewer
    const [
      {
        document: { updatedAt: documentUpdatedAt },
      },
    ] = mockNegotiableDocuments;
    const { firstName, lastName } = firstUserVersion;
    const documentViewer = screen.getByTitle('Document viewer');

    expect(documentViewer).toBeInTheDocument();
    expect(documentViewer).toHaveAttribute('src', mockSelectedDocumentPreviewUrl);
    expect(
      screen.getByText(
        t('contractNegotiationCollaboration.uploadedAt', {
          uploadedAt: formatDateAsText(documentUpdatedAt, 'es', true),
          uploadedBy: `${firstName} ${lastName}`,
        }),
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('contractNegotiationCollaboration.approveDocument')),
    ).toBeInTheDocument();
  });

  it('should render the component correctly when ReadOnlyDocuments is empty', () => {
    renderComponent({ collaborationSubtasks: collaborationSubtasksMock2 });

    expect(
      screen.getByText(t('contractNegotiationCollaboration.documentsTab.documents')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('contractNegotiationCollaboration.documentsTab.negotiable')),
    ).toBeInTheDocument();
    expect(
      screen.queryByText(t('contractNegotiationCollaboration.documentsTab.background')),
    ).not.toBeInTheDocument();

    // The first element is selected by default and rendered on both left side and body header.
    expect(mockNegotiableDocuments.length).toBeGreaterThan(0);

    const [firstDocument, ...otherDocuments] = mockNegotiableDocuments;

    expect(screen.getAllByText(firstDocument.document.name).length).toEqual(2);
    expect(
      screen.getByText(t(`collaborationDetails.documentStatus.${firstDocument.status}`)),
    ).toBeInTheDocument();

    otherDocuments.forEach(({ document: { name }, status }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
      expect(
        screen.getByText(t(`collaborationDetails.documentStatus.${status}`)),
      ).toBeInTheDocument();
    });
  });

  it('should execute onChangeSelectedDocument when the selected document changes', async () => {
    renderComponent();

    const [, newDocument] = mockNegotiableDocuments;
    const {
      document: { name: documentName },
    } = newDocument;

    await userEvent.click(screen.getByText(documentName));

    expect(mockOnChangeSelectedDocument).toHaveBeenCalledWith(newDocument);
  });

  it('should execute onApproveDocument when the approve document button is clicked', async () => {
    renderComponent();

    const [
      ,
      {
        document: { name: documentName },
      },
    ] = mockNegotiableDocuments;

    // Select a document with pending status
    await userEvent.click(screen.getByText(documentName));
    // Approve the document
    await userEvent.click(screen.getByText(t('contractNegotiationCollaboration.approveDocument')));
    await userEvent.click(screen.getByText(t('contractNegotiationCollaboration.approve')));

    expect(mockOnApproveDocument).toHaveBeenCalled();
  });

  it('should execute onDownloadDocument when the download document button is clicked', async () => {
    renderComponent();

    await userEvent.click(
      screen.getByTestId(`${baseDataTestId}__contract-negotiation-body--download`),
    );

    expect(mockOnDownloadDocument).toHaveBeenCalled();
  });

  it('should execute onChangeSelectedDocumentVersion when the version changes', async () => {
    renderComponent();

    const [, newVersion] = documentVersionsMock1;
    const { versionNumber } = newVersion;

    await userEvent.click(
      screen.getByTestId(`${baseDataTestId}__contract-negotiation-body--version-select__input`),
    );

    await userEvent.click(
      screen.getByText(
        t('contractNegotiationCollaboration.version', {
          version: versionNumber,
        }),
      ),
    );

    expect(mockOnChangeSelectedDocumentVersion).toHaveBeenCalledWith(newVersion);
  });

  it('should execute onFinalize when the finalize button is clicked', async () => {
    renderComponent();

    const finalizeHeaderButton = screen.getByText(t('contractNegotiationCollaboration.finalize'));

    await userEvent.click(finalizeHeaderButton);

    expect(
      screen.getByText(t('contractNegotiationCollaboration.endNegotiation')),
    ).toBeInTheDocument();

    const [, finalizeFormButton] = screen.queryAllByText(
      t('contractNegotiationCollaboration.finalize'),
    );

    await userEvent.click(finalizeFormButton);

    expect(mockOnFinalize).toHaveBeenCalled();
  });

  it('should execute the onCancel method successfully', async () => {
    renderComponent();

    // Click options
    await userEvent.click(screen.getByTestId(`${baseDataTestId}__header-options__overflow`));
    // Click to open the cancel modal
    await userEvent.click(screen.getByText(t('contractNegotiationCollaboration.cancel')));

    // Cancel modal rendered correctly
    expect(
      screen.getByText(t('contractNegotiationCollaboration.cancelModal.alert')),
    ).toBeInTheDocument();

    // Type in comment field
    await userEvent.type(
      screen.getByPlaceholderText(
        t('contractNegotiationCollaboration.cancelModal.cancelationReasonPlaceholder'),
      ),
      'test',
    );

    // Get cancel button (submit)
    const [, , cancelButtonForm] = screen.getAllByText(
      t('contractNegotiationCollaboration.cancel'),
    );

    // Submit event
    await userEvent.click(cancelButtonForm);

    expect(mockOnCancel).toHaveBeenCalled();
  });

  it('should not render the header options if the collaboration is finished / canceled', async () => {
    /** This mock has a collaboration status of finished */
    renderComponent({ collaborationDetails: collaborationDetailsMock2 });

    expect(
      screen.queryByText(t('contractNegotiationCollaboration.finalize')),
    ).not.toBeInTheDocument();
  });

  it('should render a custom action on the header', () => {
    renderComponent({ headerAction: <div>Action</div> });

    expect(screen.getByText('Action')).toBeInTheDocument();
  });
});
