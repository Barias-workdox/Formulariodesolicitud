import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { documentUploadMock } from '../document-upload.mocks';

import { DocumentUploadSubtaskDetails } from './document-upload-sub-task-details';

import type { DocumentUploadSubtaskDetailsProps } from './document-upload-sub-task-details';
import type { RenderType } from '@test/test-utils';

const mockOnDocumentClick = testHelpers.fn();

const defaultProps: DocumentUploadSubtaskDetailsProps = {
  resource: documentUploadMock.tasks[1].subtasks[0].resources[0],
  thirdPartyName: documentUploadMock.tasks[0].subtasks[0].thirdParty.firstName,
  onDocumentClick: mockOnDocumentClick,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<DocumentUploadSubtaskDetailsProps>): RenderType => {
  return render(
    <DocumentUploadSubtaskDetails
      {...defaultProps}
      {...props}
    />,
  );
};

describe('DocumentUploadSubtaskDetails - test', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render correctly when the resource is empty', () => {
    renderComponent({ resource: documentUploadMock.tasks[0].subtasks[0].resources[0] });

    expect(screen.getByText('No se ha cargado el documento')).toBeInTheDocument();
  });

  it('should render correctly when the resource has a document', () => {
    renderComponent();

    expect(screen.getByText(defaultProps.resource.document.name)).toBeInTheDocument();
  });

  it('should execute `onDocumentClick` if the document is uploaded', async () => {
    renderComponent();

    expect(mockOnDocumentClick).toBeCalledTimes(0);
    await userEvent.click(screen.getAllByTestId('document-upload-sub-task-item')[0]);
    expect(mockOnDocumentClick).toBeCalledTimes(1);
  });

  it('should not execute `onDocumentClick` if the document is not yet uploaded', async () => {
    renderComponent({ resource: documentUploadMock.tasks[0].subtasks[0].resources[0] });

    await userEvent.click(screen.getAllByTestId('document-upload-sub-task-item')[0]);
    expect(mockOnDocumentClick).toBeCalledTimes(0);
  });
});
