import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen } from '@test/test-utils';

import { DocumentSelector } from '../document-selector';

import type { DocumentSelectorProps } from '../document-selector';
import type { RenderType } from '@test/test-utils';

const { t } = renderUseTranslation();

const dataTestId = 'test';
const onDeleteMock = vi.fn();

const defaultProps: DocumentSelectorProps = {
  'data-testid': dataTestId,
  filename: '',
  isUploading: false,
  uploadCompleted: false,
  uploadProgress: 0,
  uploadPercentage: 0,
  showDeleteButton: false,
  progressMessage: 'as',
  onUpload: vi.fn(),
  onDelete: onDeleteMock,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<DocumentSelectorProps>): RenderType => {
  return render(
    <DocumentSelector
      {...defaultProps}
      {...props}
    />,
  );
};

describe('document-selector - tests', () => {
  it('should render successfully', () => {
    renderComponent();

    expect(screen.getByText(t('filePicker.select'))).toBeInTheDocument();
    expect(screen.queryByTestId(`${dataTestId}--filename`)).not.toBeInTheDocument();
    expect(screen.queryByTestId(`${dataTestId}--progress-circle`)).not.toBeInTheDocument();
    expect(screen.queryByTestId(`${dataTestId}--progress-bar`)).not.toBeInTheDocument();
  });

  it('should render with an upload in progress', () => {
    renderComponent({ isUploading: true, progressMessage: 'uploading' });

    expect(screen.getByText('uploading')).toBeInTheDocument();
    expect(screen.getByTestId(`${dataTestId}--progress-circle`)).toBeInTheDocument();
    expect(screen.getByTestId(`${dataTestId}--progress-bar`)).toBeInTheDocument();
  });

  it('should render with a filename', () => {
    renderComponent({ filename: 'filename' });

    expect(screen.getByText('filename')).toBeInTheDocument();
  });

  it('should render with delete button enabled', async () => {
    renderComponent({ showDeleteButton: true });

    await userEvent.click(screen.getByTestId(`${dataTestId}--delete-button`));

    expect(onDeleteMock).toHaveBeenCalled();
    expect(screen.getByTestId(`${dataTestId}--delete-button`)).toBeInTheDocument();
  });

  it('should render the delete as disabled', async () => {
    renderComponent({ showDeleteButton: true, isDeleting: true });

    expect(screen.getByTestId(`${dataTestId}--delete-button`)).toBeDisabled();
  });
});
