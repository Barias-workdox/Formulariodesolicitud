import { render, screen, testHelpers } from '@test/test-utils';

import { documentUploadMock } from '../document-upload.mocks';

import { DocumentUploadDetailsDrawer } from './document-upload-details-drawer';

import type { DocumentUploadDetailsDrawerProps } from './document-upload-details-drawer';
import type { RenderType } from '@test/test-utils';

const mockOnDocumentClick = testHelpers.fn();

const defaultProps: DocumentUploadDetailsDrawerProps = {
  tasks: documentUploadMock.tasks,
  isOpen: true,
  onDocumentClick: mockOnDocumentClick,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<DocumentUploadDetailsDrawerProps>): RenderType => {
  return render(
    <DocumentUploadDetailsDrawer
      {...defaultProps}
      {...props}
    />,
  );
};

describe('DocumentUploadDetailsDrawer - test', () => {
  it('should render correctly', () => {
    renderComponent();

    expect(screen.getAllByTestId('document-upload-task-item').length).toBe(
      defaultProps.tasks.length,
    );
  });

  it('should render correctly when task is empty', () => {
    renderComponent({ tasks: [] });

    expect(screen.queryAllByTestId('document-upload-task-item').length).toBe(0);
  });
});
