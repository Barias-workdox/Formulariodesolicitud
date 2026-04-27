import { render, screen, testHelpers } from '@test/test-utils';

import { documentUploadMock } from '../document-upload.mocks';

import { DocumentUploadTaskDetails } from './document-upload-task-details';

import type { DocumentUploadTaskDetailsProps } from './document-upload-task-details';
import type { RenderType } from '@test/test-utils';

const mockOnDocumentClick = testHelpers.fn();

const defaultProps: DocumentUploadTaskDetailsProps = {
  categoryLabel: documentUploadMock.tasks[0].category.label,
  documentTypeLabel: documentUploadMock.tasks[0].type.label,
  reason: documentUploadMock.tasks[0].reason,
  subtasks: documentUploadMock.tasks[0].subtasks,
  uniqueId: 1,
  required: documentUploadMock.tasks[0].required,
  onDocumentClick: mockOnDocumentClick,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<DocumentUploadTaskDetailsProps>): RenderType => {
  return render(
    <DocumentUploadTaskDetails
      {...defaultProps}
      {...props}
    />,
  );
};

describe('DocumentUploadTaskDetails - test', () => {
  it('should render correctly', () => {
    renderComponent();

    expect(screen.getAllByTestId('document-upload-task-item').length).toBe(1);
    expect(
      screen.getByText(`${defaultProps.uniqueId} - ${defaultProps.documentTypeLabel}`),
    ).toBeInTheDocument();
    expect(screen.getByText(defaultProps.categoryLabel)).toBeInTheDocument();
  });

  /** Tags */
  it('should render warning tag', () => {
    renderComponent();

    expect(screen.getByText('Documentos pendientes')).toBeInTheDocument();
  });

  it('should render positive tag', () => {
    const newTask = {
      categoryLabel: documentUploadMock.tasks[1].category.label,
      documentTypeLabel: documentUploadMock.tasks[1].type.label,
      reason: documentUploadMock.tasks[1].reason,
      subtasks: documentUploadMock.tasks[1].subtasks,
    };

    renderComponent(newTask);

    expect(screen.getByText('Documentos cargados')).toBeInTheDocument();
  });
});
