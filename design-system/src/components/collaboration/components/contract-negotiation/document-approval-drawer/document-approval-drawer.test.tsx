import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { mockNegotiableDocuments } from '../../../__mocks__/documents.mock';
import { getDocumentVersion } from '../utils/document-version';

import { DocumentApprovalDrawerContainer } from './document-approval-drawer.container';

import type { DocumentApprovalDrawerContainerProps } from './document-approval-drawer.container';
import type { RenderType } from '@test/test-utils';

const mockDocumentLastModificationText = 'Document last modification text';
const [{ document: mockDocument }] = mockNegotiableDocuments;
const mockOnClose = testHelpers.fn();
const mockOnSubmit = testHelpers.fn();
const baseDataTestId = 'documents-approval-drawer';

const defaultProps: DocumentApprovalDrawerContainerProps = {
  'data-testid': baseDataTestId,
  document: mockDocument,
  documentLastModificationText: mockDocumentLastModificationText,
  isLoading: false,
  isOpen: true,
  onClose: mockOnClose,
  onSubmit: mockOnSubmit,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<DocumentApprovalDrawerContainerProps>): RenderType => {
  return render(
    <DocumentApprovalDrawerContainer
      {...defaultProps}
      {...props}
    />,
  );
};

beforeEach(() => {
  testHelpers.resetAllMocks();
});

describe('DocumentApprovalDrawer - tests', () => {
  const { t } = renderUseTranslation();

  it('should render the component correctly', () => {
    renderComponent();

    const {
      name,
      officeDocumentVersion: { versionNumber },
    } = mockDocument;

    expect(
      screen.getByText(t('contractNegotiationCollaboration.approveDocument')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('contractNegotiationCollaboration.approvalInformation')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('contractNegotiationCollaboration.forms.comments.label')),
    ).toBeInTheDocument();
    expect(screen.getByText(t('general.cancel'))).toBeInTheDocument();
    expect(screen.getByText(t('contractNegotiationCollaboration.approve'))).toBeInTheDocument();

    // Document summary
    expect(screen.getByText(t('contractNegotiationCollaboration.document'))).toBeInTheDocument();
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(getDocumentVersion(versionNumber))).toBeInTheDocument();
    expect(
      screen.getByText(t('contractNegotiationCollaboration.lastModification')),
    ).toBeInTheDocument();
    expect(screen.getByText(mockDocumentLastModificationText)).toBeInTheDocument();
  });

  it('should execute onSubmit function correctly', async () => {
    renderComponent();

    const mockComment = 'Example comment';

    await userEvent.type(
      screen.getByPlaceholderText(t('contractNegotiationCollaboration.forms.comments.placeholder')),
      mockComment,
    );
    await userEvent.click(screen.getByText(t('contractNegotiationCollaboration.approve')));

    expect(mockOnSubmit).toHaveBeenCalledWith({ comment: mockComment }, expect.any(Object));
  });

  it('should execute onClose function correctly', async () => {
    renderComponent();

    await userEvent.click(screen.getByText(t('general.cancel')));
    await userEvent.click(
      screen.getByTestId(`${baseDataTestId}__drawer-header-close-drawer-button`),
    );

    expect(mockOnClose).toHaveBeenCalledTimes(2);
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });
});
