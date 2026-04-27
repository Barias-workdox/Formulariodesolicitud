import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { FileItem } from '../components/file-item';

import type { FileItemProps } from '../components/file-item';

const { t } = renderUseTranslation();

const defaultProps: FileItemProps = {
  fileStatus: 'idle',
  fileName: 'repositorio_descarga_25-02-2026.zip',
  fileExtension: 'zip',
  onClick: vi.fn(),
};

const renderComponent = (props: Partial<FileItemProps> = {}) =>
  render(
    <FileItem
      {...defaultProps}
      {...props}
    />,
  );

describe('FileItem', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('renders the file name and container', () => {
    renderComponent();

    expect(screen.getByTestId('file-download-manager--file-item--container')).toBeInTheDocument();
    expect(screen.getByText(defaultProps.fileName)).toBeInTheDocument();
  });

  it('shows the download button on hover and calls onClick exactly once when clicked', async () => {
    const onClick = vi.fn();

    renderComponent({ fileStatus: 'finished', onClick });

    await userEvent.hover(screen.getByTestId('file-download-manager--file-item--container'));
    await userEvent.click(screen.getByTestId('file-download-manager--file-item--download-button'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('does not show the download button on hover for non-finished statuses', async () => {
    renderComponent({ fileStatus: 'error' });

    await userEvent.hover(screen.getByTestId('file-download-manager--file-item--container'));

    expect(
      screen.queryByTestId('file-download-manager--file-item--download-button'),
    ).not.toBeInTheDocument();
  });

  it('passes the correct progress to the progress bar', () => {
    renderComponent({ fileStatus: 'downloading', fileDownloadProgress: 75 });

    expect(
      screen.getByTestId('file-download-manager--file-item--loading-progress-bar'),
    ).toBeInTheDocument();
    expect(
      screen.queryByTestId('file-download-manager--file-item--download-button'),
    ).not.toBeInTheDocument();
  });

  it('renders the finished status label', () => {
    renderComponent({ fileStatus: 'finished' });

    expect(
      screen.getByText(t('fileDownloadManager.fileItemStatusLabel.finished')),
    ).toBeInTheDocument();
  });

  it('renders the error status label', () => {
    renderComponent({ fileStatus: 'error' });

    expect(
      screen.getByText(t('fileDownloadManager.fileItemStatusLabel.error')),
    ).toBeInTheDocument();
  });
});
