import { render, renderUseTranslation, screen } from '@test/test-utils';

import { mockFilesEveryType } from '../__mocks__/files.mocks';
import { FileUploadManagerTitle } from '../components/file-upload-manager-title';

import type { FileUploadManagerTitleProps } from '../components/file-upload-manager-title';
import type { FileUploadItem } from '../file-upload-manager.interfaces';

const defaultProps: FileUploadManagerTitleProps = {
  files: mockFilesEveryType,
  status: 'finished',
};

/**
 * Helper function to render the component with default or custom props
 */
const renderComponent = (props: Partial<FileUploadManagerTitleProps> = {}) => {
  render(
    <FileUploadManagerTitle
      {...defaultProps}
      {...props}
    />,
  );
};

describe('FileUploadManagerTitle', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const { t } = renderUseTranslation();

  it('renders the title correctly', () => {
    renderComponent();

    expect(screen.getByText(t('fileUploadManager.uploads'))).toBeInTheDocument();
  });

  it('does not show progress info when files array is empty', () => {
    renderComponent({ files: [] });

    expect(screen.getByText(t('fileUploadManager.uploads'))).toBeInTheDocument();
  });

  it('shows spinner when isUploading is true', () => {
    renderComponent({ status: 'uploading' });

    expect(screen.getByTestId('file-upload-manager--spinner')).toBeInTheDocument();
  });

  it('doesnt show spinner when isUploading is false', () => {
    renderComponent({ status: 'finished' });

    expect(screen.queryByTestId('file-upload-manager--spinner')).not.toBeInTheDocument();
  });

  it('displays correct uploading progress text', () => {
    const files: FileUploadItem[] = [
      { id: '1', name: 'file1.pdf', fileType: 'pdf', status: 'completed' },
      { id: '2', name: 'file2.pdf', fileType: 'pdf', status: 'uploading', progress: 50 },
      { id: '3', name: 'file3.pdf', fileType: 'pdf', status: 'pending' },
    ];

    renderComponent({ files, status: 'uploading' });

    expect(
      screen.getByText(t('fileUploadManager.progress.uploading', { count: 1, total: 3 })),
    ).toBeInTheDocument();
  });

  it('displays correct finished progress text', () => {
    const files: FileUploadItem[] = [
      { id: '1', name: 'file1.pdf', fileType: 'pdf', status: 'completed' },
      { id: '2', name: 'file2.pdf', fileType: 'pdf', status: 'rejected', reason: 'Corrupted file' },
      { id: '3', name: 'file3.pdf', fileType: 'pdf', status: 'omitted' },
    ];

    renderComponent({ files, status: 'finished' });

    expect(
      screen.getByText(t('fileUploadManager.progress.finished', { count: 1, total: 3 })),
    ).toBeInTheDocument();
  });
});
