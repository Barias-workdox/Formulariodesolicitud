import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen } from '@test/test-utils';

import { mockFilesEveryType } from '../__mocks__/files.mocks';
import { FileUploadManagerRoot } from '../components/file-upload-manager-root';

import type { FileUploadManagerRootProps } from '../components/file-upload-manager-root';

const mockOnCloseUpload = vi.fn();

const mockChildrenText = 'Panel Content';

const defaultProps: Omit<FileUploadManagerRootProps, 'children'> = {
  files: mockFilesEveryType,
  status: 'completed',
  initialState: false,
  position: 'TOP',
  onCloseUpload: mockOnCloseUpload,
};

const renderComponent = (props: Partial<typeof defaultProps> = {}) => {
  return render(
    <FileUploadManagerRoot
      {...defaultProps}
      {...props}
    >
      <div data-testid="panel-children">{mockChildrenText}</div>
    </FileUploadManagerRoot>,
  );
};

describe('FileUploadManagerPanel', () => {
  const { t } = renderUseTranslation();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders panel with title', () => {
    renderComponent();

    expect(screen.getByText(t('fileUploadManager.uploads'))).toBeInTheDocument();
  });

  it('displays uploading progress text when isUploading is true', () => {
    renderComponent({ status: 'uploading' });

    const expectedText = t('fileUploadManager.progress.uploading', {
      count: mockFilesEveryType.filter((file) => file.status === 'completed').length,
      total: mockFilesEveryType.length,
    });

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('displays finished progress text when isUploading is false', () => {
    renderComponent();

    const expectedText = t('fileUploadManager.progress.completed', {
      count: mockFilesEveryType.filter((file) => file.status === 'completed').length,
      total: mockFilesEveryType.length,
    });

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('calls onPointerDown when title container is clicked', async () => {
    renderComponent();

    const titleContainer = screen.getByTestId('close-button');

    await userEvent.click(titleContainer);

    expect(mockOnCloseUpload).toHaveBeenCalled();
  });

  it('does not show progress text when there are no files', () => {
    renderComponent({ files: [] });

    expect(screen.getByText(t('fileUploadManager.uploads'))).toBeInTheDocument();

    const uploadingText = t('fileUploadManager.progress.uploading', { count: 0, total: 0 });
    const finishedText = t('fileUploadManager.progress.finished', { count: 0, total: 0 });

    expect(screen.queryByText(uploadingText)).not.toBeInTheDocument();
    expect(screen.queryByText(finishedText)).not.toBeInTheDocument();
  });
});
