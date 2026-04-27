import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, waitFor, testHelpers } from '@test/test-utils';

import { mockNegotiableDocuments } from '../../../__mocks__/documents.mock';

import { ContractNegotiationBody } from './contract-negotiation-body';

import type { ContractNegotiationBodyProps } from './contract-negotiation-body';
import type { SelectOption } from '@components/select';
import type { RenderType } from '@test/test-utils';

const mockOnApproveDocument = testHelpers.fn();
const mockOnDownloadDocument = testHelpers.fn();
const mockOnWriteNewDocumentVersion = testHelpers.fn();
const mockOnChangeDocumentVersion = testHelpers.fn();
const mockHandleOpenNewVersionDrawer = testHelpers.fn();

const [{ approvedAt, status: mockDocumentStatus, document: mockDocument }] =
  mockNegotiableDocuments;
const mockDocumentLastModificationText = 'Document last modification text';
const mockSelectedDocumentPreviewUrl = 'example.com';

const mockDocumentVersionOptions: SelectOption[] = [
  {
    id: 1,
    label: 'version 1',
  },
  {
    id: 2,
    label: 'version 2',
  },
  {
    id: 3,
    label: 'version 3',
  },
];
const [mockSelectedDocumentVersion] = mockDocumentVersionOptions;

const baseDataTestId = 'contract-negotiation-body';

const defaultProps: ContractNegotiationBodyProps = {
  'data-testid': baseDataTestId,
  document: mockDocument,
  documentApprovedAt: approvedAt,
  documentLastModificationText: mockDocumentLastModificationText,
  documentPreviewUrl: mockSelectedDocumentPreviewUrl,
  documentStatus: mockDocumentStatus,
  documentVersionOptions: mockDocumentVersionOptions,
  selectedVersionOption: mockSelectedDocumentVersion,
  showBanner: true,
  handleOpenNewVersionDrawer: mockHandleOpenNewVersionDrawer,
  onApproveDocument: mockOnApproveDocument,
  onChangeDocumentVersion: mockOnChangeDocumentVersion,
  onDownloadDocument: mockOnDownloadDocument,
  handleWriteNewNewVersion: mockOnWriteNewDocumentVersion,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<ContractNegotiationBodyProps>): RenderType => {
  return render(
    <ContractNegotiationBody
      {...defaultProps}
      {...props}
    />,
  );
};

beforeEach(() => {
  testHelpers.resetAllMocks();
});

describe('ContractNegotiationBody - tests', () => {
  const { t } = renderUseTranslation();

  it('should render the component correctly', () => {
    renderComponent();

    const { name } = mockDocument;

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(mockDocumentLastModificationText)).toBeInTheDocument();
    expect(screen.getByText(String(mockSelectedDocumentVersion.label))).toBeInTheDocument();
    expect(screen.getByTestId(`${baseDataTestId}--version-select`)).toBeInTheDocument();
    expect(screen.getByTestId(`${baseDataTestId}--download`)).toBeInTheDocument();
    expect(screen.getByTitle('Document viewer')).toBeInTheDocument();
    expect(
      screen.getByText(t('contractNegotiationCollaboration.approveDocument')),
    ).toBeInTheDocument();
  });

  it('should display the tooltips correctly', async () => {
    renderComponent();

    const { name } = mockDocument;

    await userEvent.hover(screen.getByText(name));
    await userEvent.hover(screen.getByText(mockDocumentLastModificationText));

    await waitFor(() => {
      expect(screen.getAllByText(name).length).toEqual(2);
      expect(screen.getAllByText(mockDocumentLastModificationText).length).toEqual(2);
    });
  });

  it('should render the component correctly when `readOnly` is `true`', () => {
    renderComponent({ readOnly: true });

    const { name } = mockDocument;

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByTitle('Document viewer')).toBeInTheDocument();
    expect(screen.getByTestId(`${baseDataTestId}--download`)).toBeInTheDocument();
    expect(screen.getByText(mockDocumentLastModificationText)).toBeInTheDocument();
    expect(screen.getByTestId(`${baseDataTestId}--version-select`)).toBeInTheDocument();
    expect(
      screen.queryByText(t('contractNegotiationCollaboration.uploadNewVersion')),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(t('contractNegotiationCollaboration.approveDocument')),
    ).not.toBeInTheDocument();
  });

  it('should render the component correctly when is disabled', () => {
    renderComponent({ disabled: true });

    const { name } = mockDocument;

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(mockDocumentLastModificationText)).toBeInTheDocument();
    expect(screen.getByTestId(`${baseDataTestId}--download`)).toBeInTheDocument();
    expect(screen.getByTitle('Document viewer')).toBeInTheDocument();
    expect(screen.getByText(t('contractNegotiationCollaboration.approveDocument'))).toHaveProperty(
      'disabled',
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

    expect(mockOnApproveDocument).toHaveBeenCalled();
  });

  it('should not execute `onApproveDocument` when `isLoading` is `true`', async () => {
    renderComponent({ isLoading: true });

    await userEvent.click(screen.getByText(t('contractNegotiationCollaboration.approveDocument')));

    expect(mockOnApproveDocument).not.toHaveBeenCalled();
  });

  it('should execute `onChangeDocumentVersion` correctly when the version changes', async () => {
    renderComponent();

    const versionSelect = screen.getByTestId(`${baseDataTestId}--version-select__input`);
    const [, newVersion] = mockDocumentVersionOptions;
    const { label: newVersionLabel } = newVersion;

    await userEvent.click(versionSelect);
    await userEvent.click(screen.getByText(String(newVersionLabel)));

    expect(mockOnChangeDocumentVersion).toHaveBeenCalledWith(newVersion);
  });

  it('should call the `handleOpenNewVersionDrawer` correctly', async () => {
    renderComponent();

    await userEvent.click(screen.getByText(t('contractNegotiationCollaboration.editDocument')));
    await userEvent.click(screen.getByText(t('contractNegotiationCollaboration.uploadNewVersion')));

    expect(mockHandleOpenNewVersionDrawer).toHaveBeenCalled();
  });

  it('should call the `mockOnWriteNewDocumentVersion` correctly', async () => {
    renderComponent();

    await userEvent.click(screen.getByText(t('contractNegotiationCollaboration.editDocument')));
    await userEvent.click(screen.getByText(t('contractNegotiationCollaboration.writeDocument')));

    expect(mockOnWriteNewDocumentVersion).toHaveBeenCalled();
  });

  it('should not render the versions select if a document is not negotiable', () => {
    renderComponent({ negotiableDocument: true });

    expect(screen.queryByTestId(`${baseDataTestId}--version-select`)).not.toBeInTheDocument();
  });
});
