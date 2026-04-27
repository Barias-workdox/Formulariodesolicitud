import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers, waitFor } from '@test/test-utils';

import { formatDateAsText } from '../../../../utils/strings/date.utils';
import { documentVersionsMock1 } from '../../../__mocks__/collaboration.mock';
import { ContractNegotiationProviderMock } from '../../../__mocks__/contract-negotiation-provider.mock';
import { mockNegotiableDocuments, mockReadOnlyDocuments } from '../../../__mocks__/documents.mock';
import { getDocumentVersion } from '../utils/document-version';

import { ContractNegotiationBodyContainer } from './contract-negotiation-body.container';

import type { ContractNegotiationBodyContainerProps } from './contract-negotiation-body.container';
import type { IContractNegotiationContext } from '../../../interfaces';
import type { RenderType } from '@test/test-utils';

interface IRenderComponent extends Partial<ContractNegotiationBodyContainerProps> {
  providerValues?: Partial<IContractNegotiationContext>;
}

const mockOnApproveDocument = testHelpers.fn();
const mockOnDownloadDocument = testHelpers.fn();
const mockUpdateSelectedDocument = testHelpers.fn();
const [mockApprovedDocument, mockPendingDocument] = mockNegotiableDocuments;
const [mockReadOnlyDocument] = mockReadOnlyDocuments;
const [mockSelectedVersion] = documentVersionsMock1;

const baseDataTestId = 'contract-negotiation-body';

const defaultProps: ContractNegotiationBodyContainerProps = {
  'data-testid': baseDataTestId,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: IRenderComponent): RenderType => {
  const { providerValues = {}, ...others } = props || {};

  return render(
    <ContractNegotiationProviderMock
      providerValues={{
        onApproveDocument: mockOnApproveDocument,
        onDownloadDocument: mockOnDownloadDocument,
        updateSelectedDocumentVersion: mockUpdateSelectedDocument,
        ...providerValues,
      }}
    >
      <ContractNegotiationBodyContainer
        {...defaultProps}
        {...others}
      />
    </ContractNegotiationProviderMock>,
  );
};

describe('ContractNegotiationBodyContainer - tests', () => {
  const { t } = renderUseTranslation();

  beforeEach(() => {
    testHelpers.resetAllMocks();
  });

  it('should render the component correctly', async () => {
    renderComponent({ providerValues: { selectedDocument: mockPendingDocument } });

    const {
      document: { name, updatedAt },
    } = mockPendingDocument;
    const {
      user: { firstName, lastName },
    } = mockSelectedVersion;

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(
      screen.getByText(
        t('contractNegotiationCollaboration.uploadedAt', {
          uploadedAt: formatDateAsText(updatedAt, 'es', true),
          uploadedBy: `${firstName} ${lastName}`,
        }),
      ),
    ).toBeInTheDocument();
    expect(screen.getByTestId(`${baseDataTestId}--download`)).toBeInTheDocument();
    expect(screen.getByTitle('Document viewer')).toBeInTheDocument();
    expect(
      screen.getByText(t('contractNegotiationCollaboration.approveDocument')),
    ).toBeInTheDocument();

    // Version options
    expect(
      screen.getByText(
        t('contractNegotiationCollaboration.version', {
          version: mockSelectedVersion.versionNumber,
        }),
      ),
    ).toBeInTheDocument();

    await userEvent.click(screen.getByTestId(`${baseDataTestId}--version-select__input`));

    await waitFor(() =>
      documentVersionsMock1.forEach(({ versionNumber }) =>
        expect(
          screen.getAllByText(
            t('contractNegotiationCollaboration.version', {
              version: versionNumber,
            }),
          ).length,
        ).not.toEqual(0),
      ),
    );
  });

  it('should render the component correctly when the selected document is read only', () => {
    renderComponent({ providerValues: { selectedDocument: mockReadOnlyDocument } });

    const {
      document: { name, updatedAt },
    } = mockReadOnlyDocument;
    const {
      user: { firstName, lastName },
    } = mockSelectedVersion;

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(
      screen.getByText(
        t('contractNegotiationCollaboration.uploadedAt', {
          uploadedAt: formatDateAsText(updatedAt, 'es', true),
          uploadedBy: `${firstName} ${lastName}`,
        }),
      ),
    ).toBeInTheDocument();
    expect(screen.getByTestId(`${baseDataTestId}--download`)).toBeInTheDocument();
    expect(
      screen.queryByText(t('contractNegotiationCollaboration.approveDocument')),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(
        t('contractNegotiationCollaboration.version', {
          version: mockSelectedVersion.versionNumber,
        }),
      ),
    ).not.toBeInTheDocument();
  });

  it('should render the component correctly when approval is disabled', () => {
    renderComponent({
      providerValues: { selectedDocument: mockApprovedDocument, isApprovalDisabled: true },
    });

    const {
      document: { name, updatedAt },
    } = mockApprovedDocument;
    const {
      user: { firstName, lastName },
    } = mockSelectedVersion;

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(
      screen.getByText(
        t('contractNegotiationCollaboration.uploadedAt', {
          uploadedAt: formatDateAsText(updatedAt, 'es', true),
          uploadedBy: `${firstName} ${lastName}`,
        }),
      ),
    ).toBeInTheDocument();
    expect(screen.getByTestId(`${baseDataTestId}--download`)).toBeInTheDocument();
    expect(screen.getByTitle('Document viewer')).toBeInTheDocument();
    expect(screen.getByText(t('contractNegotiationCollaboration.approveDocument'))).toHaveProperty(
      'disabled',
    );
  });

  it('should render the document approval drawer correctly', async () => {
    renderComponent({
      providerValues: { selectedDocument: mockPendingDocument },
    });

    const {
      document: {
        name,
        updatedAt,
        officeDocumentVersion: { versionNumber },
      },
    } = mockPendingDocument;
    const {
      user: { firstName, lastName },
    } = mockSelectedVersion;

    await userEvent.click(screen.getByText(t('contractNegotiationCollaboration.approveDocument')));

    expect(
      screen.getAllByText(
        t('contractNegotiationCollaboration.uploadedAt', {
          uploadedAt: formatDateAsText(updatedAt, 'es', true),
          uploadedBy: `${firstName} ${lastName}`,
        }),
      ).length,
    ).toEqual(2);
    expect(screen.getAllByText(name).length).toEqual(2);
    expect(screen.getByText(getDocumentVersion(versionNumber))).toBeInTheDocument();
  });

  it('should close the document approval drawer correctly', async () => {
    renderComponent();

    await userEvent.click(screen.getByText(t('contractNegotiationCollaboration.approveDocument')));

    expect(
      screen.getAllByText(t('contractNegotiationCollaboration.approveDocument')).length,
    ).toEqual(2);

    await userEvent.click(screen.getByText(t('general.cancel')));

    await waitFor(() =>
      expect(
        screen.getAllByText(t('contractNegotiationCollaboration.approveDocument')).length,
      ).toEqual(1),
    );
  });

  it('should execute `onDownloadDocument` correctly when the download button is clicked', async () => {
    renderComponent();

    await userEvent.click(screen.getByTestId(`${baseDataTestId}--download`));

    expect(mockOnDownloadDocument).toHaveBeenCalled();
  });

  it('should execute `onApproveDocument` correctly when the approve document button is clicked', async () => {
    renderComponent();

    await userEvent.click(screen.getByText(t('contractNegotiationCollaboration.approveDocument')));
    await userEvent.click(screen.getByText(t('contractNegotiationCollaboration.approve')));

    expect(mockOnApproveDocument).toHaveBeenCalled();
  });

  it('should not execute `onApproveDocument` when `isLoading` is `true`', async () => {
    renderComponent({ providerValues: { isLoading: true } });

    await userEvent.click(screen.getByText(t('contractNegotiationCollaboration.approveDocument')));

    expect(mockOnApproveDocument).not.toHaveBeenCalled();
  });

  it('should execute `onChangeDocumentVersion` correctly when the version changes', async () => {
    renderComponent();

    const versionSelect = screen.getByTestId(`${baseDataTestId}--version-select__input`);
    const [, { versionNumber, uuid }] = documentVersionsMock1;

    await userEvent.click(versionSelect);
    await userEvent.click(
      screen.getByText(
        t('contractNegotiationCollaboration.version', {
          version: versionNumber,
        }),
      ),
    );

    expect(mockUpdateSelectedDocument).toHaveBeenCalledWith(uuid);
  });
});
