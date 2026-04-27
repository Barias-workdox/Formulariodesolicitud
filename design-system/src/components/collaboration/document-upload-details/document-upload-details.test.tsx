import { render, screen, testHelpers } from '@test/test-utils';

import { DocumentUploadDetails } from './document-upload-details';
import { documentUploadMock } from './document-upload.mocks';

import type { DocumentUploadDetailsProps } from './document-upload-details';
import type { RenderType } from '@test/test-utils';

const mockOnDocumentClick = testHelpers.fn();

const defaultProps: DocumentUploadDetailsProps = {
  tasks: documentUploadMock.tasks,
  onDocumentClick: mockOnDocumentClick,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<DocumentUploadDetailsProps>): RenderType => {
  return render(
    <DocumentUploadDetails
      {...defaultProps}
      {...props}
    />,
  );
};

describe('DocumentUploadDetails - test', () => {
  it('should render correctly', () => {
    renderComponent();

    expect(screen.getAllByTestId('document-upload-task-item').length).toBe(
      defaultProps.tasks.length,
    );
    expect(screen.getByText('Última modificación')).toBeInTheDocument();
  });

  it('should render correctly when tasks is empty', () => {
    renderComponent({ tasks: [] });

    expect(screen.queryAllByLabelText('document-approval-list').length).toBe(0);
  });
});
