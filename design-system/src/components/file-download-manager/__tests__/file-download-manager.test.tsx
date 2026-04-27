import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { FileDownloadManager } from '../file-download-manager';

import type {
  FileDownloadItem,
  FileDownloadManagerProps,
} from '../file-download-manager.interfaces';

const { t } = renderUseTranslation();

const defaultFile: FileDownloadItem = {
  id: '1',
  name: 'repositorio_descarga_25-02-2026.zip',
  fileType: 'zip' as const,
  documentsToDownload: 3,
  onDownload: () => {},
};

const defaultProps: FileDownloadManagerProps = {
  files: defaultFile,
  status: 'downloading',
};

const renderComponent = (props: Partial<FileDownloadManagerProps> = {}) => {
  render(
    <FileDownloadManager
      {...defaultProps}
      {...props}
    />,
  );
};

describe('FileDownloadManager', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });
  it('renders the file download manager with default props', () => {
    renderComponent();

    expect(screen.getByText(defaultFile.name)).toBeInTheDocument();
    expect(screen.getByText(t('fileDownloadManager.headerTitle.downloading'))).toBeInTheDocument();
    expect(
      screen.getByText(t('fileDownloadManager.headerStatusLabels.downloading'), { exact: false }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${defaultFile.documentsToDownload}`, { exact: false }),
    ).toBeInTheDocument();
    expect(screen.getByTestId('file-download-manager--main-content-container')).toBeInTheDocument();
    expect(screen.getByTestId('file-download-manager--header-container')).toBeInTheDocument();
    expect(screen.getByTestId('file-download-manager--header--close-button')).toBeInTheDocument();
    expect(screen.getByTestId('file-download-manager--file-item--container')).toBeInTheDocument();
    expect(screen.getByText(t('fileDownloadManager.goToDownloads'))).toBeInTheDocument();
    expect(screen.getByTestId('file-download-manager--footer-container')).toBeInTheDocument();
    expect(screen.getByTestId('file-download-manager--footer--button')).toBeInTheDocument();
  });
  it('renders the file download manager with idle status', () => {
    renderComponent({ status: 'idle' });

    expect(screen.getByText(t('fileDownloadManager.headerTitle.downloading'))).toBeInTheDocument();
    expect(
      screen.queryByTestId('file-download-manager--file-item--loading-progress-bar'),
    ).not.toBeInTheDocument();
    expect(screen.queryByTestId('loading-spinner')).not.toBeInTheDocument();
    expect(screen.queryByTestId('file-download-manager--header-status')).not.toBeInTheDocument();
  });
  it('renders the file download manager with error status', () => {
    renderComponent({ status: 'error' });

    const fileCount = Array.isArray(defaultProps.files) ? defaultProps.files.length : 1;
    const expectedCount = 1 + fileCount;

    expect(screen.getByText(t('fileDownloadManager.headerTitle.error'))).toBeInTheDocument();
    expect(screen.getAllByText(t('fileDownloadManager.headerStatusLabels.error'))).toHaveLength(
      expectedCount,
    );
    expect(screen.getAllByText(t('fileDownloadManager.fileItemStatusLabel.error'))).toHaveLength(
      expectedCount,
    );
  });
  it('renders the file download manager with finished status', () => {
    renderComponent({ status: 'finished' });

    expect(screen.getByText(t('fileDownloadManager.headerTitle.finished'))).toBeInTheDocument();
    expect(
      screen.getByText(t('fileDownloadManager.fileItemStatusLabel.finished')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('fileDownloadManager.headerStatusLabels.finished')),
    ).toBeInTheDocument();
  });
  it('triggers the goToDownloads callback when the file item is clicked', async () => {
    const onGoToDownloads = vi.fn();

    renderComponent({ onGoToDownloads });

    await userEvent.click(screen.getByTestId('file-download-manager--footer--button'));

    expect(onGoToDownloads).toHaveBeenCalled();
  });
  it('renders correctly with isDraggable enabled', () => {
    renderComponent({ isDraggable: true, margin: 16 });

    expect(screen.getByTestId('file-download-manager--main-content-container')).toBeInTheDocument();
    expect(screen.getByTestId('file-download-manager--header-container')).toBeInTheDocument();
  });

  it('calls onDownload on hover for finished status', async () => {
    const onDownload = vi.fn();

    renderComponent({ status: 'finished', files: [{ ...defaultFile, onDownload }] });

    await userEvent.hover(screen.getByTestId('file-download-manager--file-item--container'));

    expect(
      screen.getByTestId('file-download-manager--file-item--download-button'),
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText(t('fileDownloadManager.ariaLabels.downloadFileButton')),
    ).toBeInTheDocument();

    await userEvent.click(screen.getByTestId('file-download-manager--file-item--download-button'));

    expect(onDownload).toHaveBeenCalled();
  });
});
