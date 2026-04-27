import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen } from '@test/test-utils';

import { mockFilesEveryType } from '../__mocks__/files.mocks';
import { FileUploadManager } from '../file-upload-manager';

import type { FileUploadManagerProps } from '../file-upload-manager';
import type { FileUploadItem } from '../file-upload-manager.interfaces';

const mockOnCancelUpload = vi.fn();
const mockOnRetryUpload = vi.fn();

const defaultProps: FileUploadManagerProps = {
  status: 'finished',
  files: mockFilesEveryType,
  onCancelUpload: mockOnCancelUpload,
  onRetryUpload: mockOnRetryUpload,
};

const { t } = renderUseTranslation();

const renderComponent = (props: Partial<FileUploadManagerProps> = {}) =>
  render(
    <FileUploadManager
      {...defaultProps}
      {...props}
    />,
  );

describe('FileUploadManager', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly with files', () => {
    renderComponent();

    // Check title
    expect(screen.getByText(t('fileUploadManager.uploads'))).toBeInTheDocument();

    // Check tabs
    expect(screen.getByText(t('fileUploadManager.all'))).toBeInTheDocument();
    expect(screen.getByText(t('fileUploadManager.completed'))).toBeInTheDocument();
    expect(screen.getByText(t('fileUploadManager.rejected'))).toBeInTheDocument();
    expect(screen.getByText(t('fileUploadManager.omitted'))).toBeInTheDocument();

    // Check files are rendered
    mockFilesEveryType.forEach((file) => {
      expect(screen.getByText(file.name)).toBeInTheDocument();
    });
  });

  it('renders empty state correctly', () => {
    renderComponent({ files: [] });

    expect(screen.getByText(t('fileUploadManager.empty'))).toBeInTheDocument();
  });

  it('shows upload progress when isUploading is true', () => {
    const uploadingFiles: FileUploadItem[] = [
      {
        id: '1',
        name: 'test.pdf',
        fileType: 'pdf',
        status: 'uploading',
        progress: 0,
      },
    ];

    renderComponent({ files: uploadingFiles, status: 'uploading' });

    expect(screen.getByTestId('file-upload-manager--spinner')).toBeInTheDocument();
  });

  it('calls onCancelUpload when cancel button is clicked', async () => {
    renderComponent({ status: 'uploading' });

    await userEvent.click(screen.getByText(t('fileUploadManager.cancel')));

    expect(mockOnCancelUpload).toHaveBeenCalledOnce();
  });

  it('calls onRetryUpload when cancel button is clicked', async () => {
    renderComponent({ status: 'uploading' });

    // Click on errors tab
    await userEvent.click(screen.getByText(t('fileUploadManager.rejected')));

    // Then retry button
    await userEvent.click(screen.getByText(t('fileUploadManager.retry')));

    expect(mockOnRetryUpload).toHaveBeenCalledOnce();
  });

  it('updates progress text based on upload status', () => {
    renderComponent();

    const files: FileUploadItem[] = [
      { id: '1', name: 'file1.pdf', fileType: 'pdf', status: 'completed' },
      { id: '2', name: 'file2.pdf', fileType: 'pdf', status: 'uploading', progress: 30 },
    ];

    // Test uploading state
    renderComponent({ files, status: 'uploading' });

    expect(
      screen.getByText(t('fileUploadManager.progress.uploading', { count: 1, total: 2 })),
    ).toBeInTheDocument();

    // Test finished state
    renderComponent({ files, status: 'finished' });
    expect(
      screen.getByText(t('fileUploadManager.progress.finished', { count: 1, total: 2 })),
    ).toBeInTheDocument();
  });
});
