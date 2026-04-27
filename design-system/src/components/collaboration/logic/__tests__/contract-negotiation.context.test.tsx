import {
  act,
  describe,
  expect,
  it,
  render,
  renderHook,
  screen,
  testHelpers,
} from '@test/test-utils';

import {
  activityDocumentsMock1,
  allowedFileExtensionsMock,
  collaborationActivitiesMock1,
  collaborationDetailsMock1,
  collaborationResponsibleMock1,
  collaborationSubtasksMock1,
  documentVersionsMock1,
  thirdPartyMock1,
} from '../../__mocks__/collaboration.mock';
import { mockNegotiableDocuments, mockReadOnlyDocuments } from '../../__mocks__/documents.mock';
import { messagesMock1, stakeholdersMock1 } from '../../__mocks__/messages.mock';
import {
  ContractNegotiationProvider,
  useContractNegotiationContext,
} from '../contexts/contract-negotiation.context';

import type { CollaborationSubtask, IContractNegotiationContext } from '../../interfaces';
import type { ContractNegotiationProviderProps } from '../contexts/contract-negotiation.context';
import type { RenderType } from '@test/test-utils';

const mockContent = 'Example text';

const defaultProps: ContractNegotiationProviderProps = {
  children: <div>{mockContent}</div>,
  allowedFileExtensions: allowedFileExtensionsMock,
  collaborationDetails: collaborationDetailsMock1,
  collaborationResponsible: collaborationResponsibleMock1,
  collaborationSubtasks: collaborationSubtasksMock1,
  currentThirdParty: thirdPartyMock1,
  messages: messagesMock1,
  selectedDocumentVersions: documentVersionsMock1,
  stakeholders: stakeholdersMock1,
  collaborationActivities: collaborationActivitiesMock1,
  loadMoreActivities: testHelpers.fn(),
  loadMoreMessages: testHelpers.fn(),
  onApproveDocument: testHelpers.fn(),
  onChangeSelectedDocument: testHelpers.fn(),
  onChangeSelectedDocumentVersion: testHelpers.fn(),
  onDownloadDocument: testHelpers.fn(),
  onNewDocumentVersion: testHelpers.fn(),
  onSendMessage: testHelpers.fn(),
  onTriggerActivityTab: testHelpers.fn(),
  onTriggerHistoryTab: testHelpers.fn(),
  onWriteNewDocumentVersion: testHelpers.fn(),
};

const WrapperComponent = (props: Partial<ContractNegotiationProviderProps> = {}) => (
  <ContractNegotiationProvider
    {...defaultProps}
    {...props}
  />
);

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<ContractNegotiationProviderProps>): RenderType => {
  return render(<WrapperComponent {...props} />);
};

describe('ContractNegotiationProvider - tests', () => {
  it('should render the component correctly', () => {
    renderComponent();

    expect(screen.getByText(mockContent));
  });
});

describe('useContractNegotiationContext - tests', () => {
  it('should provide the correct values', () => {
    const {
      result: { current },
    } = renderHook(useContractNegotiationContext, {
      wrapper: ({ children }) => <WrapperComponent>{children}</WrapperComponent>,
    });

    const [firstVersion] = documentVersionsMock1;

    expect(current).toEqual<IContractNegotiationContext>({
      activityDocuments: activityDocumentsMock1,
      allowedFileExtensions: allowedFileExtensionsMock,
      collaborationDetails: collaborationDetailsMock1,
      collaborationResponsible: collaborationResponsibleMock1,
      currentThirdParty: thirdPartyMock1,
      isApprovalDisabled: true,
      isDocumentPreviewLoading: false,
      isLoading: false,
      isSendMessageLoading: false,
      isActivitiesLoading: false,
      messages: messagesMock1,
      negotiableDocuments: mockNegotiableDocuments,
      readOnlyDocuments: mockReadOnlyDocuments,
      selectedDocument: mockNegotiableDocuments[0],
      selectedDocumentPreviewUrl: undefined,
      selectedDocumentVersions: documentVersionsMock1,
      selectedVersion: firstVersion,
      stakeholders: stakeholdersMock1,
      collaborationActivities: collaborationActivitiesMock1,
      loadMoreActivities: expect.any(Function),
      loadMoreMessages: expect.any(Function),
      onApproveDocument: expect.any(Function),
      onDownloadDocument: expect.any(Function),
      onNewDocumentVersion: expect.any(Function),
      onSendMessage: expect.any(Function),
      updateSelectedDocument: expect.any(Function),
      updateSelectedDocumentVersion: expect.any(Function),
      onTriggerActivityTab: expect.any(Function),
      onTriggerHistoryTab: expect.any(Function),
      onWriteNewDocumentVersion: expect.any(Function),
    });
  });

  it('should update the selected document correctly', async () => {
    const { result } = renderHook(useContractNegotiationContext, {
      wrapper: ({ children }) => <WrapperComponent>{children}</WrapperComponent>,
    });

    const {
      current: { updateSelectedDocument },
    } = result;

    const [, newDocument] = mockNegotiableDocuments;
    const {
      document: { id: newDocumentId },
    } = newDocument;

    const [firstVersion] = documentVersionsMock1;

    act(() => {
      updateSelectedDocument(newDocumentId);
    });

    expect(result.current).toEqual<IContractNegotiationContext>({
      activityDocuments: activityDocumentsMock1,
      allowedFileExtensions: allowedFileExtensionsMock,
      collaborationDetails: collaborationDetailsMock1,
      collaborationResponsible: collaborationResponsibleMock1,
      currentThirdParty: thirdPartyMock1,
      isApprovalDisabled: false,
      isDocumentPreviewLoading: false,
      isLoading: false,
      isSendMessageLoading: false,
      isActivitiesLoading: false,
      messages: messagesMock1,
      negotiableDocuments: mockNegotiableDocuments,
      readOnlyDocuments: mockReadOnlyDocuments,
      selectedDocument: newDocument,
      selectedDocumentPreviewUrl: undefined,
      selectedDocumentVersions: documentVersionsMock1,
      selectedVersion: firstVersion,
      stakeholders: stakeholdersMock1,
      collaborationActivities: collaborationActivitiesMock1,
      loadMoreActivities: expect.any(Function),
      loadMoreMessages: expect.any(Function),
      onApproveDocument: expect.any(Function),
      onDownloadDocument: expect.any(Function),
      onNewDocumentVersion: expect.any(Function),
      onSendMessage: expect.any(Function),
      updateSelectedDocument: expect.any(Function),
      updateSelectedDocumentVersion: expect.any(Function),
      onTriggerActivityTab: expect.any(Function),
      onTriggerHistoryTab: expect.any(Function),
      onWriteNewDocumentVersion: expect.any(Function),
    });
  });

  it('should update the selected document correctly when the collaboration subtasks changes', async () => {
    const [, newDocument] = mockNegotiableDocuments;
    const {
      document: { id: newDocumentId },
    } = newDocument;

    // Mark the selected document as approved
    const updatedSubtasks: CollaborationSubtask[] = collaborationSubtasksMock1.map((subtask) => ({
      ...subtask,
      resources: subtask.resources.map((resource) =>
        resource.id === newDocument.id
          ? {
              ...resource,
              status: 'approved',
            }
          : resource,
      ),
    }));

    // Use a test component to capture hook values
    let hookResult: IContractNegotiationContext | undefined;
    const TestComponent = (): null => {
      hookResult = useContractNegotiationContext();

      return null;
    };

    const { rerender } = render(
      <ContractNegotiationProvider
        {...defaultProps}
        collaborationSubtasks={collaborationSubtasksMock1}
      >
        <TestComponent />
      </ContractNegotiationProvider>,
    );

    act(() => {
      hookResult?.updateSelectedDocument(newDocumentId);
    });

    expect(hookResult?.selectedDocument).toEqual(newDocument);

    rerender(
      <ContractNegotiationProvider
        {...defaultProps}
        collaborationSubtasks={updatedSubtasks}
      >
        <TestComponent />
      </ContractNegotiationProvider>,
    );

    expect(hookResult?.selectedDocument).toEqual({ ...newDocument, status: 'approved' });
  });

  it('should update the selected document version correctly when the selected version changes', async () => {
    const { result } = renderHook(useContractNegotiationContext, {
      wrapper: ({ children }) => <WrapperComponent>{children}</WrapperComponent>,
    });

    const {
      current: { updateSelectedDocumentVersion },
    } = result;

    const [, newVersion] = documentVersionsMock1;
    const { uuid } = newVersion;

    act(() => {
      updateSelectedDocumentVersion(uuid);
    });

    expect(result.current.selectedVersion).toEqual(newVersion);
  });
});
